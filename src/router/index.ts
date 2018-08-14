import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(Router)
const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        redirect: 'TemplateSyntax',
        meta: {
            title: 'vue-case',
            icon: 'component'
        },
        children: [
            {
                path: '/TemplateSyntax',
                name: 'Template Syntax',
                meta: { title: '模板语法', icon: 'documentation', noCache: true },
                component: () => import(/* webpackChunkName: "about" */ '@/views/vue/TemplateSyntax/index.vue')
            },
            {
                path: '/ComputedPropertiesAndWatchers',
                name: 'Computed Properties and Watchers',
                meta: { title: '计算属性和侦听器', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/ComputedPropertiesAndWatchers/index.vue')
            },
            {
                path: '/ClassAndStyleBindings',
                name: 'Class and Style Bindings',
                meta: { title: 'Class 与 Style 绑定', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/ClassAndStyleBindings/index.vue')
            },
            {
                path: '/ConditionalRendering',
                name: 'ConditionalRendering',
                meta: { title: '条件渲染', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/ConditionalRendering/index.vue')
            },
            {
                path: '/ListRendering',
                name: 'List Rendering',
                meta: { title: '列表渲染', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/ListRendering/index.vue')
            },
            {
                path: '/EventHandling',
                name: 'Event Handling',
                meta: { title: '事件处理', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/EventHandling/index.vue')
            },
            {
                path: '/FormInputBindings',
                name: 'Form Input Bindings',
                meta: { title: '表单输入绑定', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/FormInputBindings/index.vue')
            },
            {
                path: '/Prop',
                name: 'Prop',
                meta: { title: 'Prop', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/Prop/index.vue')
            },
            {
                path: '/CustomEvents',
                name: 'Custom Events',
                meta: { title: '自定义事件', icon: 'documentation', noCache: true },
                component: () => import('@/views/vue/CustomEvents/index.vue')
            },
            {
                path: '/Slots',
                name: 'Slots',
                meta: { title: '插槽', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/Slots/index.vue')
            },
            {
                path: '/DynamicAndAsyncComponents',
                name: 'Dynamic & Async Components',
                meta: { title: '动态组件&异步组件', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/DynamicAsyncComponents/index.vue')
            },
            {
                path: '/HandlingEdgeCases',
                name: 'Handling Edge Cases',
                meta: { title: '处理边界情况', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/HandlingEdgeCases/index.vue')
            },
            {
                path: '/EnterLeaveListTransitions',
                name: 'Enter/Leave & List Transitions',
                meta: { title: '进入/离开&列表过渡', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/EnterLeaveListTransitions/index.vue')
            },
            {
                path: '/StateTransitions',
                name: 'State Transitions',
                meta: { title: '状态过渡', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/StateTransitions/index.vue')
            },
            {
                path: '/Mixins',
                name: 'Mixins',
                meta: { title: '混入', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/Mixins/index.vue')
            },
            {
                path: '/CustomDirectives',
                name: 'CustomDirectives',
                meta: { title: '自定义指令', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/CustomDirectives/index.vue')
            },
            {
                path: '/RenderFunctionsAndJSX',
                name: 'Render Functions & JSX',
                meta: { title: '渲染函数 & JSX', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/RenderFunctionsAndJSX/index.vue')
            },
            {
                path: '/Plugins',
                name: 'Plugins',
                meta: { title: '插件', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/Plugins/index.vue')
            },
            {
                path: '/Filters',
                name: 'Filters',
                meta: { title: '过滤器', icon: 'documentation', noCache: true },
                component: () => import( '@/views/vue/Filters/index.vue')
            }
        ]
    },
    {
        path: '/vuex-case',
        component: Layout,
        redirect: 'State',
        meta: {
            title: 'vuex-case',
            icon: 'component'
        },
        children: [
            {
                path: '/State',
                name: 'State',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                meta: { title: 'state', icon: 'documentation', noCache: true },
                component: () => import(  '@/views/vuex/State/index.vue')
            },
            {
                path: '/Getters',
                name: 'Getters',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                meta: { title: 'getter', icon: 'documentation', noCache: true },
                component: () => import(  '@/views/vuex/Getters/index.vue')
            },
            {
                path: '/Mutations',
                name: 'Mutations',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                meta: { title: 'mutation', icon: 'documentation', noCache: true },
                component: () => import(  '@/views/vuex/Mutations/index.vue')
            },
            {
                path: '/Action',
                name: 'Action',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                meta: { title: 'action', icon: 'documentation', noCache: true },
                component: () => import(  '@/views/vuex/Action/index.vue')
            }
        ]
    }

]

const asyncRouterMap = []
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRouterMap
})

export {constantRouterMap, asyncRouterMap}

