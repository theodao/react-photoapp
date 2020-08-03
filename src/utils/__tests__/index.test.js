import { mappingErrorResponse, compose } from '../helper';

describe('Testing utils function', () => {
  it('Mapp error response', () => {
    const errorResponse = {
      name: ['wrong name'],
      email: ['wrong email'],
    };

    const transformedErrorResponse = mappingErrorResponse(errorResponse);

    expect(transformedErrorResponse).toEqual(['wrong name', 'wrong email']);
  });

  it('compose  function', () => {
    const square = (x) => x * x;
    expect(compose(square)(5)).toBe(25);
  });
});
