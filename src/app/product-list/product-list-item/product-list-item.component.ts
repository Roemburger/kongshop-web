import {Component, OnDestroy, OnInit} from '@angular/core';
import { Product } from "../../model/product.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { ProductService } from "../../service/product.service";
import { CartService } from "../../service/cart.service";
import {Subscription} from "rxjs";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit, OnDestroy {
  product: Product | null;
  productId: string = '';
  private subscription: Subscription;
  public isAdmin: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService,
              private cartService: CartService,
              private auth: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
      this.subscription = this.service
        .getProductById(this.productId)
        .subscribe((response) => {
          this.product = response;
        });
    });

    this.isAdmin = this.auth.isAdmin();
  }

  onAddToCart() {
    this.cartService.createCartItem(this.product!);
  }

  onDelete() {
    if (this.isAdmin) {
      this.service.deleteProduct(this.productId)
        .subscribe((response: any) => {
          this.router.navigate(['/product-list'])
        });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
