import fetchData02 from '../../js/jest/fetchData02';

test('el dato es peanut butter', () => {
  return fetchData02().then(data => {
    expect(data).toBe('peanut butter');
  });
});
