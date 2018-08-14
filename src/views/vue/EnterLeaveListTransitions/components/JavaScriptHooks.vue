<template>
    <div>

        <div class="case-item">
            <h4>1. JavaScript 钩子</h4>

            <div id="example-4">
                <button @click="show = !show">
                    Toggle
                </button>
                <transition
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:leave="leave"
                        v-bind:css="false"
                >
                    <p v-if="show">
                        Demo
                    </p>
                </transition>
            </div>
        </div>


    </div>
</template>


<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'


    @Component
    export default class JavaScriptHooks extends Vue {
        show = true

        beforeEnter(el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
        }

        enter(el, done) {
            Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
            Velocity(el, {fontSize: '1em'}, {complete: done})
        }

        leave(el, done) {
            Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
            Velocity(el, {rotateZ: '100deg'}, {loop: 2})
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, {complete: done})
        }
    }
</script>

