import { Component, Input, OnInit } from '@angular/core';

//Servicio galeria
import { PhotoService } from '../../services/photoservice';

//Servicio dialog
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TipoHabitacion } from '../../models/tipohabitacion';


@Component({
  selector: 'app-detalles-habitacion',
  templateUrl: './detalles-habitacion.component.html',
  styleUrls: ['./detalles-habitacion.component.scss']
})
export class DetallesHabitacionComponent implements OnInit {

  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

  tipo: TipoHabitacion

  constructor(
    private photoService: PhotoService,
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images => {
      this.images = images
    })

    this.tipo = this.config.data
  }

}
