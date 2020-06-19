import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HeroesService } from 'src/app/services/heroes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  loading = false;

  displayedColumns: string[] = ['superheroe', 'release',  'actions'];

  dataSource;

  constructor(public _heroeService: HeroesService, public _menuService: MenuService) { 
    this.getData();
    this._menuService.setRoute('Delete a superheroe :(')
  }



  ngOnInit(): void {
  }

  getData() {
    this._heroeService.getAllHeroes().subscribe(
      (data:any) => {
        this.dataSource = new MatTableDataSource<any>(data);
      }
    )
  }


  applyFilter(value) {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(name) {
    this._heroeService.deleteHeroe(name).subscribe(
      (resolve) => {
        this.getData();
      }
    )
  }

}
