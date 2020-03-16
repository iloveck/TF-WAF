import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/services/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  sample: any;
  samples: any[];

  constructor(private sampleService: SampleService) { }


  getSample(): void  {
    this.sample = this.sampleService.getSample();
  }

  getSamples(): void  {
    this.samples = this.sampleService.getSamples();
  }


  ngOnInit(): void {
    this.getSample();
    this.getSamples();
  }

}
