import devConfig from './dev';
import prodConfig from './prod';

const env = process.env.REACT_APP_ENV;

const configs = env === 'development' ? devConfig : prodConfig;

export default configs;
