<template>
  <div class="v5-template">
    <label>{{label}}</label>

    <!-- <input type="text"
           :name="name"
           :value="value"
           @input="$emit('input',$event.target.value)"
           :placeholder="placeholder
           "> -->
    <el-input style="width: 135px;" :name="name"
           :value="value"
           @input="TextInput"
           :placeholder="placeholder" clearable></el-input>
  </div>
           <!-- @input="$emit('input',$event.target.value)" -->
</template>
<script>
import { Input } from 'element-ui';

export default {
  name: 'TextInput',
  props: ['placeholder', 'label', 'name', 'value'],
  methods: {
    TextInput(value) {
      this.$emit('input', value);
    }
  }
}
</script>