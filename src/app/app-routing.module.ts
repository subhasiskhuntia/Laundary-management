import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profile } from 'console';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [

  {
  path:"",component:HomeComponent
  },
  {
  path:"login",component:LoginComponent
  },
  {
  path:"signin",component:SigninComponent
  },
  {
  path:"placeOrder",component:PlaceorderComponent
  },
  {
  path:"showOrderStatus",component:ShowOrderComponent
  },
  {
    path:"showOrderStatus/:orderStatus",component:ShowOrderComponent
    },
  {
    path:"profile",component:ProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
