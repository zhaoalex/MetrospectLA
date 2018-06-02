const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';

export const makeApiRequest = (http, data) => fetch(`${BASE_API_URL}${http.url}`, { method: http.method, ...data }).then(res => res.json())
