import { TrainingExercise } from "./training.model";


export class ServiceTraining{
    private exercises: TrainingExercise[]=[
        {id: 'running', name: 'Midday running', duration: 60, date: new Date(), trainingStat: 'finished'},
        {id: 'walking', name: 'Afternoon walking', duration: 120, date: new Date(), trainingStat: 'active'},
        {id: 'squats', name: 'Evening squats', duration: 240, date: new Date(), trainingStat: 'finished'},
        {id: 'running', name: 'Morning runing', duration: 150, date: new Date(), trainingStat: 'active'}

    ]
    getData(){
        return this.exercises;
    }
}