import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar-empleado',
  templateUrl: './navbar-empleado.component.html',
  styleUrl: './navbar-empleado.component.css'
})
export class NavbarEmpleadoComponent  implements OnInit{

  userNom: string = "Nombre";
  userApell: string = "Apellido";
  type: string = 'user';


  ngOnInit(): void {}

}
