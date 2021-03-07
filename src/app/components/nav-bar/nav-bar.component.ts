import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@app/models/user';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public displayBtnConnexion;
  public displayLoginConponent;
  public now: Date = new Date();

  @Output()
  connect: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  userConnect:User;

  constructor() { 
    setInterval(() => {
      this.now = new Date();
    }, 1);
    
    this.displayBtnConnexion = true; 
    this.displayLoginConponent = false;
  }

  ngOnInit(): void {
  }

  public displayLoginComponentMethod(){
    this.displayLoginConponent = true;
    this.displayBtnConnexion = false;
  }

  receiveUserConnect(event:any){
    this.userConnect = event;
    this.connect.emit(true);
  }

}
