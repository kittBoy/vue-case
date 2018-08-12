<!--
1. Prop的大小写
2. Prop的类型
-->


<template>
    <div>
        <div class="case-item">
            <h4>1. Prop的大小写</h4>
            <blog-post :post-title="postTitle"></blog-post>
        </div>

        <div class="case-item">
            <h4>2. Prop的类型</h4>
            <child-type
                    :title="title"
                    :likes="likes"
                    :isPublished="isPublished"
                    :commentIds="commentIds"
                    :author="author">
            </child-type>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import $Vue from 'vue/dist/vue.js'

    $Vue.component('blog-post', {
        props: ['postTitle'],
        template: '<div> {{ postTitle }} </div>'
    })

    $Vue.component('child-type', {
        props: {
            title: String,
            likes: Number,
            isPublished: Boolean,
            commentIds: Array,
            author: Object
        },
        template: '<div>' +
        '<div> String: {{ title }} </div>' +
        '<div> likes: {{ likes }} </div>' +
        '<div> Boolean: {{ isPublished.toString() }} </div>' +
        '<div> Array: {{ JSON.stringify(commentIds) }} </div>' +
        '<div> Object: {{ JSON.stringify(author) }} </div>' +
        '</div>'
    })

    @Component({
        components: {
            'blog-post': $Vue.component('blog-post'),
            'child-type': $Vue.component('child-type')
        }
    })
    export default class PropCasing extends Vue {
        postTitle = 1;
        title = 'hi'
        likes = 2
        isPublished = false
        commentIds = [1, 2]
        author = {name: 'goku'}
    }
</script>



