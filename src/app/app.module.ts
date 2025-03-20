import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgParticlesModule } from "ng-particles";
import { SkillsComponent } from './components/skills/skills.component';

import { HammerModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoProjectComponent } from './components/info-project/info-project.component';
import { InfoPqrsComponent } from './components/info-pqrs/info-pqrs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    InfoProjectComponent,
    InfoPqrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    HammerModule,
    CarouselModule,
    BrowserAnimationsModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
