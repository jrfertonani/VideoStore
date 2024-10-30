import { Component } from '@angular/core';
import { VideosFormComponent } from "../videos-form/videos-form.component";
import { Router } from '@angular/router';
import { VideosService } from '../../../services/videos/videos.service';
import { Videos } from '../../../models/Videos';

@Component({
  selector: 'app-videos-create',
  standalone: true,
  imports: [VideosFormComponent],
  templateUrl: './videos-create.component.html',
  styleUrl: './videos-create.component.css'
})
export class VideosCreateComponent {

  btnAcao = "Create";

  descTitulo = "Create video";

  constructor(private servicoVideo: VideosService, private router: Router){}

  createVideo(video: Videos){
    this.servicoVideo.create(video).subscribe(videos => {
      this.router.navigate(['/videos'])

      //console.log(video)
    })
  }


}
