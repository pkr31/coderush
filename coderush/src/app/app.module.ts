import { IndexComponent } from './components/user-role/index/index.component';
import { ChangePasswordComponent } from './components/user-role/change-password/change-password.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PageService, SortService, FilterService, GroupService, GridModule } from '@syncfusion/ej2-angular-grids';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/shared/app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoleComponent } from './components/user-role/role/role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgBusyModule, BusyConfig } from 'ng-busy';
import { CustomBusyComponent } from './components/shared/custom-busy/custom-busy.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserRoleComponent,
    RoleComponent,
    ChangePasswordComponent,
    IndexComponent,
    LoginComponent,
    CustomBusyComponent,
  ],
  entryComponents: [
    CustomBusyComponent
  ],
  imports: [
    NgBusyModule.forRoot(new BusyConfig({
      message: 'Don\'t panic!',
      backdrop: false,
      template: CustomBusyComponent,
      delay: 200,
      minDuration: 600,
      templateNgStyle: { 'background-color': 'black' }
    })),
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    NgBusyModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
