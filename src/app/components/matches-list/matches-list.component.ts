import { Match } from './../../models/match';
import { Country } from './../../models/country';
import { LocalDataService } from './../../services/local-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {



  constructor(private localService: LocalDataService) { }

  teams: Country[];
  matches: any;

  ngOnInit() {
    this.teams = this.getTeams();
    this.matches = this.getGroupMatches();
  }

  getTeams(): Country[] {
    return this.localService.getTeams();
  }

  getGroupMatches() {
    return this.localService.getGroupMatches();
  }
}
