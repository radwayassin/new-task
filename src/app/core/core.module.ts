import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
