import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})


export class ApodComponent implements OnInit {

  apodList: any = [];
  constructor(private apodServices: ApodService) {
    console.log("El componente Apod se ha creado");
  }

  ngOnInit(): void {
    console.log('El componente Apod se ha inicializado.');

    //this.apodServices.getApod().subscribe((response: any) => this.apodList = response);
    //console.log(this.apodList);
  }

}
