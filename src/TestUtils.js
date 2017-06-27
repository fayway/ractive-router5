
export const fakeRouter = {
  callbacks: [],
  buildPath() {
    return '/path/to/home';
  },
  isActive() {},
  addListener(callback){
    this.callbacks.push(callback);
  },
  removeListener(callback){
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  },
  notify(state) {
    this.callbacks.map(cb => cb(state));
  },
  start() {
  }
};
