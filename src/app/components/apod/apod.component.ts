import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod/apod.service';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})

export class ApodComponent implements OnInit {


  constructor(private apodServices: ApodService) {
    console.log("El componente Apod se ha creado");
  }

  datos: any;

  ngOnInit() {

  

    console.log('El componente Apod se ha inicializado.');

    this.apodServices.getApod().subscribe((data: any) => {
      this.datos = data;

      console.log(this.datos = data);
    })
  }
}
