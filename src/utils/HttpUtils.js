import http from 'axios';

const Http = http.create({
  baseURL: 'dummy url',
});

// Function to add custom header
export const addHttpHeaders = (headers) => {
  Http.defaults.headers = { ...Http.defaults.headers, ...headers };
};

const getToken = () => {
  return localStorage.getItem('token');
};

/** Request interceptos  */
Http.interceptors.request.use(
  (config) => {
    let token = null;

    token = getToken();

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {},
);

// Http.defaults.timeout = 30000;

/** Http default params  */
Http.defaults.params = {};

export default Http;
