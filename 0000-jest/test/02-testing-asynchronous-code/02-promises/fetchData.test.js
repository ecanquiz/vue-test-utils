import * as fetchData from '@/src/js/promises/fetchData';

test('the data is peanut butter', () => {
  return fetchData.res().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData.rej().catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter', () => {
  return expect(fetchData.res()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData.rej()).rejects.toBe('error');
});
