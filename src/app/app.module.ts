import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import 'hammerjs';

// Ng decorator linked to the appModule class
/*
 a function that modifies angular clases
 takes meta-data to help you describe the modules

*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  // the providers defines all the services that this module will be using
  providers: [],
  bootstrap: [AppComponent]
})

// This exports the main class or the bootstrapped modules into
// root AppModule
export class AppModule { }
