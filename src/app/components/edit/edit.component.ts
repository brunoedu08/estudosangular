import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public produto;
  constructor(private produtoService:ProdutoService) { }

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto(){
    this.produto = this.produtoService.getProdutoParaEdicao();
  }
}
