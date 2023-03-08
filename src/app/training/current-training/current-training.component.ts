import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  stopTimer: any;
  timer=0;

  constructor(private dialog: MatDialog){}

//setInterval i clearInterval su ugradjene metode,
//koje mozemo koristiti po potrebi

  ngOnInit(): void{
    this.stopTimer = setInterval(()=>{
      this.timer+=10;
      if(this.timer>=100){
        clearInterval(this.stopTimer);
      }
    }, 500)
  }

  onResume(){
    this.stopTimer = setInterval(()=>{
      this.timer+=10;
      if(this.timer>=100){
        clearInterval(this.stopTimer);
      }
  }, 500)
}

  onStop(){
    clearInterval(this.stopTimer);
    this.dialog.open( StopTrainingComponent,{
        data: {
        stopTimer: this.stopTimer
        }
      })
  }

}
