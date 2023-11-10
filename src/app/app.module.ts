import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { HomeComponent } from './home/home.component';
import { AddcustomersComponent } from './addcustomers/addcustomers.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { AddroomsComponent } from './addrooms/addrooms.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    ManageuserComponent,
    HomeComponent,
    AddcustomersComponent,
    ManageroomComponent,
    AddroomsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
