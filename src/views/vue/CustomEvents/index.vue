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
    import CustomizingComponentVModel from './components/CustomizingComponentVModel.vue'
    import BindingNativeEventsToComponents from './components/BindingNativeEventsToComponents.vue'
    import SyncModifier from './components/SyncModifier.vue'

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
                    name: '自定义组件的 v-model',
                    rawHtml: require('!!html-loader!./components/CustomizingComponentVModel.vue'),
                    component: CustomizingComponentVModel
                },
                {
                    name: '将原生事件绑定到组件',
                    rawHtml: require('!!html-loader!./components/BindingNativeEventsToComponents.vue'),
                    component: BindingNativeEventsToComponents
                },
                {
                    name: '.sync 修饰符',
                    rawHtml: require('!!html-loader!./components/SyncModifier.vue'),
                    component: SyncModifier
                }
            ]
        }

    }
</script>
