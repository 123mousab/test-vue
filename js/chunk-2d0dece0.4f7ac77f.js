(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dece0"],{"86e1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"breadCurmb mt-3"},[e("label",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("Home")))])],1),e("span",[t._v("/")]),e("label",{attrs:{active:""}},[t._v(t._s(t.$t("Resturant")))]),e("span",[t._v("/")]),e("label",{attrs:{active:""}},[t._v(t._s(t.$t("Recipies")))])]),e("v-dialog",{attrs:{width:t.config.deleteModalWidth},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e("v-card",[e("v-toolbar",{attrs:{color:"third",dense:"",flat:""}},[e("v-toolbar-title",{staticClass:"text-body-2 font-weight-bold white-clr"},[t._v(" "+t._s(t.$t("Confirm"))+" ")])],1),e("v-card-text",{staticClass:"py-0 pa-4 pt-4 black--text"},[e("h3",{staticClass:"clr-primary"},[t._v(" "+t._s(t.$t("AreYouSureYouWantToDelete"))+" ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"body-2 font-weight-bold",attrs:{color:"danger",text:"",small:""},nativeOn:{click:function(e){t.dialogDelete=!1}}},[t._v(t._s(t.$t("Cancel")))]),e("v-btn",{staticClass:"body-2 font-weight-bold",attrs:{color:"success",outlined:"",small:""},nativeOn:{click:function(e){return t.deleteItemConfirm.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("Ok")))])],1)],1)],1),e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[t._v(t._s(t.$t(t.config.tableName)))]),e("v-spacer"),e("v-dialog",{attrs:{width:t.config.modalFormWidth},on:{"click:outside":t.closeModal},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:i}){return[e("div",[e("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"info",small:""},on:{click:t.clearData}},"v-btn",i,!1),a),[e("span",{staticClass:"addNewLabel"},[t._v(t._s(t.$t("AddNew")))]),e("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:""}},[t._v("mdi-file")])],1),e("download-excel",{staticClass:"mb-2 mx-5 cursorPointer v-btn theme--dark v-size--small success v-btn v-btn--is-elevated v-btn--has-bg",attrs:{data:t.table.items,fields:t.table.itemExport,type:"xls",header:t.$t(t.config.tableName),worksheet:t.$t(t.config.tableName),name:t.$t(t.config.tableName)}},[e("span",{staticClass:"excelLabel"},[t._v(t._s(t.$t("ExportExcel")))]),e("v-icon",{staticClass:"my-0 mr-2 ml-2",staticStyle:{color:"#fff !important"},attrs:{dense:""}},[t._v("mdi-export")])],1),e("v-btn",{staticClass:"mb-2 mr-2 ml-2",attrs:{color:"danger",dark:"",small:""},on:{click:t.loadPDF}},[e("span",{staticClass:"pdfLabel"},[t._v(" "+t._s(t.$t("LoadPDF"))+" ")]),e("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:""}},[t._v("mdi-eye")])],1)],1)]}}])})],1),e("div",[e("v-row",[e("v-col",{attrs:{md:2}},[e("div",[e("label",[t._v(t._s(t.$t("Name")))]),e("v-text-field",{staticClass:"d-block my-2",attrs:{type:"text",name:"name_ar","hide-details":"",dense:"",outlined:""},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1)]),e("v-col",{attrs:{md:2}},[e("div",[e("label",[t._v(t._s(t.$t("Group")))]),e("v-autocomplete",{staticClass:"d-block my-2",attrs:{clearable:!1,name:"status","hide-details":"",dense:"",outlined:"",multiple:!0,"item-text":"name","item-value":"id",items:t.listGroup},model:{value:t.filters.group_id,callback:function(e){t.$set(t.filters,"group_id",e)},expression:"filters.group_id"}})],1)]),e("v-col",{attrs:{md:2}},[e("div",[e("label",[t._v(t._s(t.$t("IngredientPrimary")))]),e("v-autocomplete",{staticClass:"d-block my-2",attrs:{name:"ingredient_primary_id","data-vv-scope":"addEditValidation","hide-details":"",dense:"",outlined:"",multiple:"","item-value":"id","item-text":"name",items:t.listPrimaryIngredient,clearable:""},model:{value:t.filters.ingredient_primary_id,callback:function(e){t.$set(t.filters,"ingredient_primary_id",e)},expression:"filters.ingredient_primary_id"}})],1)]),e("v-col",{attrs:{md:2}},[e("div",[e("label",[t._v(t._s(t.$t("Status")))]),e("v-select",{staticClass:"d-block my-2",attrs:{clearable:!1,name:"status","hide-details":"",dense:"",outlined:"",multiple:!1,"item-text":"text","item-value":"value",items:t.filtersItems},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}})],1)]),e("v-col",{staticClass:"mt-6",attrs:{md:1}},[e("v-btn",{staticClass:"w-full h-btn white-clr",staticStyle:{display:"block","margin-top":"10px"},attrs:{color:"third","hide-details":"",small:""},on:{click:t.getDataFromApi}},[t._v(" "+t._s(t.$t("Filter"))+" ")])],1),e("v-col",{staticClass:"mt-6",attrs:{md:1}},[e("v-btn",{staticClass:"w-full h-btn white-clr",staticStyle:{display:"block","margin-top":"10px"},attrs:{color:"danger","hide-details":"",small:""},on:{click:t.clearFilters}},[t._v(" "+t._s(t.$t("Clear"))+" ")])],1)],1)],1),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.table.headers,items:t.table.items,loading:t.table.loading,"items-per-page":t.table.itemsPerPage,page:t.table.page,"hide-default-footer":"","loading-text":t.$t("LoadData")},on:{"update:page":function(e){return t.$set(t.table,"page",e)}},scopedSlots:t._u([{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-5 white-clr",attrs:{color:"third"}},[t._v(" "+t._s(t.$t("NoData"))+" ")])]},proxy:!0},{key:"item.status",fn:function({item:a}){return[a.status?e("p",{staticClass:"my-0 clr-success clickable",on:{click:function(e){return t.updateStatus(a)}}},[t._v(" "+t._s(t.$t("Active"))+" ")]):e("p",{staticClass:"my-0 clr-danger clickable",on:{click:function(e){return t.updateStatus(a)}}},[t._v(" "+t._s(t.$t("InActive"))+" ")])]}},{key:"item.actions",fn:function({item:a}){return[e("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:"",color:"success"},on:{click:function(e){return t.$router.push({name:"recipieaddEdit",params:{id:a.id}})}}},[t._v("mdi-pencil")]),e("v-icon",{staticClass:"my-0 mr-2 ml-2",attrs:{dense:"",color:"danger"},on:{click:function(e){t.formData=Object.assign({},a),t.dialogDelete=!0}}},[t._v("mdi-delete")])]}}])}),e("div",{staticClass:"text-center pt-2"},[t.table.length?e("v-pagination",{attrs:{"total-visible":"5",length:t.table.length},on:{input:function(e){return t.changePage(t.table.page)}},model:{value:t.table.page,callback:function(e){t.$set(t.table,"page",e)},expression:"table.page"}}):t._e()],1)],1)},l=[],s={name:"recipies",data(){return{filtersItems:[{text:this.$t("All"),value:null},{text:this.$t("Active"),value:1},{text:this.$t("InActive"),value:0}],config:{tableName:"RecipiesTable",crudHeader:"Recipies",crudApi:"recipie",filterWidth:"20rem",deleteModalWidth:"30rem",modalFormWidth:"50rem"},table:{page:1,length:null,itemsPerPage:500,loading:!1,items:[],itemExport:{"#":"id","الاسم عربي":{field:"name.ar",callback:t=>{if(t)return t}},"الاسم إنجليزي":{field:"name.en",callback:t=>{if(t)return t}},"السعر":{field:"price",callback:t=>{if(t)return t}},"السعر":{field:"total_cost",callback:t=>{if(t)return t}},"الميزة":{field:"group_name",callback:t=>{if(t)return t}},"المكون الأساسي":{field:"ingredient_primary_name",callback:t=>{if(t)return t}},"بروتين أم كارب":{field:"is_protein_text",callback:t=>{if(t)return t}},"المكون غير الأساسي":{field:"not_ingredient",callback:t=>{if(t)return t}},"الحالة":{field:"status",callback:t=>t?"فعال":"غير فعال"}},headers:[{text:"#",value:"id",width:"5rem"},{text:this.$t("NameAr"),value:"name.ar",width:"10rem"},{text:this.$t("NameEn"),value:"name.en",width:"10rem"},{text:this.$t("Price"),value:"total_cost",width:"7rem"},{text:this.$t("Group"),value:"group_name",width:"7rem"},{text:this.$t("IngredientPrimary"),value:"ingredient_primary_name",width:"9rem"},{text:this.$t("ProtinCarb"),value:"is_protein_text",width:"9rem"},{text:this.$t("NotIngredient"),value:"not_ingredient",width:"9rem"},{text:this.$t("Status"),value:"status",width:"8rem"},{text:this.$t("Actions"),value:"actions",sortable:!1,align:"center",width:"8rem"}]},filters:{name:null,status:null,group_id:null},formData:{id:0,image:null,name:{ar:null,en:null},status:null},drawer:!1,dialog:!1,dialogDelete:!1,listGroup:[],listPrimaryIngredient:[]}},methods:{loadPDF(){localStorage.setItem("filterReport",JSON.stringify(this.filters)),window.open("/reports/"+this.config.crudApi)},clearFilters(){for(let t in this.filters)this.filters[t]=null;this.getDataFromApi()},clearData(){this.formData={name:{ar:null,en:null},price:null,cost:null,number_of_meals:null,number_of_days:null,details:[],days:[]},this.$router.push({name:"recipieaddEdit"})},deleteItemConfirm(){this.deleteData(this.config.crudApi+"/removeData",this.formData.id).then(()=>{this.getDataFromApi(),this.dialogDelete=!1})},updateStatus(t){t.isLoading=!0,this.updateStatusData(this.config.crudApi+"/updateStatus",t.id).then(()=>{this.getDataFromApi()}).finally(()=>{t.isLoading=!1})},closeModal(){this.formData.id=0,this.dialog=!1,this.$validator.reset()},save(){this.$validator.validateAll("addEditValidation").then(t=>{if(!t)return this.notifyCustomError("Error","ValidationsErrors");this.saveUpdateData(this.config.crudApi+"/saveData",this.config.crudApi+"/updateData",this.formData).then(()=>{this.getDataFromApi(),this.closeModal()})})},getDataFromApi(t){this.table.loading=!0,this.getFrontEndData(this.config.crudApi+"/getData",t,this.filters).then(t=>{this.table.items=t.resources,this.table.length=Math.ceil(t.pagination.total/t.pagination.per_page)}).finally(()=>{this.table.loading=!1})},changePage(t){let e={page:t};this.getDataFromApi(e)}},mounted(){this.getDataFromApi(),this.$store.dispatch("recipie/listGroup").then(t=>{this.listGroup=t.data}),this.$store.dispatch("recipie/listPrimaryIngredient").then(t=>{this.listPrimaryIngredient=t.data})}},r=s,n=a("2877"),o=Object(n["a"])(r,i,l,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0dece0.4f7ac77f.js.map