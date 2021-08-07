import { getRequest } from '../config/axios.request';

const getDoctor = () => getRequest('/doctors');

export default { getDoctor };
