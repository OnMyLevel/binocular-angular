import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  returnUrl: string;
  error = '';

   password;
   username;
  @Output() connexionChange = new EventEmitter<boolean>();

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

    console.log(this.username);
    console.log(this.password);


    this.authenticationService.login(this.username,this.password).subscribe(
      res => {
        console.log(res);
        if(res){
        this.displayBtnLogOut=true;
        this.displayBtnLogIn = false;
        this.displayFormLogin = false;
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
