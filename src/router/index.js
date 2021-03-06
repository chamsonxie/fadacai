import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductionRouter from './production'
import DataRouter from './data'
import CustomerRouter from './customer'
import FinanceRouter from './finance'
import OrderRouter from './order'
import MarketingRouter from './marketing'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];
const routes = baseRoutes.concat(ProductionRouter,DataRouter,CustomerRouter,FinanceRouter,OrderRouter,MarketingRouter);
export default new VueRouter({
    mode: 'history',//去除访问路径“#”
    routes,
});
