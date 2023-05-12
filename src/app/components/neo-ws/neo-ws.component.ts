import { Component, Directive, OnInit } from '@angular/core';
import { NeowsService } from 'src/app/services/neows/neows.service';
import { ButtomCardComponent } from '../accessories/buttom-card/buttom-card.component';

@Component({
  selector: 'app-neo-ws',
  templateUrl: './neo-ws.component.html',
  styleUrls: ['./neo-ws.component.css']
})
export class NeoWsComponent implements OnInit {

  constructor(private neowsServices: NeowsService) {
    console.log("El componente Apod se ha creado");
  }
  datos: any;
  ngOnInit(): void {
    console.log('El componente Apod se ha inicializado.');

    this.neowsServices.getNeows().subscribe((data: any) => {
      this.datos = data;

      console.log(this.datos = data);
  
    })
  }
}
