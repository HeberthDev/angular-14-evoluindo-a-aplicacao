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

  private paginaAtual = 1;

  constructor(
    private pensamentoService: PensamentoService,
  ) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  public carregarMaisPensamentos(){
    this.pensamentoService.listar(++this.paginaAtual)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);

        if (!listaPensamentos.length){
          this.haMaisPensamentos = false;
        }
      }
    )
  }
}
