import { Component } from '@angular/core';
import { LookforComponent } from '../lookfor/lookfor.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [HeaderComponent, LookforComponent, FooterComponent],
})
export class MenuComponent {
  constructor() {
    console.log('hola');
  }
}
