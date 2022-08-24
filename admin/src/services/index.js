import Axios from '../apiClient/Axios';
import {
  GET_APP_DATA,
  GET_USERS,
  SIGNIN,
  SIGNUP,
  SESSION,
  GET_LEADS,
  GET_JOBS,
  GET_COURSES,
} from '../apiClient/endpoints';

export function signin(values) {
  return Axios.post(SIGNIN, values);
}
export function signup(values) {
  return Axios.post(SIGNUP, values);
}
export function session() {
  let headers = {};
  if (localStorage.getItem('access_token')) {
    headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
  }
  Axios.defaults.headers = headers;
  return Axios.post(SESSION);
}
export function getAppData() {
  return Axios.get(GET_APP_DATA);
}
export function getUsers() {
  return Axios.get(GET_USERS);
}
export function getLeads() {
  return Axios.get(GET_LEADS);
}
export function getJobs() {
  return Axios.get(GET_JOBS);
}

export function getCourses() {
  return Axios.get(GET_COURSES);
}
