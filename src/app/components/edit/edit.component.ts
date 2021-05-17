import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public produto;
  produtoForm: FormGroup;
  mensagem: string = "";
  tipoMensagem: string = "";
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProduto();
    this.produtoForm = new FormGroup({
      nome: new FormControl(''),
      valor: new FormControl('')
    });
  }

  getProduto() {
    this.produto = this.produtoService.getProdutoParaEdicao();
  }

  updateProduto() {
    console.log("chegou");
    if (this.produtoForm.valid) {
      this.produtoService.updateProduto(this.produtoForm.value).subscribe(
        data => {
          this.produtoForm.reset();
          this.tipoMensagem = "alert alert-success";
          this.mensagem = "Produto atualizado";
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.tipoMensagem = "alert alert-danger";
      this.mensagem = "Verifique novamente antes de enviar."
    }
  }
  closeAlert(){
    this.mensagem="";
    this.tipoMensagem="";
  }
}
