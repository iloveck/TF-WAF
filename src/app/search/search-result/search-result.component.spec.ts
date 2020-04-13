import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchResultComponent } from './search-result.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonCardComponent } from '../components/person-card/person-card.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { SearchTagComponent } from '../components/search-tag/search-tag.component';
import { Observable, of } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { FormatPhonePipe } from 'src/app/shared/pipes/format-phone.pipe';

const MockSearchService = {
  getSearch(searchTerm: string, pageNumber:number) {
    const searchResult = {"totalCount":1,"results":[{"profile":{"firstName":"Test1","lastName":"Test2"},"homePhoneNumber":{"phoneNumber":"1234567890"},"mobilePhoneNumber":{"phoneNumber":"1234567890"},"peronalEmail":{"personalEmailAddress":"Test1@msn.com"},"license":{"idNumber":"123456789"},"passport":{"idNumber":"123456789"},"id":"FB5A5FE931A647C6BF1CE7587BC66249"}]};

    return of( searchResult );
  }
};

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ SearchResultComponent, PersonCardComponent, SearchHeaderComponent, SearchTagComponent, FormatPhonePipe ],
      providers: [{ provide: SearchService, useValue: MockSearchService }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    window.history.pushState({ term: 'main'}, '', '');
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load more', () => {
    component.LoadMore();
    expect(component.persons.length).toBe(2);
  });
});
