<template>
    <div>

        <div class="case-item">
            <h4>1. 示列</h4>
            <div v-demo:foo.a.b="message"></div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    Vue.directive('demo', {
        bind (el, binding, vnode) {
            const s = JSON.stringify
            el.innerHTML =
                'name: ' + s(binding.name) + '<br>' +
                'value: ' + s(binding.value) + '<br>' +
                'expression: ' + s(binding.expression) + '<br>' +
                'argument: ' + s(binding.arg) + '<br>' +
                'modifiers: ' + s(binding.modifiers) + '<br>' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
        }
    })

    @Component
    export default class DirectiveDemo extends Vue {
        message = 'hello'
    }
</script>



