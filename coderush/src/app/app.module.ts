import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PageService, SortService, FilterService, GroupService, GridModule } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user and role/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
