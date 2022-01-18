import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CostumeOrderComponent } from './costume-order/costume-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CostumeSampleComponent } from './costume-sample/costume-sample.component';
import { UniformOrderComponent } from './uniform-order/uniform-order.component';
import { UniformSampleComponent } from './uniform-sample/uniform-sample.component';
import { RegisterComponent } from './register/register/register.component';
import { CustomerComponent } from './customer/customer.component';
      
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'costume-order', component: CostumeOrderComponent },
  { path: 'costume-sample', component: CostumeSampleComponent },
  { path: 'uniform-order', component: UniformOrderComponent },
  { path: 'uniform-sample', component: UniformSampleComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'customer', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
