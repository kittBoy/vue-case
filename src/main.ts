import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import './icons/index'
import '@/styles/index.scss'


Vue.config.productionTip = false
Vue.use(Element);

new Vue({
    data: {
        from: 'root'
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')
