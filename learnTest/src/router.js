const routers = [{
    path: '/',
    meta: {
        title: 'index'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;