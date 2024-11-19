import Vue from 'vue'
import App from './App.vue'
import VueClipboard from "vue-clipboard2";
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

Vue.config.productionTip = false
Vue.use(VueClipboard);
Vue.component("recycle-scroller", RecycleScroller);

new Vue({
  render: h => h(App),
}).$mount('#app')
