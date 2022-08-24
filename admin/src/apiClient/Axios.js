import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://ed13-103-211-13-77.in.ngrok.io/api',
  // baseURL: 'http://localhost:80/api',
});

// export const responseInterceptor = Axios.interceptors.response.use((response) => {
//   return response.data;
// });

export default Axios;
