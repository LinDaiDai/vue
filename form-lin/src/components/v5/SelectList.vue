<template>
  <div class="v5-template">
    <label>{{label}}</label>
    <el-select  :multiple="multi"
                :value="value"
                @change="SelectVal"
                placeholder="请选择">
      <el-option v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
import { Select } from 'element-ui';
import { Option } from 'element-ui';

export default {
  name: 'SelectList',
  props: ['multi', 'options', 'name', 'label', 'value'],
  methods: {
    SelectVal(value) {
      this.$emit('input', value);
    }
  }
}
</script>