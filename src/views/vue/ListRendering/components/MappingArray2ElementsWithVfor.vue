<!--
1. v-for 数组
2. v-for对象

可以用 of 替代 in 作为分隔符
-->


<template>
    <div>
        <div class="case-item">
            <h4>1. v-for 数组</h4>
            <div>
                <el-tag v-for="(item, index) in arr">{{ item }} - {{ index }}</el-tag>
            </div>

            <h4>1. v-for 对象</h4>
            <div>
                <el-tag v-for="(item, key, index) in obj">{{ item }} - {{ key }} -{{ index }}</el-tag>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class MappingArray2ElementsWithVfor extends Vue {
        arr = [1,2,3,4,5]
        obj = {a: 1, b:2, c: 3, d: 4}
    }
</script>



