<!--
1. 直接将代码写在指令中
2. 通过方法
-->


<template>
    <div>
        <div class="case-item">
            <h4>1. 直接将代码写在指令中</h4>
            <el-button  @click="msg='hi'"  > {{ msg }} </el-button>
        </div>

        <div class="case-item">
            <h4>2. 通过方法</h4>
            <el-button  @click="sayHello"  > {{ msg }} </el-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class ArrayChangeDetection extends Vue {
        msg = 'hello'

        sayHello() {
            this.msg = 'hello'
        }
    }
</script>



