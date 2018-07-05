import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente.model';
import { Response } from '../../model/response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaClientes = [];
  nome: string;
  limiteCredito: Number;
  cliente = new Cliente('' , '' , '');
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {

    this.buscarClientes();

  }

  realizarCadastro() {
    this.mensagemSucesso = '';
    this.mensagemErro = '';
    this.cliente.nome = 'silvio';
    this.cliente.limiteCredito = '1000.00';
    this.cliente.risco = 'A';
    this.clienteService.realizarCadastro(this.cliente).subscribe(() => {
      this.router.navigate(['/']);
      this.mensagemSucesso = 'Cadastro realizado com sucesso';
    }, err => {
      this.mensagemErro = 'Ocorreu um erro ao realizar o cadastro';
    });
  }

  buscarClientes() {

    this.clienteService.buscarTodosClientes().subscribe((response: Response) => {
      this.listaClientes = response.data;
      this.router.navigate(['/']);
    }, err => {
      this.mensagemErro = 'Ocorreu um erro ao realizar a busca de clientes';
    });
  }

}
