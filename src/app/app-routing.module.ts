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
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { CustomersComponent } from './customers/customers.component';
      
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'costume-order', component: CostumeOrderComponent },
  { path: 'costume-sample', component: CostumeSampleComponent },
  { path: 'uniform-order', component: UniformOrderComponent },
  { path: 'uniform-sample', component: UniformSampleComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'contacts', component: NewContactComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
