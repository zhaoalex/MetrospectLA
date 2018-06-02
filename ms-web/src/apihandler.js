export const BASE_API_URL = {
  development: 'http://localhost:5000/api',
  staging: '/api',
  production: '/api'
}[process.env.NODE_ENV || 'development']

export const makeApiRequest = (http, data) => fetch(`${BASE_API_URL}${http.url}`, { method: http.method, ...data }).then(res => res.json())
