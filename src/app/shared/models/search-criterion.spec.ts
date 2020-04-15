import { SearchCriterion } from './search-criterion';

describe('SearchFilter', () => {
  it('should create an instance', () => {
    expect(new SearchCriterion('',
    1,
    {
      country: 'USA',
      state: '',
      firstName: '',
      lastName: '',
      address: ''
    })).toBeTruthy();
  });
});
