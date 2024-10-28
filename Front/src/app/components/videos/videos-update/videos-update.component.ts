import { Component, OnInit } from '@angular/core';
import { VideosFormComponent } from "../videos-form/videos-form.component";
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '../../../services/videos/videos.service';
import { Videos } from '../../../models/Videos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos-update',
  standalone: true,
  imports: [VideosFormComponent, CommonModule],
  templateUrl: './videos-update.component.html',
  styleUrl: './videos-update.component.css'
})
export class VideosUpdateComponent implements OnInit{

  btnAcao = "Update";
  descTitulo ="Update video"

  video!: Videos;


  constructor(private serviceVideo: VideosService, private router: Router, private route: ActivatedRoute){}


  ngOnInit(): void {
console.log(1)
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.serviceVideo.findById(id).subscribe(video => {
      console.log(2)
      this.video = video;
    })
  }


  videosUpdate(video: Videos){
    console.log(video)
    this.serviceVideo.update(video).subscribe((video) => {

      this.router.navigate(['/videos'])
    })

    console.log(video)
  }

}
