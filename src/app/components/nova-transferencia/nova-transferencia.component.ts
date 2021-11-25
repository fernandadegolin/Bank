import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  @Output() toTransfer = new EventEmitter<any>();
  value: any;
  path: any;

  constructor(private service: TransferenciaService, private router: Router) { }

  transfer() {
    const valueEmit: Transferencia = {
      value: this.value,
      path: this.path
    };

    this.service.add(valueEmit).subscribe((results) => {
      console.log(results);
      this.clearField();
      this.router.navigateByUrl('extrato');
    },
      (error) => console.error(error)
    );
  }

  clearField() {
    this.value = null;
    this.path = null;
  }

}
