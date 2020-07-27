import http from 'axios';

const Http = http.create({
  baseURL: 'dummy url',
});

/** Request interceptos  */
// Http.interceptors.request.use(
//   (config) => {

//   }
// )

/** Http default params  */
Http.defaults.params = {};

export default Http;
