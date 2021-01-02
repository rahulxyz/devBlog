import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export async function getRequestedParams(queryParams, body, withToken = true) {
  const headers = withToken ? { Authorization: `Bearer /* token */` } : {};
  return {
    headers: headers,
    body: body,
    params: queryParams,
  };
}

export function onGet(path, params, withToken = true) {
  async function invokeAPI() {
    let resultParam = await getRequestedParams(params, {}, withToken);
    return await API.get(path, resultParam);
  }

  return invokeAPI();
}

export function onPost(path, params, withToken = true, body = {}) {
  async function invokeAPI() {
    let resultParam = await getRequestedParams(params, body, withToken);
    return await API.post(path, resultParam);
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
