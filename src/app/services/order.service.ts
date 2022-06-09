import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


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
    return this.httpCilent.get('http://localhost:3000/api/users')
      // .map(response => response.json());
  }

}
