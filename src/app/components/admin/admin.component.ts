import { Component, OnInit } from '@angular/core';
import { AppPage } from 'e2e/src/app.po';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public produtos;

  constructor(private produtoService:ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(
      data => { this.produtos = data },
      err => console.error(err),
      () => console.log('Protutos carregados')
    );
  }

  deleteProdutoByID(id:number){
    this.produtoService.deleteProdutoByID(id);
  }

}
