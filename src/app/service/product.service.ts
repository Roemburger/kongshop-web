import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Product } from "../model/product.model";
import { HttpService } from "./http.service";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class ProductService {

  constructor(private httpService: HttpService,
              private http:HttpClient) {}


  public createProduct(productId: string, name: string, description: string, price: number, imagePath: string) {
    this.httpService.put("product-list/" + productId,
      {name: name, description: description, price: price, imagePath: imagePath})
      .pipe(map((response: any) => {
        if (response['product']) {
          return <Product> response['product'];
        } else {
          return null;
        }
      }));
  }

  public getProductById(productId: string) {
    return this.httpService.get("product-list/" + productId)
      .pipe(map((response: any) => {
        if (response['product']) {
          return <Product> response['product'];
        } else {
          return null;
        }
      }));
  }

  public getAllProducts() {
    return this.httpService.get("product-list")
      .pipe(map((response: any) => {
        const array: Product[] = [];
        for (const product in response["products"]) {
          array.push(response["products"][product]);
        }
        return array;
      }));
  }

  public updateProduct(productId: string, id: string, name: string, description: string, price: number, imagePath: string) {
    this.httpService.put("product-list/" + productId,
      {name: name, description: description, price: price, imagePath: imagePath})
      .pipe(map((response: any) => {
        if (response['product']) {
          return <Product> response['product'];
        } else {
          return null;
        }
      }));
  }

  public deleteProduct(productId: string) {
    return this.httpService.delete("product-list/" + productId).pipe(map((response) => {
      return <Product> response;
    }));
  }
}
