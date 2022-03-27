import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpService } from './http.service';
import {CartItem} from "../model/cart-item.model";
import {Product} from "../model/product.model";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({providedIn: 'root'})

export class CartService {
  cartChanged: Subject<CartItem[]> = new Subject<CartItem[]>();
  cartContent: CartItem[] = [];
  cartPrice: Number = 0;
  sumPriceChanged: Subject<Number> = new Subject<Number>();

  constructor(private router: Router,
              private httpService:HttpService,
              private auth: AuthService) {}

  public createCartItem(cartItem: Product) {
    let createItem: number = 0;
    if (this.cartContent.length > 0) {
      createItem = this.cartContent.findIndex((prod: CartItem) =>
        prod.cartItem?._productId === cartItem?._productId);
    }
    if (createItem >= 0) {
      this.cartContent[createItem].amount += 1;
    } else {
      const newItem = new CartItem(cartItem, 1);
      this.cartContent.push(newItem);
    }
    this.updateCart();
  }

  public getAllCartItems() {
    try {
      const cartItem = localStorage.getItem('cartItems');
      const items = JSON.parse(<string>cartItem) as CartItem[];
      if (items) {
        this.cartContent = items;
        this.cartPrice = this.cartContent.reduce((sum, cartItem) =>
          sum + cartItem.cartItem!.price * cartItem.amount, 0);
      } else {
        this.cartContent = [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  getCart(): CartItem[] {
    this.getAllCartItems();
    return this.cartContent.slice();
  }

  public updateCart() {
    this.cartPrice = this.cartContent.reduce((sum, cartItem) =>
      sum + cartItem.cartItem!.price * cartItem.amount, 0);
    this.cartChanged.next(this.cartContent.slice());
    this.sumPriceChanged.next(this.cartPrice);
    localStorage.setItem('cartItems', JSON.stringify(this.cartContent));
  }

  public deleteCartItem(item: number) {
    this.cartContent.splice(item, 1);
    this.updateCart();
  }

  public clearCart() {
    this.cartContent = [];
    this.cartPrice = 0;
    this.updateCart();
  }

  public checkout() {
    const user = this.auth.getCurrentUser();
    if (user) {
      return this.httpService.post('order-list', {
        firstName: user.firstName,
        lastName: user.lastName,
        street: user.street,
        number: user.number,
        postalCode: user.postalCode,
        city: user.city,
        region: user.region,
        country: user.country,
        cart: JSON.stringify(this.cartContent),
        cartPrice: this.cartPrice
      }).subscribe((result: any) => {
          if (result) {
            this.clearCart();
            return true;
          } else {
            return null;
          }
        });
    } else {
      this.router.navigate(['/auth']);
      return null;
    }
  }

  public getCartPrice() {
    return this.cartPrice;
  }
}
