import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:80/api',
});

// export const responseInterceptor = Axios.interceptors.response.use((response) => {
//   return response.data;
// });

export default Axios;
