import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from "../model/order.model";
import {OrderService} from "../service/order.service";
import {Subscription} from "rxjs";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  userSubscription: Subscription;
  orderEventSubscription: Subscription;
  orderList: Order[];
  isAdmin: boolean = false;

  constructor(private service: OrderService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.auth.user.subscribe(
      (user) => {
        if (user) this.isAdmin = user.isAdmin;
      }
    );

    this.orderEventSubscription = this.service.orderChanged
      .subscribe((_: any) => {
        this.subscription = this.service
          .getAllOrders().subscribe((response: any) => {
            this.orderList = response;
          })
      });

    this.subscription = this.service
      .getAllOrders()
      .subscribe((response: any) => {
        this.orderList = response;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.orderEventSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
