import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css',
})
export class ListUsuariosComponent implements OnInit {
  private _usuarioService = inject(UsuarioService);
  loading:boolean = true
  listUsuarios: any[]=[]

  ngOnInit(): void {
    this.getUsuarios()
  }

  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe((data) => {
      this.listUsuarios = data;
      this.loading = false
    }); 
  }
}
