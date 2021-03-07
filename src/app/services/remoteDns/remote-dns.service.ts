import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteDnsService {

  constructor(private http: HttpClient) {
  }

  public getRemotDns() {
        return of(new HttpResponse({ status: 200, body:  [
          {"groups":[
            {
                displayName: "TRUC AUTOMOBILES",
                groupId: 286,
                groupName: "trux-automobiles",
                groupReferer: "/Group?&groupid=286&device_type=group",
                router: 'r1',
                sites: [ {
                    datas: {
                        address: "150 AVENUE DU PRADO 13008 MARSEILLE"
                            , displayedName: "PRADO AUTOMOBILES-64110",
                        mapInfo: {latitude: 48.41548333, longitude: -4.468808333}
                    }
                    ,customFields: [ ["Ville principale", "MARSEILLE"]]
                    ,siteName: "trux-automobiles"
                    ,siteReferer: "/Information/Supervision?&groupid=286&site_name=trux-automobiles&device_type=iena"
                    ,statusDate: "2016-05-05T10:03:34.181"
                }
              ]
            }
        ]},
      ]}))
  }
}
