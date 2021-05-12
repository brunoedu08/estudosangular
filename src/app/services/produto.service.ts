import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  getProdutos(){
    return this.http.get('/server/produto/lista');
  }

  getProdutoById(id:number){
    return this.http.get('/server/produto/find-' + id);
  }
}
