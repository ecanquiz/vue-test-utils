import fetchData01 from '../../js/fetchData01';

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

  fetchData01(callback);
});
