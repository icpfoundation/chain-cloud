import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/common/home.vue';
import I18n from '../components/common/i18n.js';
import P404 from '../components/page/404.vue';

import Deploy from '../components/page/deploy.vue';
import Authorized from '../components/page/authorized.vue';
import Sidebar from '../components/common/sidebar.vue'
import OverView from '../components/common/overView.vue'
import HostesList from '../components/common/hosteslist.vue'
import Mertric from '../components/common/mertric.vue'
import Detail from '../components/common/detail.vue'
import CanisterLog from '../components/common/canisterLog.vue'
import ViewAll from '../components/common/viewAll.vue'
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { title: 'Chain-cloud' },
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
        path: '/authed',
        name: 'authorizedview',
        component: Authorized,
        meta: { title: 'Authorized' }
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/sidebar',
        component: Sidebar,
        title: 'sidebar',
        children: [
            {
                path: '/',
                meta: { title: "OverView" },
                component: OverView,
            }, {
                path: 'hosteslist',
                meta: { title: "HostesList" },
                component: HostesList,
            }, {
                path: 'mertric',
                meta: { title: "Mertric" },
                component: Mertric,

            }, {
                path: 'detail',
                name: 'detail',
                meta: { title: "Detail" },
                component: Detail,
            }, {
                path: 'canisterLog',
                name: 'canisterLog',
                meta: { title: "CanisterLog" },
                component: CanisterLog,
            }, {
                path: 'viewall',
                name: 'viewall',
                meta: { title: "ViewAll" },
                component: ViewAll,
            },

        ]
    }
    ]
});