import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cliente = new Cliente('' , 0 , '');
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  realizarCadastro() {
    this.mensagemSucesso = '';
    this.mensagemErro = '';
    this.clienteService.realizarCadastro(this.cliente).subscribe(() => {
      this.router.navigate(['/']);
      this.mensagemSucesso = 'Cadastro realizado com sucesso';
    }, err => {
      this.mensagemErro = 'Ocorreu um erro ao realizar o cadastro';
    });
  }

}
