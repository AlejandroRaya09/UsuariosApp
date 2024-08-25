import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})

export class ListUsuariosComponent {

private _usuarioService = inject(UsuarioService)



  getUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data=>{
      
    }
    )
  }

}
