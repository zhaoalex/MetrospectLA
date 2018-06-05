// const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';

// http: { url: "/path", method: "DEFAULT_IS_GET"}, data: { yaddayadda }
// export const makeApiRequest = (http, data) => fetch(`${BASE_API_URL}${http.url}`, { method: http.method || 'GET', ...data }).then(res => res.json())

// http: { url: "/api/path", method: "DEFAULT_IS_GET"}, data: { yaddayadda }
export const makeApiRequest = (url, data) => fetch(url, { ...data }).then(res => res.json())
