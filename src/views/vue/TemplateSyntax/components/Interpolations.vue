<!--
1. 文本绑定：{{msg}}
   一次性绑定：<span v-once>这个将不会改变: {{ msg }}</span>
2. 输出html:<span v-html="rawHtml"></span>
3. 给html元素属性赋值，不能使用Mustache，要使用v-bind指令
4. javascript表达式，每个绑定都只能包含单个表达式
-->

<template>
    <div>
        <div class="case-item">
            <h4>1. 文本</h4>
            <div>永久绑定： {{role}}</div>
            <div v-once>一次性绑定： {{role}}</div>
            改变数据：
            <el-radio-group v-model="role">
                <el-radio-button label="editor"></el-radio-button>
                <el-radio-button label="admin"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="case-item">
            <h4>2. 原始 HTML</h4>
            <p>Using mustaches: {{ rawHtml }}</p>
            <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        </div>


        <div class="case-item">
            <h4>3. 元素属性赋值</h4>
            <div v-bind:id="dynamicId">请使用F12查看我的Id</div>
        </div>

        <div class="case-item">
            <h4>4. javascript表达式</h4>
            <div v-bind:id="dynamicId + number">number + 1= {{ number + 1 }}</div>
            <div v-bind:id="dynamicId + number">ok ? 'YES' : 'NO' = {{ ok ? 'YES' : 'NO' }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class Interpolations extends Vue {
        role = 'admin'
        rawHtml = '<div>hello world</div>'
        dynamicId = 'id'
        number = 1
        ok = false
    }
</script>