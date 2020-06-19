import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import { Upload } from 'aws-sdk/clients/devicefarm';
import { UploadService } from 'src/app/services/upload.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  selectedFiles: FileList;
 
  genders = ['Male', 'Female']
  loading = false;
  id = 0;

  heroeForm:FormGroup;

  constructor(public _menuService: MenuService, public _uploadService: UploadService, public _heroesService: HeroesService) { 
    this._menuService.setRoute("Add new heroe")
    this.heroeForm = new FormGroup({
      "supername": new FormControl('', Validators.required),
      "first_appereance":new FormControl('', Validators.required),
      "name": new FormControl('', Validators.required),
      "surname": new FormControl('', Validators.required),
      "gender": new FormControl('', Validators.required),
      "age": new FormControl('', Validators.required),
      "bio": new FormControl('', Validators.required),
      "resume": new FormControl('', Validators.required),
      'powers': new FormArray([new FormControl('',Validators.required)])
    })
  }

  ngOnInit(): void {
  }

  getControls() {
    return (this.heroeForm.get('powers') as FormArray).controls;
  }

  async add() {
    this.loading = true;
    let link = await this.upload();
    const superheroe = {
      ...this.heroeForm.value,
      "image_url": link
    }

    this._heroesService.saveHeroe(superheroe)
        .subscribe(
          (value) => {
            console.log(value);
            this.loading = false;
            this.heroeForm.reset();
          },
          (error) => {
            console.log(error);
          }
        )

  }

  addPower():void{
    (<FormArray> this.heroeForm.controls['powers']).push(
      new FormControl('',Validators.required)
    );
    console.log(this.heroeForm);
  }

  public getId(index): number {
    return index;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  async upload() {
    const file = this.selectedFiles.item(0);
    let link = await this._uploadService.uploadFile(file);
    return  link;
  }

}
