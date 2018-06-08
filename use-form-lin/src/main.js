// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import { Button, Select, Input, Option, InputNumber } from 'element-ui';
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
