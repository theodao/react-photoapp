import { getToken } from '../HttpUtils';

describe('Testing Http utils function', () => {
  it('testing get token function', () => {
    localStorage.setItem('token', '123');
    expect(getToken()).toEqual('123');
  });
});
