import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProdutoDTO } from 'src/ProdutoDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public produtoGuardado: ProdutoDTO;
  private readonly url = environment.API;
  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get(`${this.url}/produto/lista`);
  }

  getProdutoById(id: number) {
    return this.http.get(`${this.url}/produto/find-` + id);
  }

  addProduto(produto) {
    let body = JSON.stringify(produto);
    return this.http.post(`${this.url}/produto/add`, body, httpOptions);
  }

  updateProduto(produto) {
    let bodyEdit = JSON.stringify(produto);
    return this.http.post(`${this.url}/produto/update-` + this.produtoGuardado.id, bodyEdit, httpOptions);
  }

  deleteProdutoByID(id: number) {
    return this.http.delete(`${this.url}/produto/delete-` + id);
  }

  setProdutoParaEdicao(produto) {
    this.produtoGuardado = produto;
  }

  getProdutoParaEdicao() {
    return this.produtoGuardado;
  }
}
