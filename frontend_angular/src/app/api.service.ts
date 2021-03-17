import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Clientes } from './get-clientes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'a264eef6abcd4ea48c89fb5fc4f84544';
  public endpoint = 'http://127.0.0.1:5000';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getTodosClientes(): Observable<any>{
    return this.httpClient.get(this.endpoint + '/clientes/clientes');
  }

  public getClienteId(id_cliente: number): Observable<any>{
    return this.httpClient.get(this.endpoint + `/clientes/clientes/` + id_cliente)
  }

  public postClientes(cliente:any){
    return this.httpClient.post(this.endpoint + '/clientes/clientes', cliente);
  }

  public deleteCliente(id_cliente:number) {
    return this.httpClient.delete(this.endpoint + `/clientes/clientes/` + id_cliente)
  }


}

