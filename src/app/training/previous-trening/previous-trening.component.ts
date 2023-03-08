import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource} from '@angular/material/table';
import { TrainingExercise } from '../training.model';
import { ServiceTraining } from '../training.service';


@Component({
  selector: 'app-previous-trening', 
  templateUrl: './previous-trening.component.html',
  styleUrls: ['./previous-trening.component.css']
})
export class PreviousTreningComponent implements OnInit, AfterViewInit{

  //MatTableDataSource<TrainingExercise> ovo je angular sintaksa za povezivanje interfejsa. 
  //Odnosnmo definicije tipa, moze da bude tip <void> i drugo ... ovde je u pitanju interfejs
  exerciseSource = new MatTableDataSource<TrainingExercise>();
  displayedColumns=["date", "name", "duration", "trainingStat"];

//pozivamo dekorator @ViewChild i (direktiva matSort, matPaginator)
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


//paremetri konstruktora:
  constructor(private serviceTraining: ServiceTraining){}

//kada se inicijalizuje stranica, pristupamo nasem izvoru podataka(exerciseSource) u servisu(serviceTraining)
  ngOnInit(): void {
    this.exerciseSource.data=this.serviceTraining.getData();

  }
  //ng- su ugradjene metode, koje se koriste prilikom inicijalizacije stranice i slicno...
    ngAfterViewInit(){
      this.exerciseSource.sort=this.sort;
      this.exerciseSource.paginator=this.paginator;
    }
    doFilter(filterValue:string){
    this.exerciseSource.filter=filterValue.trim().toLowerCase();
  }
}
