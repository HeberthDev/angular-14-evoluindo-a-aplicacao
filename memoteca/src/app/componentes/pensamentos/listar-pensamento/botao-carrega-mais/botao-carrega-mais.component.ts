import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carrega-mais',
  templateUrl: './botao-carrega-mais.component.html',
  styleUrls: ['./botao-carrega-mais.component.scss']
})
export class BotaoCarregaMaisComponent implements OnInit {
  @Input() haMaisPensamentos = false;

  constructor() { }

  ngOnInit(): void {
  }

}
