import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }

    public login(username: string, password: string) {
          return of(new HttpResponse({ status: 200, body:  [
            {
                id:username,
                username: username,
                role:"SUPPORT"
            },
        ]}))
    }
}