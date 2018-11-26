import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ApartamentosProvider {

  private API_URL = "http://espaco10.000webhostapp.com/menuws.php";
  private DELETE_URL =  "http://espaco10.000webhostapp.com/apagarws.php/";
  private STATUS_URL = "http://espaco10.000webhostapp.com/statusAp.php/";
  constructor(public http: Http) { }

  // retorna todos apartamentos em formato JSON
  getAll() {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;

      this.http.get(url)
        .subscribe((result:any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    })
  }

  // retorna apartamento por id
  get(id) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL+'/'+id;

      this.http.get(url)
        .subscribe((result:any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    })
  }
  delete(id){
    return new Promise((resolve,reject)=> {
      let apagarUrl = this.DELETE_URL + id;
      this.http.get(apagarUrl)
      .subscribe((result:any)=> {
        resolve(result.json());
      },
      (error)=> {
        reject(error.json());
      });
    })
  }
  trocaStatus(id){
    return new Promise((resolve,reject) =>{
      let statusUrl = this.STATUS_URL + id;
      this.http.get(statusUrl)
      .subscribe((result:any)=>{
        resolve(result.json());
      },
      (error)=>{
        reject(error.json());
      });
    })
  }
}
