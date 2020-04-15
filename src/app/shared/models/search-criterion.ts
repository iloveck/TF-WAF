export class SearchCriterion {
  constructor(
    public searchText: string,
    public pageNumber: number,
    public searchFilter: {
      country: string,
      state: string,
      firstName: string,
      lastName: string,
      address: string
    }
  ) {}
}
