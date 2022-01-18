import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CostumeOrderComponent } from './costume-order/costume-order.component';
import { OrdersComponent } from './orders/orders.component';
import { CostumeSampleComponent } from './costume-sample/costume-sample.component';
import { UniformOrderComponent } from './uniform-order/uniform-order.component';
import { UniformSampleComponent } from './uniform-sample/uniform-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    CostumeOrderComponent,
    OrdersComponent,
    CostumeSampleComponent,
    UniformOrderComponent,
    UniformSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
