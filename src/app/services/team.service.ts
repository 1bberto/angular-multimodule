import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs/index";
import { Team } from "../shared/team";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teams: Team[];

  constructor(private httpService: HttpClient) {
  }

  public getTeams(): Promise<Team[]> {
    return new Promise((resolve, reject) => {
      this.httpService
        .get<Team[]>('/assets/players.json')
        .subscribe(
          (response) => {
            this.teams = response;
            resolve(response);
          },
          (error) => {
            console.log('Error:', error);
            reject(error);
          }
        );

    });
  }

  public getTeam(id: number): Team {
    return this.teams.filter(t => t.id === id)[0];
  }
}
