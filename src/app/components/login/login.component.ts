import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.canConnect = false; 
    this.displayBtnLogIn = true;
    this.displayBtnLogOut = false;
    this.displayFormLogin = true;
  }

  ngOnInit(): void {
  }

  public connexionDone(){
    this.displayBtnLogOut=true;
    this.displayBtnLogIn = false;
    this.displayFormLogin = false;
  }

}
