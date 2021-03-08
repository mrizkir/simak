(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5318f0ab"],{"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),s=a("58df"),n=a("7e2b"),r=a("3206");e["a"]=Object(s["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,e,a){"use strict";var i=a("5607"),s=a("2b0e");e["a"]=s["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"553a":function(t,e,a){"use strict";a("a9e3"),a("c7cd");var i=a("5530"),s=(a("b5b6"),a("8dd9")),n=a("3a66"),r=a("d10f"),o=a("58df"),l=a("80d2");e["a"]=Object(o["a"])(s["a"],Object(n["a"])("footer",["height","inset"]),r["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["g"])(t),left:Object(l["g"])(this.computedLeft),right:Object(l["g"])(this.computedRight),bottom:Object(l["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},"6ca7":function(t,e,a){},9487:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KeuanganLayout",{attrs:{showrightsidebar:!1}},[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-video-input-component ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" TRANSAKSI SPP ")]},proxy:!0},t.data_transaksi?{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK / SEMESTER TRANSAKSI: "+t._s(t.data_transaksi.ta)+" - "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.data_transaksi.idsmt))+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini digunakan untuk melakukan transaksi SPP mahasiswa baru dan lama. ")])]},proxy:!0}],null,!0)}),t.data_transaksi?a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("DATA TRANSAKSI "),a("v-chip",{attrs:{color:t.data_transaksi.style,dark:""}},[t._v(t._s(t.data_transaksi.nama_status))])],1),a("v-spacer"),a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.closeTambahTransaksi(t.transaksi_id)}}},[t._v(" mdi-close-thick ")])],1),a("v-card-text",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("ID TRANSAKSI:")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_transaksi.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("KODE BILLING :")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_transaksi.no_transaksi)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("NIM / NO.FORMULIR:")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_transaksi.nim)+" / "+t._s(t.data_transaksi.no_formulir)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("NAMA MAHASISWA:")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_transaksi.nama_mhs)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("PROGRAM STUDI:")]),a("v-card-subtitle",[t._v(" "+t._s(this.$store.getters["uiadmin/getProdiName"](t.data_transaksi.kjur))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("KELAS:")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_transaksi.nkelas)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("TOTAL:")]),a("v-card-subtitle",[t._v(" "+t._s(t._f("formatUang")(t.data_transaksi.total))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("CREATED / UPDATED :")]),a("v-card-subtitle",[t._v(" "+t._s(t.$date(t.data_transaksi.created_at).format("DD/MM/YYYY HH:mm"))+" / "+t._s(t.$date(t.data_transaksi.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.item_selected,"disable-pagination":!0,"hide-default-footer":!0,"item-key":"no_bulan",loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR BULAN SPP YANG AKAN DIBAYAR")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",disabled:!(t.item_selected.length>0)||1==t.data_transaksi.status||2==t.data_transaksi.status,loading:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)]},proxy:!0},{key:"item.biaya_kombi",fn:function(e){var a=e.item;return[t._v(" "+t._s(t._f("formatUang")(a.biaya_kombi))+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},t.item_selected.length>0?{key:"body.append",fn:function(){return[a("tr",{staticClass:"grey lighten-4 font-weight-black"},[a("td",[t._v("JUMLAH")]),a("td",[t._v(t._s(t.totalBulan)+" Bulan")]),a("td"),a("td",[t._v(t._s(t._f("formatUang")(t.totalBiayaKombi)))]),a("td")])]},proxy:!0}:null,{key:"no-data",fn:function(){return[t._v(" daftar bulan yang akan dibayar belum tersedia; silahkan pilih bulan di bawah ini. ")]},proxy:!0}],null,!0)})],1)],1)],1),0==t.data_transaksi.status?a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.enrichedDataTable,"disable-pagination":!0,"hide-default-footer":!0,"item-key":"id","show-select":"",loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR BULAN SPP")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer")],1)]},proxy:!0},{key:"item",fn:function(e){var i=e.item;return[a("tr",[a("td",[a("v-checkbox",{staticClass:"pa-0 ma-0",attrs:{disabled:1==i.status,ripple:!1,value:i,"hide-details":""},model:{value:t.item_selected,callback:function(e){t.item_selected=e},expression:"item_selected"}})],1),a("td",[t._v(" "+t._s(i.no_bulan)+" ")]),a("td",[t._v(" "+t._s(i.nama_bulan)+" ")]),a("td",[t._v(" "+t._s(i.tahun)+" ")]),a("td",[t._v(" "+t._s(t._f("formatUang")(i.biaya_kombi))+" ")]),a("td",[t._v("N.A")])])]}},{key:"no-data",fn:function(){return[t._v(" Data transaksi SPP belum tersedia ")]},proxy:!0}],null,!1,2398674361),model:{value:t.item_selected,callback:function(e){t.item_selected=e},expression:"item_selected"}})],1)],1):t._e()],1):t._e()],1)},s=[],n=(a("caad"),a("d81d"),a("a434"),a("5530")),r=(a("96cf"),a("1da1")),o=a("c8b0"),l=a("e477"),c={name:"TransaksiSPPTambah",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.transaksi_id=this.$route.params.transaksi_id,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KEUANGAN",disabled:!1,href:"/keuangan"},{text:"TRANSAKSI SPP",disabled:!1,href:"/keuangan/transaksi-spp"},{text:"TAMBAH",disabled:!0,href:"#"}],this.initialize(),this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"]},data:function(){return{transaksi_id:null,data_transaksi:null,item_selected:[],breadcrumbs:[],tahun_akademik:0,btnLoading:!1,datatableLoading:!1,datatable:[],headers:[{text:"NO. BULAN",value:"no_bulan",width:120,sortable:!1},{text:"BULAN",value:"nama_bulan",sortable:!1},{text:"TAHUN",value:"tahun",sortable:!1},{text:"BIAYA KOMBI",value:"biaya_kombi",sortable:!1},{text:"AKSI",value:"actions",sortable:!1,width:100}],form_valid:!0}},methods:{changeTahunAkademik:function(t){this.tahun_akademik=t},initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/keuangan/transaksi-spp/"+this.transaksi_id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.data_transaksi=a.transaksi,e.datatable=a.transaksi_detail,e.item_selected=a.item_selected,e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/keuangan/transaksi-spp/store",{id:this.transaksi_id,bulan_selected:JSON.stringify(Object.assign({},this.item_selected))},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.$router.go()})).catch((function(){e.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteItem:function(t){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data dengan ID '+item.id+' ?",{color:"red"}).then((function(a){if(a){e.btnLoading=!0;var i=[1,2,3,4,5,6,7,8,9,10,11,12];if(i.includes(t.id)){var s=e.item_selected.indexOf(t);e.item_selected.splice(s,1),e.btnLoading=!1}else e.$ajax.post("/keuangan/transaksi-spp/"+t.id,{_method:"DELETE"},{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.$router.go()})).catch((function(){e.btnLoading=!1}))}}))},closeTambahTransaksi:function(t){this.$router.push("/keuangan/transaksi-spp/"+t)}},computed:{enrichedDataTable:function(){return this.datatable.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{isSelectable:0==t.status})}))},totalBulan:function(){return this.item_selected.length},totalBiayaKombi:function(){var t,e=0;for(t in this.item_selected)e+=parseInt(this.item_selected[t].biaya_kombi);return e}},components:{KeuanganLayout:o["a"],ModuleHeader:l["a"]}},u=c,d=a("2877"),h=a("6544"),v=a.n(h),m=a("0798"),p=a("2bc5"),f=a("8336"),b=a("b0af"),_=a("99d9"),g=(a("d3b7"),a("25f0"),a("6ca7"),a("ec29"),a("9d26")),A=a("c37a"),k=a("fe09"),S=k["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},A["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),y=a("cc20"),C=a("62ad"),T=a("a523"),E=a("8fea"),N=a("ce7e"),x=a("4bd4"),I=a("132d"),O=a("6b53"),w=a("0fd9"),R=a("2fa4"),B=a("71d9"),V=a("2a7f"),$=Object(d["a"])(u,i,s,!1,null,null,null);e["default"]=$.exports;v()($,{VAlert:m["a"],VBreadcrumbs:p["a"],VBtn:f["a"],VCard:b["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VCheckbox:S,VChip:y["a"],VCol:C["a"],VContainer:T["a"],VDataTable:E["a"],VDivider:N["a"],VForm:x["a"],VIcon:I["a"],VResponsive:O["a"],VRow:w["a"],VSpacer:R["a"],VToolbar:B["a"],VToolbarTitle:V["a"]})},b5b6:function(t,e,a){},c8b0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("KEUANGAN-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/keuangan"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KEUANGAN")])],1)],1):t._e(),a("v-subheader",[t._v("DAFTAR ULANG")]),a("v-list-item",{attrs:{link:"",to:"/keuangan/channelpembayaran"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CHANNEL PEMBAYARAN ")])],1)],1),t.CAN_ACCESS("KEUANGAN-STATUS-TRANSAKSI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/statustransaksi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" STATUS TRANSAKSI ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-KOMPONEN-BIAYA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponen"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-video-input-component")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIAYA KOMPONEN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponenperiode"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIAYA KOMPONEN PERIODE ")])],1)],1):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-subheader",[t._v("METODE PEMBAYARAN")]):t._e(),t.CAN_ACCESS("KEUANGAN-METODE-TRANSFER-BANK_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transferbank"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TRANSFER BANK ")])],1)],1):t._e(),a("v-subheader",[t._v("TRANSAKSI")]),t.CAN_ACCESS("KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/konfirmasipembayaran"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KONFIRMASI PEMBAYARAN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR TRANSAKSI ")])],1)],1):t._e(),a("v-divider"),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-BIAYA-PENDAFTARAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-pendaftaranmhsbaru"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PENDAFTARAN MHS BARU ")])],1)],1):t._e()],1)],1),t.showrightsidebar?a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{staticClass:"teal lighten-5 mb-5"},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),a("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-divider"),a("v-card-text",{staticClass:"py-2 white--text text-center"},[a("strong",[t._v("SIMAK (2021-2020)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),a("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],n=(a("ac1f"),a("5319"),a("5530")),r=a("2f62"),o={name:"KeuanganLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])(Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=a("2877"),u=a("6544"),d=a.n(u),h=a("40dc"),v=a("5bc1"),m=a("8212"),p=a("8336"),f=a("b0af"),b=a("99d9"),_=a("ce7e"),g=a("553a"),A=a("132d"),k=a("adda"),S=a("8860"),y=a("da13"),C=a("8270"),T=a("5d23"),E=a("34c3"),N=a("f6c4"),x=a("e449"),I=a("f774"),O=a("2fa4"),w=a("e0c7"),R=a("afd9"),B=a("2a7f"),V=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=V.exports;d()(V,{VAppBar:h["a"],VAppBarNavIcon:v["a"],VAvatar:m["a"],VBtn:p["a"],VCard:f["a"],VCardText:b["c"],VDivider:_["a"],VFooter:g["a"],VIcon:A["a"],VImg:k["a"],VList:S["a"],VListItem:y["a"],VListItemAvatar:C["a"],VListItemContent:T["a"],VListItemIcon:E["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMain:N["a"],VMenu:x["a"],VNavigationDrawer:I["a"],VSpacer:O["a"],VSubheader:w["a"],VSystemBar:R["a"],VToolbarTitle:B["a"]})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a.d(e,"b",(function(){return o}));a("4de4"),a("d3b7"),a("25f0");var i=a("c37a"),s=a("5311"),n=a("8547"),r=a("58df");function o(t){t.preventDefault()}e["a"]=Object(r["a"])(i["a"],s["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);