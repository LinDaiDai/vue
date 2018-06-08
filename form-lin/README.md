# form-lin

> A formGenerator component rely on elementUI

## Installation

``` bash
# install dependencies
npm install element-ui -S
npm install form-lin babel-plugin-component -D

main.js
import { Button, Select, Input, Option, InputNumber } from 'element-ui';
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);

.babelrc
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

> 组件依赖于elementUI  以上步骤是配置elementUI 当然也可以参考elementUI官网全局引用ele组件

[elementUI](http://element.eleme.io/#/zh-CN/component/quickstart)



## Usage

```
<formlin @submit="submitForm"></formlin>

<script>
    import formlin from 'form-lin'
    export default {
        components: {
            formlin: formlin
        },
        methods: {
            submitForm($event) {
            console.log($event);
        }
    }
</script>
```


