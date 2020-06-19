import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/service/authenticator.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logged: boolean;

  constructor(public _authenticatorService: AuthenticatorService, public router: Router, public _menuService: MenuService){
    this._authenticatorService.logged.subscribe(
      (value) => {
        this.logged = value;
        if (value) {
          this._menuService.setRoute('Welcome admin!')
        } else {
          this._menuService.setRoute('Home Page')
        }
      }
    )  
  }

  ngOnInit(): void {
  }

  goTo(route:string): void {
    this.router.navigate(['/', route]);
  }

}
