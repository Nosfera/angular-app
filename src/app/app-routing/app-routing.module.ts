import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  // You need to export RouterModule so it accessible
  // from the app "main" module
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
