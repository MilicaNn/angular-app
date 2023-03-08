import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { PreviousTreningComponent } from './training/previous-trening/previous-trening.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceTraining } from './training/training.service';
import { StopTrainingComponent } from './training/current-training/stop-training/stop-training.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    TrainingComponent,
    PreviousTreningComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    StopTrainingComponent,
 
   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    
   

  ],
  providers: [ServiceTraining],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent],
})
export class AppModule { }
