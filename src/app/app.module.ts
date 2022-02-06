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
import { ContactComponent } from './contact/contact.component';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { CustomersComponent } from './customers/customers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    ContactComponent,
    ProfileComponent,
    NewContactComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
