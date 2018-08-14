<template>
    <div>

        <div class="case-item">
            <h4>1. 自定义组件的 v-model</h4>
            <base-checkbox v-model="lovingVue" @change="onChange"></base-checkbox>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('base-checkbox', {
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        },
        template: `
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  >
`
    })

    @Component({
        components: {
            'base-checkbox': $Vue.component('base-checkbox')
        }
    })
    export default class CustomizingComponentVModel extends Vue {
        public lovingVue = true

        public onChange(val) {
            console.info('lovingVue Change :', val)
        }
    }
</script>



