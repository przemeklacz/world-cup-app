import { Prediction } from './../models/prediction';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 


@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  predictions: AngularFireList<Prediction[]> = null;
  userId: string;
  points: number;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });
  }

  getPredictionsList(): AngularFireList<Prediction[]> {
    if(!this.userId) return;
    this.predictions = this.db.list(`/predictions/${this.userId}`);
    console.log(this.predictions);
    return this.predictions;
  }
  addPrediction(prediction) {
    this.predictions.push(prediction);
  }
}
