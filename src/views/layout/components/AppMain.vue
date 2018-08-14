<template>
    <section class="app-main">

        <transition name="fade-transform" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>
    </section>
</template>


<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class AppMain extends Vue {
        get key() {
            return this.$route.fullPath
        }
    }
</script>

<style scoped>
    .app-main {
        /*84 = navbar + tags-view = 50 +34 */
        min-height: calc(100vh - 84px);
        position: relative;
        overflow: hidden;
        padding: 30px;
    }
</style>

