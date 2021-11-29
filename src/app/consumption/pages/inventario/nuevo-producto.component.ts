import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
})
export class NuevoProductoComponent implements OnInit {

  producto: Producto = {
    id_categoria: 0,
    nom_producto: '',
    desc_producto: '',
    fec_cambio: Date = null, 
    id_usuario_cambio: 0,
    precio_producto: 0,
    unidades_existentes: 0
  };

  constructor(
    private productoService: ProductoService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate() {
    this.productoService.save(this.producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/inventario']);
      },
      err => console.log(err)
    )
  }

}