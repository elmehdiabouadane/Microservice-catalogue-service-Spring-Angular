import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {LoginComponent} from './login/login.component';
import {AdminCategoriesComponent} from './admin-categories/admin-categories.component';
import {AdminProductsComponent} from './admin-products/admin-products.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';


const routes: Routes = [
  {path: 'products/:urlProds', component: ProduitsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminCategories', component: AdminCategoriesComponent},
  {path: 'adminProducts', component: AdminProductsComponent},
  {path: 'adminUsers', component: AdminUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
