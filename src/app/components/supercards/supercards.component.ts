import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supercards',
  templateUrl: './supercards.component.html',
  styleUrls: ['./supercards.component.css']
})
export class SupercardsComponent implements OnInit {

  heroes: any;

  constructor(public _heroesService: HeroesService, public router: Router) { 
    this._heroesService.getAllHeroes().subscribe(
      (data) => {
        this.heroes = data;
      }
    )
  }

  ngOnInit(): void {
  }
  
  desc(name): void {
    this.router.navigate(['/describe',name]);
  }

}
