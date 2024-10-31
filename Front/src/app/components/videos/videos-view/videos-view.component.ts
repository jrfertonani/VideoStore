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
    this.viceosService.list().subscribe(videos => {
      this.videos = videos;
      this.videoList = videos;
      console.log(videos);
    })
  }



  searchName(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.videos = this.videoList.filter(videos => {
      return videos.name.toLocaleLowerCase().includes(value);
    })

  }



search(event: Event){
  const target = event.target as HTMLInputElement;
  const value = target.value.toLocaleLowerCase();

  this.videos = this.videoList.filter(videos => {
    return videos.genres.toLocaleLowerCase().includes(value);
  })

}

  delete(id: number){
    this.viceosService.delete(id).subscribe(videos => {
      window.location.reload();
    })
  }


}
