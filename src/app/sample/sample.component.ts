import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  sample: any;
  samples: any[];
  persons: any[];
  error: any;
  constructor(private sampleService: SampleService) { }


  getSample(): void  {
    this.sample = this.sampleService.getSample();
  }

  getSamples(): void  {
    this.samples = this.sampleService.getSamples();
  }

  getSearch(): void  {
    this.sampleService.getSearch().subscribe(
      (data: any) => this.persons = data, // success path
      error => this.error = error // error path
    );

  }


  ngOnInit(): void {
    this.getSample();
    this.getSamples();
    this.getSearch();
  }

}
