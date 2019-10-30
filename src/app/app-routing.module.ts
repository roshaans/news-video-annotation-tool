import { VideoPlayerComponent } from './video-player/video-player.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: 'task', component: VideoPlayerComponent },
  { path: 'task/:video1/:video2/:video3/:market/:textSnippet/:suggestedStartTime', component: VideoPlayerComponent },
  // http://localhost:4200/task/fhhj/dsds/jgg/asdf/asdf/55
 { path: '',
    redirectTo: '/task',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
