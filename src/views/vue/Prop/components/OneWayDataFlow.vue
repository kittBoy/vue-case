<!--
1. 子组件直接修改prop
2. 子组件通过data修改prop
-->


<template>
    <div>
        <div class="case-item">
            <h4>1. 子组件直接修改prop</h4>
            <change-props :count="count"></change-props>
        </div>

        <div class="case-item">
            <h4>2. 子组件通过data修改prop</h4>
            请打开控制台，查看差异
            <change-copy-props :count="count"></change-copy-props>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('change-props', {
        props: ['count'],
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })

    $Vue.component('change-copy-props', {
        props: ['count'],
        data : function(){
            return {
                selfCount: this.count
            }
        },
        template: '<button v-on:click="selfCount++">You clicked me {{ selfCount }} times.</button>'
    })


    @Component({
        components: {
            'change-props': $Vue.component('change-props'),
            'change-copy-props': $Vue.component('change-copy-props')
        }
    })
    export default class OneWayDataFlow extends Vue {
       count = 1
    }
</script>



