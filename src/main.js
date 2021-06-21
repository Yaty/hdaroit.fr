import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import messages from './assets/i18n.json'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'fr',
  messages
})

new Vue({
  i18n,
  el: '#app',
  render: h => h(App),
  components: { App }
})
