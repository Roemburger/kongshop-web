import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderListItemSelectComponent} from "./order-list/order-list-item-select/order-list-item-select.component";
import {ProductListItemComponent} from "./product-list/product-list-item/product-list-item.component";
import {
  ProductListItemCreateComponent
} from "./product-list/product-list-item-create/product-list-item-create.component";
import {CartListComponent} from "./cart-list/cart-list.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {NgModule} from "@angular/core";
import {ProductComponent} from "./product-list/product/product.component";
import {HomeComponent} from "./home/home.component";

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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
