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
    import ElementComponentAccess from './components/ElementComponentAccess.vue'
    import DependencyInjection from './components/DependencyInjection.vue'
    import ProgrammaticEventListeners from './components/ProgrammaticEventListeners.vue'
    import AlternateTemplateDefinitions from './components/AlternateTemplateDefinitions.vue'
    import ControllingUpdates from './components/ControllingUpdates.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class HandlingEdgeCases extends Vue {

        get list() {
            return [
                {
                    name: '访问元素 & 组件',
                    rawHtml: require('!!html-loader!./components/ElementComponentAccess.vue'),
                    component: ElementComponentAccess
                },
                {
                    name: '依赖注入',
                    rawHtml: require('!!html-loader!./components/DependencyInjection.vue'),
                    component: DependencyInjection
                },
                {
                    name: '程序化的事件侦听器',
                    rawHtml: require('!!html-loader!./components/ProgrammaticEventListeners.vue'),
                    component: ProgrammaticEventListeners
                },
                {
                    name: '模板定义的替代品',
                    rawHtml: require('!!html-loader!./components/AlternateTemplateDefinitions.vue'),
                    component: AlternateTemplateDefinitions
                },
                {
                    name: '控制更新',
                    rawHtml: require('!!html-loader!./components/ControllingUpdates.vue'),
                    component: ControllingUpdates
                }
            ]
        }

    }
</script>
