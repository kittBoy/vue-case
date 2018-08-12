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
    import DirectiveDemo from './components/DirectiveDemo.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class CustomDirectives extends Vue {
        options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: '自定义指令',
                    rawHtml: require( "!!html-loader!./components/DirectiveDemo.vue"),
                    component: DirectiveDemo
                }
            ]
        }

    }
</script>
