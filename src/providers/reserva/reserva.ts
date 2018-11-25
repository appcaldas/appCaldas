import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ReservaProvider {

  private API_URL = "http://espaco10.000webhostapp.com/listareservas.php";
  private API_URL_FINALIZAR = "http://espaco10.000webhostapp.com/finalizaReserva.php/"

  constructor(public http: Http) { }

  // retorna todas as reservas em formato JSON
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

  // retorna reserva por id
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
  finaliza(id){
    return new Promise((resolve, reject) =>{ 
      this.http.get(this.API_URL_FINALIZAR + id)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json())
      });
    })
  }
  ativar(id){
    return new Promise((resolve, reject) =>{ 
      this.http.get(this.API_URL_FINALIZAR + id)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json())
      });
    })
  }
}

