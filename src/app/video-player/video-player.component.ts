import { Component, OnInit } from '@angular/core';
import { VgPlayer, VgAPI } from 'videogular2/compiled/core';
import {ActivatedRoute} from '@angular/router'
export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  title = 'QualtricsVideo';
  api: VgAPI;
  startTime = 0;
  endTime = 0;
  shouldRun = true;
 
  borderColorStart = {'border': '0px solid blue'}
  borderColorEnd = {'border': '0px solid blue'}
  
  suggestedStartTime = 45;
  videoOne = "http://wesmedia.wesleyan.edu/coh/";
  videoTwo = "http://wesmedia.wesleyan.edu/coh/"
  videoThree = "http://wesmedia.wesleyan.edu/coh/"
  market = "Error";
  textSnippet = "Error";


startPressed = false; 
endPressed = false;
  playlist: Array<IMedia> = [
    {
        title: 'Video #1',
        src: 'http://wesmedia.wesleyan.edu/coh/WTXF101018182459.mp4',
        type: 'video/mp4'
    },
    {
        title: 'Video #2',
        src: 'http://wesmedia.wesleyan.edu/coh/WTXF101018182700.mp4',
        type: 'video/mp4'
    },
    {
        title: 'Video #3',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'
    }
];

videos: Array<IMedia> = [  
]

startTimeVideo;
endTimeVideo = "NONE SELECTED";

playerReady = false; 
currentIndex = 1;
    currentItem: IMedia = this.playlist[ this.currentIndex ];
 
constructor(private activatedRoute: ActivatedRoute) {

  
}
resetTimer() {
  this.startTime = 0;
  this.endTime = 0;
  this.startTimeVideo = "Video #2"
  this.endTimeVideo = "None selected"
  this.borderColorStart = {'border': '0px solid blue'}
  this.borderColorEnd = {'border': '0px solid blue'}
}
getInfo() {
  this.videoOne += this.activatedRoute.snapshot.paramMap.get('video1')
  this.videoTwo += this.activatedRoute.snapshot.paramMap.get('video2')
  this.videoThree += this.activatedRoute.snapshot.paramMap.get('video3')
  this.market = this.activatedRoute.snapshot.paramMap.get('market')
  this.textSnippet = this.activatedRoute.snapshot.paramMap.get('text-snippet')
  this.suggestedStartTime = Number(this.activatedRoute.snapshot.paramMap.get('suggestedSeekTime'))
  // http://localhost:4200/task/WTXF101018182459.mp4/WTXF101018182459.mp4/WTXF101018182459.mp4/asdf/asdf/55
  // http://localhost:4dsz200/task/fhhj/dsds/jgg/asdf/asdf/55

  this.activatedRoute.paramMap.subscribe(
    (params) => {

      console.log(params)

    }
  )

  this.videos = [  {
    title: 'Video #1',
    src: this.videoOne,
    type: 'video/mp4'
  },
  {
    title: 'Video #2',
    src: this.videoTwo,
    type: 'video/mp4'
  },
  {
    title: 'Video #3',
    src: this.videoThree,
    type: 'video/mp4'
  }
  ]
  this.startTimeVideo = this.videos[1].title;
  
}
ngOnInit() {
this.getInfo();
}
seekToSuggested(){
  if(this.currentIndex != 1) {
  this.currentIndex = 1;
  this.currentItem = this.playlist[this.currentIndex];
}

this.api.seekTime(this.suggestedStartTime)



}
onPlayerReady(api:VgAPI) {
  this.api = api;

  this.api.getDefaultMedia().subscriptions.ended.subscribe(
    () => {
        // Set the video to the beginning
        this.api.getDefaultMedia().currentTime = 0;

      }
);

}

    onClickPlaylistItem(item: IMedia,index) {
        this.currentIndex = index;
        this.currentItem = item;
    }
videoDict = {"Video #1": "videoOne", "Video #2": "videoTwo", "Video #3": "videoThree"}

startButtonClicked() {
      // this.api.seekTime(this.seekTime)this.startPressed = true;
      this.startPressed = true;

      this.borderColorStart['border'] = '5px solid #4caf50';
      this.startTimeVideo  = this.playlist[this.currentIndex].title
      this.startTime = this.api.currentTime
    }
endButtonClicked() {
  this.endPressed = true;
  this.borderColorEnd['border'] = '5px solid #4caf50';

  this.endTimeVideo = this.playlist[this.currentIndex].title
  this.endTime = this.api.currentTime

}

    secClicked() {
      console.log(this.activatedRoute.snapshot.paramMap, "map")
  console.log(this.activatedRoute.snapshot.paramMap.get('seektime'), "co")
  this.suggestedStartTime = Number(this.activatedRoute.snapshot.paramMap.get('seektime'));

    }
}




