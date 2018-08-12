<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <el-menu
                mode="vertical"
                :show-timeout="200"
                :default-active="$route.path"
                :collapse="isCollapse"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#409EFF"
        >
            <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route"
                          :base-path="route.path"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {
        Getter,
    } from 'vuex-class'
    import SidebarItem from './SidebarItem.vue'

    @Component({
        components: {
            SidebarItem
        }
    })
    export default class Sidebar extends Vue {
        @Getter('sidebar') sidebar: any
        @Getter('permission_routers') permission_routers: any
        get isCollapse() {
            return !this.sidebar.opened
        }
    }
</script>
