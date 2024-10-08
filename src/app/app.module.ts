import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LookforComponent } from './lookfor/lookfor.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AppComponent,
    MenuComponent,
    HeaderComponent,
    LookforComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [],
  exports: [AppComponent, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
