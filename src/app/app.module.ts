import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { TimePipe } from './time.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule,
       VgControlsModule,
       VgOverlayPlayModule,
       BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
