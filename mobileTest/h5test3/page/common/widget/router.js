import Vue from "vue";
const init = Vue.component('init', require('../../components/user/init/init'));

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Init'
        }
    },
    {
        name: 'Init',
        path: '/init',
        component: init
    }
];
exports.routes = routes;

