import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from './../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false,
  }

  constructor(
    private pensamentoService: PensamentoService,
  ) { }

  ngOnInit(): void { }

  public larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }

  public mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false) {
      return 'inativo';
    }

    return 'ativo';
  }

  public atualizarFavoritos() {
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe();
  }
}
