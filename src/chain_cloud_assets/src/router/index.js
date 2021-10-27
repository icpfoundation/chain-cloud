import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/common/home.vue';
import I18n from '../components/common/i18n.js';
import P404 from '../components/page/404.vue';
import Overview from '../components/page/overview.vue';

import Deploy from '../components/page/deploy.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { title: '自述文件' },
        children: [
            {
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
        path: '/deploy',
        name: 'deployview',
        component: Deploy,
        meta: { title: 'Auto-deploy' }
    },
    {
        path: '*',
        redirect: '/404'
    }
    ]
});