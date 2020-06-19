import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-describe',
  templateUrl: './describe.component.html',
  styleUrls: ['./describe.component.css']
})
export class DescribeComponent implements OnInit {

  heroe;
  loading = true;

  constructor(public _heroesService: HeroesService, public route: ActivatedRoute, public _menuService: MenuService) {
      
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {

        this._menuService.setRoute("Info about "+ params['id'])

        this._heroesService.getHeroe(params['id']).subscribe(
          (response) => {
            this.heroe = response[0];
            this.loading= false;
          }
        )
      }
    )
  }

}
