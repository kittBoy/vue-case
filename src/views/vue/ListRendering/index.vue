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
    import MappingArray2ElementsWithVfor from './components/MappingArray2ElementsWithVfor.vue'
    import ArrayChangeDetection from './components/ArrayChangeDetection.vue'
    import ObjectChangeDetectionCaveats from './components/ObjectChangeDetectionCaveats.vue'
    import VForWithARange from './components/VForWithARange.vue'

    @Component({
        components: {
            Kanban,
            CodeEditor
        }
    })
    export default class ConditionalRendering extends Vue {
        options = {
            group: 'mission'
        }

        get list() {
            return [
                {
                    name: '用 v-for 把一个数组对应为一组元素',
                    rawHtml: require('!!html-loader!./components/MappingArray2ElementsWithVfor.vue'),
                    component: MappingArray2ElementsWithVfor
                }, {
                    name: '数组更新检测',
                    rawHtml: require('!!html-loader!./components/ArrayChangeDetection.vue'),
                    component: ArrayChangeDetection
                }, {
                    name: '对象更改检测注意事项',
                    rawHtml: require('!!html-loader!./components/ObjectChangeDetectionCaveats.vue'),
                    component: ObjectChangeDetectionCaveats
                }, {
                    name: 'v-for相关内容',
                    rawHtml: require('!!html-loader!./components/VForWithARange.vue'),
                    component: VForWithARange
                }
            ]
        }

    }
</script>
