import * as City from '../../js/City1';

beforeEach(() => {
  return City.initializeDatabase();
});

afterEach(() => {  
  return City.clearDatabase();
});

test('city database has Vienna', () => {
  expect(City.isIt('Vienna')).toBeTruthy();  
});

test('city database has San Juan', () => {
  expect(City.isIt('San Juan')).toBeFalsy();
});

