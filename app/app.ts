import Vue from 'nativescript-vue'
import Home from './components/Home.vue'
import BottomSheetPlugin from '@nativescript-community/ui-material-bottomsheet/vue';
import { install } from "@nativescript-community/ui-material-bottomsheet";

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

install();
Vue.use(BottomSheetPlugin);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
