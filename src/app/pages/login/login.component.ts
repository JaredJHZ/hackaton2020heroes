import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/service/authenticator.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(public _authService: AuthenticatorService, public router: Router, public _menuService: MenuService) { 
    this.loginForm = new FormGroup({
      "email": new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
    this._menuService.setRoute('Welcome Administrator');


    this._authService.logged.subscribe(
      (value) => {
        if(value) {
          this.router.navigate(['/']);
        }
      }
    )
  }

  ngOnInit(): void {
  }

  login() {
    this._authService.logIn(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
  }

}
