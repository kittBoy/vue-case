<!--
显示过滤/排序结果

1. v-for取整
2. v-for on a <template>

3. v-for with v-if
v-for 的优先级比 v-if 更高

-->


<template>
    <div>
        <div class="case-item">
            <h4>1. v-for取整</h4>
            <div>
                <el-tag v-for="n in 10">{{ n }}</el-tag>
            </div>
        </div>

        <div class="case-item">
            <h4>2. v-for on a template</h4>
            <div>
                <template v-for="(n, index) in numbers">
                    <el-tag>{{ n }}</el-tag>
                    <el-button @click="toChangeValue(index)">修改值</el-button>
                </template>
            </div>
        </div>

        <div class="case-item">
            <h4>3. v-for with v-if</h4>
            <div>
                <el-tag v-for="todo in todos" v-if="todo.isComplete">{{ todo.event }}</el-tag>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class ObjectChangeDetectionCaveats extends Vue {
        numbers = [1, 2, 3, 4, 5]
        todos = [
            {
                event: '吃饭',
                isComplete: true
            }, {
                event: '喝水',
                isComplete: false
            }, {
                event: '睡觉',
                isComplete: true
            }
        ]

        toChangeValue(index) {
            this.$set(this.numbers, index, Math.random().toString().slice(2, 3))
        }
    }
</script>



