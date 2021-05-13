import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public produtoGuardado;
  constructor(private http:HttpClient) { }

  getProdutos(){
    return this.http.get('/server/produto/lista');
  }

  getProdutoById(id:number){
    return this.http.get('/server/produto/find-' + id);
  }

  addProduto(produto){
    let body = JSON.stringify(produto);
    return this.http.post('/server/produto/add', body, httpOptions);
  }

  deleteProdutoByID(id:number){
    return this.http.delete('/server/produto/delete-' + id);
  }

  setProdutoParaEdicao(produto){
    this.produtoGuardado = produto;
  }

  getProdutoParaEdicao(){
    return this.produtoGuardado;
  }
}
