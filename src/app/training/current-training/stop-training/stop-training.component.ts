import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.css']
})
export class StopTrainingComponent implements OnInit{

  /*  @Inject direktiva, dekorator za umetanje referenciranih podataka izmedju trenutno sacuvanih podataka koje mi hocemo da razmenjujemo,
      ovi podaci mogu lokalno da se cuvaju prilikom razmene podataka.
      MAT_DIALOG_DATA  - parametar u kojem cuvamo nase dijaloge trenutne
      receivedData: any  -trenutni tok treninga tj nasih podataka i 
      any- bilo koji tip podataka
  */
  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any){ } 

  ngOnInit(): void {
    
  }
}
