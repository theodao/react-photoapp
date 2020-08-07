/**
 * Function to compose many hoc to only single one - This function belonged to recompose library
 * @param {Functions}
 * @returns composed component
 */
export const compose = (...funcs) =>
  funcs.reduce(
    (a, b) => (...args) => a(b(...args)),
    (arg) => arg,
  );

/**
 * Function to map the error list from the API response to an array contain list of errors
 * @param {*} errorResponse
 * @returns Array of error
 */

export const mappingErrorResponse = (errorResponse) => {
  if (typeof errorResponse === 'string') {
    return errorResponse;
  }

  return Object.keys(errorResponse).reduce((result, key) => {
    return result.concat(errorResponse[key]);
  }, []);
};
