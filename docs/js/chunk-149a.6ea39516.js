(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-149a"],{"11e9":function(e,n,t){var r=t("52a7"),a=t("4630"),o=t("6821"),c=t("6a99"),i=t("69a8"),s=t("c69a"),u=Object.getOwnPropertyDescriptor;n.f=t("9e1e")?u:function(e,n){if(e=o(e),n=c(n,!0),s)try{return u(e,n)}catch(e){}if(i(e,n))return a(!r.f.call(e,n),e[n])}},"214f":function(e,n,t){"use strict";var r=t("32e9"),a=t("2aba"),o=t("79e5"),c=t("be13"),i=t("2b4c");e.exports=function(e,n,t){var s=i(e),u=t(c,s,""[e]),l=u[0],p=u[1];o(function(){var n={};return n[s]=function(){return 7},7!=""[e](n)})&&(a(String.prototype,e,l),r(RegExp.prototype,s,2==n?function(e,n){return p.call(e,this,n)}:function(e){return p.call(e,this)}))}},"52a7":function(e,n){n.f={}.propertyIsEnumerable},"5dbc":function(e,n,t){var r=t("d3f4"),a=t("8b97").set;e.exports=function(e,n,t){var o,c=n.constructor;return c!==t&&"function"==typeof c&&(o=c.prototype)!==t.prototype&&r(o)&&a&&a(e,o),e}},"61e1":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._l(e.list,function(n){return t("Kanban",{staticClass:"kanban todo",attrs:{options:e.options,"header-text":n.name}},[t("template",{slot:"left"},[t("CodeEditor",{staticClass:"app-codeEditor",attrs:{value:n.rawHtml}})],1),t("template",{slot:"right"},[t(n.component,{tag:"component"})],1)],2)}))},a=[],o=t("c665"),c=t("dc0a"),i=t("aa9a"),s=t("d328"),u=t("11d9"),l=t("9ab4"),p=t("60a3"),f=t("6260"),d=t("f0b0"),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"case-item"},[t("h4",[e._v("1. 渲染函数示列")]),t("anchored-heading",{attrs:{level:3}},[t("div",[e._v("234234")])])],1)])},v=[],m=(t("c5f6"),t("a481"),t("ba4c")),b=t.n(m),g=function e(n){return n.map(function(n){return n.children?e(n.children):n.text}).join("")};b.a.component("anchored-heading",{render:function(e){var n=g(this.$slots.default).toLowerCase().replace(/\W+/g,"-").replace(/(^\-|\-$)/g,"");return e("h"+this.level,[e("a",{attrs:{name:n,href:"#"+n}},this.$slots.default)])},props:{level:{type:Number,required:!0}}});var _=function(e){function n(){var e;return Object(o["a"])(this,n),e=Object(s["a"])(this,Object(u["a"])(n).apply(this,arguments)),e.message="hello",e}return Object(c["a"])(n,e),n}(p["e"]);_=l["a"]([Object(p["a"])({components:{"anchored-heading":b.a.component("anchored-heading")}})],_);var E=_,y=E,x=t("2877"),I=Object(x["a"])(y,h,v,!1,null,null,null);I.options.__file="CompleteExample.vue";var O=I.exports,N=function(e){function n(){var e;return Object(o["a"])(this,n),e=Object(s["a"])(this,Object(u["a"])(n).apply(this,arguments)),e.options={group:"mission"},e}return Object(i["a"])(n,[{key:"list",get:function(){return[{name:"渲染函数 & JSX",rawHtml:t("7ef1"),component:O}]}}]),Object(c["a"])(n,e),n}(p["e"]);N=l["a"]([Object(p["a"])({components:{Kanban:d["a"],CodeEditor:f["a"]}})],N);var C=N,j=C,w=Object(x["a"])(j,r,a,!1,null,null,null);w.options.__file="index.vue";n["default"]=w.exports},"7ef1":function(e,n){e.exports="<template>\r\n    <div>\r\n\r\n        <div class=\"case-item\">\r\n            <h4>1. 渲染函数示列</h4>\r\n            <anchored-heading :level=\"3\">\r\n                <div>234234</div>\r\n            </anchored-heading>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\n    import {Vue, Component} from 'vue-property-decorator'\r\n    import $Vue from 'vue/dist/vue.js'\r\n\r\n    const getChildrenTextContent = (children) => {\r\n        return children.map(node => {\r\n            return node.children\r\n                ? getChildrenTextContent(node.children)\r\n                : node.text\r\n        }).join('')\r\n    }\r\n\r\n    $Vue.component('anchored-heading', {\r\n        render (createElement) {\r\n            // create kebab-case id\r\n            const headingId = getChildrenTextContent(this.$slots.default)\r\n                .toLowerCase()\r\n                .replace(/\\W+/g, '-')\r\n                .replace(/(^\\-|\\-$)/g, '')\r\n\r\n            return createElement(\r\n                'h' + this.level,\r\n                [\r\n                    createElement('a', {\r\n                        attrs: {\r\n                            name: headingId,\r\n                            href: '#' + headingId\r\n                        }\r\n                    }, this.$slots.default)\r\n                ]\r\n            )\r\n        },\r\n        props: {\r\n            level: {\r\n                type: Number,\r\n                required: true\r\n            }\r\n        }\r\n    })\r\n\r\n    @Component({\r\n        components: {\r\n            'anchored-heading': $Vue.component('anchored-heading')\r\n        }\r\n    })\r\n    export default class CompleteExample extends Vue {\r\n        message = 'hello'\r\n    }\r\n<\/script>\r\n\r\n\r\n\r\n"},"8b97":function(e,n,t){var r=t("d3f4"),a=t("cb7c"),o=function(e,n){if(a(e),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,n,r){try{r=t("9b43")(Function.call,t("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),n=!(e instanceof Array)}catch(e){n=!0}return function(e,t){return o(e,t),n?e.__proto__=t:r(e,t),e}}({},!1):void 0),check:o}},9093:function(e,n,t){var r=t("ce10"),a=t("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},a481:function(e,n,t){t("214f")("replace",2,function(e,n,t){return[function(r,a){"use strict";var o=e(this),c=void 0==r?void 0:r[n];return void 0!==c?c.call(r,o,a):t.call(String(o),r,a)},t]})},aa77:function(e,n,t){var r=t("5ca1"),a=t("be13"),o=t("79e5"),c=t("fdef"),i="["+c+"]",s="​",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),p=function(e,n,t){var a={},i=o(function(){return!!c[e]()||s[e]()!=s}),u=a[e]=i?n(f):c[e];t&&(a[t]=u),r(r.P+r.F*i,"String",a)},f=p.trim=function(e,n){return e=String(a(e)),1&n&&(e=e.replace(u,"")),2&n&&(e=e.replace(l,"")),e};e.exports=p},c5f6:function(e,n,t){"use strict";var r=t("7726"),a=t("69a8"),o=t("2d95"),c=t("5dbc"),i=t("6a99"),s=t("79e5"),u=t("9093").f,l=t("11e9").f,p=t("86cc").f,f=t("aa77").trim,d="Number",h=r[d],v=h,m=h.prototype,b=o(t("2aeb")(m))==d,g="trim"in String.prototype,_=function(e){var n=i(e,!1);if("string"==typeof n&&n.length>2){n=g?n.trim():f(n,3);var t,r,a,o=n.charCodeAt(0);if(43===o||45===o){if(t=n.charCodeAt(2),88===t||120===t)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+n}for(var c,s=n.slice(2),u=0,l=s.length;u<l;u++)if(c=s.charCodeAt(u),c<48||c>a)return NaN;return parseInt(s,r)}}return+n};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var n=arguments.length<1?0:e,t=this;return t instanceof h&&(b?s(function(){m.valueOf.call(t)}):o(t)!=d)?c(new v(_(n)),t,h):_(n)};for(var E,y=t("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)a(v,E=y[x])&&!a(h,E)&&p(h,E,l(v,E));h.prototype=m,m.constructor=h,t("2aba")(r,d,h)}},fdef:function(e,n){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-149a.6ea39516.js.map