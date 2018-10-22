class App {

  async foo() {
    return await this.bar();
  }

  async fooTryCatch() {
    try {
      return await this.bar();
    } catch (error) {
      console.log('TRY CATCH ', error);
    }
  }

  async fooPromiseCatch() {
    return this.bar().catch(error => console.log('PROMISE CATCH ', error));
  }

  async bar() {
    await this.baz();
  }

  async baz() {
    return Promise.reject('I reject your reality and substitute my own!');
  }
}

module.exports = App;

// const app = new App();
// app.foo();
