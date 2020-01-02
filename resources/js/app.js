import './bootstrap'
import Vue from 'vue'
import router from './routes'
import store from './stores'

// import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Component file
import App from './views/App.vue'

// Accounting.js
const accounting = require('accounting-js')

// Moment.js
import moment from 'moment'

// Styles.
import './styles/styles.scss'

Vue.filter('timeFormat', function (value, format = 'DD/MM/YYYY HH:mm') {
  return moment(value).format(format)
})

Vue.filter('numberFormat', function (value, precision = 0) {
  return accounting.formatMoney(value, {
    symbol: '',
    precision: precision
  })
})

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default app
