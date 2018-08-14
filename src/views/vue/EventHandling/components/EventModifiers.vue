<!--
1. stop
2. prevent
3. capture
4. self
5. once
6. passive
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
-->


<template>
    <div>
        <div class="case-item" @click="onDivClick">
            <h4>1. stop</h4>
            <el-button type="primary" @click.stop="onButtonClick">有stop修饰</el-button>
            <el-button type="primary" @click="onButtonClick">没stop修饰</el-button>
        </div>

        <div class="case-item">
            <h4>2. prevent</h4>
            <form v-on:submit.prevent="onSubmit" action="https://www.baidu.com">
                <label>有prevent</label>
                <input type="submit"/>
            </form>
            <form v-on:submit="onSubmit" action="https://www.baidu.com">
                <label>无prevent</label>
                <input type="submit"/>
            </form>
        </div>

        <div class="case-item" @click.capture="onDivClick">
            <h4>3. capture</h4>
            <el-button type="primary" @click="onButtonClick">capture修饰</el-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class ArrayChangeDetection extends Vue {
        msg = 'hello'

        onButtonClick() {
            setTimeout(() => {
                this.$notify({
                    title: 'button被点击',
                    message: 'button被点击'
                });
            })
        }

        onSubmit() {
            this.$notify({
                title: 'submit被点击',
                message: 'submit被点击'
            });
        }

        onDivClick() {
            setTimeout(() => {
                this.$notify({
                    title: 'Div被点击',
                    message: 'Div被点击'
                });
            })
        }

        sayHello() {
            this.msg = 'hello'
        }
    }
</script>



