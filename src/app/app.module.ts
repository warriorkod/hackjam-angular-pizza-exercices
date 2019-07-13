import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket.service';
import { PizzaService } from './pizza.service';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AppComponent, HeaderComponent,BasketComponent, PizzalistComponent, HomeComponent,PizzalistComponent],
  imports: [BrowserModule,CommonModule, AppRoutingModule, FormsModule, NgbModalModule],
  exports: [],
  providers: [BasketService, PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
