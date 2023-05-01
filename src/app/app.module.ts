import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteTesteComponent } from './componente-teste/componente-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteTesteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
