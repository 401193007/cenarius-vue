/**
 * Created by Rain on 2018/1/25.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

{{#unless auto_router}}
// 自己定义路由
const routes = []
{{/auto_router}}

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  {{#auto_router}}
  routes: [<%= _routes %>]
  {{else}}
  routes
  {{/auto_router}}
})

export default router
