import { Component, Input, OnInit } from '@angular/core';
import { RemoteDns } from '@app/models/remoteDns';

@Component({
  selector: 'app-remote-dns-card',
  templateUrl: './remote-dns-card.component.html',
  styleUrls: ['./remote-dns-card.component.css']
})
export class RemoteDnsCardComponent implements OnInit {

  @Input()
  remoteDns: any; 
  simpleText='';
  
  constructor() { }

  ngOnInit(): void {
    console.log()
    this.simpleText = this.remoteDns.toString();
  }

}
