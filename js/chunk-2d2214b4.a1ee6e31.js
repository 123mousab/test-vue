(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2214b4"],{ca77:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reportPage"},[e("h2",{staticClass:"mt-5"},[t._v(t._s(t.$t(t.config.crudHeader)))]),e("v-container",{attrs:{fluid:""}},[e("v-btn",{attrs:{color:"danger","hide-details":"",small:"",id:"print"},on:{click:t.print}},[t._v(t._s(t.$t("Print")))]),e("table",[e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v(t._s(t.$t("NameAr")))]),e("th",[t._v(t._s(t.$t("NameEn")))]),e("th",[t._v(t._s(t.$t("Country")))]),e("th",[t._v(t._s(t.$t("City")))]),e("th",[t._v(t._s(t.$t("Status")))])])]),e("tbody",t._l(t.items,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(s.id))]),e("td",[t._v(t._s(s.name.ar))]),e("td",[t._v(t._s(s.name.en))]),e("td",[t._v(t._s(s.country_name))]),e("td",[t._v(t._s(s.city_name))]),e("td",[1==s.status?e("span",{staticStyle:{color:"green"}},[t._v(t._s(t.$t("Active")))]):0==s.status?e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.$t("InActive")))]):t._e()])])})),0)])],1)],1)},n=[],a={data(){return{items:[],config:{crudHeader:"Branches",crudApi:"branch"}}},methods:{initData(){this.$store.dispatch(this.config.crudApi+"/listAll").then(t=>{this.items=t.data,localStorage.removeItem("filterReport")})},print(){window.print()}},created(){let t=document.getElementById("app_title");t.innerText=this.$t(this.config.crudHeader),this.initData()}},r=a,c=s("2877"),d=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2214b4.a1ee6e31.js.map