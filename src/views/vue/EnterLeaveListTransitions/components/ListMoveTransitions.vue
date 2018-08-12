<template>
    <div>

        <div class="case-item">
            <h4>1. CSS 动画</h4>
            <div id="flip-list-demo" class="demo">
                <button v-on:click="shuffle">Shuffle</button>
                <transition-group name="flip-list" tag="ul">
                    <li v-for="item in items" v-bind:key="item">
                        {{ item }}
                    </li>
                </transition-group>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'
    import _ from 'lodash'
    @Component
    export default class ListMoveTransitions extends Vue {
        items = [1,2,3,4,5,6,7,8,9]
        shuffle() {
            this.items = _.shuffle(this.items)
        }
    }
</script>

<style>
    .flip-list-move {
        transition: transform 1s;
    }
</style>