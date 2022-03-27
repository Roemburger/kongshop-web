import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemSelectComponent } from './order-list/order-list-item-select/order-list-item-select.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { ProductListItemSelectComponent } from './product-list/product-list-item-select/product-list-item-select.component';
import { CartListItemComponent } from './cart-list/cart-list-item/cart-list-item.component';
import { HeaderComponent } from './header/header.component';
import { CartListItemSelectComponent } from './cart-list/cart-list-item/cart-list-item-select/cart-list-item-select.component';
import { CommonModule } from "@angular/common";
import { ProductListItemCreateComponent } from './product-list/product-list-item-create/product-list-item-create.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProductComponent } from './product-list/product/product.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    children: [
      {
        path: '',
        component: ProductComponent
      },
      {

        path: 'create',
        component: ProductListItemCreateComponent
      },
      {
        path: ':id',
        component: ProductListItemComponent
      }
    ]
  },
  {
    path: 'order-list',
    component: OrderListComponent,
    children: [
      {
        path: '', component: OrderListItemSelectComponent
      }
    ]
  },
  {
    path: 'cart-list',
    component: CartListComponent
  },
  {
    path: 'auth',
    component: AuthenticationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    ProductListComponent,
    OrderListComponent,
    OrderListItemSelectComponent,
    ProductListItemComponent,
    ProductListItemSelectComponent,
    CartListItemComponent,
    HeaderComponent,
    CartListItemSelectComponent,
    ProductListItemCreateComponent,
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent,
    ProductComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
