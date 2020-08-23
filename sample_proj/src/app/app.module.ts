import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentsComponent } from './payments/payments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableCpmComponent } from './table-cpm/table-cpm.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PendingaprovalComponent, DialogOverviewExampleDialog } from './pendingaproval/pendingaproval.component';
import { AdmangementComponent, AdmanageDialog,AdmanageDialog1,AdmanageDialog2 } from './admangement/admangement.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdAgencyIndexComponent } from './ad-agency-index/ad-agency-index.component';
import { BusinessfirmComponent } from './businessfirm/businessfirm.component';
import { BusinessregisterComponent } from './businessregister/businessregister.component';
import { PostadsComponent } from './postads/postads.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PaymentsComponent,
    StatisticsComponent,
    PaymentHistoryComponent,
    MenuComponent,
    DashboardComponent,
    EducationComponent,
    TabNavComponent,
    TableCpmComponent,
    SidenavComponent,
    CategoryComponent,
    ProfileComponent,
    TransactionComponent,
    PendingaprovalComponent,
    AdmangementComponent,
    DialogOverviewExampleDialog,
    AdmanageDialog,
    AdmanageDialog1,
    AdmanageDialog2,
    FirstpageComponent,
    AdAgencyIndexComponent,
    BusinessfirmComponent,
    BusinessregisterComponent,
    PostadsComponent,
    AboutusComponent,
    ContactComponent,
  ],
  entryComponents: [DialogOverviewExampleDialog, AdmanageDialog,AdmanageDialog1,AdmanageDialog2],

  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }