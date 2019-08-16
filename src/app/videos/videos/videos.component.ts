import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService, VideoFilter } from '../video.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos = [];
  youtubeUrl = 'https://www.youtube.com/embed/';

  filter = new VideoFilter();

  constructor(
    private sanitizer: DomSanitizer,
    private videoService: VideoService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.filter.page = 0;
    this.filter.itemsPerPage = 10;
    this.videoService.get(this.filter)
    .then(response => {this.videos = response.content; console.log(response.content); })
    .catch(error => this.errorHandler.handle(error));
  }

}
