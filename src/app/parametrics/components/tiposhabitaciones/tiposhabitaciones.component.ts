import { Component, OnInit } from '@angular/core';
import { TipoDeHabitacion } from '../../models/TipoDeHabitacion';
import { TiposService } from '../../services/TiposService';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tiposhabitaciones',
  templateUrl: './tiposhabitaciones.component.html',
  styleUrls: ['./tiposhabitaciones.component.scss'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class TiposhabitacionesComponent implements OnInit {

  // Objeto para gestionar los archivos
  uploadedFiles: any[] = [];

  // Objetos para la muestra de datos en la tabla
  productDialog: boolean;

  tipos: TipoDeHabitacion[];

  tipo: TipoDeHabitacion;

  selectedProducts: TipoDeHabitacion[];

  submitted: boolean;

  images: File[] = [];

  edit: boolean = false;

  getID: number = 0;

  constructor(private tiposhService: TiposService, private messageService: MessageService, private confirmationService: ConfirmationService,) { }

  // Métodos para la tabla
  ngOnInit(): void {
    this.tiposhService.getTipos().then(data => { this.tipos = data });
  }

  openNew() {
    this.limpiarForm();
    this.submitted = false;
    this.productDialog = true;
  }
  
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  editProduct(tipo: TipoDeHabitacion) {
    this.edit = true;
    this.tipo = { ...tipo };
    this.getID = this.tipo.id_tipo_habitacion;
    this.productDialog = true;
  }

  getBlob(obj: any): Blob {
    return new Blob([JSON.stringify(obj)], { type: 'application/json' })
  }
  
  async saveData() {
    this.submitted = true;
    
    let formValido: boolean = false;
    if(this.edit){ //Para editar
      formValido = (this.tipo.nom_tipo_habitacion != "") && (this.tipo.desc_tipo_habitacion != "") && (this.tipo.precio_habitacion != 0) && (this.tipo.num_adultos != 0) && (this.images.length != 0 || this.tipo.galeria.length != 0)
    }
    else{ //Para añadir
      formValido = (this.tipo.nom_tipo_habitacion != "") && (this.tipo.desc_tipo_habitacion != "") && (this.tipo.precio_habitacion != 0) && (this.tipo.num_adultos != 0) && (this.images.length != 0)
    }
    if(formValido){
      const formData = new FormData()
      for (let image of this.images) {
        formData.append('images', image)
      }
      formData.append('tipo', this.getBlob(this.tipo))
      
      let data;
      try{
        if(!this.edit){
          data = await this.tiposhService.createTipo(formData);
          this.tipos.unshift(data);
        }
        else{
          data = await this.tiposhService.editTipo(this.getID, formData);
          this.tipos = this.tipos.map(tipo => tipo.id_tipo_habitacion == data.id_tipo_habitacion ? data : tipo)
        }
        this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Tipo de habitación guardado', life: 3000 });
        this.productDialog = false;
        this.limpiarForm()
      }
      catch(err){
        this.messageService.add({severity: 'error', summary: 'Error', detail: err.error, life: 4000 });
      }
    }
    else{
      this.messageService.add({severity: 'warn', summary: 'Advertencia', detail: "Aún faltan datos por ingresar.", life: 2000 });
    }
  }

  limpiarForm(){
    this.edit = false;
    this.tipo = {
      nom_tipo_habitacion: "",
      desc_tipo_habitacion: "",
      precio_habitacion: 0,
      num_adultos: 0,
      num_ninos: 0,
      galeria: []
    };
    this.images = []
  }
  
  subirImg(event: any) {
    for (let file of event.files) {
      if (file.type.startsWith("image/")) {
        this.images.push(file);
      }
    }
  }
  
  borrarImg(event: any) {
    this.images = this.images.filter(image => image.name !== event.file.name)
  }

  deleteProduct(tipo: TipoDeHabitacion) {
    this.confirmationService.confirm({
      message: '¿Está seguro de que desea eliminar ' + tipo.nom_tipo_habitacion + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        try{
          await this.tiposhService.deleteTipo(tipo.id_tipo_habitacion)
  
          this.tipos = this.tipos.filter(val => val.id_tipo_habitacion !== tipo.id_tipo_habitacion);
          this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Tipo de habitación eliminado', life: 3000 });
        }
        catch(err){
          console.log(err.error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error, life: 4000 });
        }
      }
    });
  }

  deleteIMG(id: number){
    this.tipo.galeria = this.tipo.galeria.filter(img => img.id !== id)
  }
}