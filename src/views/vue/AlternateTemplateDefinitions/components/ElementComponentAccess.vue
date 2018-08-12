<!--
1. 访问根实例
状态较多的时候通常不建议这么做

2. 访问父级组件实例
通常不建议这么做，会增加状态追踪复杂度。
-->

<template>
    <div>

        <div class="case-item">
            <h4>1. 访问根实例</h4>
            <div>from: {{ this.$root.from}}</div>
        </div>

        <div class="case-item">
            <h4>2. 访问父级组件实例</h4>
            <child-component></child-component>
        </div>

        <div class="case-item">
            <h4>3. 访问子组件实例或子元素</h4>
            <base-input ref="usernameInput"></base-input>
            <el-button @click="inputFocus">focus</el-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('child-component', {
        template: '<div>From: {{ this.$parent.from }}</div>'
    })

    $Vue.component('base-input', {
        methods: {
            // 用来从父级组件聚焦输入框
            focus: function () {
                this.$refs.input.focus()
            }
        },
        template: '<input ref="input">'
    })
    @Component({
        components:{
            'child-component': $Vue.component('child-component'),
            'base-input': $Vue.component('base-input')
        }
    })

    export default class ElementComponentAccess extends Vue {
        from = 'parent'

        inputFocus(){
            this.$refs.usernameInput.focus()
        }
    }
</script>
