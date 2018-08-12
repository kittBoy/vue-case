<!--
谨慎使用全局混入对象，因为会影响到每个单独创建的 Vue 实例 (包括第三方模板)。大多数情况下，只应当应用于自定义选项，就像上面示例一样。也可以将其用作 Plugins 以避免产生重复应用
-->

<template>
    <div>

        <div class="case-item">
            <h4>1. 全局混入</h4>
            <el-button  @click="sayHi">全局混入</el-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    Vue.mixin({
        methods: {
            sayHi: function () {
                this.$notify({
                    title: 'from global',
                    message: this.msg
                })
            }
        }
    })
    @Component
    export default class Basics extends Vue {
        msg = 'hello'
    }
</script>



