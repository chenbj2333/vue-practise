import { userLogin, authorization } from '@/api/user'
import { setToken } from '@/lib/utils'
import * as types from '../types'

const state = {
  username: localStorage.getItem('username') || ''
}

const getters = {
  username: state => state.username
}

const mutations = {
  [types.CHANGE_USER_NAME]: (state, data) => {
    state.username = data
  }
}

const actions = {
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      userLogin({ userName, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve(res)
          localStorage.setItem('username', res.data.name)
          commit(types.CHANGE_USER_NAME, localStorage.getItem('username'))
        } else {
          reject(res.mes)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
