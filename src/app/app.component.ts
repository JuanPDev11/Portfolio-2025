import { isPlatformBrowser } from '@angular/common';
import { Component , HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'PortfolioNew';
  routes = ['JuanLucumi', 'skills'];
  currentIndex = 0; // Índice inicial
  transformValue = 'translateX(0%)'; // Valor inicial para el movimiento
  private originalWidth = 1920; // Ancho base
  private originalHeight = 1080; // Alto base

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  
  // Navegar entre las vistas

  // Método para navegar entre secciones
  navigate(direction: 'previous' | 'next') {
    if (direction === 'previous' && this.currentIndex > 0) {
      this.currentIndex--; // Retrocede una sección
    } else if (direction === 'next' && this.currentIndex < this.routes.length - 1) {
      this.currentIndex++; // Avanza una sección
    }

    // Actualiza el valor de transform para mover el contenedor
    this.transformValue = `translateX(-${this.currentIndex * 0}%)`;
  }

  // Detectar gestos de deslizar a la izquierda
  @HostListener('swipeleft', ['$event'])
  onSwipeLeft(event: any) {
    this.navigate('next');
  }

  // Detectar gestos de deslizar a la derecha
  @HostListener('swiperight', ['$event'])
  onSwipeRight(event: any) {
    this.navigate('previous');
  }
}
