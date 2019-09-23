import { IndexComponent } from './components/user-role/index/index.component';
import { ChangePasswordComponent } from './components/user-role/change-password/change-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateService } from './services/canActivate.service';
import { RoleComponent } from './components/user-role/role/role.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  {
    path: 'UserRole', component: UserRoleComponent, canActivate: [CanActivateService],
    children: [
      {
        path: 'Role',
        component: RoleComponent
      },
      {
        path: 'ChangePassword',
        component: ChangePasswordComponent
      },
      {
        path: 'Index',
        component: IndexComponent
      }
    ]
  },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
