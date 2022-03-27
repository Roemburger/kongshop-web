import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CartService} from "../service/cart.service";
import {AuthService} from "../service/auth.service";
import {CartItem} from "../model/cart-item.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin = false;
  userSubscription: Subscription;
  isAuth = false;
  cartContentAmount: number = 0;
  cartSubscription: Subscription;

  @Input() title!: string;

  constructor(private cartService: CartService, private service: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.service.user.subscribe(
      (user: any) => {
        this.isAuth = !!user;
        if (user) this.isAdmin = user?.isAdmin;
      }
    );
    this.cartContentAmount = this.cartService.getCart().length;
    this.cartSubscription = this.cartService.cartChanged
      .subscribe((cartItems: CartItem[]) => {
        this.cartContentAmount = cartItems.reduce((sum, cartItem) =>
        sum + cartItem.amount, 0);
    })
  }

  logout() {
    this.service.logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}
