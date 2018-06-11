import { GetCountryByIdPipe } from './get-country-by-id.pipe';

describe('GetCountryByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new GetCountryByIdPipe();
    expect(pipe).toBeTruthy();
  });
});
