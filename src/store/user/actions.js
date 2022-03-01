import { api } from '../../boot/axios.js'
import router from '../../router'
import { Dialog } from 'quasar'

export const login = async ({ commit }, form) => {
  try {
    const { data } = await api.post('/users/login', form)
    commit('login', data.result)
    console.log(data.result)
    if (data.result.role === 1) {
      router.push('/Admin')
    } else {
      router.push('/')
    }
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '登入成功',
      message: ''
    })
  } catch (error) {
    console.log(error)
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '登入失敗',
      message: error.response.data.message
    })
  }
}

export const logout = async ({ commit, state }) => {
  try {
    await api.delete('/users/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('logout')
    router.push('/Home')
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '登出成功',
      message: ''
    })
  } catch (error) {
    console.log(error)
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '登出失敗',
      message: error.response.data.message
    })
  }
}

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    commit('logout')
  }
}

export const addCart = async ({ commit, state }, data) => {
  if (state.token.length === 0) {
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '錯誤',
      message: '請先登入'
    })
    router.push('/login')
    return
  }
  if (data.quantity <= 0) {
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '錯誤',
      message: '請輸入正確的數量'
    })
    return
  }
  if (data.quantity >= 0) {
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '成功',
      message: '加入購物車成功'
    })
  }
  try {
    const { data: resData } = await api.post('/users/me/cart', data, {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('updateCart', resData.result)
  } catch (error) {
    Dialog.create({
      // component: dialogSuccess,
      parent: this,
      title: '錯誤',
      message: '加入購物車失敗'
    })
  }
}
