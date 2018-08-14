<template>
    <div class="app-wrapper" :class="classObj">
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script lang="ts">
    import {Watch, Component} from 'vue-property-decorator'
    import {Sidebar, AppMain, Navbar} from './components'
    import ResizeMixin from './mixin/ResizeHandler'

    const {body} = document
    const WIDTH = 1024
    const RATIO = 3
    @Component({
        components: {
            Sidebar,
            AppMain,
            Navbar
        }
    })
    export default class Layout extends ResizeMixin {

        @Watch('$route')
        onRouteChagne() {
            if (this.device === 'mobile' && this.sidebar.opened) {
                this.$store.dispatch('closeSideBar', {withoutAnimation: false})
            }
        }

        get sidebar() {
            return this.$store.state.app.sidebar
        }


        get device() {
            return this.$store.state.app.device
        }


        get classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === 'mobile'
            }
        }


        handleClickOutside() {
            this.$store.dispatch('closeSideBar', {withoutAnimation: false})
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
