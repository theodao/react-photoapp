import Http, { getToken, addHttpHeaders } from '../HttpUtils';

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
          headers: {},
        },
      };
    },
  };
});

describe('Testing Http utils function', () => {
  it('testing get token function', () => {
    localStorage.setItem('token', '123');
    expect(getToken()).toEqual('123');
  });

  it('testing add http header function', () => {
    addHttpHeaders({ age: 3 });
    expect(Http.defaults.headers).toEqual({ age: 3 });
  });
});
