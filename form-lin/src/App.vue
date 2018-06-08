<template>
<div>
    <h1>Form Generator</h1>
    <form-generator
        :schema="schema"
        v-model="formData"
    >
    </form-generator>
    <el-button @click="outPut">提交</el-button>
    <p>
        Hello {{formData.title}} {{formData.firstName}} {{formData.lastName}}, I hear you are {{formData.age}} years old.
    </p>
    <demo-five></demo-five>
</div>
</template>

<script>
import DemoFive from './components/DemoFive.vue';
import FormGenerator from "./components/v5/FormGenerator";

import { Button } from 'element-ui';
export default {
    name: 'formlin',
    components: {
        DemoFive,
        FormGenerator
    },
    methods: {
        outPut() {
            this.$emit('submit', this.formData);
        }
    },
    data() {
        return {
            formData: {
                firstName: "Lin",
                lastName: "DaiDai"
            },
            schema: [{
                    fieldType: "SelectList",
                    name: "food",
                    multi: false,
                    label: "food",
                    options: [{
                        value: '黄金糕',
                        label: '黄金糕'
                    }, {
                        value: '双皮奶',
                        label: '双皮奶'
                    }, {
                        value: '蚵仔煎',
                        label: '蚵仔煎'
                    }, {
                        value: '龙须面',
                        label: '龙须面'
                    }, {
                        value: '北京烤鸭',
                        label: '北京烤鸭'
                    }]
                },
                {
                    fieldType: "TextInput",
                    placeholder: "First Name",
                    label: "First Name",
                    name: "firstName"
                },
                {
                    fieldType: "TextInput",
                    placeholder: "Last Name",
                    label: "Last Name",
                    name: "lastName"
                },
                {
                    fieldType: "NumberInput",
                    placeholder: "Age",
                    name: "age",
                    label: "Age",
                    minValue: 0
                }
            ]
        }
    }
}
</script>

<style>
@import "./style/common.css";
</style>
