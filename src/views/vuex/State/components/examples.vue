<template>
    <div>

        <div class="case-item">
            <h4>1. 基础</h4>
            <div>from: {{ from }}</div>
            <div>msg: {{ msg }}</div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import { mapState } from 'vuex';

    @Component({
        computed: mapState('vuexState', [
            'msg',
            'from'
            ])
    })
    export default class Examples extends Vue {
    }
</script>



