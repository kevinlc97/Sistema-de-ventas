import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.sass']
})
export class PruebaComponent implements OnInit {
  texto: string = '';
  saludar() {this.texto = 'Hola mundo'}
  
  constructor() { }

  ngOnInit(): void {
  }

}
