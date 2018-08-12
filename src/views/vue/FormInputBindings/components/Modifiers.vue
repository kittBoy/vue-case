<!--
1. lazy
2. number
3. trim
-->


<template>
    <div>
        <div class="case-item" >
            <h4>1. lazy</h4>
            <input v-model.lazy="input" placeholder="edit me">
            <p>Message is: {{ input }}</p>
        </div>

        <div class="case-item" >
            <h4>2. number</h4>
            <input v-model.number="age" placeholder="edit me">
            <p>Message is: {{ typeof age}}</p>
        </div>

        <div class="case-item" >
            <h4>3. trim</h4>
            <input v-model.trim="msg">
            <p>Message is: {{ msg }}</p>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class Modifiers extends Vue {
        input = ''
        number = 1
        msg = ''
        age = 5
    }
</script>



