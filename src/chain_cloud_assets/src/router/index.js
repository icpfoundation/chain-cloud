import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/common/home.vue';
import I18n from '../components/common/i18n.js';
import P404 from '../components/page/404.vue';
import Overview from '../components/page/overview.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/overview'
        },
        {
            path: '/',
            component: Home,
            meta: { title: '自述文件' },
            children: [{
                    path: '/overview',
                    name: 'overview',
                    component: Overview,
                    meta: { title: 'Overview' }
                },
                {
                    // 中英文切换组件
                    path: '/i18n',
                    component: I18n,
                    meta: { title: '中英文切换' }
                },
                {
                    path: '/404',
                    component: P404,
                    meta: { title: '404' }
                },
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});