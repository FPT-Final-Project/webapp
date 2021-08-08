const backendUrl = `${process.env.REACT_APP_PSY_CARE_BACKEND_URL}/v1`;
const appUrl = process.env.REACT_APP_PSY_CARE_URL;

console.log('Base URL : ', backendUrl);
console.log('Base URL : ', appUrl);
export default {
  backendUrl,
  appUrl,
};
