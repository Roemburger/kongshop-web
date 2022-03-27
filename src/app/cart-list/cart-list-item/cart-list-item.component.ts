import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CartItem} from "../../model/cart-item.model";
import {Product} from "../../model/product.model";
import {Subscription} from "rxjs";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css']
})
export class CartListItemComponent implements OnInit, OnDestroy {
  @Input() cartItemList: CartItem[] = [];
  subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItemList = this.cartService.getCart();
    this.subscription = this.cartService.cartChanged.subscribe(
      (cartItemList: CartItem[]) => {
        this.cartItemList = cartItemList;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
