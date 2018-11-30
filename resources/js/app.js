
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import {Form, HasError, AlertError} from 'vform';

window.form = Form;

import VueRouter from 'vue-router';
Vue.use(VueRouter)
Vue.component(HasError.name,HasError)
Vue.component(AlertError.name,AlertError)

import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
    color: 'blue',
    failedColor:'red',
    height: '3px'
})

import swal from 'sweetalert2'
window.swal = swal;


const toast = swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer: 3000
});

window.toast = swal;


let routes = [
{ path: '/Dashboard', component: require('./components/Dashboard.vue')},
{ path: '/users', component: require('./components/Users.vue')},
{ path: '/profile', component: require('./components/Profile.vue')},
{ path: '/Reviews', component: require('./components/Reviews.vue')},
{ path: '/UpcomingReleases', component: require('./components/UpcomingReleases.vue')},
{ path: '/Prices', component: require('./components/Prices.vue')}
    ]

const router = new VueRouter({
    mode:'history',
    routes
})

Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM DD, YYYY');
})

let Fire = new Vue();
window.Fire = Fire;


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

Vue.component('example-component', require('./components/ExampleComponent.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
