import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = 'https://dlecp4ulfl.execute-api.us-east-1.amazonaws.com/Test';

  constructor(public http: HttpClient) { }

  public getAllHeroes() {
    const url = `${this.url}/heroes`;
    return this.http.get(url);
  }

  public saveHeroe(heroe: any) {
    const url = `${this.url}/heroe`;
    return this.http.post(url, heroe);
  }

  public deleteHeroe(name) {
    const url = `${this.url}/heroes/${name}`;
    return this.http.delete(url);
  }

  public getHeroe(name) {
    const url = `${this.url}/heroes/${name}`;
    return this.http.get(url);
  }
}