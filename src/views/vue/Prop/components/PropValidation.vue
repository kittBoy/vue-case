<!--
type 可以是下列原生构造函数中的一个：

String
Number
Boolean
Array
Object
Date
Function
Symbol
-->


<template>
    <div>
        <div class="case-item">
            <h4>类型检测</h4>
            <my-component
                    :propA="propA"
                    :propB="propB"
                    :propC="propC"
                    :propF="propF">
            </my-component>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('my-component', {
        props: {
            // 基础的类型检查 (`null` 匹配任何类型)
            propA: Number,
            // 多个可能的类型
            propB: [String, Number],
            // 必填的字符串
            propC: {
                type: String,
                required: true
            },
            // 带有默认值的数字
            propD: {
                type: Number,
                default: 100
            },
            // 带有默认值的对象
            propE: {
                type: Object,
                // 对象或数组且一定会从一个工厂函数返回默认值
                default: function () {
                    return {message: 'hello'}
                }
            },
            // 自定义验证函数
            propF: {
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['success', 'warning', 'danger'].indexOf(value) !== -1
                }
            }
        },
        template: '<div>{{ JSON.stringify($props)}}</div>'
    })
    @Component({
        components: {
            'my-component': $Vue.component('my-component')
        }
    })
    export default class PropValidation extends Vue {
        propA = 1
        // 多个可能的类型
        propB = 'test'
        // 必填的字符串
        propC = 'testc'
        // 带有默认值的数字

        // 带有默认值的对象

        // 自定义验证函数
        propF = 'success'
    }
</script>



