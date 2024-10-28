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



  @Input() btnAcao!: string;
  @Input() descTitulo!: string;

  constructor(private router: Router){}


  videoForm!: FormGroup;



  ngOnInit(): void {
    this.videoForm = new FormGroup({
      idVideos: new FormControl(0),
      name: new FormControl(''),
      genres: new FormControl(''),
      description: new FormControl('')
    });

  }




  submit(){
      this.onSubmit.emit(this.videoForm.value);
  }


}
