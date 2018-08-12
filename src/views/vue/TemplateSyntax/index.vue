<!--
文本绑定：{{msg}}
一次性绑定：<span v-once>这个将不会改变: {{ msg }}</span>
-->

<template>
    <div>
        <Kanban v-for="item in list"  class="kanban todo"  :options="options" :header-text="item.name">
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
    import Interpolations from './components/Interpolations.vue'
    import Directives from './components/Directives.vue'
    import Shorthands from './components/Shorthands.vue'
    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class TemplateSyntax extends Vue {
        options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: '插值',
                    rawHtml: require( "!!html-loader!./components/Interpolations.vue"),
                    component: Interpolations
                },{
                    name: '指令',
                    rawHtml: require( "!!html-loader!./components/Directives.vue"),
                    component: Directives
                },{
                    name: '缩写',
                    rawHtml: require( "!!html-loader!./components/Shorthands.vue"),
                    component: Shorthands
                }
            ]
        }

    }
</script>
