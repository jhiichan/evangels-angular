import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HomeService],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Output() openVideos = new EventEmitter<boolean>();
  configs: Observable<any>;
  isOpen = true;
  
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.configs = this.homeService.getConfigurations();
  }

  toggleVideos() {
    this.isOpen = false;
    this.openVideos.emit(true);
  }
}
