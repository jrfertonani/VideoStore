import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { VideosViewComponent } from './components/videos/videos-view/videos-view.component';

export const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'videos',component: VideosViewComponent}

];
