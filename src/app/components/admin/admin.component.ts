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
  mensagem: string = "";
  tipoMensagem: string = "";

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(
      data => { this.produtos = data },
      err => {
        this.tipoMensagem = "alert alert-danger";
        this.mensagem = err;
      },
      () => {
        this.tipoMensagem = "alert alert-success";
        this.mensagem = "Produtos carregados";
      }
    );
  }

  deleteProdutoByID(id: number) {
    this.produtoService.deleteProdutoByID(id).subscribe(
      data => {
        console.log(data);
        this.tipoMensagem = "alert alert-success";
        this.mensagem = "Produto deletado com sucesso";
        this.getProdutos();
      },
      err => {
        this.tipoMensagem = "alert alert-danger";
        this.mensagem = err;
      }
    );
  }

  prepararEdicao(produto) {
    this.produtoService.setProdutoParaEdicao(produto);
    console.log(produto);
    this.router.navigate(['/edit']);
  }

  closeAlert() {
    this.mensagem = "";
    this.tipoMensagem = "";
  }
}
