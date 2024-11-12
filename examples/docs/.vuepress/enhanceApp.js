import VueClipboard from "vue-clipboard2";
// import Aside from "./components/Aside.vue";
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

export default ({ Vue }) => {
    Vue.use(VueClipboard);
    // Vue.component("Aside", Aside);
    Vue.component("recycle-scroller", RecycleScroller);
};
