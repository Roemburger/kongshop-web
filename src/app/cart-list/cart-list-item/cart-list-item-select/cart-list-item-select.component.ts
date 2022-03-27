import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../model/cart-item.model";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-cart-list-item-select',
  templateUrl: './cart-list-item-select.component.html',
  styleUrls: ['./cart-list-item-select.component.css']
})
export class CartListItemSelectComponent implements OnInit {
  @Input() cartItems: CartItem;
  @Input() item: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onChangeAmount() {
    if (this.cartItems?.amount === 0) {
      this.deleteCartItem();
    }
  }

  deleteCartItem() {
    this.cartService.deleteCartItem(this.item);
  }
}
