import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { QrPageComponent } from './components/qr-page/qr-page.component';
import { InvestmentsPageComponent } from './components/investments-page/investments-page.component';
import { BillpaymentComponent } from './components/billpayment/billpayment.component';
import { TransfersPageComponent } from './components/transfers-page/transfers-page.component';
import { WithdrawalsComponent } from './components/withdrawals/withdrawals.component';
import { SecurityPageComponent } from './components/security-page/security-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'card-page',      component: CardPageComponent },
    { path: 'qr-page',      component: QrPageComponent },
    { path: 'investments-page',      component: InvestmentsPageComponent },
    { path: 'billpayment-page',      component: BillpaymentComponent },
    { path: 'transfer-page',      component: TransfersPageComponent },
    { path: 'withdrawals-page',      component: WithdrawalsComponent },
    { path: 'security-page',      component: SecurityPageComponent },
    { path: 'about-us-page',      component: AboutUsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
