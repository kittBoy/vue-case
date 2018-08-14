<!--
1. 修改对象属性

对象和数组一样，不能直接修改
可以通过如下方式

Vue.set(vm.userProfile, 'age', 27)
你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：

vm.$set(vm.userProfile, 'age', 27)
-->


<template>
    <div>
        <div class="case-item">
            <h4>1. 修改对象属性</h4>
            <div>
                <el-button v-for="(value, key) in obj" @click="toChangeValue(key)">{{ value }} - {{ key }}-点击修改
                </el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class ObjectChangeDetectionCaveats extends Vue {
        obj = {a: 1, b: 2, c: 3, d: 4}

        toChangeValue(key) {
            this.$set(this.obj, key, Math.random().toString(32).slice(2, 3))
        }
    }
</script>



