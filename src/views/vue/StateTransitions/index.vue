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
    import AnimatingStateWithWatchers from './components/AnimatingStateWithWatchers.vue'


    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class StateTransitions extends Vue {

        get list() {
            return [
                {
                    name: '状态动画与侦听器',
                    rawHtml: require('!!html-loader!./components/AnimatingStateWithWatchers.vue'),
                    component: AnimatingStateWithWatchers
                }
            ]
        }

    }
</script>
