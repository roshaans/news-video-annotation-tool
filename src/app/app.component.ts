import { Component, EventEmitter } from '@angular/core';
import { VgPlayer, VgAPI } from 'videogular2/compiled/core';
import {ActivatedRoute} from '@angular/router'


export interface IMedia {
  title: string;
  src: string;
  type: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent{
  title = 'QualtricsVideo';
  api: VgAPI;
  startTime = 0;
  endTime = 0;
  shouldRun = true;
 
  borderColorStart = {'border': '0px solid blue'}
  borderColorEnd = {'border': '0px solid blue'}
  
  suggestedStartTime = 45;
  videoOne = "Error";
  videoTwo = "Error";
  videoThree = "Error";
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
  {
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
];
startTimeVideo = this.videos[1].title;
endTimeVideo = "NONE SELECTED";

playerReady = false; 
currentIndex = 1;
    currentItem: IMedia = this.playlist[ this.currentIndex ];
 
constructor(private activatedRoute: ActivatedRoute) {

  this.activatedRoute.paramMap.subscribe(
    (params) => {


    }
  )
}

getInfo() {

}
ngOnInit() {

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
