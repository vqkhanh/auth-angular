import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class OrderService {

  constructor(private httpCilent: HttpClient) { }

  getOrders() { 
    return this.httpCilent.get('/api/orders')
      // .map(response => response.json());
  }

}
