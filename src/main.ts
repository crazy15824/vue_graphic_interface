import { createApp } from 'vue'
import App from './App.vue'


// CSSs
import './assets/css/style.css'
import './assets/css/own.css'

import "element-plus/lib/theme-chalk/index.css";
//import 'vue-neat-modal/dist/vue-neat-modal.css'
import '@dafcoe/vue-notification/dist/vue-notification.css'


import installElementPlus, { i18n } from '@/tradingview/plugins/element'

//packages
import VueGtag, { trackRouter } from "vue-gtag-next";
import VueNotificationList from '@dafcoe/vue-notification'
import ElementPlus from "element-plus";
import vueTheStorages from 'vue-the-storages'
import { Modal } from 'vue-neat-modal'
import { setDefaultProps } from 'vue-neat-modal'

import { library } from "@fortawesome/fontawesome-svg-core";
import {faTelegram, faTelegramPlane, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faSave} from '@fortawesome/free-regular-svg-icons'
import {faSearch, faArrowCircleUp, faCubes, faBuilding, faCalculator} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import  vAxios  from  'v-axios';
import  axios  from  'axios';

import wb from "./registerServiceWorker";

import { createRouter, createWebHistory } from "vue-router";

import Wallet from "@/views/Home.vue";
const routes = [{ path: '/', component:  Wallet}, { path: '/ivse/wallet', component:  Wallet}]

const router = createRouter({
  history: createWebHistory(),
  routes
});

trackRouter(router);

//props
setDefaultProps({
    modalTransition: 'Scale',
    alignX: "center"
  })

const vueTheStoragesOptions = {
    localMirrorKey: '$localData',
    localStorageKey: '$local',
  
    sessionMirrorKey: '$sessionData',
    sessionStorageKey: '$session',
    
    options: {
      vueModule: null,
      strict: true,
      mirrorOperation: false,
      updateMirror: true
    }
  }

library.add(faTelegramPlane, faTelegram, faGithub, faTwitter, faSave, faSearch, faArrowCircleUp, faCubes, faBuilding, faCalculator);

const app = createApp(App);
installElementPlus(app)
app.use(i18n)

app.config.globalProperties.workbox = wb;

app.use(router)
  .use(VueGtag, {property: { id: "G-ZQGWNKDVR3", send_page_view: true}, isEnabled: true, useDebugger: false})
  .use(vueTheStorages, vueTheStoragesOptions)
  .use(VueNotificationList).use(vAxios, axios)
  .use(ElementPlus).component('AppModal', Modal)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
