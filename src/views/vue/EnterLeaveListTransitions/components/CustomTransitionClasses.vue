<template>
    <div>

        <div class="case-item">
            <h4>1. 自定义过渡的类名</h4>
            <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

            <div id="example-3">
                <button @click="show = !show">
                    Toggle render
                </button>
                <transition
                        name="custom-classes-transition"
                        enter-active-class="animated tada"
                        leave-active-class="animated bounceOutRight"
                >
                    <p v-if="show">hello</p>
                </transition>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'


    @Component
    export default class CustomTransitionClasses extends Vue {
        show = true
    }
</script>
