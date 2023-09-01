const API_URL = "http://localhost:3000/api/v1";

const defaultOptions = {
  authenticate: true,
  token: null,
  headers: null,
};

export const get = (url: string, params = {}, options = defaultOptions) => {
  return doRequest({
    url,
    params,
    method: "GET",
    ...defaultOptions,
    ...options,
  });
};

export const remove = async (
  url: string,
  params = {},
  options = defaultOptions
) => {
  return doRequest({
    url,
    params,
    method: "DELETE",
    ...defaultOptions,
    ...options,
  });
};

export const post = async (
  url: string,
  params = {},
  options = defaultOptions
) => {
  return doRequest({
    url,
    params,
    method: "POST",
    ...defaultOptions,
    ...options,
  });
};

export const put = async (
  url: string,
  params = {},
  options = defaultOptions
) => {
  return doRequest({
    url,
    params,
    method: "PUT",
    ...defaultOptions,
    ...options,
  });
};

export const patch = async (
  url: string,
  params = {},
  options = defaultOptions
) => {
  return doRequest({
    url,
    params,
    method: "PATCH",
    ...defaultOptions,
    ...options,
  });
};

export const doRequest = async (config: any) => {
  let reqConfig = {
    method: config.method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // Authorization:
      //   "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3NTkzNjQwNywiZXhwIjoxNjc1OTM4MjA3LCJ0eXBlIjoiYWNjZXNzIn0.iEDjM7gX7qZAGJgVw1dnjURnIHlqEzUFARBnz4HtkDQ",
      Accept: "*",
    },
    body:
      config.method === "POST" ||
      config.method === "PATCH" ||
      config.method === "PUT"
        ? JSON.stringify(config.params)
        : null,
  };

  const url = API_URL + config.url;

  try {
    const response = await fetch(url, reqConfig);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
