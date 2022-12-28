import { Component } from '@angular/core';
import { AlertService } from 'projects/fd-alerts/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public alert: AlertService){} 
}
