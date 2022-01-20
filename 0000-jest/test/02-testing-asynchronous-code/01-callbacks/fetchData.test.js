import fetchData from '@/src/js/callback/fetchData';

test('the data is peanut butter', done => {
  function callback(data) {
    try {
      jest.setTimeout(30000);
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
