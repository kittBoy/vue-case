<!--
1. 依赖注入
数据是非响应式的
-->

<template>
    <div>

        <div class="case-item">
            <h4>1. 依赖注入</h4>
            <el-button @click="update">update</el-button>
            <el-button @click="cancelWatch">取消监听</el-button>
        </div>


    </div>
</template>

<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('child-component', {
        methods: {
            update () {
                this.$emit('update')
            }
        },
        template: '<button @click="update">update</button>'
    })


    @Component({
        components: {
            'child-component': $Vue.component('child-component')
        }
    })

    export default class ProgrammaticEventListeners extends Vue {
        @Provide() provideData = 'from ElementComponentAccess'

        mounted() {
            this.$on('update', function () {
                this.$notify({
                    title: 'child update',
                    message: '无限次监听'
                });
            })
            this.$once('update', ()=> {
                setTimeout(() => {
                    this.$notify({
                        title: 'child update',
                        message: '只监听一次'
                    });
                })
            })
        }

        cancelWatch() {
            this.$off('update')
            this.$notify({
                title: 'child update',
                message: '取消监听'
            });
        }

        update() {
            this.$emit('update')
        }

    }
</script>
