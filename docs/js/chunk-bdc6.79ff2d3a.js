(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdc6"],{2016:function(n,t){n.exports="const vuexAction = {\r\n    namespaced: true,\r\n    state: {\r\n        count: 0,\r\n        isIncrement: true\r\n    },\r\n    mutations: {\r\n        increment(state, payload){\r\n            if(state.isIncrement){\r\n                state.count += payload.num\r\n            }\r\n        },\r\n        isIncrement(state, payload){\r\n            state.isIncrement = payload.isIncrement\r\n        }\r\n    },\r\n    actions: {\r\n        isIncrement ({ commit }) {\r\n            return new Promise((resolve, reject) => {\r\n                setTimeout(() => {\r\n                    const isIncrement = Math.random() > 0.5\r\n                    console.log(isIncrement)\r\n                    commit('isIncrement',{ isIncrement })\r\n                    resolve()\r\n                }, 1000)\r\n            })\r\n        },\r\n\r\n        increment ({ dispatch, commit }, payload) {\r\n            return dispatch('isIncrement').then(() => {\r\n                commit('increment', payload)\r\n            })\r\n        }\r\n    },\r\n    getters: {\r\n        count: state => 'count: ' + state.count,\r\n        isIncrement: state => '是否增加：' + state.isIncrement\r\n    }\r\n}\r\n\r\nexport default vuexAction\r\n"},"7a6d":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",n._l(n.list,function(t){return e("Kanban",{staticClass:"kanban todo",attrs:{"header-text":t.name}},[e("template",{slot:"left"},n._l(t.rawHtml,function(n){return e("CodeEditor",{staticClass:"app-codeEditor",attrs:{value:n}})})),e("template",{slot:"right"},[e(t.component,{tag:"component"})],1)],2)}))},c=[],a=e("c665"),o=e("dc0a"),i=e("aa9a"),s=e("d328"),u=e("11d9"),m=e("9ab4"),l=e("60a3"),p=e("6260"),d=e("f0b0"),v=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"case-item"},[e("h4",[n._v("1. 基础")]),e("div",[n._v(n._s(n.count))]),e("div",[n._v(" "+n._s(n.isIncrement))]),e("div",[e("el-input",{on:{change:function(t){n.increment({num:n.num})}},model:{value:n.num,callback:function(t){n.num=n._n(t)},expression:"num"}})],1)])])},f=[],b=e("c93e"),h=e("2f62"),O=function(n){function t(){var n;return Object(a["a"])(this,t),n=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),n.num=0,n}return Object(o["a"])(t,n),t}(l["e"]);O=m["a"]([Object(l["a"])({computed:Object(b["a"])({},Object(h["c"])("vuexAction",["count","isIncrement"])),methods:Object(b["a"])({},Object(h["b"])("vuexAction",["increment"]))})],O);var j=O,x=j,y=e("2877"),I=Object(y["a"])(x,v,f,!1,null,null,null);I.options.__file="examples.vue";var _=I.exports,g=function(n){function t(){return Object(a["a"])(this,t),Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(i["a"])(t,[{key:"list",get:function(){return[{name:"Action示例",rawHtml:[e("2016"),e("8912")],component:_}]}}]),Object(o["a"])(t,n),t}(l["e"]);g=m["a"]([Object(l["a"])({components:{Kanban:d["a"],CodeEditor:p["a"]}})],g);var w=g,A=w,k=Object(y["a"])(A,r,c,!1,null,null,null);k.options.__file="index.vue";t["default"]=k.exports},8912:function(n,t){n.exports="<template>\r\n    <div>\r\n\r\n        <div class=\"case-item\">\r\n            <h4>1. 基础</h4>\r\n            <div>{{ count }}</div>\r\n            <div> {{ isIncrement }}</div>\r\n            <div><el-input v-model.number=\"num\" @change=\"increment({ num })\"/></div>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\n    import {Vue, Component} from 'vue-property-decorator'\r\n    import { mapActions, mapGetters } from 'vuex';\r\n\r\n    @Component({\r\n        computed: {\r\n            ...mapGetters('vuexAction', [\r\n                'count',\r\n                'isIncrement'\r\n            ])\r\n        },\r\n        methods: {\r\n            ...mapActions('vuexAction', [\r\n                'increment'\r\n            ])\r\n        }\r\n    })\r\n    export default class Examples extends Vue {\r\n        num = 0;\r\n    }\r\n<\/script>\r\n\r\n\r\n\r\n"},c93e:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},c=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),c.forEach(function(t){r(n,t,e[t])})}return n}e.d(t,"a",function(){return c})}}]);
//# sourceMappingURL=chunk-bdc6.79ff2d3a.js.map