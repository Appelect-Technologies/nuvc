import axios from 'axios';

const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:80/api'
      : 'http://pt-load-balancer-2122214972.ap-south-1.elb.amazonaws.com/',
});

// export const responseInterceptor = Axios.interceptors.response.use((response) => {
//   return response.data;
// });

export default Axios;
