import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit{
  routes = ['JuanLucumi', 'skills'];
  currentIndex = 0;
  transformValue = 'translateX(0%)';
  constructor(private router:Router,private platform: Platform){}

  navigate(direction: 'previous' | 'next') {
    if (direction === 'previous' && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (direction === 'next' && this.currentIndex < this.routes.length - 1) {
      this.currentIndex++;
    }
    this.transformValue = `translateX(-${this.currentIndex * 100}%)`;
    this.router.navigate([this.routes[this.currentIndex]]);
  }

  ngAfterViewInit(): void {
    if (this.platform.isBrowser) {  // Verifica si estamos en un navegador
      import('plyr').then(Plyr => {  // Carga Plyr dinámicamente solo en el navegador
        const player = new Plyr.default('#player');  // Inicializa el reproductor Plyr
      });
    }
  }
}
