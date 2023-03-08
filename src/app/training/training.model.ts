/*
    U okviru svih tih interfejsa, 
    mi definisemo TIP polja

    1.prvo, to kazemo da je klasa interfes i damo jooj naziv
    kroz ovaj interfejs definisacemo razna polja, 
    npr id, ime....bilo koji tip podataka
    */
    // date?-? znaci da je opciono polje

   export interface TrainingExercise{
    id:string;
    name:string;
    duration:number;
    date?: Date;
    trainingStat: 'finished'| 'active'| null;
   }


