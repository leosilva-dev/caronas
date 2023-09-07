import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ICarona } from './Carona';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CaronasService {

  constructor(private http: HttpClient, private toastController: ToastController) { }

  private apiUrl = "http://localhost:3000/caronas";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll():Observable<ICarona[]> {
    return this.http.get<ICarona[]>(this.apiUrl);
  }

  getById(caronaId:number):Observable<ICarona> {
    return this.http.get<ICarona>(`${this.apiUrl}/${caronaId}`);
  }


  async toastSuccess(msg:string) {
    const toastSuccess = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
      color: 'success',
    });

    await toastSuccess.present();
  }

  async toastError() {
    const toastError = await this.toastController.create({
      message: 'Houve um erro durante a publicação...',
      duration: 1500,
      position: 'bottom',
      color: 'danger',
    });

    await toastError.present();
  }


createCarona(caronaToCreate:ICarona):void {
    this.http.post<ICarona>(this.apiUrl, caronaToCreate).subscribe(
      (response) => {
       this.toastSuccess('Carona publicada com sucesso')
      },
      (error) => {
        this.toastError()
      }
    )
  }

tenhoInteresse(caronaId:number):void {

let caronaToShowInterested = {} as ICarona;

this.getById(caronaId).subscribe(carona => {
  caronaToShowInterested = carona

  if(caronaToShowInterested.vagasRestantes > 0){
    this.http.put<ICarona>(`${this.apiUrl}/${caronaId}`, {
    id: caronaId,
    name: caronaToShowInterested.name,
    cidade:caronaToShowInterested.cidade,
    ofereceCarona: caronaToShowInterested.ofereceCarona,
    phone: caronaToShowInterested.phone,
    setor: caronaToShowInterested.setor,
    vagasRestantes: caronaToShowInterested.vagasRestantes -1
  }).subscribe(
    (response) => {
      this.toastSuccess('Vaga reservada... Entre em contato para combinar a sua carona')
    },
    (error) => {
      this.toastError()
    }
    )
  }
})


  }
}
