import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-lookfor',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './lookfor.component.html',
  styleUrl: './lookfor.component.css',
})
export class LookforComponent {
  images = [48, 85, 221].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
