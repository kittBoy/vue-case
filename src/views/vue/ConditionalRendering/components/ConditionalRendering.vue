<!--
1. v-if
1.1 在 <template> 元素上使用 v-if 条件渲染分组
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>

1.2 v-else v-else-if(2.1.0新增)

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

1.3 用 key管理可复用的元素

<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，<input> 不会被替换掉——仅仅是替换了它的 placeholder。

<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
现在，每次切换时，输入框都将被重新渲染。

2. v-show
无论条件为何都会渲染dom,只是简单切换disploy。
v-if 是惰性的，每次切换，都要重新渲染。

3. v-if 与 v-for 一起使用
当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级
-->


<template>
    <div>
        <div class="case-item">
            <h4>1.1 在 template 元素上使用 v-if 条件渲染分组</h4>
            <template v-if="ok">
                <h1>Title</h1>
                <p>Paragraph 1</p>
                <p>请用f12查看渲染的dom结构</p>
            </template>

            <h4>1.2v-else v-else-if(2.1.0新增)</h4>
            <div v-if="type === 'A'">
                A
            </div>
            <div v-else-if="type === 'B'">
                B
            </div>
            <div v-else-if="type === 'C'">
                C
            </div>
            <div v-else>
                Not A/B/C
            </div>

            <h4>1.3 用 key管理可复用的元素</h4>
            <template v-if="loginType === 'username'">
                <label>Username</label>
                <el-input placeholder="Enter your username"/>
            </template>
            <template v-else>
                <label>Email</label>
                <el-input placeholder="Enter your email address"/>
            </template>

            <template v-if="loginType === 'username'">
                <label>Username</label>
                <el-input placeholder="Enter your username" key="username-input"/>
            </template>
            <template v-else>
                <label>Email</label>
                <el-input placeholder="Enter your email address" key="email-input"/>
            </template>
            <el-button type="primary" @click="changeLoginType">Toggle Login type</el-button>

            <h4>2 v-show</h4>
            <div>请用f12查看dom结构差异</div>
            <div v-show="isShow">v-show</div>
            <div v-if="isShow">v-if</div>
            <el-button type="primary" @click="switchShowState">isShow</el-button>

            <h4>3. v-if 与 v-for 一起使用</h4>
            <div v-for="item in list" v-if="item<3">
                <div> {{item}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class BindingHTMLClasses extends Vue {
        ok = true
        type = ''
        loginType = 'username'
        isShow = true
        list = [1, 2, 3, 1, 2, 3]

        changeLoginType() {
            this.loginType =
                this.loginType === 'username'
                    ? 'false'
                    : 'username'
        }

        switchShowState() {
            this.isShow = this.isShow ? false : true
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


