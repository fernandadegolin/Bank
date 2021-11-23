import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  @Output() toTransfer = new EventEmitter<any>();
  value: any;
  path: any;

  transfer() {
    const valueEmit = {value: this.value, path: this.path}
    this.toTransfer.emit(valueEmit);

    this.clearField();
  }

  clearField (){
    this.value = "";
    this.path = "";
  }

}
