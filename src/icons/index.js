import Vue from 'vue'
import SvgIcon from '@/component/iconsvg'// svg component

// register globally
Vue.component('myicon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
