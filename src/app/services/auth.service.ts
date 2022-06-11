import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  constructor(private httpCilent: HttpClient) { }

  // login(credentials: any) { 
  //   return this.httpCilent.post('/api/authenticate', 
  //      JSON.stringify(credentials));
  //  }
 
  login(credentials: string) { 
    console.log("credentials",credentials)
    return this.httpCilent.post('http://localhost:3000/api/authenticate', 
       credentials)
       .pipe(map((res:any) => {
        console.log("res:",res);
        if(res && res?.token){
          localStorage.setItem('token', res.token);
          return true;
        }
        else{
          return false;
        }
        
      }));
   }

   logout() { 
   }
 
   isLoggedIn() { 
     return false;
   }
}
