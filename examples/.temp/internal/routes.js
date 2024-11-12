/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\repos\\icon-monporepo\\node_modules\\.pnpm\\@vuepress+core@1.9.10_@vue+compiler-sfc@3.5.12_handlebars@4.7.8_hogan.js@3.0.2_lodash@4.17.21\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-17c4ea2e",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-17c4ea2e").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-29ed73ed",
    path: "/guide/components/official.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-29ed73ed").then(next)
    },
  },
  {
    name: "v-39ac65e0",
    path: "/guide/started.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-39ac65e0").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]