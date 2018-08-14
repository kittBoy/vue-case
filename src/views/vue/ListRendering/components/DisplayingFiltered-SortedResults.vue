<!--
显示过滤/排序结果

1. 计算属性
2. 方法


-->


<template>
    <div>
        <div class="case-item">
            <h4>1. 计算属性</h4>
            <div>
                <el-tag v-for="n in evenNumbers">{{ n }}</el-tag>
            </div>
        </div>

        <div class="case-item">
            <h4>2. 方法</h4>
            <div>
                <el-tag v-for="n in even(numbers)">{{ n }}</el-tag>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class ObjectChangeDetectionCaveats extends Vue {
        numbers = [1, 2, 3, 4, 5]

        even(numbers) {
            return numbers.filter((number: number) => number % 2 === 0)
        }

        get evenNumbers() {
            return this.numbers.filter((number: number) => number % 2 === 0)
        }
    }
</script>



