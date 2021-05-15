import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtoForm: FormGroup;
  validMessage: string = "";
  typeMessage: string = "";

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.produtoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    if (this.produtoForm.valid) {
      this.typeMessage = "alert alert-success";
      this.validMessage = "Seu produto foi enviado!";
      this.produtoService.addProduto(this.produtoForm.value).subscribe(
        data => {
          this.produtoForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.typeMessage = "alert alert-danger";
      this.validMessage = "Por favor, verifique se não há nada de errado antes de enviar"
    }
  }
  listarTodos() {
    this.router.navigate(['/admin']);
  }
}
