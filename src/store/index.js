import Vue from "vue"
import Vuex from "vuex"
import {getAdminInfo} from '@/api/getData'

Vue.use(Vuex)

const state = {
  adminInfo: {
    avatar: 'default.jpg'
  },
}
const mutations = {
  saveAdminInfo(state, adminInfo) {
    state.adminInfo = adminInfo;
  }
}

const actions = {
  async getAdminData({commit}) {
      try {
        const res = await getAdminInfo()
        if (res.status == 1) {
          commit('saveAdminInfo', res.data);
          console.log("loged in")
        } else {
          throw new Error(res)
        }
      } catch (err) {
        console.log('You did not login or your session exprired.')
      }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
