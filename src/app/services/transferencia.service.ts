import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private transferList: any[];
  private url: string = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  all() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  add(transfer: Transferencia): Observable<Transferencia> {
    this.hydrated(transfer);

    return this.httpClient.post<Transferencia>(this.url, transfer)
  }

  private hydrated(transfer: any) {
    transfer.data = new Date();
  }
}
