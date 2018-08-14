<!--
1. 文本
2. 多行文本
3. 复选框
4. 单选按钮
5. 选择框
-->


<template>
    <div>
        <div class="case-item">
            <h4>1. 文本</h4>
            <input v-model="input" placeholder="edit me">
            <p>Message is: {{ input }}</p>
        </div>

        <div class="case-item">
            <h4>2. 多行文本</h4>
            <span>Multiline message is:</span>
            <p style="white-space: pre-line;">{{ textarea }}</p>
            <br>
            <textarea v-model="textarea" placeholder="add multiple lines"></textarea>
        </div>

        <div class="case-item">
            <h4>3. 复选框</h4>
            <div>
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">Jack</label>
                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">John</label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">Mike</label>
                <br>
                <span>Checked names: {{ checkedNames }}</span>
            </div>
        </div>

        <div class="case-item">
            <h4>4. 单选按钮</h4>
            <div>
                <input type="radio" id="one" value="One" v-model="picked">
                <label for="one">One</label>
                <br>
                <input type="radio" id="two" value="Two" v-model="picked">
                <label for="two">Two</label>
                <br>
                <span>Picked: {{ picked }}</span>
            </div>
        </div>

        <div class="case-item">
            <h4>5. 选择框</h4>
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>


    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'

    @Component
    export default class BasicUsage extends Vue {
        input = ''
        textarea = ''
        checkedNames = []
        picked = ''
        selected = ''
    }
</script>



