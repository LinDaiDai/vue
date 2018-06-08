import Vue from 'vue'
import App from './App.vue'
import { Button, Select, Input, Option, InputNumber } from 'element-ui';
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
new Vue({
  el: '#app',
  render: h => h(App)
})
