import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-product-list-item-select',
  templateUrl: './product-list-item-select.component.html',
  styleUrls: ['./product-list-item-select.component.css']
})
export class ProductListItemSelectComponent implements OnInit {

  @Input("product") product: Product;

  constructor() {}

  ngOnInit(): void {}

}
