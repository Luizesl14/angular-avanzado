import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContadorComponent} from "./contador/contador.component";
import { DbzModule } from './dbz/dbz.module';
import {HeroesComponent} from "./heroes/heroes.component";
import { ListadoComponent } from './heroes/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroesComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
