import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpService } from './http.service';
import {Order} from "../model/order.model";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})

export class OrderService {
  public orderChanged = new Subject<Order>();

  constructor(
    private httpService:HttpService
  ) {}

  public getAllOrders() {
    return this.httpService.get("order-list")
      .pipe(map((response: any) => {
        const array: Order[] = [];
        for (const order in response['order-list']) {
          array.push(response['order-list'][order]);
        }
        return array;
      }));
  }

  public getOrderById(orderId: string) {
    return this.httpService.get("order-list/" + orderId)
      .pipe(map((response: any) => {
        return <Order> response['order'];
      }));
  }

  public delete(orderId: string) {
    return this.httpService.delete('order-list/' + orderId)
      .pipe(map((response: any) => {
        this.orderChanged.next(response);
        return response;
      }));
  }

  public update(orderId: string, orderPrice: number) {
    return this.httpService.put('order-list/' + orderId, {orderPrice: orderPrice})
      .pipe(map((response: any) => {
          if (response['order']) {
            return <Order> response['order'];
          } else {
            return null;
          }
        })
      );
  }
}
