<template>
    <div>

        <div class="case-item">
            <h4>1. 基础</h4>
            <el-button @click="hello">mixins</el-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    const myPlugins = {
        install (Vue) {
            Vue.mixin({
                methods: {
                    hello () {
                        this.$notify({
                            title: 'Plugins',
                            message: 'hi'
                        })
                    }
                }
            })
        }
    }

    Vue.use(myPlugins)

    @Component
    export default class Examples extends Vue {
    }
</script>



