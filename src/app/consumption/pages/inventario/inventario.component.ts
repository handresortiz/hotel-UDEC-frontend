import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
})
export class InventarioComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.lista()
    .subscribe(
      res => {
          this.productos = res;
      }, 
      err => console.log(err)
    )
  }

  borrar(id: number){
    this.productoService.delete(id)
    .subscribe(
      res => {
        this.cargarProductos();
      },
      err => console.log(err)
    )
  }
}