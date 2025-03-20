import { animate, state, style, transition, trigger } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swiper from 'swiper';
import { ClickMode, Container, Engine, HoverMode, MoveDirection, Opacity, OutMode } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim";
import { InfoProjectComponent } from '../info-project/info-project.component';
import { InfoPqrsComponent } from '../info-pqrs/info-pqrs.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })), // Estado inicial cuando el elemento no está en el DOM
      transition(':enter', [animate('2000ms ease-in')]), // Aparece gradualmente
      transition(':leave', [animate('100ms ease-out')]) // Desaparece gradualmente
    ])
  ]
})
export class HomeComponent implements AfterViewInit{
  spotlightPosition = { x: '50%', y: '50%' };
  routes = ['JuanLucumi', 'skills'];
  currentIndex = 0;
  transformValue = 'translateX(0%)';
  config = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
  };
  
  @ViewChild('swiperContainer', { static: false }) swiperRef!: ElementRef;
  constructor(private router:Router,
    @Inject(PLATFORM_ID) private platformId: object,private cdr: ChangeDetectorRef,
  private platform: Platform,public dialog: MatDialog){}
  swiper!: Swiper;
  swiper2!: Swiper;
  isButtonActive = false;
  color:string ="#fff";
  title:string = "";
  paragraph:string = "";
  empty:boolean = true;
  isOpened: boolean = false;

  ngAfterViewInit() {
    this.initializeSwiper();
    this.initializeSwiper2();
    this.initializeCanvas();
    if (this.platform.isBrowser) {  // Verifica si estamos en un navegador
      import('plyr').then(Plyr => {  // Carga Plyr dinámicamente solo en el navegador
        const player = new Plyr.default('#player');
        const player2 = new Plyr.default('#player2'); // Inicializa el reproductor Plyr
      });
    }
  }

  onTranslate(event: any) {
    const currentSlide = event.item.index; // Índice de la diapositiva actual
    if (currentSlide === 1) {
      this.initializeCanvas();
    }
  }

  // Activar el estado
  activateButton(clase?:string) {
    this.isButtonActive = true;
    this.empty = false;
    
    const pathElement = document.querySelector('.ninja-path-1') as HTMLElement;
    if (pathElement) {
      pathElement.classList.add(clase!);

    }

    switch(clase){
      case "csharp":
        this.title = "C#";
        this.paragraph = "I use C# as my primary backend programming language to develop robust and scalable applications. With its strong object-oriented principles, I build clean and maintainable code for APIs, enterprise solutions, and system integrations. I also leverage asynchronous programming to enhance performance and responsiveness.";
        break;

    case "net":
        this.title = ".NET";
        this.paragraph = "As a backend developer, I utilize the .NET framework to create secure and high-performance web applications. I work with .NET 6 to develop RESTful APIs, microservices, and backend logic, ensuring seamless communication between different layers of an application.";
        break;

    case "react":
        this.title = "REACT";
        this.paragraph = "I use React to build dynamic and responsive user interfaces for web applications. With a component-based architecture, I ensure modularity and reusability in my projects. I also integrate state management solutions like Redux and handle API interactions efficiently.";
        break;

    case "docker":
        this.title = "DOCKER";
        this.paragraph = "I implement Docker to containerize applications, ensuring consistency across development, testing, and production environments. By using Docker Compose, I orchestrate multi-container applications and optimize the deployment process.";
        break;

    case "jwt":
        this.title = "JWT";
        this.paragraph = "I use JSON Web Tokens (JWT) to implement secure authentication and authorization mechanisms in my applications. By integrating JWT with .NET and frontend frameworks, I ensure secure user sessions and data exchange.";
        break;

    case "bot":
        this.title = "BOOTSTRAP";
        this.paragraph = "I leverage Bootstrap to accelerate frontend development and ensure mobile-first, responsive web designs. By customizing Bootstrap components and utilizing its grid system, I create visually appealing and accessible user interfaces.";
        break;

    case "git":
        this.title = "GIT";
        this.paragraph = "I use Git as my version control system to track changes, collaborate with teams, and manage different project versions efficiently. Through branching and merging strategies, I ensure a smooth development workflow.";
        break;

    case "github":
        this.title = "GITHUB";
        this.paragraph = "I utilize GitHub for version control, collaboration, and deployment automation. I manage repositories, contribute to open-source projects, and implement CI/CD pipelines for streamlined software delivery.";
        break;

    case "js":
        this.title = "JAVASCRIPT";
        this.paragraph = "I use JavaScript to create interactive web applications, handling user interactions and dynamic content updates. Whether working with vanilla JavaScript or modern frameworks like React, I ensure seamless functionality across different devices and browsers.";
        break;

    case "pg":
        this.title = "POSTGRESQL";
        this.paragraph = "I implement PostgreSQL as a reliable and scalable database solution in my projects. Using advanced SQL queries, indexing, and performance optimization techniques, I ensure efficient data handling and retrieval.";
        break;

    case "py":
        this.title = "PYTHON";
        this.paragraph = "I use Python for automation, data processing, and backend development. With its powerful libraries, I streamline workflows, integrate machine learning models, and develop efficient scripting solutions.";
        break;

    case "sass":
        this.title = "SASS";
        this.paragraph = "I work with Sass to enhance CSS management, making styles more reusable and maintainable. By leveraging variables, nesting, and mixins, I improve styling efficiency and keep my CSS modular and scalable.";
        break;

    case "sql":
        this.title = "SQL";
        this.paragraph = "I use SQL to design and optimize database structures, ensuring efficient data storage and retrieval. I implement stored procedures, indexing, and complex queries to maintain high-performance database systems.";
        break;
      
    case "angular":
        this.title = "ANGULAR";
        this.paragraph = "I use Angular to build modern, scalable, and dynamic web applications. By leveraging Angular's powerful component-based architecture, I develop reusable UI elements and ensure maintainability. I integrate Angular Material for a sleek design, manage application state efficiently with RxJS, and connect to backend services through RESTful APIs.";
        break;

      default :

        break;
    }


  }

  openFirts(){
    const dialogRef = this.dialog.open(InfoProjectComponent, {
      width: '85%',
      height: '90%',
      hasBackdrop: true,
      
      // data: {
      //   id: id,
      //   area: area
      // }
    });

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        if (this.swiper) {
          window.dispatchEvent(new Event('resize'));
        }
      }, 300);
    });
  }

  openSecond(){
    const dialogRef2 = this.dialog.open(InfoPqrsComponent, {
      width: '85%',
      height: '90%',
      hasBackdrop: true,
      // data: {
      //   id: id,
      //   area: area
      // }
    });

    dialogRef2.afterClosed().subscribe(result => {
      setTimeout(() => {
        if (this.swiper) {
          window.dispatchEvent(new Event('resize'));
        }
      }, 300);
    });
  }
  
  forceReflowAndUpdateSwiper() {
    if (!this.swiper) return;
  
    const wrapper = this.swiper.wrapperEl as HTMLElement;
    if (wrapper) {
      // Forzar reflow: accediendo a una propiedad que obliga al navegador a re-calcular el layout
      wrapper.offsetHeight;  // Desencadena el reflow
  
      // Después de forzar el reflow, actualizamos Swiper
      this.swiper.update();
    }
  }
  // Desactivar el estado
  deactivateButton(clase?:string) {
    this.isButtonActive = false;
    const pathElement = document.querySelector('.ninja-path-1') as HTMLElement;
    if (pathElement) {
      pathElement.classList.remove(clase!);

    }

    this.title = "";
    this.paragraph = "";
    this.empty = true;
  }

  initializeSwiper(){
    if (isPlatformBrowser(this.platformId)) {
      // Solo inicializa Swiper si está en el navegador
      this.swiper = new Swiper('.mySwiper', {
        zoom: true,
        slidesPerView: 1, // Muestra un slide a la vez
        spaceBetween: 0, // Sin espacio entre slides
        effect: 'fade', // Efecto de desvanecimiento (fade)
        parallax: true, // Activa el efecto Parallax
        navigation: {
          nextEl: '.swiper-button-next', // Botón siguiente
          prevEl: '.swiper-button-prev', // Botón anterior
        },
        pagination: {
          el: '.swiper-pagination', // Elemento de paginación
          clickable: true, // Los puntos de paginación son clickeables
        },
        autoplay: {
          delay: 3000, // Cambia cada 3 segundos
          disableOnInteraction: false,
        },
        on: {
          init: (swiper) => {
            this.setInitialState(swiper); // Configura el estado inicial
          },
          slideChangeTransitionStart: (swiper) => {
            this.shrinkSlide(swiper.slides[swiper.previousIndex]); // Encoge la diapositiva anterior
          },
          slideChangeTransitionEnd: (swiper) => {
            this.expandSlide(swiper.slides[swiper.activeIndex]); // Agranda la diapositiva activa
          },
        },
      });
    }
  }

  initializeSwiper2(){
    if (isPlatformBrowser(this.platformId)) {
      // Solo inicializa Swiper si está en el navegador
      this.swiper2 = new Swiper('.mySwiper2', {
        zoom: true,
        slidesPerView: 3, // Muestra un slide a la vez
        spaceBetween: 0, // Sin espacio entre slides
        effect: 'fade', // Efecto de desvanecimiento (fade)
        parallax: true, // Activa el efecto Parallax
        navigation: {
          nextEl: '.swiper-button-next', // Botón siguiente
          prevEl: '.swiper-button-prev', // Botón anterior
        },
        pagination: {
          el: '.swiper-pagination', // Elemento de paginación
          clickable: true, // Los puntos de paginación son clickeables
        },
        autoplay: {
          delay: 3000, // Cambia cada 3 segundos
          disableOnInteraction: false,
        }
      });
    }
  }

  // Método para ir a la diapositiva anterior con animación personalizada
  prev(): void {
    this.animateCurrentSlide(() => {
      this.swiper.slidePrev(); // Cambia a la diapositiva anterior
    });
  }

  // Método para ir a la diapositiva siguiente con animación personalizada
  next(): void {
    this.animateCurrentSlide(() => {
      this.swiper.slideNext(); // Cambia a la diapositiva siguiente
    });
  }

  private animateCurrentSlide(callback: () => void): void {
    const activeSlide = this.swiper.slides[this.swiper.activeIndex];
    if (activeSlide) {
      // Aplica el efecto de encogimiento
      activeSlide.style.transition = 'transform 1s ease, opacity 1s ease';
      activeSlide.style.transform = 'scale(0.8)';
      activeSlide.style.opacity = '0.5';

      // Espera 1 segundo y luego ejecuta el cambio de diapositiva
      setTimeout(() => {
        callback();
      }, 1000); // 1 segundo de animación
    }
  }

  // Configura el estado inicial: todas las diapositivas encogidas excepto la activa
  private setInitialState(swiper: Swiper): void {
    swiper.slides.forEach((slide, index) => {
      if (index === swiper.activeIndex) {
        this.expandSlide(slide); // La diapositiva activa está expandida
      } else {
        this.shrinkSlide(slide); // Otras diapositivas están encogidas
      }
    });
  }

  // Aplica el efecto de encogimiento a una diapositiva
  private shrinkSlide(slide: HTMLElement): void {
    if (slide) {
      slide.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      slide.style.transform = 'scale(0.8)';
      slide.style.opacity = '0.5';
    }
  }

  // Aplica el efecto de expansión a una diapositiva
  private expandSlide(slide: HTMLElement): void {
    if (slide) {
      slide.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      slide.style.transform = 'scale(1)';
      slide.style.opacity = '1';
    }
  }


  initializeCanvas() {
    // Verifica si estás en un entorno de navegador
    if (typeof window !== 'undefined') {
      const TagCanvas = (window as any).TagCanvas;
      try {
        TagCanvas.Start('tagCanvas', 'tags', {
          textColour: '#000',
          outlineColour: '#f00',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          clickToFront: 500,
          activeCursor: 'pointer',
        });
      } catch (e) {
        console.error('TagCanvas error:', e);
      }
    } else {
      console.warn('TagCanvas cannot be initialized because window is not available.');
    }
  }


  moveSpotlight(event: MouseEvent | TouchEvent): void {
    let x, y;

    if (event instanceof MouseEvent) {
      x = event.pageX;
      y = event.pageY;
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0];
      x = touch.pageX;
      y = touch.pageY;
    }

    this.spotlightPosition = { x: `${x}px`, y: `${y}px` };
  }

  id = "tsparticles";

    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = "http://foo.bar/particles.json";

    /* or the classic JavaScript object */
    particlesOptions = {
        background: {
            color: {
                value: "trasnparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ClickMode.pause,
                },
                onHover: {
                    enable: true,
                    mode: HoverMode.attract,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 50,
                    duration: 0.4,
                },
                attract: {
                  distance: 200,
                  duration	:	0.4,
                  easing	:	'ease-out-quad',
                  factor	:	1,
                  maxSpeed	:	50,

                }
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 350,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1800,
                },
                value: 80,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 3, max: 3 },
            },
        },
        detectRetina: true,
    };

    particlesLoaded(container: Container): void {
        console.log(container);
    }

    async particlesInit(engine: Engine): Promise<void> {
        console.log(engine);

        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }

    

  

    navigate(direction: 'previous' | 'next') {
        if (direction === 'previous' && this.currentIndex > 0) {
          this.currentIndex--;
        } else if (direction === 'next' && this.currentIndex < this.routes.length - 1) {
          this.currentIndex++;
        }
        this.transformValue = `translateX(-${this.currentIndex * 100}%)`;
        this.router.navigate([this.routes[this.currentIndex]]);
      }

      

}
