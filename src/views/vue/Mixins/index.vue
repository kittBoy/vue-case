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
    import Basics from './components/Basics.vue'
    import OptionMerging from './components/OptionMerging.vue'
    import GlobalMixin from './components/GlobalMixin.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class Mixins extends Vue {
        options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: 'mixins基础',
                    rawHtml: require( "!!html-loader!./components/Basics.vue"),
                    component: Basics
                },
                {
                    name: '选项合并',
                    rawHtml: require( "!!html-loader!./components/OptionMerging.vue"),
                    component: OptionMerging
                },
                {
                    name: '全局混入',
                    rawHtml: require( "!!html-loader!./components/GlobalMixin.vue"),
                    component: GlobalMixin
                }
            ]
        }

    }
</script>
