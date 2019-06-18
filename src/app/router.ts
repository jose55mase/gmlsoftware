import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PatrocinioComponent } from './patrocinio/patrocinio.component';




const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },  
  { path: 'patrocinio', component: PatrocinioComponent },
  { path: 'menu', component: MenuComponent }
  
  
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule,]
  })

export class AppRoutingModule { }