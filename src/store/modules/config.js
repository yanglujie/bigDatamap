import * as types from '../types'

let state = {
  bgWidth: 5744, // 背景尺寸
  bgHeight: 3068,
  bgWidth1: 1350,
  bgHeight1: 810,
  width: 0,      // 根据背景尺寸计算后的body尺寸
  height: 0,
  ratio: 1,
  bratio: 1,
  bheight: 0,
  bwidth: 0,
  detail: {
    name: '',
    url: '',
    content: '',
    archDetail: ''
  }
}

let mutations = {
  [types.CONFIG_INIT](state, size) {
    size = size || {}
    state.bgWidth = size.bgWidth || 5744
    state.bgHeight = size.bgHeight || 3068
    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight
    state.width = innerWidth
    state.ratio = Math.ceil(100 * state.bgWidth / (3 * state.width)) / 100;
    state.height = window.innerHeight
  },
  [types.BUILDING](state, size) {
    size = size || {}
    state.bgWidth1 = size.bgWidth1 || 1350
    state.bgHeight1 = size.bgHeight1 || 810
    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight
    state.bwidth = innerWidth - 350
    state.bratio = Math.ceil(100 * state.bgWidth1 / state.bwidth) / 100;
    state.bheight = state.bgHeight1 / state.bratio
  },
  [types.GET_DETAIL](state, detail) {
    console.log('nihahaha---')
      state.detail.name = detail.name
      state.detail.url = detail.url
      state.detail.content = detail.content
      state.detail.archDetail = detail.archDetail
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
