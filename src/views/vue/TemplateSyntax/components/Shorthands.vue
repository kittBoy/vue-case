<!--
缩写：
1. v-bind缩写

完整语法
<a v-bind:href="url">...</a>

缩写
<a :href="url">...</a>


2. v-on缩写
完整语法
<a v-on:click="doSomething">...</a>

缩写
<a @click="doSomething">...</a>
-->

<template>
    <div>
        <div class="case-item">
            <h4>1. v-bind缩写</h4>
            <div>不缩写： <a v-bind:href="url">v-bind不缩写</a></div>
            <div>缩写： <a :href="url">v-bind缩写</a></div>
        </div>

        <div class="case-item">
            <h4>2. v-on缩写</h4>
            <el-button type="primary" @click.stop="onButtonClick">缩写</el-button>
            <el-button type="primary" v-on:click.stop="onButtonClick">不缩写</el-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component,} from 'vue-property-decorator'

    @Component
    export default class Directives extends Vue {
        url = "#"
        onButtonClick(){
            this.$notify({
                title: 'button被点击',
                message: 'button被点击'
            });
        }
    }
</script>

