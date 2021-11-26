import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormUser } from '../../models/formuser'
import { ConfirmationService } from 'primeng/api';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  display: boolean = false;
  perfil: SelectItem[];
  usuario: FormUser;
  usuarios: Usuario[];
  submitted: boolean;
  edit: boolean = false;

  constructor(private confirmationService: ConfirmationService,
    private usuariosService: UsuariosService, private messageService: MessageService) {
    this.perfil = [
      { label: 'Administrador', value: 2 },
      { label: 'Recepcionista', value: 3 },
      { label: 'Cliente', value: 1 }
    ];

    this.usuario = {
      persona: {
        pri_nombre: "",
        seg_nombre: "",
        pri_apellido: "",
        seg_apellido: "",
        telefono: "",
        correo: "",
        identificacion: 0
      },
      id_perfil: 7,
      login: "",
      clave: ""
    };
  }

  ngOnInit(): void {
    this.listar()
  }

  async listar() {
    try {
      const data = await this.usuariosService.getUsuarios()
      this.usuarios = data
      console.log(data)
    } catch (ex) {
      console.log(ex)
    }
  }

  limpiar() {
    this.edit = false;
    this.usuario = {
      persona: {
        pri_nombre: "",
        seg_nombre: "",
        pri_apellido: "",
        seg_apellido: "",
        telefono: "",
        correo: "",
        identificacion: 0
      },
      id_perfil: 0,
      login: "",
      clave: ""
    };
  }

  agregarUser() {
    this.limpiar();
    this.display = true;
  }

  async enviar() {
    this.submitted = true
    try {
      let data
      let formvalido = false
      if (!this.edit) {
        formvalido = (this.usuario.persona.pri_nombre != "" && this.usuario.persona.pri_apellido != "" && this.usuario.persona.identificacion != 0 && this.usuario.persona.correo != "" && this.usuario.persona.telefono != "")
        try {
          if (formvalido) {
            data = await this.usuariosService.createUsuario(this.usuario)
            this.usuarios.unshift(data)
            this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Se ha añadido el usuario', life: 3000 });
            setTimeout(() => {
              this.display = false
            }, 300);
          }else{
            this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Debe llenar todos los campos requeridos', life: 3000 });
          }
        } catch (ex) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: ex.error.reduce((acum, err) => acum + ' ' + err), life: 3000 });
        }

      } else {
        formvalido = (this.usuario.persona.pri_nombre != "" && this.usuario.persona.pri_apellido != "" && this.usuario.persona.identificacion != 0 && this.usuario.persona.correo != "" && this.usuario.persona.telefono != "" && this.usuario.login != "" && this.usuario.clave != "")
        try {
          if (formvalido) {
            data = await this.usuariosService.editarUsuario(this.usuario.id_usuario, this.usuario)
            this.usuarios = this.usuarios.map(usuario => usuario.id_usuario == data.id_usuario ? data : usuario)
            this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Se ha editado el usuario', life: 3000 });
            setTimeout(() => {
              this.display = false
            }, 300);
          }else{
            this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Debe llenar todos los campos requeridos', life: 3000 });
          }
        } catch (ex) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: ex.error.reduce((acum, err) => acum + ' ' + err), life: 3000 });
        }

      }

    } catch (ex) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: ex.error.reduce((acum, err) => acum + ' ' + err), life: 3000 });
    }
  }

  editar(usuario: Usuario) {
    const user = {
      id_usuario: usuario.id_usuario,
      persona: usuario.persona,
      id_perfil: usuario.perfil.id_perfil,
      login: usuario.login,
      clave: usuario.clave
    }
    this.usuario = { ...user }
    this.edit = true;
    this.display = true;
  }

  confirm() {
    this.confirmationService.confirm({
      message: "Esta seguro de guardar los datos?",
      reject: () => {
      },
      accept: async () => {
        await this.enviar()
      }
    })
  }
}
