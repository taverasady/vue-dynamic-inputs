import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

 import { library } from '@fortawesome/fontawesome-svg-core';
// // internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faCalendar);
Vue.component('vue-fontawesome', FontAwesomeIcon);

// ...

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
