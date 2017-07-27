import './index.scss';
import Vue from "vue";
import VueRouter from "vue-router";
import './common/widget/common';

import Bus from './common/widget/bus';

Vue.use(VueRouter);

import routes from './common/widget/router';

const router = new VueRouter({
    routes: routes.routes
});

const preHandler = function(e){
    e.preventDefault()
};

//每次路由更新后触发
router.afterEach(router => {
    window.console.log(router);
});

const app = new Vue({
    el:'#app',
    data:{
        
    },
    methods: {
        initPage: function () {
            var self = this;

        }
    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
        this.initPage();
    },
    router: router
});