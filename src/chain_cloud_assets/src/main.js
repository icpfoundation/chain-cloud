import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import ElementLocale from 'element-ui/lib/locale'
import 'babel-polyfill';
import store from "../assets/js/store/"
import App from './App.vue';
import router from './router';

import 'view-design/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import {  Upload } from 'element-ui';
Vue.component(Upload.name, Upload);
import '../assets/css/icon.css';
import 'element-ui/lib/theme-chalk/index.css';
import { Button,RadioGroup,DatePicker,TimePicker,Message,InputNumber ,Spin,Radio,CheckboxGroup, FormItem,Form,Tooltip,Notice,Submenu,Menu,Icon,Tag,MenuItem,Input,Table,Checkbox,Select,Option,Page,Modal,Poptip} from 'view-design'
Vue.component('Button', Button)
Vue.component('DatePicker', DatePicker)
Vue.component('TimePicker', TimePicker)
Vue.component('InputNumber', InputNumber)
Vue.component('Spin', Spin)
Vue.component('CheckboxGroup', CheckboxGroup)
Vue.component('FormItem', FormItem)
Vue.component('Form', Form)
Vue.component('Tooltip', Tooltip)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Radio', Radio)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('Tag', Tag)
Vue.component('MenuItem', MenuItem)
Vue.component('Input', Input)
Vue.component('Table', Table)
Vue.component('Checkbox', Checkbox)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Page', Page)
Vue.component('Modal', Modal)
Vue.component('Poptip', Poptip)
Vue.prototype.$Notice = Notice;
Vue.prototype.$Modal = Modal;
// Vue.config.productionTip = false;
//Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(VueAxios, axios);

const i18n = new VueI18n({
    locale: 'en',
    messages
});
ElementLocale.i18n((key, value) => i18n.t(key, value))

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | DFINITY NNS Explorer`;
    // const role = localStorage.getItem('nns_useraccount');
    // if (!role && to.path !== '/login') {
    //     next('/login');
    // } else if (to.meta.permission) {
    //     // TODO
    //     role === 'admin' ? next() : next('/403');
    // } else {
    //     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
    //         Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
    //             confirmButtonText: '确定'
    //         });
    //     } else {
    //         next();
    //     }
    // }
    
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
            confirmButtonText: '确定'
        });
    } else {
        next();
    }
});
(function () {
    var whdef = 100 / 1920;// 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
    var wW = window.innerWidth;// 当前窗口的宽度
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
  })()
  window.onresize = function () {
    (function () {
      var whdef = 100 / 1920;// 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
      // var wH = window.innerHeight;// 当前窗口的高度
      var wW = window.innerWidth;// 当前窗口的宽度
      var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
    })()
  }
new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');