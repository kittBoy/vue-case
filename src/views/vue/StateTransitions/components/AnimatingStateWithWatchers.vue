<template>
    <div>

        <div class="case-item">
            <h4>1. 状态动画与侦听器</h4>
            <div id="animated-number-demo">
                <input v-model.number="number" type="number" step="20">
                <p>{{ animatedNumber }}</p>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'


    @Component
    export default class AnimatingStateWithWatchers extends Vue {

        number = 0
        tweenedNumber = 0


        get animatedNumber() {
            return this.tweenedNumber.toFixed(0);
        }

        @Watch('number')
        onNumberChange(newValue) {
            TweenLite.to(this.$data, 0.5, {tweenedNumber: newValue});
        }

    }
</script>
