import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  id:number = 0
  firstName: string = '';
  email: string = '';  
  gender: string = '';
  status:string = '';
  imgUrl:string = 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'
  loading: boolean = true
  private aRoute = inject(ActivatedRoute)
  private _usuarioService = inject(UsuarioService)


  ngOnInit(): void {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!
    this.getUuser()
  }


  getUuser(){
    this._usuarioService.getUser(this.id).subscribe(data=>{
      this.firstName = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.status = data.status;
      this.loading = false
    })
  }
}
