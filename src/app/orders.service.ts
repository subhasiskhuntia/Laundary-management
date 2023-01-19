import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Orders } from './orders';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  

  constructor(private httpClient:HttpClient) { }
  placeOrder(topWear:number,bottomWear:number,woolenCloth:number,others:number,contactPerson:string,description:string,pickUpdate:Date):Observable<string>{
    return this.httpClient.post("http://localhost:8081/orders/saveOrder",{
      "topWearQuantity":topWear,
      "bottomWearQuantity":bottomWear,
      "woolenClothQuantity":woolenCloth,
      "othersQuantity":others,
      "contactPerson":contactPerson,
      "description":description,
      "orderedByEmail":sessionStorage.getItem("email"),
      "pickUpDate":pickUpdate
    },{responseType:"text"})
  }
  loadOrders():Observable<Orders[]>{
    return this.httpClient.post<Orders[]>("http://localhost:8081/orders/getOrders",{email:sessionStorage.getItem("email")});
  }
  loadOrdersWithOrderStatus(orderStatus:string|null):Observable<Orders[]>{
    return this.httpClient.post<Orders[]>("http://localhost:8081/orders/getOrders?orderStatus="+orderStatus,{email:sessionStorage.getItem("email")});
  }
}
