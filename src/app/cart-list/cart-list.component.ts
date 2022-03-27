import {Component, OnDestroy, OnInit} from '@angular/core';
import { CartItem } from "../model/cart-item.model";
import { Product } from "../model/product.model";
import { CartService } from "../service/cart.service";
import { ProductService } from "../service/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  cartItemList: CartItem[] = [];
  message: string | null = null;
  cartPrice: Number = 0;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartItemList = this.cartService.getCart();
    this.cartPrice = this.cartService.getCartPrice();
    this.cartService.getAllCartItems();
    this.subscription = this.cartService.cartChanged.subscribe(
      (cartItems: CartItem[]) => {
      this.cartItemList = cartItems;
      this.cartPrice = cartItems.reduce((sum, cartItem) =>
        sum + cartItem.cartItem.price * cartItem.amount, 0);
    });
  }

  onConfirmOrder() {
    if (this.cartService.checkout()) {
      this.message = 'Order confirmed. Purchase is on its way to you.'
    } else {
      this.message = 'Order has not been confirmed. Please try again.'
    }
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
