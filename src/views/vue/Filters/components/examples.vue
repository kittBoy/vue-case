<template>
    <div>

        <div class="case-item">
            <h4>1. 基础</h4>
            <textarea v-model="msg"></textarea>
            <div> {{ msg | capitalize }}</div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'


    @Component({
        filters: {
            capitalize (value) {
                if (!value) {
                    return ''
                }
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    })
    export default class Examples extends Vue {
        msg = 'hi filter'
    }
</script>



