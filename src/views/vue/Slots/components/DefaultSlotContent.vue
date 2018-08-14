<template>
    <div>

        <div class="case-item">
            <h4>1. 插槽默认内容</h4>
            <base-component>

                <p>A paragraph for the main content.</p>
                <p>And another one.</p>

                <template slot="footer">
                    <p>Here's some contact info</p>
                </template>
            </base-component>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('base-component', {
        template: `
    <div class="container">
  <header>
    <slot name="header">默认Header</slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
`
    })

    @Component({
        components: {
            'base-component': $Vue.component('base-component')
        }
    })
    export default class NamedSlots extends Vue {
    }
</script>



