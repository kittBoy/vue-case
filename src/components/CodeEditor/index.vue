<template>
    <div class="json-editor">
        <textarea ref="textarea"></textarea>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
    import * as CodeMirror from 'codemirror'
    import 'codemirror/addon/lint/lint.css'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/theme/rubyblue.css'

    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/addon/lint/lint'

    @Component
    export default class CodeEditor extends Vue {
        @Prop() private value: string

        private jsonEditor: any

        private mounted() {
            this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea as HTMLTextAreaElement, {
                lineNumbers: true,
                mode: 'text/typescript',
                gutters: ['CodeMirror-lint-markers'],
                theme: 'rubyblue',
                lint: true
            })

            this.jsonEditor.setValue(this.value)
            this.jsonEditor.on('change', cm => {
                this.$emit('changed', cm.getValue())
                this.$emit('input', cm.getValue())
            })
        }

        @Watch('value')
        private onValueChange(value) {
            const EDITOR_VALUE = this.getValue()
            if (value !== EDITOR_VALUE) {
                this.jsonEditor.setValue(this.value)
            }
        }

        private getValue() {
            return this.getValue()
        }
    }
</script>

<style scoped>
    .json-editor {
        height: 100%;
        position: relative;
    }

    .json-editor >>> .CodeMirror {
        height: auto;
        min-height: 300px;
    }

    .json-editor >>> .CodeMirror-scroll {
        min-height: 300px;
    }

    .json-editor >>> .cm-s-rubyblue span.cm-string {
        color: #F08047;
    }
</style>
