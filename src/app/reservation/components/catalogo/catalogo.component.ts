import { Component, OnInit } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DetallesHabitacionComponent } from '../detalles-habitacion/detalles-habitacion.component';

//Modelos
import { TipoHabitacion } from '../../models/tipohabitacion';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  ref?: DynamicDialogRef

  tipo: TipoHabitacion

  constructor(
    public dialogService: DialogService,
  ) {
    this.tipo = {
      id_tipo_habitacion: 1,
      nom_tipo_habitacion: "Clásica doble",
      desc_tipo_habitacion: "El Hotel UDEC se encuentra en la histórica ciudad de Cartagena.\
      Dispone de una piscina en el exterior, habitaciones con aire acondicionado, suelos de mármol, conestilo rústico. \
      Disponen de mobiliario antiguo de madera y techos tradicionales con vigas a la vista. Están equipadas con TV vía satélite, conexión inalámbrica a internet gratuita y un minibar.\
      El Hotel UDEC se encuentra en la histórica ciudad de Cartagena.\
      Dispone de una piscina en el exterior, habitaciones con aire acondicionado, suelos de mármol, conestilo rústico. \
      Disponen de mobiliario antiguo de madera y techos tradicionales con vigas a la vista. Están equipadas con TV vía satélite, conexión inalámbrica a internet gratuita y un minibar.\
      El Hotel UDEC se encuentra en la histórica ciudad de Cartagena.\
      Dispone de una piscina en el exterior, habitaciones con aire acondicionado, suelos de mármol, conestilo rústico. \
      Disponen de mobiliario antiguo de madera y techos tradicionales con vigas a la vista. Están equipadas con TV vía satélite, conexión inalámbrica a internet gratuita y un minibar.",
      precio_habitacion: 160000,
      num_adultos: 2,
      num_ninos: 0,
      galeria: [
        {
          "id": 1,
          "url_imagen": "https://lasrosas.com/wp-content/uploads/revslider/habitaciones/habitaciones-lasrosas-ensenada-2.jpg"
        },
        {
          "id": 2,
          "url_imagen": "https://www.amarehotels.com/wp-content/uploads/2019/02/amare-marbella-habitaciones-oh-la%CC%80-la%CC%80-_theone_-vista-mar-frontal-hab-twin-21.jpg"
        },
        {
          "id": 3,
          "url_imagen": "https://www.hotel-atriumpalacebarcelona.com/wp-content/blogs.dir/576/files/dobleslider/hotel_atriumpalace_doble_5.jpg"
        }
      ]
    }
  }

  ngOnInit(): void {
  }

  show() {
    this.ref = this.dialogService.open(DetallesHabitacionComponent, {
      header: 'Detalle de la habitación',
      width: '90%',
      height: '90%',
      data: this.tipo
    })
  }
}