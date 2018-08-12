<!--
1. 内联模板
-->



<template>
    <div>

        <div class="case-item">
            <h4>1. 内联模板</h4>
            <child-component inline-template>
                <div>
                    <p> {{ childData }} </p>
                    <p>These are compiled as the component's own template.</p>
                    <p>Not parent's transclusion content.</p>
                </div>
            </child-component>
        </div>

    </div>
</template>


<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('child-component', {
        inject: ['provideData'],
        data: function(){
            return {
                childData: this.provideData
            }
        }
    })


    @Component({
        components:{
            'child-component': $Vue.component('child-component')
        }
    })

    export default class AlternateTemplateDefinitions extends Vue {
        @Provide() provideData = 'from ElementComponentAccess'
    }
</script>
