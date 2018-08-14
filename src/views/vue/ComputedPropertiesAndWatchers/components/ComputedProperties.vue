<!--
计算属性：
1. 缓存
计算属性的值会缓存，只有依赖的属性发生改变时才会更新


2. 计算属性的getter, setter

个人感觉计算属性的setter优点类似于watch
-->

<template>
    <div>
        <div class="case-item">
            <h4>1. v-bind缩写</h4>

        </div>

        <div class="case-item">
            <h4>2. 计算属性的getter, setter</h4>
            <div>firstName：
                <el-input v-model="firstName" placeholder="请输入内容"></el-input>
            </div>
            <div>lastName：
                <el-input v-model="lastName" placeholder="请输入内容"></el-input>
            </div>
            <div>fullName：
                <el-input v-model="fullName" placeholder="请输入内容"></el-input>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class ComputedProperties extends Vue {

        firstName = 'foo'
        lastName = 'bar'

        get fullName() {
            return this.firstName + ' ' + this.lastName
        }

        set fullName(val) {
            const name = val.split(' ')
            this.firstName = name[0]
            this.lastName = name[1]
        }
    }
</script>

