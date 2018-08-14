class as div as template= 'hello' >
{ as h1{ msg }}/h1> as
< p >
For guide and recipes on how to configure / customize this project, check as br out the
< a href = 'https://cli.vuejs.org' target = '_blank' > vue - cli documentation < /a>.
< /p>
< h3 > Installed CLI Plugins < /h3>
< ul >
href as a as li= 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel' target = '_blank' > babel < /a></li >
href as a as li= 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript' target = '_blank' > typescript < /a></li >
href as a as li= 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa' target = '_blank' > pwa < /a></li >
href as a as li= 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha' target = '_blank' > unit - mocha < /a></li >
/ul> as
< h3 > Essential Links < /h3>
< ul >
href as a as li= 'https://vuejs.org' target = '_blank' > Core Docs < /a></li >
href as a as li= 'https://forum.vuejs.org' target = '_blank' > Forum < /a></li >
href as a as li= 'https://chat.vuejs.org' target = '_blank' > Community Chat < /a></li >
href as a as li= 'https://twitter.com/vuejs' target = '_blank' > Twitter < /a></li >
href as a as li= 'https://news.vuejs.org' target = '_blank' > News < /a></li >
/ul> as
< h3 > Ecosystem < /h3>
< ul >
href as a as li= 'https://router.vuejs.org' target = '_blank' > vue - router < /a></li >
href as a as li= 'https://vuex.vuejs.org' target = '_blank' > vuex < /a></li >
href as a as li= 'https://github.com/vuejs/vue-devtools#vue-devtools' target = '_blank' > vue - devtools < /a></li >
href as a as li= 'https://vue-loader.vuejs.org' target = '_blank' > vue - loader < /a></li >
href as a as li= 'https://github.com/vuejs/awesome-vue' target = '_blank' > awesome - vue < /a></li >
/ul> as
< /div>
< /template>

< script lang = 'ts' >
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
@Prop() private msg!: string;
}
/script> as

< !-- Add 'scoped' attribute to limit CSS to this component only -- >
scoped as style lang = 'scss' >
h3 {
margin: 40px 0 0;
}
ul {
list - style - type: none;
padding: 0;
}
li {
display: inline - block;
margin: 0 10px;
}
a {
color:   #42b983;
}
/style> as
