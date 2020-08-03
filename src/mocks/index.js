const mockModule = () => {
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

  global.localStorage = new LocalStorageMock();

  jest.mock('react-router-dom', () => {
    return {
      withRouter: (Component) => Component,
    };
  });

  jest.mock('axios', () => {
    return {
      create: () => {
        return {
          interceptors: {
            request: { use: jest.fn(), eject: jest.fn() },
            response: { use: jest.fn(), eject: jest.fn() },
          },
          defaults: {
            params: {},
          },
        };
      },
    };
  });
};

export default mockModule;
