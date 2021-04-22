import axios from "axios";

let headers = {
  "Content-Type": "application/json",
  Accept: `application/vnd.iman.v1+json, application/json, text/plain, */*`,
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-store, no-cache, must-revalidate",
  Pragma: "no-cache"
};

const filterOptions = ({ method, ...rest }) => rest;//no te deja poner method

const fetch = async (url, options = {}) => {
  try {
    const instance = axios.create({
      baseURL: 'http://localhost:8088/travago/api'
      //baseURL: "https://rickandmortyapi.com/api"
      //baseURL: "https://jsonplaceholder.typicode.com"
    });

    // interceptors
    instance.interceptors.request.use(
      (conf) => {
        //console.log("Interceptor REQ: ", conf);
        return conf;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        //console.log("Interceptor RES: ", response);
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const { data } = await instance.request({
      url,
      method: options["method"],
      params: options["params"],
      data: options["data"],
      headers: options["headers"],
      cancelToken: options["cancelFn"]
        ? new axios.CancelToken(options["cancelFn"])
        : null
    });

    return data;
  } catch (err) {
    if (axios.isCancel(err)) {
      throw new Error("request-is-cancelled");
    } else {
      throw err;
    }
  }
};

// ====================

const get = async (url, options = {}) => {
  return await fetch(url, {
    method: "GET",
    headers,
    ...filterOptions(options)
  });
};

const post = async (url, options = {}) => {
  return await fetch(url, {
    method: "POST",
    headers,
    ...filterOptions(options)
  });
};

export default {
  get,
  post
};
