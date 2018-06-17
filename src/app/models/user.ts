import { Prediction } from './prediction';


export interface User {
    uid: string;
    nick: string;
    predictions: {
        pastPredictions: Prediction[];
        futurePredictions: Prediction[];
    }
    points: number;
}