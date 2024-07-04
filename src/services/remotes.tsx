// Import dependencies
import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import {baseURL,apiKey,apiHost } from './configs.json';

// Create `axios` instance passing the newly created `cache.adapter`
const instance = setupCache(
  axios.create({
    baseURL: baseURL,
  }),
  {
    ttl: 1000 * 60 * 1, // 360 Minutes
  }
);

instance.interceptors.request.use(
  (request) => {
    request.headers["X-RapidAPI-Key"] = apiKey;
    request.headers["X-RapidAPI-Host"] = apiHost;
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response?.data || null;
  },
  (error) => {
    console.log("error response:", error);

    return Promise.reject(error);
  }
);

export default instance;