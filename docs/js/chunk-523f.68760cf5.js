(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-523f"],{"4c83":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",n._l(n.list,function(t){return e("Kanban",{staticClass:"kanban todo",attrs:{options:n.options,"header-text":t.name}},[e("template",{slot:"left"},[e("CodeEditor",{staticClass:"app-codeEditor",attrs:{value:t.rawHtml}})],1),e("template",{slot:"right"},[e(t.component,{tag:"component"})],1)],2)}))},i=[],a=e("c665"),o=e("dc0a"),s=e("aa9a"),l=e("d328"),c=e("11d9"),u=e("9ab4"),p=e("60a3"),m=e("6260"),d=e("f0b0"),f=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"case-item"},[e("h4",[n._v("1. 基础")]),e("el-button",{on:{click:n.hello}},[n._v("mixins")])],1)])},h=[],b={install:function(n){n.mixin({methods:{hello:function(){this.$notify({title:"Plugins",message:"hi"})}}})}};p["e"].use(b);var v=function(n){function t(){return Object(a["a"])(this,t),Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(o["a"])(t,n),t}(p["e"]);v=u["a"]([p["a"]],v);var x=v,j=x,O=e("2877"),g=Object(O["a"])(j,f,h,!1,null,null,null);g.options.__file="examples.vue";var _=g.exports,w=function(n){function t(){var n;return Object(a["a"])(this,t),n=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),n.options={group:"mission"},n}return Object(s["a"])(t,[{key:"list",get:function(){return[{name:"插件示列",rawHtml:e("bfd6"),component:_}]}}]),Object(o["a"])(t,n),t}(p["e"]);w=u["a"]([Object(p["a"])({components:{Kanban:d["a"],CodeEditor:m["a"]}})],w);var y=w,k=y,C=Object(O["a"])(k,r,i,!1,null,null,null);C.options.__file="index.vue";t["default"]=C.exports},bfd6:function(n,t){n.exports="<template>\r\n    <div>\r\n\r\n        <div class=\"case-item\">\r\n            <h4>1. 基础</h4>\r\n            <el-button @click=\"hello\">mixins</el-button>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\n    import {Vue, Component} from 'vue-property-decorator'\r\n\r\n    const myPlugins = {\r\n        install (Vue) {\r\n            Vue.mixin({\r\n                methods: {\r\n                    hello () {\r\n                        this.$notify({\r\n                            title: 'Plugins',\r\n                            message: 'hi'\r\n                        })\r\n                    }\r\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n    Vue.use(myPlugins)\r\n\r\n    @Component\r\n    export default class Examples extends Vue {\r\n    }\r\n<\/script>\r\n\r\n\r\n\r\n"}}]);
//# sourceMappingURL=chunk-523f.68760cf5.js.map