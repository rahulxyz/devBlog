import axios from "axios";

export const API = axios.create({
  baseURL: "https://devblogf.herokuapp.com/api/",
});

export async function getRequestedParams(queryParams, body, withToken = true) {
  const token = sessionStorage.getItem("token")
  const headers = withToken ? { token: token } : {};
  
  return {
    headers: headers,
  };
}

export function onGet(path, params, withToken = true) {
  async function invokeAPI() {
    let resultParam = await getRequestedParams(params, {}, withToken);
    return await API.get(path, resultParam);
  }

  return invokeAPI();
}

export function onPost(path, body = {}, params, withToken = true) {
  async function invokeAPI() {
    let resultParam = await getRequestedParams(params, body, withToken);
    return await API.post(path, body, resultParam);
  }

  return invokeAPI();
}

export function onPut(path, params, withToken = true, body = {}) {
  async function invokeAPI() {
    let resultParam = await getRequestedParams(params, body, withToken);
    return await API.put(path, resultParam);
  }

  return invokeAPI();
}

export function onDelete(path, params, withToken = true) {
  async function invokeAPI() {
    let resultParam = await getRequestedParams(params, {}, withToken);
    return await API.delete(path, resultParam);
  }

  return invokeAPI();
}
