const routers = [{
    path: '/index1',
    meta: {
        title: 'index1'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;