import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() text:string;
  public open: boolean = false;

  constructor(public _menuService: MenuService) { 
    this._menuService.isOpened
    .subscribe(
      (open) => this.open = open
    )
  }

  ngOnInit(): void {
  }

}
