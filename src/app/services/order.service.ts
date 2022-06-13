// import { BaseRequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class OrderService {

  constructor(private httpCilent: HttpClient) { }

  // getOrders() { 
  //   return this.httpCilent.get('/api/orders')
  //     // .map(response => response.json());
  // }

  getOrders() { 
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token); 

    return this.httpCilent.get('http://localhost:3000/api/users', {headers:headers})
      // .map(response => response.json());
  }

}
