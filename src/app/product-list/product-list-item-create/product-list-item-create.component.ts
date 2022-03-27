import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../model/product.model";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-list-item-create',
  templateUrl: './product-list-item-create.component.html',
  styleUrls: ['./product-list-item-create.component.css']
})
export class ProductListItemCreateComponent implements OnInit {
  product: Product;
  productId: string;
  idStr: string = 'id';
  subscription: Subscription;

  constructor(private service: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreateProduct(form: NgForm) {
    this.service.createProduct(
      this.productId,
      form.value['name'],
      form.value['description'],
      form.value['price'],
      form.value['imageUrl']
    );
    this.router.navigate(['/']);
  }
}
