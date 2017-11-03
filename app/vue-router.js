import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from './modules/foo/foo.vue'
import Bar from './modules/bar/bar.vue'
import test from './components/music.vue'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/foo',
            component: Foo
        },
        {
            path: '/bar',
            component: Bar
        },
        {
            path: '/test',
            component: test
        }
    ]
})