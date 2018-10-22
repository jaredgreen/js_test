const App = require('../src/app');

describe('Name of the group', () => {

  let app;
  beforeEach(() => {
    app = new App();
  });

  it('standard await - should continue to throw', async () => {
    await expect(app.foo()).rejects.toEqual("I reject your reality and substitute my own!");
  });

  it('try catch - should catch the throw', async () => {
    await expect(app.fooTryCatch()).resolves.toEqual();
  });

  it('promise catch - should catch the throw', async () => {
    await expect(app.fooPromiseCatch()).resolves.toEqual();
  });

});
