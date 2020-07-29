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
