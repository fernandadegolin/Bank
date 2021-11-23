import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app';
  transferNumber: any[] = [];

  transfer($event){
    const transfer = {...$event, data: new Date()}
    this.transferNumber.push(transfer);
    console.log($event);
  }
}
