import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', [Validators.required]],
      autoria: ['', [Validators.required]],
      modelo: ['modelo1']
    })
  }

  public criarPensamento() {
    console.log('Formulário -> ', this.formulario);
    if (this.formulario.valid) {
      this.pensamentoService.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  public cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
