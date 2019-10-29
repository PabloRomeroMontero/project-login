import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../../model/usuario.model';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  login: LoginComponent;

  constructor() { }

  ngOnInit() {
  }

}
