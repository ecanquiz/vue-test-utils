import fetchData04 from '../../js/jest/fetchData04';

test('el fetch falla con un error', () => {
  expect.assertions(1);
  return fetchData04().catch(e => expect(e).toMatch('error'));
});

test('the fetch fails with an error', () => {
  return expect(fetchData04()).rejects.toMatch('error');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData04();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the fetch fails with an error', async () => {
  await expect(fetchData04()).rejects.toMatch('error');
});
