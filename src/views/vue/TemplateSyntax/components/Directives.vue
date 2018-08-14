<!--
指令：
1. 参数 例：<a v-bind:href="url">...</a> href为v-bind的参数
2. 修饰符 <form v-on:submit.prevent="onSubmit">...</form> .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
-->

<template>
    <div>
        <div class="case-item">
            <h4>1. 参数</h4>
            <div>v-bind:href="url"： <a v-bind:href="url">测试</a></div>
        </div>
        <div class="case-item" @click="onDivClick">
            <h4>2. 修饰符</h4>
            <el-button type="primary" @click.stop="onButtonClick">有stop修饰</el-button>
            <el-button type="primary" @click="onButtonClick">没stop修饰</el-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class Directives extends Vue {
        url = '#'

        onButtonClick() {
            this.$notify({
                title: 'button被点击',
                message: 'button被点击'
            });
        }

        onDivClick() {
            setTimeout(() => {
                this.$notify({
                    title: 'Div被点击',
                    message: 'Div被点击'
                });
            })
        }
    }
</script>

