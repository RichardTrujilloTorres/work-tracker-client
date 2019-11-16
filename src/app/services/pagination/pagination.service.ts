export class PaginationService {
  constructor(public page: number, public perPage: number) { }

  public increase() {
    this.page += 1;
  }
}
