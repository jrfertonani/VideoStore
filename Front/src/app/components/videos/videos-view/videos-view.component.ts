import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Videos } from '../../../models/Videos';
import { VideosService } from '../../../services/videos/videos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-videos-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './videos-view.component.html',
  styleUrl: './videos-view.component.css'
})
export class VideosViewComponent implements OnInit{


  videos: Videos[] = [];
  videoList: Videos[] = [];

  constructor(private viceosService: VideosService){}


  ngOnInit(): void {


  }



}
