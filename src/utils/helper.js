import axios from 'axios';
import _get from 'lodash/get';
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

// /**
//  * Function to check if the url is a valid image or not
//  * @param {string} imageSrc Url link
//  * @param {Function} done Callback ran when loaded successfully
//  * @param {*} fail Callback ran when loaded fail
//  */

// export const asyncCheckImage = async (imageSrc) => {
//   return axios
//     .get(imageSrc)
//     .then((response) => {
//       const { status } = response;
//       const headerType = _get(response, 'headers.content-type', null);
//       if (status !== 200) {
//         return false;
//       }

//       if (!headerType.includes('image')) {
//         return false;
//       }
//       return true;
//     })
//     .catch(() => {
//       return false;
//     });
// };
