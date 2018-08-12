<!--
1. 选项合并
比如，数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先。

2. 钩子合并
同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。

值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。
注意：Vue.extend() 也使用同样的策略进行合并。
-->
<template>
    <div>

        <div class="case-item">
            <h4>1. 选项合并</h4>
            <el-button  @click="hello">mixins</el-button>
        </div>

        <div class="case-item">
            <h4>2. 钩子合并</h4>
            <div>请注意mixins和组件自身created的调用顺序</div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    const myMixin = {
        data: function () {
            return {
                message: 'hello',
                foo: 'mixins'
            }
        },
        created: function(){
            this.hello()
            this.notify('Mixins', '先执行')
        },
        methods: {
            notify: function(title, message){
                setTimeout(() => {
                    this.$notify({
                        title,
                        message
                    })
                })
            },
            hello: function(){
                this.notify(this.foo, this.message)
            }
        }
    }

    @Component({
        mixins:[myMixin]
    })
    export default class OptionMerging extends Vue {
        message = 'hello'
        foo = 'self'

        created(){
            this.notify('self','后执行')
        }
    }
</script>



