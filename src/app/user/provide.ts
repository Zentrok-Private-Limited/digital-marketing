import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-provide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provide.html',
  styleUrls: ['./provide.css']
})
export class ProvideComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import AOS only in the browser
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
      });
    }
  }

}
