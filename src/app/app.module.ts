import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PatrocinioComponent } from './patrocinio/patrocinio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PatrocinioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
