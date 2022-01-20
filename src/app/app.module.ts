import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CostumeOrderComponent } from './costume-order/costume-order.component';
import { CostumeSampleComponent } from './costume-sample/costume-sample.component';
import { UniformOrderComponent } from './uniform-order/uniform-order.component';
import { UniformSampleComponent } from './uniform-sample/uniform-sample.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    CostumeOrderComponent,
    CostumeSampleComponent,
    UniformOrderComponent,
    UniformSampleComponent,
    RegisterComponent,
    CustomerComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
