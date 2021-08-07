const dev = {
  baseUrl: 'http://localhost:8000/v1',
  appUrl: 'http://localhost:3000/',
};

const production = {
  baseUrl: 'https://psycare-be.herokuapp.com/v1',
  appUrl: 'https://psycare.web.app',
};

const config = process.env.REACT_APP_STAGE === 'production' ? production : dev;

export default {
  ...config,
};
