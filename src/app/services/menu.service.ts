import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public isOpened: BehaviorSubject<boolean>;
  public routeMessage: BehaviorSubject<string>;
  
  constructor() { 
    this.isOpened = new BehaviorSubject<boolean>(false);
    this.routeMessage = new BehaviorSubject<string>("Inicio");

  }

  public toggleSidenav(): void {
    let value = !this.isOpened.getValue();
    this.isOpened.next(value);
  }

  public setRoute(value:string): void {
    this.routeMessage.next(value);
  }

}
