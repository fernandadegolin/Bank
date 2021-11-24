import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app';

  constructor(private service: TransferenciaService) { }

  transfer($event) {
    this.service.add($event);

  }
}
