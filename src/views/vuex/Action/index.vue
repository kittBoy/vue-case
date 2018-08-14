<template>
    <div>
        <Kanban v-for="item in list" class="kanban todo" :header-text="item.name">
            <template slot="left">
                <CodeEditor v-for="html in item.rawHtml" :value="html" class="app-codeEditor"/>
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
    import examples from './components/examples.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class Action extends Vue {

        get list() {
            return [
                {
                    name: 'Action示例',
                    rawHtml: [require('!!html-loader!@/store/modules/vuexAction.ts'), require('!!html-loader!./components/examples.vue')],
                    component: examples
                }
            ]
        }

    }
</script>
