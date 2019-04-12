import axios from './index'

export const demoAxios = (info) => {
  return axios.request({
    url: '/personal/login',
    method: 'get',
    params: info
  })
}
