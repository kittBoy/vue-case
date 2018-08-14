<!--
侦听器：
1. watch
watch 提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。


2. 用计算属性的, setter 来模拟watch

个人感觉计算属性的setter优点类似于watch

-->

<template>
    <div>
        <div class="case-item">
            <h4>1. watch</h4>
            <p>
                Ask a yes/no question:
                <el-input v-model="question" placeholder="请输入内容"></el-input>
            </p>
            <p>{{ answer }}</p>

        </div>

        <div class="case-item">
            <h4>2. 用computed setter 实现 watch</h4>
            <p>
                Ask a yes/no question:
                <el-input v-model="CQuestion" placeholder="请输入内容"></el-input>
            </p>
            <p>{{ answer }}</p>

        </div>


    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    const _ = require('lodash')

    @Component
    export default class Watchers extends Vue {

        question: any = ''
        cquestion: any = ''
        answer = 'I cannot give you an answer until you ask a question!'
        debouncedGetAnswer: () => void
        currentMode = 'question'

        @Watch('question')
        onQuestionChange(newQuestion, oldQuestion) {
            this.currentMode = 'question'
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }

        get CQuestion() {
            return this.cquestion
        }

        set CQuestion(val) {
            this.cquestion = val
            this.currentMode = 'CQuestion'
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }

        created() {
            // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
            // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
            // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
            // 请参考：https://lodash.com/docs#debounce
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        }

        getAnswer() {
            if (this[this.currentMode].indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            setTimeout(() => {
                this.answer = 'hello client '
            }, 1000)

        }
    }
</script>

