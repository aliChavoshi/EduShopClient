import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { FooterComponent } from './layers/footer/footer.component';
import { NavbarComponent } from './layers/navbar/navbar.component';
import { NotFoundComponent } from './layers/not-found/not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
