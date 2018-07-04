import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente.model';
import { SRM_ASSET_API } from './srmasset.api';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) {}

  realizarCadastro(cliente: Cliente) {
    return this.http.post(`${SRM_ASSET_API}/api/clientes`, cliente);
  }
}
