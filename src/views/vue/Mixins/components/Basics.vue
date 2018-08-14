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

    const myMixin = {
        created () {
            this.hello()
        },
        methods: {
            hello () {
                this.$notify({
                    title: 'hello',
                    message: 'hi'
                })
            }
        }
    }

    @Component({
        mixins: [myMixin]
    })
    export default class Basics extends Vue {
    }
</script>



