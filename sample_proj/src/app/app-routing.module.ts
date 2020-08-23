import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { combineLatest } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { PaymentsComponent } from './payments/payments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MenuComponent} from './menu/menu.component'
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PendingaprovalComponent } from './pendingaproval/pendingaproval.component';
import { AdmangementComponent } from './admangement/admangement.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdAgencyIndexComponent } from './ad-agency-index/ad-agency-index.component';
import { BusinessfirmComponent } from './businessfirm/businessfirm.component';
import { BusinessregisterComponent } from './businessregister/businessregister.component';
import { PostadsComponent } from './postads/postads.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const router: Routes =[
  { path: '', redirectTo: '', pathMatch: 'full', component: FirstpageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'statistics', component: StatisticsComponent}, 
  {path: 'settings',component: SettingsComponent} , 
  {path: 'payment_history', component: PaymentHistoryComponent} , 
  {path:'dashboard', component:DashboardComponent},
  {path:'home',component: MenuComponent},
  {path:'profile', component:ProfileComponent},
  {path:'transaction',component:TransactionComponent },
  {path:'pendingaproval', component: PendingaprovalComponent},
  {path:'admangement',component:AdmangementComponent },
  {path:'adagencyindex', component:AdAgencyIndexComponent},
  {path:'businessfirm', component:BusinessfirmComponent},
  {path:'businessregister', component:BusinessregisterComponent},
  {path:'postads',component:PostadsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent}
  

];  



@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  declarations: []
})
export class AppRoutingModule { }
