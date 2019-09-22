import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user and role/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/UserRole/Role', pathMatch: 'full'},
  { path: 'UserRole/Role', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
