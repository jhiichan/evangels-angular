import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = "EvAngels"
  isVideosOpen = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleVideos(value: boolean) {
    this.isVideosOpen = value;
  }

  constructor(private titleService: Title, private metaService: Meta, public router: Router) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'og:title', content: 'EvAngels' },
      { name: 'og:description', content: 'Rewind those best moments...' },
      // { name: 'og:image', content: '../assets/website_thumbnail.png' },
      // { name: 'og:image:url', content: '../assets/website_thumbnail.png' },
      // { name: 'og:image:secure_url', content: '../assets/website_thumbnail.png' },
      { name: 'og:url', content: 'https://evangels.lojhiic.com' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }

  isHomeRoute() {
    return this.router.url === '/';
  }
}
