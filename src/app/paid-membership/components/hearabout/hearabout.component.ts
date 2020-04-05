import { Component, OnInit } from '@angular/core';
import { AwarenessCodeService } from "../../paid-membership-awareness-code-service";
import { AwarenessCodes } from './../../../shared/models/awarenesscodes.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paid-membership-hearabout',
  templateUrl: './hearabout.component.html',
  styleUrls: ['./hearabout.component.scss']
})

export class HearaboutComponent implements OnInit {

  constructor(private awUpdate: AwarenessCodeService, private route: ActivatedRoute) { }
  awarenessSelection: AwarenessCodes;
  personId: number;
  
  ngOnInit(): void {
  this.awUpdate.awarenessCodeSelected.subscribe(awarenessSelection => this.awarenessSelection = awarenessSelection);
  this.route.params.subscribe(params => {
    this.personId = +params['personId']; //TO DO: Sync with E. S. to get the ID here
 });
  }
  onCodeSelected(codeSelected: string){
  }

}
