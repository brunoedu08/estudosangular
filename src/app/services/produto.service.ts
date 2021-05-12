import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  getProdutos(){
    return this.http.get('/server/produto/lista');
  }
}
