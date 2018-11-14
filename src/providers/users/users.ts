import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


@Injectable()
export class UsersProvider {

  private API_URL = "http://espaco10.000webhostapp.com/loginws.php";

  constructor(public http: Http) { }

  login(user: string, senha: string) {
    return new Promise((resolve, reject) =>{
      var usuario = user;
      var pass = senha;
      this.http.get(this.API_URL + '/' + usuario + '/'+pass)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json())
      })
    });
  }
}
