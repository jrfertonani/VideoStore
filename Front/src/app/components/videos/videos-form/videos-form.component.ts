import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Videos } from '../../../models/Videos';
import { VideosService } from '../../../services/videos/videos.service';

@Component({
  selector: 'app-videos-form',
  standalone: true,
  imports:[RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './videos-form.component.html',
  styleUrl: './videos-form.component.css'
})
export class VideosFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Videos>();

  @Input()  dadosVideo : Videos | null = null;


  @Input() btnAcao!: string;
  @Input() descTitulo!: string;

  constructor(private router: Router){}


  videoForm!: FormGroup;



  ngOnInit(): void {

    console.log(3)

    this.videoForm = new FormGroup({
      idVideo: new FormControl(this.dadosVideo ? this.dadosVideo.idVideo : 0),
      name: new FormControl(this.dadosVideo ? this.dadosVideo.name : ''),
      genres: new FormControl(this.dadosVideo ? this.dadosVideo.genres : ''),
      description: new FormControl(this.dadosVideo ? this.dadosVideo.description : '')
    });

  }




  submit(){
      this.onSubmit.emit(this.videoForm.value);

    //  console.log(this.videoForm.value);
  }


}
