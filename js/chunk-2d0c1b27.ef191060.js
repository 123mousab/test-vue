(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1b27"],{"46c2":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"breadCurmb mt-3"},[a("label",[a("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("Home")))])],1),a("span",[t._v("/")]),a("label",{attrs:{active:""}},[t._v(t._s(t.$t("SystemConstant")))]),a("span",[t._v("/")]),a("label",{attrs:{active:""}},[t._v(t._s(t.$t("Tools")))])]),a("v-dialog",{attrs:{width:t.config.deleteModalWidth},model:{value:t.dialogDelete,callback:function(a){t.dialogDelete=a},expression:"dialogDelete"}},[a("v-card",[a("v-toolbar",{attrs:{color:"third",dense:"",flat:""}},[a("v-toolbar-title",{staticClass:"text-body-2 font-weight-bold white-clr"},[t._v(" "+t._s(t.$t("Confirm"))+" ")])],1),a("v-card-text",{staticClass:"py-0 pa-4 pt-4 black--text"},[a("h3",{staticClass:"clr-primary"},[t._v(" "+t._s(t.$t("AreYouSureYouWantToDelete"))+" ")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"body-2 font-weight-bold",attrs:{color:"danger",text:"",small:""},nativeOn:{click:function(a){t.dialogDelete=!1}}},[t._v(t._s(t.$t("Cancel")))]),a("v-btn",{staticClass:"body-2 font-weight-bold",attrs:{color:"success",outlined:"",small:""},nativeOn:{click:function(a){return t.deleteItemConfirm.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("Ok")))])],1)],1)],1),a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v(t._s(t.$t(t.config.tableName)))]),a("v-spacer"),a("v-dialog",{attrs:{width:t.config.modalFormWidth},on:{"click:outside":t.closeModal},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:s}){return[a("div",[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"info",small:""},on:{click:t.clearData}},"v-btn",s,!1),e),[a("span",{staticClass:"addNewLabel"},[t._v(t._s(t.$t("AddNew")))]),a("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:""}},[t._v("mdi-file")])],1),a("download-excel",{staticClass:"mb-2 mx-5 cursorPointer v-btn theme--dark v-size--small success v-btn v-btn--is-elevated v-btn--has-bg",attrs:{data:t.table.items,fields:t.table.itemExport,type:"xls",header:t.$t(t.config.tableName),worksheet:t.$t(t.config.tableName),name:t.$t(t.config.tableName)}},[a("span",{staticClass:"excelLabel"},[t._v(t._s(t.$t("ExportExcel")))]),a("v-icon",{staticClass:"my-0 mr-2 ml-2",staticStyle:{color:"#fff !important"},attrs:{dense:""}},[t._v("mdi-export")])],1),a("v-btn",{staticClass:"mb-2 mr-2 ml-2",attrs:{color:"danger",dark:"",small:""},on:{click:t.loadPDF}},[a("span",{staticClass:"pdfLabel"},[t._v(" "+t._s(t.$t("LoadPDF"))+" ")]),a("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:""}},[t._v("mdi-eye")])],1)],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[t.dialog?a("div",[a("v-card",[a("v-card-title",[t.formData.id>0?a("span",{staticClass:"text-h5"},[t._v(" "+t._s(t.$t("Edit"))+" ")]):a("span",{staticClass:"text-h5"},[t._v(" "+t._s(t.$t("Add"))+" ")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:4}},[a("div",{class:{"has-error":t.errors.has("addEditValidation.name_ar")}},[a("label",[t._v(t._s(t.$t("NameAr")))]),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"d-block my-2",attrs:{type:"text",name:"name_ar","data-vv-scope":"addEditValidation","data-vv-as":t.$t("NameAr"),"hide-details":"",dense:"",outlined:""},model:{value:t.formData.name.ar,callback:function(a){t.$set(t.formData.name,"ar",a)},expression:"formData.name.ar"}})],1),t.errors.has("addEditValidation.name_ar")?a("div",{staticClass:"help-block"},[t._v(" "+t._s(t.errors.first("addEditValidation.name_ar"))+" ")]):t._e()]),a("v-col",{staticClass:"py-0",attrs:{cols:4}},[a("div",{class:{"has-error":t.errors.has("addEditValidation.name_en")}},[a("label",[t._v(t._s(t.$t("NameEn")))]),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"",expression:"''"}],staticClass:"d-block my-2",attrs:{type:"text",name:"name_en","data-vv-scope":"addEditValidation","data-vv-as":t.$t("NameEn"),"hide-details":"",dense:"",outlined:""},model:{value:t.formData.name.en,callback:function(a){t.$set(t.formData.name,"en",a)},expression:"formData.name.en"}})],1),t.errors.has("addEditValidation.name_en")?a("div",{staticClass:"help-block"},[t._v(" "+t._s(t.errors.first("addEditValidation.name_en"))+" ")]):t._e()])],1)],1)],1),a("v-card-actions",[a("v-container",[a("v-row",{staticClass:"float-left"},[a("v-btn",{staticClass:"mr-2 ml-2",attrs:{color:"danger",dark:"",text:"",small:""},on:{click:t.closeModal}},[t._v(" "+t._s(t.$t("Cancel"))+" ")]),a("v-btn",{staticClass:"mr-2 ml-5",attrs:{color:"success",dark:"",outlined:"",small:""},on:{click:t.save}},[t._v(" "+t._s(t.$t("Save"))+" ")])],1)],1)],1)],1)],1):t._e()])],1),a("div",[a("v-row",[a("v-col",{attrs:{md:3}},[a("div",[a("label",[t._v(t._s(t.$t("Name")))]),a("v-text-field",{staticClass:"d-block my-2",attrs:{type:"text",name:"name_ar","hide-details":"",dense:"",outlined:""},model:{value:t.filters.name,callback:function(a){t.$set(t.filters,"name",a)},expression:"filters.name"}})],1)]),a("v-col",{attrs:{md:3}},[a("div",[a("label",[t._v(t._s(t.$t("Status")))]),a("v-select",{staticClass:"d-block my-2",attrs:{clearable:!1,name:"status","hide-details":"",dense:"",outlined:"",multiple:!1,"item-text":"text","item-value":"value",items:t.filtersItems},model:{value:t.filters.status,callback:function(a){t.$set(t.filters,"status",a)},expression:"filters.status"}})],1)]),a("v-col",{staticClass:"mt-6",attrs:{md:1}},[a("v-btn",{staticClass:"w-full h-btn white-clr",staticStyle:{display:"block","margin-top":"10px"},attrs:{color:"third","hide-details":"",small:""},on:{click:t.getDataFromApi}},[t._v(" "+t._s(t.$t("Filter"))+" ")])],1),a("v-col",{staticClass:"mt-6",attrs:{md:1}},[a("v-btn",{staticClass:"w-full h-btn white-clr",staticStyle:{display:"block","margin-top":"10px"},attrs:{color:"danger","hide-details":"",small:""},on:{click:t.clearFilters}},[t._v(" "+t._s(t.$t("Clear"))+" ")])],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.table.headers,items:t.table.items,loading:t.table.loading,"items-per-page":t.table.itemsPerPage,page:t.table.page,"hide-default-footer":"","loading-text":t.$t("LoadData")},on:{"update:page":function(a){return t.$set(t.table,"page",a)}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-alert",{staticClass:"mt-5 white-clr",attrs:{color:"third"}},[t._v(" "+t._s(t.$t("NoData"))+" ")])]},proxy:!0},{key:"item.status",fn:function({item:e}){return[e.status?a("p",{staticClass:"my-0 clr-success clickable",on:{click:function(a){return t.updateStatus(e)}}},[t._v(" "+t._s(t.$t("Active"))+" ")]):a("p",{staticClass:"my-0 clr-danger clickable",on:{click:function(a){return t.updateStatus(e)}}},[t._v(" "+t._s(t.$t("InActive"))+" ")])]}},{key:"item.actions",fn:function({item:e}){return[a("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:"",color:"success"},on:{click:function(a){t.formData=Object.assign({},e),t.dialog=!0}}},[t._v("mdi-pencil")]),a("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:"",color:"danger"},on:{click:function(a){t.formData=Object.assign({},e),t.dialogDelete=!0}}},[t._v("mdi-delete")])]}}])}),a("div",{staticClass:"text-center pt-2"},[t.table.length?a("v-pagination",{attrs:{"total-visible":"5",length:t.table.length},on:{input:function(a){return t.changePage(t.table.page)}},model:{value:t.table.page,callback:function(a){t.$set(t.table,"page",a)},expression:"table.page"}}):t._e()],1)],1)},l=[],i={name:"tools",data(){return{filtersItems:[{text:this.$t("All"),value:null},{text:this.$t("Active"),value:1},{text:this.$t("InActive"),value:0}],config:{tableName:"ToolsTable",crudHeader:"Tools",crudApi:"tool",filterWidth:"20rem",deleteModalWidth:"30rem",modalFormWidth:"50rem"},table:{page:1,length:null,itemsPerPage:10,loading:!1,items:[],itemExport:{"#":"id","الاسم عربي":{field:"name.ar",callback:t=>{if(t)return t}},"الاسم إنجليزي":{field:"name.en",callback:t=>{if(t)return t}},"الحالة":{field:"status",callback:t=>t?"فعال":"غير فعال"}},headers:[{text:"#",value:"id",width:"5rem"},{text:this.$t("NameAr"),value:"name.ar",width:"10rem"},{text:this.$t("NameEn"),value:"name.en",width:"10rem"},{text:this.$t("Status"),value:"status",width:"8rem"},{text:this.$t("Actions"),value:"actions",sortable:!1,align:"center",width:"8rem"}]},filters:{name:null,status:null},formData:{id:0,image:null,name:{ar:null,en:null},status:null},drawer:!1,dialog:!1,dialogDelete:!1}},methods:{loadPDF(){localStorage.setItem("filterReport",JSON.stringify(this.filters)),window.open("/reports/"+this.config.crudApi)},clearFilters(){for(let t in this.filters)this.filters[t]=null;this.getDataFromApi()},clearData(){this.formData={name:{ar:null,en:null},image:null},this.$validator.reset()},deleteItemConfirm(){this.deleteData(this.config.crudApi+"/removeData",this.formData.id).then(()=>{this.getDataFromApi(),this.dialogDelete=!1})},updateStatus(t){t.isLoading=!0,this.updateStatusData(this.config.crudApi+"/updateStatus",t.id).then(()=>{this.getDataFromApi()}).finally(()=>{t.isLoading=!1})},closeModal(){this.formData.id=0,this.dialog=!1,this.$validator.reset()},save(){this.$validator.validateAll("addEditValidation").then(t=>{if(!t)return this.notifyCustomError("Error","ValidationsErrors");this.saveUpdateData(this.config.crudApi+"/saveData",this.config.crudApi+"/updateData",this.formData).then(()=>{this.getDataFromApi(),this.closeModal()})})},getDataFromApi(t){this.table.loading=!0,this.getFrontEndData(this.config.crudApi+"/getData",t,this.filters).then(t=>{this.table.items=t.resources,this.table.length=Math.ceil(t.pagination.total/t.pagination.per_page)}).finally(()=>{this.table.loading=!1})},changePage(t){let a={page:t};this.getDataFromApi(a)}},mounted(){this.getDataFromApi()}},r=i,o=e("2877"),n=Object(o["a"])(r,s,l,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0c1b27.ef191060.js.map