<template>
    <div>

        <div class="case-item">
            <h4>1. 将原生事件绑定到组件</h4>
            <base-input  @input="onChange"></base-input>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('base-input', {
        inheritAttrs: false,
        props: ['label', 'value'],
        computed: {
            inputListeners: function () {
                var vm = this
                // `Object.assign` 将所有的对象合并为一个新对象
                return Object.assign({},
                    // 我们从父级添加所有的监听器
                    vm.$listeners,
                    // 然后我们添加自定义监听器，
                    // 或覆写一些监听器的行为
                    {
                        // 这里确保组件配合 `v-model` 的工作
                        input: function (event) {
                            vm.$emit('input', event.target.value)
                        }
                    }
                )
            }
        },
        template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
    })

    @Component({
        components: {
            'base-input': $Vue.component('base-input')
        }
    })
    export default class BindingNativeEventsToComponents extends Vue {
        onChange(val) {
            console.log('lovingVue Change :', val)
        }
    }
</script>



