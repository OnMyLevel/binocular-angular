import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public displayBtnConnexion = true;
  public displayLoginConponent = false;
  public now: Date = new Date();

  constructor() { 
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

  public displayLoginComponentMethod(){
    this.displayLoginConponent = true;
    this.displayBtnConnexion = false;
  }

}
