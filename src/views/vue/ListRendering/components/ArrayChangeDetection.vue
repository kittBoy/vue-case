<!--
1. 变异方法
通过这些方法改变数组，会触发视图重新渲染
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

2. 替换数组
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})

你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

3. 改变数组元素的值
arr[index] = new Value 不生效

可通过以下方式修改
Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
-->


<template>
    <div>
        <div class="case-item">
            <h4>1. v-for 数组</h4>
            <el-button  v-for="(item, index) in arr"  ><span>{{ item.name }}</span></el-button>
            <el-button type="primary" @click="toReverse">reverse</el-button>
        </div>

        <div class="case-item">
            <h4>2. 替换数组</h4>
            <el-button  v-for="(item, index) in arr"  ><span>{{ item.name }}</span></el-button>
            <el-button type="primary" @click="toReplace">替换数组</el-button>
        </div>

        <div class="case-item">
            <h4>3. 改变数组元素的值</h4>
            <el-button  v-for="(item, index) in arr"  @click="toChangeValue(index)"><span>{{ item.name }}-修改值</span></el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class ArrayChangeDetection extends Vue {
        arr = [{name: 1}, {name: 2}, {name: 3}, {name: 4}]

        toReplace() {
            this.arr = this.arr.filter(function (item, index) {
                return index > 0
            })
        }

        toReverse() {
            this.arr.reverse()
        }

        toChangeValue(index) {
            Vue.set(this.arr, index, {name: Math.random().toString(36).substr(2, 2)})
        }
    }
</script>



