import { SearchCriteria } from './search-criteria';

describe('SearchFilter', () => {
  it('should create an instance', () => {
    expect(new SearchCriteria('',
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
