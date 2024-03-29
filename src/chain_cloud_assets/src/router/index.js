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

import DocView from "../components/page/document.vue"
import BlogView from "../components/page/blogs.vue"
import ServiceView from "../components/page/service.vue"
import group from '../components/common/group.vue'
import project from '../components/common/project.vue'
const aboutus = r => require.ensure([], () => r(require('../components/page/aboutus/aboutus.vue'), 'aboutus'))
const teamscan_index = r => require.ensure([], () => r(require('../components/page/teamscan/index.vue'), 'teamscan_index'))
const group_index = r => require.ensure([], () => r(require('../components/page/group/index/group_index.vue'), 'group_index'))
const group_add = r => require.ensure([], () => r(require('../components/page/group/index/group_add.vue'), 'group_add'))
const overview = r => require.ensure([], () => r(require('../components/page/group/overview/overview.vue'), 'overview'))
const detail = r => require.ensure([], () => r(require('../components/page/group/overview/detail.vue'), 'detail'))
const activity = r => require.ensure([], () => r(require('../components/page/group/overview/activity.vue'), 'activity'))
const members = r => require.ensure([], () => r(require('../components/page/group/members/members.vue'), 'members'))
const setting = r => require.ensure([], () => r(require('../components/page/group/setting/setting.vue'), 'setting'))
const user_index = r => require.ensure([], () => r(require('../components/page/user/user_index.vue'), 'user_index'))

const project_index = r => require.ensure([], () => r(require('../components/page/project/index/project_index.vue'), 'project_index'))
const project_add = r => require.ensure([], () => r(require('../components/page/project/index/project_add.vue'), 'project_add'))

const projectoverview = r => require.ensure([], () => r(require('../components/page/project/overview/projectoverview.vue'), 'projectoverview'))
const branches = r => require.ensure([], () => r(require('../components/page/project/overview/branches.vue'), 'branches'))
const commits = r => require.ensure([], () => r(require('../components/page/project/overview/commits.vue'), 'commits'))

const projectcanisters = r => require.ensure([], () => r(require('../components/page/project/canisters/canisters.vue'), 'canisters'))
const projectinterface = r => require.ensure([], () => r(require('../components/page/project/canisters/interface.vue'), 'interface'))
const activities = r => require.ensure([], () => r(require('../components/page/project/canisters/activities.vue'), 'activities'))
const metric = r => require.ensure([], () => r(require('../components/page/project/canisters/metric.vue'), 'metric'))
const projectsetting = r => require.ensure([], () => r(require('../components/page/project/setting/setting.vue'), 'projectsetting'))
Vue.use(Router);


let router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Chain-Cloud'
    },
    children: [{
      path: '/i18n',
      component: I18n,
      meta: {
        title: '中英文切换'
      }
    },
    {
      path: '/404',
      component: P404,
      meta: {
        title: '404'
      }
    },
    ]
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    meta: {
      title: 'chain-cloud aboutus',
    },
    component: aboutus
  },
  {
    path: '/teamscan',
    name: 'teamscan_index',
    meta: {
      title: 'chain-cloud teamscan',
    },
    component: teamscan_index
  },
  {
    path: '/group',
    name: 'group_index',
    meta: {
      title: 'chain-cloud groups',
    },
    component: group_index
  },
  {
    path: '/group/add',
    name: 'group_add',
    meta: {
      title: 'chain-cloud group_add',
    },
    component: group_add
  },
  {
    path: '/group',
    name: 'group',
    component: group,
    children: [{
      path: 'overview/:user/:groupId',
      name: 'overview',
      component: overview,
      meta: {
        title: 'overview',
        keepAlive: false
      },
    },
    {
      path: 'overview/detail/:user/:groupId',
      name: 'detail',
      component: detail,
      meta: {
        title: 'overview-detail',
        keepAlive: false
      },
    },
    {
      path: 'overview/activity/:user/:groupId',
      name: 'activity',
      component: activity,
      meta: {
        title: 'overview-activity',
        keepAlive: false
      },
    },
    {
      path: 'members/:user/:groupId',
      name: 'members',
      component: members,
      meta: {
        title: 'members',
        keepAlive: false
      },
    },
    {
      path: 'setting/:user/:groupId',
      name: 'setting',
      component: setting,
      meta: {
        title: 'setting',
        keepAlive: false
      },
    },
    ]
  },
  {
    path: '/user',
    name: 'user_index',
    meta: {
      title: 'chain-cloud person',
    },
    component: user_index
  },
  {
    path: '/project',
    name: 'project_index',
    meta: {
      title: 'chain-cloud project',
    },
    component: project_index
  },
  {
    path: '/project/add',
    name: 'project_add',
    meta: {
      title: 'chain-cloud project',
    },
    component: project_add
  },
  {
    path: '/project',
    name: 'project',
    component: project,
    children: [{
      path: 'projectoverview/:user/:groupId/:projectId/:owner/:repo',
      name: 'projectoverview',
      component: projectoverview,
      meta: {
        title: 'projectoverview',
        keepAlive: false
      },
    },
    {
      path: 'projectoverview/branches',
      name: 'branches',
      component: branches,
      meta: {
        title: 'projectoverview-branches',
        keepAlive: false
      },
    },
    {
      path: 'projectoverview/commits',
      name: 'commits',
      component: commits,
      meta: {
        title: 'overview-commits',
        keepAlive: false
      },
    },
    {
      path: 'projectcanisters/:user/:groupId/:projectId',
      name: 'projectcanisters',
      component: projectcanisters,
      meta: {
        title: 'projectcanisters',
        keepAlive: false
      },
    },
    {
      path: 'projectsetting/:user/:groupId/:projectId',
      name: 'projectsetting',
      component: projectsetting,
      meta: {
        title: 'projectsetting',
        keepAlive: false
      },
    },
    {
      path: 'projectoverview/interface/:user/:groupId/:projectId',
      name: 'interface',
      component: projectinterface,
      meta: {
        title: 'projectoverview-interface',
        keepAlive: false
      },
    },
    {
      path: 'projectoverview/activities/:user/:groupId/:projectId',
      name: 'activities',
      component: activities,
      meta: {
        title: 'projectoverview-activities',
        keepAlive: false
      },
    },
    {
      path: 'projectoverview/metric/:user/:groupId/:projectId',
      name: 'metric',
      component: metric,
      meta: {
        title: 'projectoverview-metric',
        keepAlive: false
      },
    },
    ]
  },
  {
    path: '/doc',
    name: "DocView",
    component: DocView,
    meta: {
      title: 'Document'
    }
  },
  {
    path: '/blog',
    name: "BlogView",
    component: BlogView,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/service',
    name: "ServiceView",
    component: ServiceView,
    meta: {
      title: 'Service'
    }
  },
  {
    path: '/deploy',
    name: 'deployview',
    component: Deploy,
    meta: {
      title: 'Auto-deploy'
    }
  },
  {
    path: '/authed',
    name: 'authorizedview',
    component: Authorized,
    meta: {
      title: 'Authorized'
    }
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/sidebar',
    component: Sidebar,
    title: 'sidebar',
    children: [{
      path: '/',
      meta: {
        title: "OverView"
      },
      component: OverView,
    }, {
      path: 'hosteslist',
      meta: {
        title: "HostesList"
      },
      component: HostesList,
    }, {
      path: 'mertric',
      meta: {
        title: "Mertric"
      },
      component: Mertric,

    }, {
      path: 'detail',
      name: 'detail',
      meta: {
        title: "Detail"
      },
      component: Detail,
    }, {
      path: 'canisterLog',
      name: 'canisterLog',
      meta: {
        title: "CanisterLog"
      },
      component: CanisterLog,
    }, {
      path: 'viewall',
      name: 'viewall',
      meta: {
        title: "ViewAll"
      },
      component: ViewAll,
    },

    ]
  }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();

});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
export default router;