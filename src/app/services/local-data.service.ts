import { Country } from './../models/country';
import { GROUPS } from './../data/groups';
import { TEAMS } from './../data/teams';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  getTeams(): Country[] {
    return TEAMS;
  }

  getGroups() {
    return GROUPS;
  }

  getGroupMatches() {
    let groups = GROUPS[0].groups;
    let matchesArray = [];
    for (var item in groups) {
      matchesArray.push(groups[item].matches);
    }
    let flattenMatchesArray = matchesArray.reduce((acc, val) => acc.concat(val), []);

    flattenMatchesArray.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      // a must be equal to b
      return 0;
    })

    return flattenMatchesArray;
  }
}
