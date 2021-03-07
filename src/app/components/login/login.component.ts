import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/models/user';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public displayBtnLogIn;
  public displayBtnLogOut;
  public canConnect;
  public displayFormLogin;

  @Output()
  connect: EventEmitter<User> = new EventEmitter<User>();
  @Output()
  userConnect:User;

  returnUrl: string;
  error = '';
  password;
  username;

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
  ) { 
    this.canConnect = false; 
    this.displayBtnLogIn = true;
    this.displayBtnLogOut = false;
    this.displayFormLogin = true;
    this.username = '';
    this.password = '';
    
  }

  ngOnInit(): void {
  }

  public connexionDone(){
    this.authenticationService.login(this.username,this.password).subscribe(
      res => {
        if(res){
          console.log(res)
          this.displayBtnLogOut=true;
          this.displayBtnLogIn = false;
          this.displayFormLogin = false;
          this.username= res.body[0];
          this.connect.emit(this.userConnect);
        }
    },
      error => {
          this.error = error;
      });
  }
    

    public setPasword(event:any){
      this.password = event.target.value;
    }

    public setUsername(event:any){
      this.username = event.target.value;
    }

}
