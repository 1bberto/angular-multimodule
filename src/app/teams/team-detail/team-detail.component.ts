import { Component, OnInit } from '@angular/core';
import { switchMap } from "rxjs/internal/operators";
import { ActivatedRoute } from "@angular/router";
import { TeamService } from "../../services/team.service";
import { Team } from "../../shared/team";

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  public team: Team;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.team = this.teamService.getTeam(+params['id']);
      console.log(this.team);
    })
  }
}