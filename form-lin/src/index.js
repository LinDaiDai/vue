import formlin from './App.vue'

export default formlin;

//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('formlin', formlin);
}
