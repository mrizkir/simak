(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cf6e43f"],{"34a0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SystemConfigLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-desktop-mac-dashboard ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" ZOOM ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Setting akun Zoom untuk pertemuan tatap muka ")])]},proxy:!0}])}),a("v-container",[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v(" DATA AKUN ZOOM ")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"600px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:""}},i),[a("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialogfrm,callback:function(e){t.dialogfrm=e},expression:"dialogfrm"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-text-field",{attrs:{label:"ZOOM ID",outlined:"",disabled:!0},model:{value:t.formdata.zoom_id,callback:function(e){t.$set(t.formdata,"zoom_id",e)},expression:"formdata.zoom_id"}}),a("v-text-field",{attrs:{label:"EMAIL ZOOM",outlined:"",rules:t.rule_email},model:{value:t.formdata.email,callback:function(e){t.$set(t.formdata,"email",e)},expression:"formdata.email"}}),a("v-text-field",{attrs:{label:"API KEY",outlined:"",rules:t.rule_api_key},model:{value:t.formdata.api_key,callback:function(e){t.$set(t.formdata,"api_key",e)},expression:"formdata.api_key"}}),a("v-text-field",{attrs:{label:"API SECRET",outlined:"",rules:t.rule_api_secret},model:{value:t.formdata.api_secret,callback:function(e){t.$set(t.formdata,"api_secret",e)},expression:"formdata.api_secret"}}),a("v-text-field",{attrs:{label:"IM TOKEN",outlined:"",rules:t.rule_im_token},model:{value:t.formdata.im_token,callback:function(e){t.$set(t.formdata,"im_token",e)},expression:"formdata.im_token"}}),a("v-text-field",{attrs:{label:"JWT TOKEN",outlined:"",disabled:!0},model:{value:t.formdata.jwt_token,callback:function(e){t.$set(t.formdata,"jwt_token",e)},expression:"formdata.jwt_token"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogfrm(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"800px",persistent:""},model:{value:t.dialogdetailitem,callback:function(e){t.dialogdetailitem=e},expression:"dialogdetailitem"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("DETAIL DATA")])]),a("v-card-text",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("ID :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("ZOOM ID :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.zoom_id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("EMAIL :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.email)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("API KEY :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.api_key)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("API SECRET :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.api_secret)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("IM TOKEN :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.im_token)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("JWT TOKEN :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.jwt_token)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("STATUS :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.status)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("DESC :")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.desc)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("CREATED / UPDATED :")]),a("v-card-subtitle",[t._v(" "+t._s(t.$date(t.formdata.created_at).format("DD/MM/YYYY HH:mm"))+" / "+t._s(t.$date(t.formdata.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogdetailitem(e)}}},[t._v("KELUAR")])],1)],1)],1)],1)]},proxy:!0},{key:"item.id",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.id)+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.viewItem(i)}}},[t._v(" mdi-eye ")]),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:"",disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"expanded-item",fn:function(e){var i=e.headers,s=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(s.id)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")]),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"mb-2 white--text",attrs:{block:"",elevation:"2",color:"green",disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.sink(s)}}},[t._v("SINKRONISASI ")])],1)],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},s=[],o=(a("a434"),a("96cf"),a("1da1")),n=a("6135"),r=a("e477"),d={name:"Zoom",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"PLUGIN - ZOOM",disabled:!0,href:"#"}],this.initialize()},data:function(){return{btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"ZOOM ID",value:"zoom_id"},{text:"EMAIL ZOOM",value:"email"},{text:"API KEY",value:"api_key"},{text:"STATUS",value:"status"},{text:"KETERANGAN",value:"desc"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",dialogfrm:!1,dialogdetailitem:!1,form_valid:!0,formdata:{id:0,zoom_id:"",email:"",api_key:"",api_secret:"",im_token:"",jwt_token:"",status:"",desc:"",created_at:"",updated_at:""},formdefault:{id:0,zoom_id:"",email:"",api_key:"",api_secret:"",im_token:"",jwt_token:"",status:"",desc:"",created_at:"",updated_at:""},editedIndex:-1,rule_email:[function(t){return!!t||"Mohon untuk mengisi Email !!!"},function(t){return/.+@.+\..+/.test(t)||"Format E-mail mohon di isi dengan benar"}],rule_api_key:[function(t){return!!t||"Mohon untuk mengisi API Key !!!"}],rule_api_secret:[function(t){return!!t||"Mohon untuk mengisi API Secret !!!"}],rule_im_token:[function(t){return!!t||"Mohon mengisi IM Token !!!"}]}},methods:{initialize:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("https://api.stmikbandungbali.ac.id/h2h/zoom",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.datatable=a.zoom,e.datatableLoading=!1})).catch((function(){e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},viewItem:function(t){this.formdata=t,this.dialogdetailitem=!0},editItem:function(t){this.editedIndex=this.datatable.indexOf(t),this.formdata=Object.assign({},t),this.dialogfrm=!0},save:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=9;break}if(this.btnLoading=!0,!(this.editedIndex>-1)){t.next=7;break}return t.next=5,this.$ajax.post("https://api.stmikbandungbali.ac.id/h2h/zoom/"+this.formdata.id,{_method:"PUT",email:this.formdata.email,api_key:this.formdata.api_key,api_secret:this.formdata.api_secret,im_token:this.formdata.im_token},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;Object.assign(e.datatable[e.editedIndex],a.zoom),e.closedialogfrm(),e.btnLoading=!1})).catch((function(){e.btnLoading=!1}));case 5:t.next=9;break;case 7:return t.next=9,this.$ajax.post("https://api.stmikbandungbali.ac.id/h2h/zoom/store",{email:this.formdata.email,api_key:this.formdata.api_key,api_secret:this.formdata.api_secret,im_token:this.formdata.im_token},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.datatable.push(a.zoom),e.closedialogfrm(),e.btnLoading=!1})).catch((function(){e.btnLoading=!1}));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sink:function(t){var e=this;this.$root.$confirm.open("Sinkronisasi","Sinkronasi Akun Zoom dengan ID "+t.id+" ?",{color:"yellow"}).then((function(a){a&&(e.btnLoading=!0,e.$ajax.get("https://api.stmikbandungbali.ac.id/h2h/zoom/sync/"+t.id,{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(){e.$router.go(),e.btnLoading=!1})).catch((function(){e.btnLoading=!1})))}))},deleteItem:function(t){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus Akun Zoom dengan ID "+t.id+" ?",{color:"red"}).then((function(a){a&&(e.btnLoading=!0,e.$ajax.post("https://api.stmikbandungbali.ac.id/h2h/zoom/"+t.id,{_method:"DELETE"},{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(){var a=e.datatable.indexOf(t);e.datatable.splice(a,1),e.btnLoading=!1})).catch((function(){e.btnLoading=!1})))}))},closedialogdetailitem:function(){var t=this;this.dialogdetailitem=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)},closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1,t.$refs.frmdata.reset()}),300)}},computed:{formTitle:function(){return-1===this.editedIndex?"TAMBAH DATA":"UBAH DATA"}},components:{SystemConfigLayout:n["a"],ModuleHeader:r["a"]}},l=d,c=a("2877"),u=a("6544"),m=a.n(u),v=a("0798"),f=a("2bc5"),h=a("8336"),p=a("b0af"),_=a("99d9"),b=a("62ad"),g=a("a523"),k=a("8fea"),T=a("169a"),A=a("ce7e"),S=a("4bd4"),E=a("132d"),x=a("6b53"),y=a("0fd9"),I=a("2fa4"),C=a("8654"),O=a("71d9"),w=a("2a7f"),$=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=$.exports;m()($,{VAlert:v["a"],VBreadcrumbs:f["a"],VBtn:h["a"],VCard:p["a"],VCardActions:_["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VCol:b["a"],VContainer:g["a"],VDataTable:k["a"],VDialog:T["a"],VDivider:A["a"],VForm:S["a"],VIcon:E["a"],VResponsive:x["a"],VRow:y["a"],VSpacer:I["a"],VTextField:C["a"],VToolbar:O["a"],VToolbarTitle:w["b"]})},"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),s=a("58df"),o=a("7e2b"),n=a("3206");e["a"]=Object(s["a"])(o["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"553a":function(t,e,a){"use strict";a("a9e3"),a("c7cd");var i=a("5530"),s=(a("b5b6"),a("8dd9")),o=a("3a66"),n=a("d10f"),r=a("58df"),d=a("80d2");e["a"]=Object(r["a"])(s["a"],Object(o["a"])("footer",["height","inset"]),n["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(d["g"])(t),left:Object(d["g"])(this.computedLeft),right:Object(d["g"])(this.computedRight),bottom:Object(d["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},6135:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),a("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-identifier")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/variables"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-variable")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" VARIABLES ")])],1)],1):t._e(),a("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-page-layout-header")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),a("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/cache"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-cached")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CACHE ")])],1)],1):t._e(),a("v-subheader",[t._v("PLUGIN")]),t.CAN_ACCESS("PLUGINS-H2H-ZOOMAPI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-setting/zoom"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" ZOOM ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?a("v-subheader",[t._v("THEMES")]):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-setting/themes/colordashboard"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" WARNA DASHBOARD ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-setting/themes/layout"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" LAYOUT ")])],1)],1):t._e()],1)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),a("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-divider"),a("v-card-text",{staticClass:"py-2 white--text text-center"},[a("strong",[t._v("SIMAK (2021-2022)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),a("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],o=(a("ac1f"),a("5319"),a("5530")),n=a("2f62"),r={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(o["a"])(Object(o["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},d=r,l=a("2877"),c=a("6544"),u=a.n(c),m=a("40dc"),v=a("5bc1"),f=a("8212"),h=a("8336"),p=a("b0af"),_=a("99d9"),b=a("ce7e"),g=a("553a"),k=a("132d"),T=a("adda"),A=a("8860"),S=a("da13"),E=a("8270"),x=a("5d23"),y=a("34c3"),I=a("f6c4"),C=a("e449"),O=a("f774"),w=a("2fa4"),$=a("e0c7"),L=a("afd9"),V=a("2a7f"),M=Object(l["a"])(d,i,s,!1,null,null,null);e["a"]=M.exports;u()(M,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:f["a"],VBtn:h["a"],VCard:p["a"],VCardText:_["c"],VDivider:b["a"],VFooter:g["a"],VIcon:k["a"],VImg:T["a"],VList:A["a"],VListItem:S["a"],VListItemAvatar:E["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:I["a"],VMenu:C["a"],VNavigationDrawer:O["a"],VSpacer:w["a"],VSubheader:$["a"],VSystemBar:L["a"],VToolbarTitle:V["b"]})},b5b6:function(t,e,a){}}]);