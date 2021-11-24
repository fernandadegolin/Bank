import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  transferList: any[];

  constructor() {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  add(transfer: any) {
    this.hydrated(transfer);
    this.transferList.push(transfer);
  }

  private hydrated(transfer: any){
    transfer.data = new Date ();
  }
}
