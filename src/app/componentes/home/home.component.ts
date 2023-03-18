import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {

  /*constructor() { }

  ngOnInit(): void {
  }*/

  title = 'EntregaAngular';

  images = [
    {title: 'Guillermo  Perez', short: 'Ocupacion ', src: "../../assets/.jpg"},
    {title: 'Yago Iglesias', short: 'Ocupacion', src: "../../assets/.jpg"},
    {title: 'Carlos Salvador ', short: 'Ocupacion', src: "../../assets/.jpg"},
    {title: 'Yul Cardenas', short: 'Ocupacion', src: "../../assets/.jpg"}
    
  ];
  


  constructor(config: NgbCarouselConfig) {
    config.interval = 2500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}
