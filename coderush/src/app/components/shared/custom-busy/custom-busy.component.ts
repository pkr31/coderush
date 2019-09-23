import { Component, OnInit, Inject } from '@angular/core';
import { InstanceConfigHolderService } from 'ng-busy';

@Component({
  selector: 'default-busy',
  template: `
    <div class="ng-busy-default-wrapper" [ngStyle]="templateNgStyle">
          <div class="ng-busy-default-sign">
            <div class="ng-busy-default-spinner">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
              <div class="bar4"></div>
              <div class="bar5"></div>
              <div class="bar6"></div>
              <div class="bar7"></div>
              <div class="bar8"></div>
              <div class="bar9"></div>
              <div class="bar10"></div>
              <div class="bar11"></div>
              <div class="bar12"></div>
            </div>
            <div class="ng-busy-default-text">{{message}}</div>
          </div>
        </div>
  `,
})
export class CustomBusyComponent {
  constructor(@Inject('instanceConfigHolder') private instanceConfigHolder: InstanceConfigHolderService) {
  }

  get message() {
    return this.instanceConfigHolder.config.message;
  }
}
