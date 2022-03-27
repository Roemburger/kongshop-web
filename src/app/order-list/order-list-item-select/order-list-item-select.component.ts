import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product.model";
import {Order} from "../../model/order.model";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order-list-item-select',
  templateUrl: './order-list-item-select.component.html',
  styleUrls: ['./order-list-item-select.component.css']
})
export class OrderListItemSelectComponent implements OnInit {
  @Input() order: Order;

  constructor(private service: OrderService) { }

  ngOnInit(): void {
  }

  //onOrderStatus
}
