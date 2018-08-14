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
    import TransitioningSingleElementsComponents from './components/TransitioningSingleElementsComponents.vue'
    import CSSAnimations from './components/CSSAnimations.vue'
    import CustomTransitionClasses from './components/CustomTransitionClasses.vue'
    import JavaScriptHooks from './components/JavaScriptHooks.vue'
    import ListMoveTransitions from './components/ListMoveTransitions.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class EnterLeaveListTransitions extends Vue {

        get list() {
            return [
                {
                    name: '单元素/组件的过渡',
                    rawHtml: require('!!html-loader!./components/TransitioningSingleElementsComponents.vue'),
                    component: TransitioningSingleElementsComponents
                },
                {
                    name: 'CSS 动画',
                    rawHtml: require('!!html-loader!./components/CSSAnimations.vue'),
                    component: CSSAnimations
                },
                {
                    name: '自定义过渡的类名',
                    rawHtml: require('!!html-loader!./components/CustomTransitionClasses.vue'),
                    component: CustomTransitionClasses
                },
                {
                    name: 'JavaScript 钩子',
                    rawHtml: require('!!html-loader!./components/JavaScriptHooks.vue'),
                    component: JavaScriptHooks
                },
                {
                    name: '列表的排序过渡',
                    rawHtml: require('!!html-loader!./components/ListMoveTransitions.vue'),
                    component: ListMoveTransitions
                }
            ]
        }

    }
</script>
