import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:80' : 'http://api.nuvc.org',
});

// export const responseInterceptor = Axios.interceptors.response.use((response) => {
//   return response.data;
// });

export default Axios;
