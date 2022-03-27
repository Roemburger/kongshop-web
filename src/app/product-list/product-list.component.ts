import {Component, OnDestroy, OnInit} from '@angular/core';
import { Product } from "../model/product.model";
import { ProductService } from "../service/product.service";
import {Subscription} from "rxjs";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public isAdmin: boolean = false;
  private subscription: Subscription;
  public products: Product[];

  productList: Product[] = [];

  constructor(private service: ProductService,
              private auth: AuthService) { }

  ngOnInit() {
    this.subscription = this.service
      .getAllProducts()
      .subscribe((response) => {
        this.products = response;
      });
    this.isAdmin = this.auth.isAdmin();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
