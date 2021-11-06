import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../../services/photoservice';

@Component({
  selector: 'app-detalles-habitacion',
  templateUrl: './detalles-habitacion.component.html',
  styleUrls: ['./detalles-habitacion.component.scss']
})
export class DetallesHabitacionComponent implements OnInit {
  images: any[];

    responsiveOptions:any[] = [
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

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
      this.photoService.getImages().then(images =>{ 
        this.images = images
    })
  }

}
