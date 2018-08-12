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
    import CompleteExample from './components/CompleteExample.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class RenderFunctionsAndJSX extends Vue {
        options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: '渲染函数 & JSX',
                    rawHtml: require( "!!html-loader!./components/CompleteExample.vue"),
                    component: CompleteExample
                }
            ]
        }

    }
</script>
