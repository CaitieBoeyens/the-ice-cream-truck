import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Order from '@/components/Order';
import Progress from '@/components/InProgress';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/progress',
            name: 'Progress',
            component: Progress
        }
    ]
});
