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
import { FormsModule } from '@angular/forms';

const MockSearchService = {
  getSearch(searchTerm: string, pageNumber: number) {
    const searchResult = {
      totalCount: 4,
      results: [
        {
          profile: {
            firstName: 'UNIT',
            lastName: 'TEST'
          },
          mph: {
            phoneNumber: '5613579125'
          },
          pea: {
            emailAddress: 'test@testing.com'
          },
          pas: {
            idNumber: 'L1B2M3N59'
          },
          id: '661208351'
        },
        {
          profile: {
            firstName: 'UNIT',
            lastName: 'TEST'
          },
          mph: {
            phoneNumber: '5613579125'
          },
          pea: {
            emailAddress: 'test@testing.com'
          },
          pas: {
            idNumber: '123456789'
          },
          id: '815333542'
        },
        {
          profile: {
            firstName: 'UNIT',
            lastName: 'TEST'
          },
          mph: {
            phoneNumber: '5613579125'
          },
          pea: {
            emailAddress: 'test@testing.com'
          },
          dl: {
            idNumber: 'NAGS01234567'
          },
          id: '1712440323'
        },
        {
          profile: {
            firstName: 'UNIT',
            lastName: 'TEST'
          },
          mph: {
            phoneNumber: '5613579125'
          },
          pea: {
            emailAddress: 'test@testing.com'
          },
          dl: {
            idNumber: '123456789'
          },
          id: '1636502358'
        }
      ]
    };
    return of( searchResult );
  }
};

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule, FormsModule ],
      declarations: [ SearchResultComponent, PersonCardComponent, SearchHeaderComponent, SearchTagComponent, FormatPhonePipe ],
      providers: [{ provide: SearchService, useValue: MockSearchService }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load more', () => {
    window.history.pushState({ term: 'test'}, '', '');
    expect(component).toBeTruthy();
  });
  it('should load more', () => {
    component.LoadMore();
    expect(component.persons.length).toBe(8);
  });
});
