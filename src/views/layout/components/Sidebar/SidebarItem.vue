<template>
    <div v-if="!item.hidden&&item.children" class="menu-wrapper">

        <router-link v-if="hasOneShowingChild(item.children) && !onlyOneChild.children&&!item.alwaysShow"
                     :to="resolvePath(onlyOneChild.path)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
                <svg-icon v-if="onlyOneChild.meta&&onlyOneChild.meta.icon"
                          :icon-class="onlyOneChild.meta.icon"></svg-icon>
                <span v-if="onlyOneChild.meta&&onlyOneChild.meta.title" slot="title">{{generateTitle(onlyOneChild.meta.title)}}</span>
            </el-menu-item>
        </router-link>

        <el-submenu v-else :index="item.name||item.path">
            <template slot="title">
                <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
                <span v-if="item.meta&&item.meta.title" slot="title">{{generateTitle(item.meta.title)}}</span>
            </template>

            <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0"
                              :item="child" :key="child.path" :base-path="resolvePath(child.path)"></sidebar-item>

                <router-link v-else :to="resolvePath(child.path)" :key="child.name">
                    <el-menu-item :index="resolvePath(child.path)">
                        <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                        <span v-if="child.meta&&child.meta.title"
                              slot="title">{{generateTitle(child.meta.title)}}</span>
                    </el-menu-item>
                </router-link>
            </template>
        </el-submenu>

    </div>
</template>
//
<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator'
    import * as path from 'path'
    /*import {generateTitle} from '../../../../utils/i18n'*/

    @Component
    export default class SidebarItem extends Vue {
        @Prop() item!: object
        @Prop({default: false}) isNest: boolean
        @Prop({default: ''}) basePath: string


        onlyOneChild = null


        hasOneShowingChild(children: any) {
            const showingChildren = children.filter((item: any) => {
                if (item.hidden) {
                    return false
                } else {
                    // temp set(will be used if only has one showing child )
                    this.onlyOneChild = item
                    return true
                }
            })
            if (showingChildren.length === 1) {
                return true
            }
            return false
        }

        resolvePath(...paths: any[]) {
            return path.resolve(this.basePath, ...paths)
        }

        generateTitle(title: string): any {

            return title
        }

    }
</script>

