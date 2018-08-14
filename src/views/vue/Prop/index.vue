<!--
文本绑定：{{msg}}
一次性绑定：<span v-once>这个将不会改变: {{ msg }}</span>
-->

<template>
    <div>
        <Kanban v-for="item in list" class="kanban todo" :options="options" :header-text="item.name">
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
    import PropCasing from './components/PropCasing.vue'
    import OneWayDataFlow from './components/OneWayDataFlow.vue'
    import PropValidation from './components/PropValidation.vue'
    import NonPropAttributes from './components/NonPropAttributes.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class Prop extends Vue {
        options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: 'Prop大小写',
                    rawHtml: require('!!html-loader!./components/PropCasing.vue'),
                    component: PropCasing
                },
                {
                    name: '单向数据流',
                    rawHtml: require('!!html-loader!./components/OneWayDataFlow.vue'),
                    component: OneWayDataFlow
                },
                {
                    name: 'prop类型验证',
                    rawHtml: require('!!html-loader!./components/PropValidation.vue'),
                    component: PropValidation
                },
                {
                    name: '非 Prop 的特性',
                    rawHtml: require('!!html-loader!./components/NonPropAttributes.vue'),
                    component: NonPropAttributes
                }
            ]
        }

    }
</script>
