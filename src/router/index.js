import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../components/Intro.vue'
import Day from '../components/Day.vue'
import Calender from '../components/Calender.vue'
import Setting from '../components/Setting.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'IntroComponent',
    component: Intro
  },
  {
    path: '/day/:date',
    name: 'DayComponent',
    component: Day
  },
  {
    path: '/calender',
    name: 'CalenderComponent',
    component: Calender
  },
  {
    path: '/setting',
    name: 'SettingComponent',
    component: Setting
  },
  {
    path: '/about',
    name: 'AboutComponent',
    component: About
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
