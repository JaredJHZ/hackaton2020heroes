import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Router } from '@angular/router';
import { AuthenticatorService } from './service/authenticator.service';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroes-hackaton';
  opened: boolean;
  texto = "Inicio"
  logged: boolean;

  constructor(public _menuService: MenuService, public _router: Router, public _authenticatorService: AuthenticatorService) {
      this._menuService.routeMessage.subscribe(
        (text) => this.texto = text
      )

      this._authenticatorService.logged.subscribe(
        (value) => this.logged = value
      )
      
     
  }

  ngOnInit() {
    this._menuService.isOpened.subscribe(
      (isSidenavOpened: boolean) => {
        this.opened = isSidenavOpened 
      }
    )
  }

  public goToRoute(route: string) {
    this._router.navigate([route]);
  }

  public closed() {
    this._menuService.toggleSidenav();
  }

  public logout() {
    this._authenticatorService.logout();
  }



}
