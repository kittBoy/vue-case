<!--
1. 单元素/组件的过渡
2. CSS 过渡
-->


<template>
    <div>

        <div class="case-item">
            <h4>1. 单元素/组件的过渡</h4>
            <div id="demo">
                <button v-on:click="show = !show">
                    Toggle
                </button>
                <transition name="fade">
                    <p v-if="show">hello</p>
                </transition>
            </div>
        </div>

        <div class="case-item">
            <h4>2. CSS 过渡</h4>
            <div id="example-1">
                <button @click="show = !show">
                    Toggle render
                </button>
                <transition name="slide-fade">
                    <p v-if="show">hello</p>
                </transition>
            </div>
        </div>

    </div>
</template>


<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'


    @Component
    export default class TransitioningSingleElementsComponents extends Vue {
        show = true
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>