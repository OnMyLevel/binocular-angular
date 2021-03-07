import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RemoteDns } from '@app/models/remoteDns';
import { RemoteDnsService } from '@app/services/remoteDns/remote-dns.service';

@Component({
  selector: 'app-remote-dns',
  templateUrl: './remote-dns.component.html',
  styleUrls: ['./remote-dns.component.css']
})
export class RemoteDnsComponent implements OnInit {

  @Output()
  remoteDns:any;
  error='';

  constructor(
    private remoteDnsService: RemoteDnsService 
    ) {
    console.log("remoteDnsService");
  }

  ngOnInit(): void {
    console.log("remoteDnsService");
    this.getRemotDns();
  }

  public getRemotDns(){
    this.remoteDnsService.getRemotDns().subscribe(
      res => {
        if(res){
          console.log(res);
          this.remoteDns = res.toString;
        }
    },
      error => {
          this.error = error;
      });
  }

}
