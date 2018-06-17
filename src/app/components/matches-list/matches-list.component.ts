import { PredictionsService } from './../../services/predictions.service';
import { GetCountryByIdPipe } from './../../pipes/get-country-by-id.pipe';
import { Match } from './../../models/match';
import { Country } from './../../models/country';
import { LocalDataService } from './../../services/local-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit, AfterViewInit {

  scoreForm: FormGroup;
  teams: Country[];
  matches: any;

  constructor(private localService: LocalDataService, private predictionService: PredictionsService) {
    this.scoreForm = new FormGroup({
      gameId: new FormControl(0, [Validators.required, Validators.min(0)]),
      homeScore: new FormControl(0, [Validators.required, Validators.min(0)]), 
      awayScore: new FormControl(0, [Validators.required, Validators.min(0)])
    })
  }

  ngOnInit() {
    this.teams = this.getTeams();
    this.matches = this.getGroupMatches();
    this.predictionService.getPredictionsList();
  }

  ngAfterViewInit() {
    const gameIdInputs = Array.from(document.getElementsByClassName("js-game-id"));
    for (let gameIdInput of gameIdInputs) {
      gameIdInput.setAttribute("value", gameIdInput.getAttribute("ng-reflect-value"));
    }
  }

  submit($event, isValid: boolean) {
    const prediction = {};
    const filteredInputs: Object[] = Array.from($event.target).filter(el => {
      if(el["nodeName"] === "INPUT") {
        return true;
      }
    });
    for(let input of filteredInputs) {
      prediction[input.getAttribute("formcontrolname")] = input["value"];
    }
    if(isValid) {
      this.predictionService.addPrediction(prediction);
    }
  }

  getTeams(): Country[] {
    return this.localService.getTeams();
  }

  getGroupMatches() {
    return this.localService.getGroupMatches();
  }
}
