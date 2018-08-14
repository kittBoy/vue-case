<!--
1. 替换/合并已有的特性
2. 禁用特性继承
-->


<template>
    <div>

        <div class="case-item">
            <h4>1. 替换/合并已有的特性</h4>
            <my-component :type="inputType"/>
            <el-button @click="inputTypeChange">改变类型</el-button>
        </div>

        <div class="case-item">
            <h4>2. 禁用特性继承</h4>
            <no-inheritAttrs-component :type="inputType"/>
            <el-button @click="inputTypeChange">改变类型</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('my-component', {
        template: '<input type="text" />'
    })

    $Vue.component('no-inheritAttrs-component', {
        inheritAttrs: false,
        template: '<input type="text" />'
    })

    @Component({
        components: {
            'my-component': $Vue.component('my-component'),
            'no-inheritAttrs-component': $Vue.component('no-inheritAttrs-component')
        }
    })
    export default class NonPropAttributes extends Vue {
        inputType = 'text'

        inputTypeChange() {
            this.inputType =
                this.inputType === 'text' ?
                    'password' :
                    'text'
        }
    }
</script>



