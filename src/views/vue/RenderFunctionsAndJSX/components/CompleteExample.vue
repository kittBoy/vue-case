<template>
    <div>

        <div class="case-item">
            <h4>1. 渲染函数示列</h4>
            <anchored-heading :level="3">
                <div>234234</div>
            </anchored-heading>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    const getChildrenTextContent = (children) => {
        return children.map(node => {
            return node.children
                ? getChildrenTextContent(node.children)
                : node.text
        }).join('')
    }

    $Vue.component('anchored-heading', {
        render (createElement) {
            // create kebab-case id
            const headingId = getChildrenTextContent(this.$slots.default)
                .toLowerCase()
                .replace(/\W+/g, '-')
                .replace(/(^\-|\-$)/g, '')

            return createElement(
                'h' + this.level,
                [
                    createElement('a', {
                        attrs: {
                            name: headingId,
                            href: '#' + headingId
                        }
                    }, this.$slots.default)
                ]
            )
        },
        props: {
            level: {
                type: Number,
                required: true
            }
        }
    })

    @Component({
        components: {
            'anchored-heading': $Vue.component('anchored-heading')
        }
    })
    export default class CompleteExample extends Vue {
        message = 'hello'
    }
</script>



