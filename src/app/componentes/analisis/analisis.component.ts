import { Component, OnInit} from '@angular/core';
import { AnalisisService } from 'src/app/services/analisis.service';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit {
  texto = ""
  resultado = ""

  constructor(private _analisisSentimiento: AnalisisService) { }

  ngOnInit(): void {
  }

  analizar(){
    this.resultado = '...'
    //console.log('Ejecutando')
    this._analisisSentimiento.getResultado(this.texto).subscribe(data =>{
      console.log(data)
      this.resultado = data.resultado
    })
  }
}