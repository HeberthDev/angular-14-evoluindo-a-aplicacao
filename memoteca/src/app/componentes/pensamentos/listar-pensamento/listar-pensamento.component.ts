import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {
  public listaPensamentos: Pensamento[] = [];
  public haMaisPensamentos = true;
  public filtro = '';

  private paginaAtual = 1;

  constructor(
    private pensamentoService: PensamentoService,
  ) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.filtro).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }

  public carregarMaisPensamentos(){
    this.pensamentoService.listar(++this.paginaAtual, this.filtro)
      .subscribe(pensamentos => {
        this.listaPensamentos.push(...pensamentos);

        if (!pensamentos.length){
          this.haMaisPensamentos = false;
        }
      }
    )
  }

  public pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.pensamentoService.listar(this.paginaAtual, this.filtro)
      .subscribe(pensamentos => {
        this.listaPensamentos = pensamentos;
      })
  }
}
