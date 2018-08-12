<template>
    <div>

        <div class="case-item">
            <h4>1. 插槽作用域</h4>
            <div class="parent">
                <my-awesome-list :items="items">
                    <!--之所以使用绑定是因为属性items的值是一个引用了Vue实例data里面的数组，而不是一个普通的字符串-->
                    <template scope="bbb">
                        <li class="my-fancy-item">{{ bbb.text }}</li>
                    </template>
                </my-awesome-list>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('my-awesome-list', {
        props: ['items'],
        template: `
  <ul>
    <slot v-for="item in items" :text="item"></slot>
</ul>
`
    })

    @Component({
        components: {
            'my-awesome-list': $Vue.component('my-awesome-list')
        }
    })
    export default class ScopedSlots extends Vue {
        items = ['a', 'b', 'c', 'd']
        pre = 'parent'
    }
</script>



