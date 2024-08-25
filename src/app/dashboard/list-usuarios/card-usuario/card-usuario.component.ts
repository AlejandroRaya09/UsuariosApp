import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent implements OnInit{
  @Input() user : any

  imgUrl:string = 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'
  firstName: string = ''
  email: string = ''

  ngOnInit(): void {
    console.log(this.user)
    this.firstName = this.user.name
    this.email = this.user.email
  }

}
