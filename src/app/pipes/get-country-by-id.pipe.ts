import { TEAMS } from './../data/teams';
import { LocalDataService } from './../services/local-data.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCountryById'
})
export class GetCountryByIdPipe implements PipeTransform {

  teams = TEAMS;

  transform(value: number, isHome: boolean): string {
    if (value) {
      if(isHome) {
        for (let team of this.teams) {
          if (team.id === value) {
            return `${team.emojiString} ${team.name}`;
          }
        }
      } else {
        for (let team of this.teams) {
          if (team.id === value) {
            return `${team.name} ${team.emojiString}`;
          }
        }
      }
    }
    return null;
  }
}
