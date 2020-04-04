import { Component, OnInit, SystemJsNgModuleLoader, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AwarenessCodes} from './awarenesscodes.model';
import { AwarenessCodeService } from "../../paid-membership-awareness-code-service";
import {environment} from './../../../../environments/environment'

@Component({
  selector: 'app-paid-membership-awarenesscodes',
  templateUrl: './awarenesscodes.component.html',
  styleUrls: ['./awarenesscodes.component.scss']
})
export class AwarenesscodesComponent implements OnInit {

  @Output() codeSelected = new EventEmitter<string>();
  codeButtons: AwarenessCodes[];
  selected: string;
  codeSelection: AwarenessCodes;
  constructor(private httpClient: HttpClient, private awUpdate: AwarenessCodeService) { }

  ngOnInit(): void {
    this.fetchAwarenessData();
  }

 fetchAwarenessData(){
  var awarenessCodesUrl = environment.awarenessCodesUrl;
  this.httpClient.get<AwarenessCodes[]>(awarenessCodesUrl).subscribe(codes => {
   console.log(codes[1]);
   this.codeButtons = codes;
   console.log(this.codeButtons);
 });
 
 }

  onAwarenessSelection(selection: AwarenessCodes){
    this.selected = selection.awarenessCode;
    this.codeSelection = selection;
   this.codeSelected.emit(this.selected);
   console.log("selection is now invoking service " + this.selected);
   this.awUpdate.changeAwarenessCode(this.codeSelection);
    
  }
  
}
