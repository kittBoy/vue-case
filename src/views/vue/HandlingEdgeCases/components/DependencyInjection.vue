<!--
1. 依赖注入
数据是非响应式的
-->

<template>
    <div>

        <div class="case-item">
            <h4>1. 依赖注入</h4>
            <child-component></child-component>
        </div>


    </div>
</template>

<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('child-component', {
        inject: ['provideData'],
        template: '<div>provideData: {{ provideData }}</div>'
    })


    @Component({
        components: {
            'child-component': $Vue.component('child-component')
        }
    })

    export default class ElementComponentAccess extends Vue {
        @Provide() provideData = 'from ElementComponentAccess'

        inputFocus() {
            this.$refs.usernameInput.focus()
        }
    }
</script>
