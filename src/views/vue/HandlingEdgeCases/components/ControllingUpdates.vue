<!--
1. 强制更新
2. 通过 v-once 创建低开销的静态组件
-->



<template>
    <div>

        <div class="case-item">
            <h4>1. 强制更新</h4>
            <div>{{ JSON.stringify(arr) }}</div>
            <div>index: <input type="text" ref="arrIndex"/></div>
            <div>value: <input type="text" ref="arrValue"/></div>
            <div></div>
            <el-button @click="toChange">修改</el-button>
            <el-button @click="toRefresh">刷新</el-button>
        </div>

        <div class="case-item">
            <h4>2. 通过 v-once 创建低开销的静态组件</h4>
            <div v-once>{{ JSON.stringify(arr) }}</div>
        </div>

    </div>
</template>


<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'

    @Component
    export default class ControllingUpdates extends Vue {
        arr = [1, 2, 3, 4]
        msg = 'hi'

        toChange(){
            const index = this.$refs.arrIndex.value
            const value = this.$refs.arrValue.value

            this.arr[index] = value
        }

        toRefresh(){
            console.log(this.arr)
            this.$forceUpdate()
        }
    }
</script>
