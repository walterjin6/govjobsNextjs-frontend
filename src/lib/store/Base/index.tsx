import axios from 'axios';

// alert(process.env.NEXT_PUBLIC_DEPLOY_MODE);
// console.log(
//   'process.env.NEXT_PUBLIC_DEPLOY_MODE=========================',
//   process.env.NEXT_PUBLIC_DEPLOY_MODE
// );

const baseURL =
  process.env.NEXT_PUBLIC_DEPLOY_MODE === 'development'
    ? 'http://localhost:3500/api'
    : 'https://api1.sciencejobs.com.au/api';//'http://localhost:3500/api'// 'https://api2.sciencejobs.com.au/api'; // //'https://api2.sciencejobs.com.au/api' //

const BaseApi = axios.create({
  baseURL,
});
export default BaseApi;
