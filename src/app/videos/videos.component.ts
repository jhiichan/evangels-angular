import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideosService } from './videos.service';
import { Video } from '../video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  providers: [VideosService],
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Observable<Video[]>;
  @Input() isOpen: boolean;

  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.showVideos();
  }

  showVideos() {
    this.videos = this.videosService.getData();
  }

}
