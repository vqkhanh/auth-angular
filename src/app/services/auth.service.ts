import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  constructor(
    private httpCilent: HttpClient,
    public jwtHelper: JwtHelperService
    ) { }

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
    localStorage.removeItem('token');
   }
 
   isLoggedIn() { 
    return this.jwtHelper.isTokenExpired();
   }

   get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) return null;

    return this.jwtHelper.decodeToken(token);
   }

}
