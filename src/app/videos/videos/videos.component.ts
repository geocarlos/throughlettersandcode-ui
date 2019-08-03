import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos = [
    {
      title: 'Color Rescue Alpha Version',
      description: 'A simple game developed with Godot',
      videoUrl: 'https://www.youtube.com/embed/CVXIn4_u3pc'
    },
    {
      title: 'How to add sound to your game',
      description: 'Adding sound to game in Godot',
      videoUrl: 'https://www.youtube.com/embed/uyaFWrj2kjI'
    },
    {
      title: 'Dicionário Taurepang',
      description: 'App for dictionary developed with Python and Kivy',
      videoUrl: 'https://www.youtube.com/embed/CIDI2E0liEU'
    },
    {
      title: 'Udacity Python Excercise',
      description: 'Some exercise with Turtle',
      videoUrl: 'https://www.youtube.com/embed/30jPUGesT_s'
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
