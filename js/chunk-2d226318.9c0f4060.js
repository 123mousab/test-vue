(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226318"],{e82a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reportPage"},[e("h2",{staticClass:"mt-5"},[t._v(t._s(t.$t(t.config.crudHeader)))]),e("v-container",{attrs:{fluid:""}},[e("v-btn",{attrs:{color:"danger","hide-details":"",small:"",id:"print"},on:{click:t.print}},[t._v(t._s(t.$t("Print")))]),e("table",[e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v(t._s(t.$t("NameAr")))]),e("th",[t._v(t._s(t.$t("NameEn")))]),e("th",[t._v(t._s(t.$t("Status")))])])]),e("tbody",t._l(t.items,(function(i,s){return e("tr",{key:s},[e("td",[t._v(t._s(i.id))]),e("td",[t._v(t._s(i.name.ar))]),e("td",[t._v(t._s(i.name.en))]),e("td",[1==i.status?e("span",{staticStyle:{color:"green"}},[t._v(t._s(t.$t("Active")))]):0==i.status?e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.$t("InActive")))]):t._e()])])})),0)])],1)],1)},n=[],a={data(){return{items:[],config:{crudHeader:"Units",crudApi:"unit"}}},methods:{initData(){this.$store.dispatch(this.config.crudApi+"/listAll").then(t=>{this.items=t.data,localStorage.removeItem("filterReport")})},print(){window.print()}},created(){let t=document.getElementById("app_title");t.innerText=this.$t(this.config.crudHeader),this.initData()}},r=a,c=i("2877"),d=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d226318.9c0f4060.js.map