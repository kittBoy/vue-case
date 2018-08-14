<!--
1. CSS 动画
2. CSS 过渡
-->


<template>
    <div>

        <div class="case-item">
            <h4>1. CSS 动画</h4>
            <div id="example-2">
                <button @click="show = !show">Toggle show</button>
                <transition name="bounce">
                    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim
                        libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et
                        netus.</p>
                </transition>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'


    @Component
    export default class CSSAnimations extends Vue {
        show = true
    }
</script>

<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>