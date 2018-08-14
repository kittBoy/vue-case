<template>
    <div>

        <div class="case-item">
            <h4>1. 有sync 修饰符</h4>
            <div>父组件msg: {{ msg }}</div>
            <el-button @click="changeMsg">修改msg</el-button>
            <base-component :msg.sync="msg"></base-component>
        </div>

        <div class="case-item">
            <h4>2. 无sync 修饰符</h4>
            <div>父组件msg: {{ msg }}</div>
            <el-button @click="changeMsg">修改msg</el-button>
            <base-component :msg="msg"></base-component>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('base-component', {
        props: {
            msg: String
        },
        computed: {
            msgChild () {
                return this.msg
            }
        },
        methods: {
            toChangeMsg () {
                this.$emit('update:msg', 'child')
            }
        },
        template: `
    <div>
    <div>子组件: {{ msgChild }}</div>
    <button @click="toChangeMsg">修改msg</button>
   </div>
`
    })

    @Component({
        components: {
            'base-component': $Vue.component('base-component')
        }
    })
    export default class SyncModifier extends Vue {
        msg = 'parent'

        changeMsg() {
            this.msg = 'parent1';
        }
    }
</script>



