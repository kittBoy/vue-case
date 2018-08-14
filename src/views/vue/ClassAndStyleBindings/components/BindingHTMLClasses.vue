<!--
绑定 HTML Class：
1. 对象语法
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>


2. 绑定内联样式

2.1 对象语法

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}

2.2 数组语法
<div v-bind:style="[baseStyles, overridingStyles]"></div>

2.3 自动添加前缀

当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

2.4  多重值
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex。
-->

<template>
    <div>
        <div class="case-item">
            <h4>1. 对象语法</h4>
            <div class="show-div" v-bind:class="classObj"></div>
            <el-checkbox-group v-model="checkedList">
                <el-checkbox v-for="className in Object.keys(classObj)" :label="className"
                             :key="className"></el-checkbox>
            </el-checkbox-group>
            <h4>2. 数组语法</h4>
            <div class="show-div" v-bind:class="checkedList"></div>
            <el-checkbox-group v-model="checkedList">
                <el-checkbox v-for="className in Object.keys(classObj)" :label="className"
                             :key="className"></el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class BindingHTMLClasses extends Vue {

        public checkList = []
        public classObj = {
            borderBold: false,
            backgroundBlue: false
        }

        get checkedList() {
            return this.checkList;
        }

        set checkedList(newChecked) {
            this.checkList = newChecked
            Object.keys(this.classObj).map(item => {
                this.classObj[item] = false
            })
            newChecked.map(item => {
                this.classObj[item] = true
            })
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .borderBold {
        border: 5px solid black;
    }

    .backgroundBlue {
        background-color: blue;
    }

    .show-div {
        width: 50px;
        height: 50px;
    }
</style>


