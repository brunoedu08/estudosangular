import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoDTO } from 'src/ProdutoDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public produtoGuardado: ProdutoDTO;
  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get('/server/produto/lista');
  }

  getProdutoById(id: number) {
    return this.http.get('/server/produto/find-' + id);
  }

  addProduto(produto) {
    let body = JSON.stringify(produto);
    return this.http.post('/server/produto/add', body, httpOptions);
  }

  updateProduto(produto) {
    let bodyEdit = JSON.stringify(produto);
    return this.http.post('server/produto/update-' + this.produtoGuardado.id, bodyEdit, httpOptions);
  }

  deleteProdutoByID(id: number) {
    return this.http.delete('/server/produto/delete-' + id);
  }

  setProdutoParaEdicao(produto) {
    this.produtoGuardado = produto;
  }

  getProdutoParaEdicao() {
    return this.produtoGuardado;
  }
}
