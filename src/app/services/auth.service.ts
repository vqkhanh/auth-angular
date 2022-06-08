import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  constructor(private httpCilent: HttpClient) { }

  login(credentials: any) { 
    return this.httpCilent.post('/api/authenticate', 
       JSON.stringify(credentials));
   }
 
   logout() { 
   }
 
   isLoggedIn() { 
     return false;
   }
}
