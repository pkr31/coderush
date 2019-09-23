import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EMAIL_REGEXP = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
  model: User;
  loading = false;
  message = '';
  busy: Promise<any>;

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService
  ) {
    this.model = new User();
  }


  ngOnInit() {
    localStorage.removeItem('loggedUser');
    this.loading = false;
    this.loginService.logout().then(resp => {
      this.loginService.loginSubject.next(1);
    });
  }

  ngDestroy() {
  }

  login() {
    this.notificationService.subject.next();
    this.loading = true;
    this.busy = this.loginService.login(this.model).then(resp => {
      this.loading = false;
      localStorage.setItem('loggedUser', this.model.email);
      this.loginService.loginSubject.next(1);
      this.router.navigate(['/UserRole']);
    }).catch(exp => {
      this.notificationService.error(exp._body);
      this.loading = false;
    });
  }

}
