import { Injectable } from '@angular/core';
import { scan, Subject } from 'rxjs';

export enum ToastType{
  INFO ='info',WARN='warn', ERROR='error'
}
export interface ToastMessage{
  message: string
  type: ToastType
}
@Injectable({
  providedIn: 'root'
})
export class AlertService {

   messages$ = new Subject<ToastMessage>();

  constructor() { }

  showToast(message: string, type: ToastType){
    this.messages$.next({message: message,type: type});
  }

  showError(message: string){
   this.showToast(message, ToastType.ERROR);
  }
  showWarning(message: string){
    this.showToast(message, ToastType.WARN);
  }
  showInfo(message: string){
    this.showToast(message, ToastType.INFO);
  }
} 

  