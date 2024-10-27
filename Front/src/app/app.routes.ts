import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { VideosViewComponent } from './components/videos/videos-view/videos-view.component';
import { VideosCreateComponent } from './components/videos/videos-create/videos-create.component';
import { VideosUpdateComponent } from './components/videos/videos-update/videos-update.component';

export const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'videos',component: VideosViewComponent},
  {path: 'videoCreate', component: VideosCreateComponent},
  {path: 'videosUpdate', component: VideosUpdateComponent},


];
