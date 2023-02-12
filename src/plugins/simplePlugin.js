import ScrollHandlerMixin from '../mixins/scrollHandler';
export default {
    install(Vue){
        Vue.mixin(ScrollHandlerMixin);
        Vue.prototype.$log = function () {
            console.log('simplePlugin works');
        }
    },
}