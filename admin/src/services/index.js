import axios from 'axios';
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
  GET_NEWS,
  GET_NOTIFICATIONS,
  CREATE_JOB,
  CREATE_NOTIFICATION,
  CREATE_NEWS,
  FILE_UPLOAD,
  CREATE_COURSES,
  GET_JOB_APPLICANTS,
  GET_SUBSCRIPTIONS,
  UPDATE_JOB,
  GET_Center,
  Update_COURSES,
  Update_Center,
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
export function getCenter() {
  return Axios.get(GET_Center);
}

export function UpdateCenter(values) {
  return Axios.patch(Update_Center.replace(':Center', values._id), values);
}

export function getJobApplicants() {
  return Axios.get(GET_JOB_APPLICANTS);
}

export function getSubscriptions() {
  return Axios.get(GET_SUBSCRIPTIONS);
}

export function getCourses() {
  return Axios.get(GET_COURSES);
}

export function createCourse(values) {
  return Axios.post(CREATE_COURSES, values);
}

export function UpdateCourse(values) {
  return Axios.patch(Update_COURSES.replace(':COURSE', values._id), values);
}

export function getNews(query = '') {
  return Axios.get(`${GET_NEWS}${query}`);
}

export function createNewJob(values) {
  return Axios.post(CREATE_JOB, values);
}

export function CreateCenter(values) {
  return Axios.post(GET_Center, values);
}

export function updateJob(values) {
  return Axios.patch(UPDATE_JOB.replace(':jobId', values._id), values);
}

export function createNews(values) {
  return Axios.post(CREATE_NEWS, values);
}

export function getNotifications(query = '') {
  return Axios.get(`${GET_NEWS}${query}`);
}

export function createNotification(values) {
  return Axios.post(CREATE_NOTIFICATION, values);
}

export function UploadFileToS3(file) {
  const form = new FormData();
  form.append('file', file);
  return Axios.post(FILE_UPLOAD, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
