import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {
  public pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  public excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }
  }

  public cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
