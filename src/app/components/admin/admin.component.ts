import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public produtos;

  constructor(private produtoService: ProdutoService, private router: Router) { }

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

  deleteProdutoByID(id: number) {
    this.produtoService.deleteProdutoByID(id).subscribe(
      data => { console.log(data); },
      err => console.error(err),
      () => console.log("Deletado")
    );
    this.getProdutos();
  }

  prepararEdicao(produto) {
    this.produtoService.setProdutoParaEdicao(produto);
    console.log(produto);
    this.router.navigate(['/edit']);
  }
}
