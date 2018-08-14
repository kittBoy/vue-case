<template>
    <div>

        <div class="case-item">
            <h4>1. 基础</h4>
            <div>{{ count }}</div>
            <div><el-input v-model.number="num" @change="increment({ num })"/></div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import { mapMutations, mapGetters } from 'vuex';

    @Component({
        computed: {
            ...mapGetters('vuexMutations', [
                'count'
            ])
        },
        methods: {
            ...mapMutations('vuexMutations', [
                'increment'
            ])
        }
    })
    export default class Examples extends Vue {
        num = 0;
    }
</script>



