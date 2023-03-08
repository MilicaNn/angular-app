import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
/*
EventEmitter- koristi se za osluskivanje specificnih dogadjaja u 
child komponentama ili rroditeljskim
to je sustinski neki patern koji slusa odredjeni event i 
ocekuje odredjene callbacko-ve a onda salje taj evan sa nenakvom vrednoscu
koristi se kada hocemo da nesto posaljemo iz detetove u 
roditeljovu komponentu i obrnuto
od deteta ka rodjitelju moramo da mu kazemo da je on output
a kada rodjitelj salje detetu onda je to input dekorator
eventEmitter dolazi iz cora, moramo da ga importujemo
emit()- izvrsava @input()/@output()
<void> se stavlja ako imamo nesto proizvoljnog tipa
*/


export class NewTrainingComponent {
  @Output() trainingStart=new EventEmitter<void>();
  onStartTraining(){
    this.trainingStart.emit()
  }

}
