import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarlistComponent } from './carlist/carlist.component';
import { HttpClientModule } from '@angular/common/http';
import  { AuthService } from './services/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailComponent } from './carlist/detail.component';
import { LoginComponent } from './login/login.component';
import { FpassComponent } from './fpass/fpass.component';
import { ConfirmuserComponent } from './confirmuser/confirmuser.component';
import { FinduserService } from './services/finduser.service';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { UsercarlistingComponent } from './usercarlisting/usercarlisting.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LogoutComponent } from './logout/logout.component';
import { AddcarComponent } from './addcar/addcar.component';
import {DataTableModule} from "angular-6-datatable";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from 'ngx-progressbar'
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CarAcceptComponent } from './car-accept/car-accept.component';
import { CarrejectComponent } from './carreject/carreject.component';
import { VerifyregisteremailComponent } from './verifyregisteremail/verifyregisteremail.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CarFilterPipe } from './search/car-filter.pipe';
import { SearchComponent } from './search/search.component';
import { DataTablesModule } from 'angular-datatables';


const appRoutes: Routes = [
  { path : 'register', component: RegisterComponent},
  { path : 'usercarlisting', component: UsercarlistingComponent},
  { path : 'carlist', component:  CarlistComponent},
  { path : 'aboutus', component:  AboutusComponent},
  { path : 'welcome', component:  WelcomeComponent},
  { path : 'addcar', component:  AddcarComponent},
  { path : 'login', component:  LoginComponent},
  { path : 'confirm-user', component:  ConfirmuserComponent},
  { path : 'resest-your-password' , component: FpassComponent},
  { path : 'details/:id', component:  DetailComponent},
  { path : 'addtocart', component:  AddtocartComponent},
  { path : 'reset-password', component:  ResetpasswordComponent},
  { path : 'caraccept', component:  CarAcceptComponent},
  { path : 'carreject', component:  CarrejectComponent},
  { path : 'verifyregisteremail/:email', component:  VerifyregisteremailComponent},
  { path : 'profile', component:  ProfileComponent},
  { path : 'change-password', component:  ChangepasswordComponent},
  { path : 'search', component:  SearchComponent},
  { path : ' ', redirectTo: '/home' ,pathMatch: 'full' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AboutusComponent,
    CarlistComponent,
    WelcomeComponent,
    DetailComponent,
    LoginComponent,
    FpassComponent,
    ConfirmuserComponent,
    ConfirmEqualValidatorDirective,
    UsercarlistingComponent,
    AddtocartComponent,
    LogoutComponent,
    AddcarComponent,
    ResetpasswordComponent,
    CarAcceptComponent,
    CarrejectComponent,
    VerifyregisteremailComponent,
    ProfileComponent,
    ChangepasswordComponent,
    SearchComponent,
    
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    BrowserAnimationsModule,
    NgProgressModule,
    NgxSpinnerModule, 
    DataTablesModule,// required animations module
    ToastrModule.forRoot()
  ],
  providers: [AuthService,FinduserService],
  bootstrap: [AppComponent]
})
export class AppModule { }