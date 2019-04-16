import axios from './index'

export const userLogin = (info) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    params: info
  })
}

export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}
