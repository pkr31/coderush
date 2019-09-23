import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {


  message: Message;
  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getMessage().subscribe(p => {
      this.message = p;
    });
  }
}
