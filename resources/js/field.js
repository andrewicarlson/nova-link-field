Nova.booting((Vue, router) => {
    Vue.component('index-link', require('./components/IndexField'));
    Vue.component('detail-link', require('./components/DetailField'));
    Vue.component('form-link', require('./components/FormField'));
})
