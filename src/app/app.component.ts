import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binocular-angular'; // titre de l'application 

  userConnect:any;
  
  receiveUserConnect(event:any){
    console.log(event)
    this.userConnect = event;
  }

}
