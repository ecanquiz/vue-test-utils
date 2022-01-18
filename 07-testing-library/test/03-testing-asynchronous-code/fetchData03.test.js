import fetchData03 from '../../js/fetchData03';

test('el dato es peanut butter', () => {
  return fetchData03().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('el dato es peanut butter', () => {
  return expect(fetchData03()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', async () => {
  const data = await fetchData03();
  expect(data).toBe('peanut butter');
});

test('the data is peanut butter', async () => {
  await expect(fetchData03()).resolves.toBe('peanut butter');
});
