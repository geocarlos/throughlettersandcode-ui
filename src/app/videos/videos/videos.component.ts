import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService, VideoFilter } from '../video.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos = [];
  youtubeUrl = 'https://www.youtube.com/embed/';

  filter = new VideoFilter();

  isRequestCompleted = false;

  constructor(
    private sanitizer: DomSanitizer,
    private auth: AuthService,
    private videoService: VideoService,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  deleteVideo(id: number) {
    this.videoService.delete(id)
      .then(() => {
        window.alert('Video has been deleted.');
        this.router.navigateByUrl('/videos');
      })
      .catch(error => this.errorHandler.handle(error));
  }

  get noVideos(): boolean {
    return this.videos.length < 1 && this.isRequestCompleted;
  }

  get isLoading(): boolean {
    return !this.isRequestCompleted;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.filter.page = 0;
    this.filter.itemsPerPage = 10;
    this.videoService.get(this.filter)
      .then(response => {
        this.videos = response.content;
      })
      .catch(error => this.errorHandler.handle(error))
      .finally(() => this.isRequestCompleted = true);
  }

}
