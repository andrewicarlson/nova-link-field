Nova.booting((Vue, router) => {
    Vue.component('index-anchor', require('./components/IndexField'));
    Vue.component('detail-anchor', require('./components/DetailField'));
    Vue.component('form-anchor', require('./components/FormField'));
})
