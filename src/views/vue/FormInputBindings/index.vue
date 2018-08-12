<!--
文本绑定：{{msg}}
一次性绑定：<span v-once>这个将不会改变: {{ msg }}</span>
-->

<template>
    <div>
        <Kanban v-for="item in list" :key="1" class="kanban todo"  :options="options" :header-text="item.name">
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
    import BasicUsage from './components/BasicUsage.vue'
    import Modifiers from './components/Modifiers.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class FormInputBindings extends Vue {
        options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: '基础用法',
                    rawHtml: require( "!!html-loader!./components/BasicUsage.vue"),
                    component: BasicUsage
                },{
                    name: '事件修饰符',
                    rawHtml: require( "!!html-loader!./components/Modifiers.vue"),
                    component: Modifiers
                }
            ]
        }

    }
</script>
