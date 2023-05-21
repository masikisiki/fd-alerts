import {Component, Input, OnInit} from '@angular/core';
import {AlertService, ToastMessage} from '../alert.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'fd-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1,}))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {

  @Input() timeOut: number = 5000;

  messages: ToastMessage[] = [];

  constructor(private aService: AlertService) {
    aService.messages$.subscribe(message => {
      this.showHide(message)
    });
  }

  showHide(message: ToastMessage) {
    this.messages.push(message);
    setTimeout(() => {
      this.messages = this.messages.filter(x => x != message)
    }, this.timeOut);
  }

  ngOnInit(): void {}

}

