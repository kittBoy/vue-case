<!--
文本绑定：{{msg}}
一次性绑定：<span v-once>这个将不会改变: {{ msg }}</span>
-->

<template>
    <div>
        <Kanban v-for="item in list" class="kanban todo" :header-text="item.name">
            <template slot="left">
                <CodeEditor :value="item.rawHtml" class="app-codeEditor"/>
            </template>
            <template slot="right">
                <component :is="item.component"></component>
            </template>
        </Kanban>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import CodeEditor from '@/components/CodeEditor/index.vue'
    import Kanban from '@/components/Kanban/index.vue'
    import NamedSlots from './components/NamedSlots.vue'
    import DefaultSlotContent from './components/DefaultSlotContent.vue'
    import ScopedSlots from './components/ScopedSlots.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class ConditionalRendering extends Vue {
        public options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: '具名插槽',
                    rawHtml: require('!!html-loader!./components/NamedSlots.vue'),
                    component: NamedSlots
                },
                {
                    name: '插槽默认内容',
                    rawHtml: require('!!html-loader!./components/DefaultSlotContent.vue'),
                    component: DefaultSlotContent
                },
                {
                    name: '插槽作用域',
                    rawHtml: require('!!html-loader!./components/ScopedSlots.vue'),
                    component: ScopedSlots
                }
            ]
        }

    }
</script>
