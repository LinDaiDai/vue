<template>
  <div class="v5-template">
    <label>{{label}}</label>
    <!-- <input type="number"
           :name="name"
           :value="value"
           @input="$emit('input',
           $event.target.value)"
           :placeholder="placeholder"> -->
    <el-input-number :name="name"
           :value="value"
            @change="InputNumber"
           :placeholder="placeholder" controls-position="right" :min="1" :max="10">
    </el-input-number>
  </div>
</template>
<script>
import { InputNumber } from 'element-ui';

export default {
  name: 'NumberInput',
  props: ['placeholder', 'label', 'name', 'value'],
  methods: {
    InputNumber(value) {
      this.$emit('input', value);
    }
  }
}
</script>