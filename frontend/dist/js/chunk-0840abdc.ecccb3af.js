(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0840abdc"],{"431f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DataMasterLayout",{scopedSlots:t._u([{key:"filtersidebar",fn:function(){return[e("Filter9",{ref:"filter19",on:{ChangeTahunPendaftaran:t.ChangeTahunPendaftaran}})]},proxy:!0}])},[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-format-list-checks ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" PERSYARATAN PMB ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN PENDAFTARAN "+t._s(t.tahun_pendaftaran)+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk mengelola persyaratan PMB setiap tahun pendaftaran. ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","show-expand":"",expanded:t.expanded,"single-expand":!0,"disable-pagination":!0,"hide-default-footer":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR PERSYARATAN")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),t.$store.getters["auth/can"]("DMASTER-PERSYARATAN-PMB_STORE")?e("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"primary",dark:""},on:{click:function(a){return a.stopPropagation(),t.showDialogCopyPersyaratan(a)}}},[t._v("SALIN PERSYARATAN PMB")]):t._e(),t.$store.getters["auth/can"]("DMASTER-PERSYARATAN-PMB_STORE")?e("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(a){return a.stopPropagation(),t.tambahItem(a)}}},[t._v(" TAMBAH ")]):t._e(),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogfrm,callback:function(a){t.dialogfrm=a},expression:"dialogfrm"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-text-field",{attrs:{label:"NAMA PERSYARATAN",outlined:"",rules:t.rule_nama_persyaratan},model:{value:t.formdata.nama_persyaratan,callback:function(a){t.$set(t.formdata,"nama_persyaratan",a)},expression:"formdata.nama_persyaratan"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogfrm(a)}}},[t._v("BATAL")]),e("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),e("v-dialog",{attrs:{"max-width":"750px",persistent:""},model:{value:t.dialogdetailitem,callback:function(a){t.dialogdetailitem=a},expression:"dialogdetailitem"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("DETAIL DATA")])]),e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("ID :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("TAHUN PENDAFTARAN :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.ta)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NAMA PERSYARATAN :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.nama_persyaratan)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("CREATED :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.formdata.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("PROSES :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.proses)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("UPDATED :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.formdata.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogdetailitem(a)}}},[t._v("KELUAR")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogcopypersyaratan,callback:function(a){t.dialogcopypersyaratan=a},expression:"dialogcopypersyaratan"}},[e("v-form",{ref:"frmdialogcopypersyaratan",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("SALIN PERSYARATAN PMB")])]),e("v-card-text",[e("v-alert",{staticClass:"info",attrs:{dark:""}},[t._v(" Salin persyaratan PMB dari tahun pendaftaran berikut ke tahun akademik "+t._s(t.tahun_pendaftaran)+" ")]),e("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN PENDAFTARAN",rules:t.rule_dari_tahun_pendaftaran,outlined:""},model:{value:t.dari_tahun_pendaftaran,callback:function(a){t.dari_tahun_pendaftaran=a},expression:"dari_tahun_pendaftaran"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogsalinpersyaratan(a)}}},[t._v("BATAL")]),e("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.salinpersyaratan(a)}}},[t._v(" SALIN ")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.viewItem(i)}}},[t._v(" mdi-eye ")]),e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.editItem(i)}}},[t._v(" mdi-pencil ")]),e("v-icon",{attrs:{small:"",disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"expanded-item",fn:function(a){var i=a.headers,n=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:i.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("ID:")]),t._v(t._s(n.id)+" "),e("strong",[t._v("created_at:")]),t._v(t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],r=(e("a434"),e("5530")),s=(e("96cf"),e("1da1")),o=e("2f62"),l=e("94df"),d=e("e477"),c=e("6ba9"),u={name:"PersyaratanPMB",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"DATA MASTER",disabled:!1,href:"/dmaster"},{text:"PERSYARATAN PMB",disabled:!0,href:"#"}],this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"],this.initialize()},data:function(){return{firstloading:!0,tahun_pendaftaran:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"PROSES",value:"proses",sortable:!0,width:120},{text:"NAMA PERSYARATAN",value:"nama_persyaratan",sortable:!0},{text:"TA",value:"ta",sortable:!0,width:80,align:"center"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",dialogfrm:!1,dialogdetailitem:!1,dialogcopypersyaratan:!1,form_valid:!0,daftar_ta:[],dari_tahun_pendaftaran:null,formdata:{id:"",proses:"pmb",nama_persyaratan:null,prodi_id:null,ta:""},formdefault:{id:"",proses:"pmb",nama_persyaratan:null,prodi_id:null,ta:""},editedIndex:-1,rule_nama_persyaratan:[function(t){return!!t||"Mohon Nama Program Studi untuk diisi !!!"}],rule_dari_tahun_pendaftaran:[function(t){return!!t||"Mohon Tahun Pendaftaran sumber persyaratan untuk dipilih !!!"}]}},methods:{ChangeTahunPendaftaran:function(t){this.tahun_pendaftaran=t},initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/datamaster/persyaratan",{TA:this.tahun_pendaftaran},{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;a.datatable=e.persyaratan,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:this.firstloading=!1,this.$refs.filter19.setFirstTimeLoading(this.firstloading);case 5:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},tambahItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dialogfrm=!0;case 1:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),viewItem:function(t){this.formdata=t,this.dialogdetailitem=!0},editItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.editedIndex=this.datatable.indexOf(a),this.formdata=a,this.dialogfrm=!0;case 3:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),showDialogCopyPersyaratan:function(){for(var t=this.$store.getters["uiadmin/getDaftarTA"],a=0;a<t.length;a++){var e=t[a];this.tahun_pendaftaran!=e.value&&this.daftar_ta.push({value:e.value,text:e.text})}this.dialogcopypersyaratan=!0},save:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=9;break}if(this.btnLoading=!0,!(this.editedIndex>-1)){t.next=7;break}return t.next=5,this.$ajax.post("/datamaster/persyaratan/"+this.formdata.id,{_method:"PUT",nama_persyaratan:this.formdata.nama_persyaratan},{headers:{Authorization:this.TOKEN}}).then((function(){a.initialize(),a.btnLoading=!1,a.closedialogfrm()})).catch((function(){a.btnLoading=!1}));case 5:t.next=9;break;case 7:return t.next=9,this.$ajax.post("/datamaster/persyaratan/store",{proses:this.formdata.proses,nama_persyaratan:this.formdata.nama_persyaratan,ta:this.tahun_pendaftaran},{headers:{Authorization:this.TOKEN}}).then((function(){a.initialize(),a.btnLoading=!1,a.closedialogfrm()})).catch((function(){a.btnLoading=!1}));case 9:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),salinpersyaratan:function(){var t=this;this.$refs.frmdialogcopypersyaratan.validate()&&(this.btnLoading=!0,this.$ajax.post("/datamaster/persyaratan/salin/"+this.tahun_pendaftaran,{dari_tahun_pendaftaran:this.dari_tahun_pendaftaran,proses:"pmb"},{headers:{Authorization:this.TOKEN}}).then((function(a){var e=a.data;t.datatable=e.persyaratan,t.btnLoading=!1,t.closedialogsalinpersyaratan()})).catch((function(){t.btnLoading=!1})))},deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus persyaratan "+t.nama_persyaratan+" ?",{color:"red"}).then((function(e){e&&(a.btnLoading=!0,a.$ajax.post("/datamaster/persyaratan/"+t.id,{_method:"DELETE"},{headers:{Authorization:a.TOKEN}}).then((function(){var e=a.datatable.indexOf(t);a.datatable.splice(e,1),a.btnLoading=!1})).catch((function(){a.btnLoading=!1})))}))},closedialogdetailitem:function(){var t=this;this.dialogdetailitem=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)},closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.$refs.frmdata.resetValidation(),t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)},closedialogsalinpersyaratan:function(){var t=this;this.dialogcopypersyaratan=!1,setTimeout((function(){t.$refs.frmdialogcopypersyaratan.reset(),t.editedIndex=-1}),300)}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),{},{formTitle:function(){return-1===this.editedIndex?"TAMBAH PERSYARATAN PMB":"UBAH PERSYARATAN PMB"}}),watch:{tahun_pendaftaran:function(){this.firstloading||this.initialize()}},components:{DataMasterLayout:l["a"],ModuleHeader:d["a"],Filter9:c["a"]}},v=u,m=e("2877"),f=e("6544"),h=e.n(f),p=e("0798"),_=e("2bc5"),b=e("8336"),g=e("b0af"),A=e("99d9"),T=e("62ad"),y=e("a523"),x=e("8fea"),k=e("169a"),S=e("ce7e"),E=e("4bd4"),R=e("132d"),C=e("6b53"),w=e("0fd9"),P=e("b974"),O=e("2fa4"),N=e("8654"),$=e("71d9"),B=e("2a7f"),I=Object(m["a"])(v,i,n,!1,null,null,null);a["default"]=I.exports;h()(I,{VAlert:p["a"],VBreadcrumbs:_["a"],VBtn:b["a"],VCard:g["a"],VCardActions:A["a"],VCardSubtitle:A["b"],VCardText:A["c"],VCardTitle:A["d"],VCol:T["a"],VContainer:y["a"],VDataTable:x["a"],VDialog:k["a"],VDivider:S["a"],VForm:E["a"],VIcon:R["a"],VResponsive:C["a"],VRow:w["a"],VSelect:P["a"],VSpacer:O["a"],VTextField:N["a"],VToolbar:$["a"],VToolbarTitle:B["b"]})},"4bd4":function(t,a,e){"use strict";e("4de4"),e("7db0"),e("caad"),e("07ac"),e("2532"),e("159b");var i=e("5530"),n=e("58df"),r=e("7e2b"),s=e("3206");a["a"]=Object(n["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(a.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"553a":function(t,a,e){"use strict";e("a9e3"),e("c7cd");var i=e("5530"),n=(e("b5b6"),e("8dd9")),r=e("3a66"),s=e("d10f"),o=e("58df"),l=e("80d2");a["a"]=Object(o["a"])(n["a"],Object(r["a"])("footer",["height","inset"]),s["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["g"])(t),left:Object(l["g"])(this.computedLeft),right:Object(l["g"])(this.computedRight),bottom:Object(l["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var a=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,a,this.$slots.default)}})},"6ba9":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list-item",[e("v-list-item-content",[e("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN PENDAFTARAN",outlined:""},model:{value:t.tahun_pendaftaran,callback:function(a){t.tahun_pendaftaran=a},expression:"tahun_pendaftaran"}})],1)],1)},n=[],r={name:"FilterMode9",created:function(){this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"]},data:function(){return{firstloading:!0,daftar_ta:[],tahun_pendaftaran:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_pendaftaran:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunPendaftaran",t),this.$emit("changeTahunPendaftaran",t))}}},s=r,o=e("2877"),l=e("6544"),d=e.n(l),c=e("da13"),u=e("5d23"),v=e("b974"),m=Object(o["a"])(s,i,n,!1,null,null,null);a["a"]=m.exports;d()(m,{VListItem:c["a"],VListItemContent:u["a"],VSelect:v["a"]})},"94df":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("DMASTER-GROUP")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/dmaster"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-floor-b")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD DATA MASTER")])],1)],1):t._e(),e("v-subheader",[t._v("FASILITAS")]),e("v-list-item",{attrs:{link:"",to:"/dmaster/ruangkelas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-seat-legroom-extra")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" RUANG KELAS ")])],1)],1),e("v-subheader",[t._v("PMB")]),t.CAN_ACCESS("DMASTER-PERSYARATAN-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/persyaratanpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-format-list-checks")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERSYARATAN PMB ")])],1)],1):t._e(),e("v-subheader",[t._v("MAHASISWA")]),e("v-list-item",{attrs:{link:"",to:"/dmaster/statusmahasiswa"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-vertical-lock")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" STATUS MAHASISWA ")])],1)],1),t.CAN_ACCESS("DMASTER-KELAS_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/kelas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-google-classroom")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KELAS ")])],1)],1):t._e(),e("v-list-item",{attrs:{link:"",to:"/dmaster/jenjangstudi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-stairs-up")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" JENJANG STUDI ")])],1)],1),t.CAN_ACCESS("DMASTER-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?e("v-list-item",{attrs:{link:"",to:"/dmaster/fakultas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-PRODI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/programstudi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-assistant")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),e("v-subheader",[t._v("DOSEN")]),e("v-list-item",{attrs:{link:"",to:"/dmaster/jabatanakademik"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-chair-rolling")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" JABATAN AKADEMIK ")])],1)],1),e("v-subheader",[t._v("AKADEMIK")]),t.CAN_ACCESS("DMASTER-TA_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/ta"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAHUN AKADEMIK ")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),e("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[e("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[e("v-divider"),e("v-card-text",{staticClass:"py-2 white--text text-center"},[e("strong",[t._v("SIMAK (2021-2022)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),e("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[e("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},n=[],r=(e("ac1f"),e("5319"),e("5530")),s=e("2f62"),o={name:"DataMasterLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(s["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),c=e("6544"),u=e.n(c),v=e("40dc"),m=e("5bc1"),f=e("8212"),h=e("8336"),p=e("b0af"),_=e("99d9"),b=e("ce7e"),g=e("553a"),A=e("132d"),T=e("adda"),y=e("8860"),x=e("da13"),k=e("8270"),S=e("5d23"),E=e("34c3"),R=e("f6c4"),C=e("e449"),w=e("f774"),P=e("2fa4"),O=e("e0c7"),N=e("afd9"),$=e("2a7f"),B=Object(d["a"])(l,i,n,!1,null,null,null);a["a"]=B.exports;u()(B,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VAvatar:f["a"],VBtn:h["a"],VCard:p["a"],VCardText:_["c"],VDivider:b["a"],VFooter:g["a"],VIcon:A["a"],VImg:T["a"],VList:y["a"],VListItem:x["a"],VListItemAvatar:k["a"],VListItemContent:S["a"],VListItemIcon:E["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:R["a"],VMenu:C["a"],VNavigationDrawer:w["a"],VSpacer:P["a"],VSubheader:O["a"],VSystemBar:N["a"],VToolbarTitle:$["b"]})},b5b6:function(t,a,e){}}]);