(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52a9088a"],{"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),s=a("58df"),r=a("7e2b"),n=a("3206");e["a"]=Object(s["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},b468:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-toolbar",{attrs:{elevation:"2"}},[a("v-toolbar-title",[t._v("DATA KARTU RENCANA STUDI")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.exit()}}},[t._v(" mdi-close-thick ")])],1),t.datakrs.hasOwnProperty("id")?a("v-card-text",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("ID KRS:")]),a("v-card-subtitle",[t._v(" "+t._s(t.datakrs.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("TAHUN MASUK :")]),a("v-card-subtitle",[t._v(" "+t._s(t.datakrs.tahun_pendaftaran)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("NIM / NIRM / NO. FORMULIR:")]),a("v-card-subtitle",[t._v(" "+t._s(t.datakrs.nim)+" / "+t._s(t.datakrs.nirm)+" / "+t._s(t.datakrs.no_formulir)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("SAH :")]),a("v-card-subtitle",[a("v-chip",{attrs:{color:1==t.datakrs.sah?"green":"warning","text-color":"white",small:""}},[t._v(" "+t._s(1==t.datakrs.sah?"YA":"TIDAK")+" ")])],1)],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("NAMA MAHASISWA:")]),a("v-card-subtitle",[t._v(" "+t._s(t.datakrs.nama_mhs)+" ["+t._s(t.datakrs.jk)+"] ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("JUMLAH MATKUL / SKS :")]),a("v-card-subtitle",[t._v(" "+t._s(t.totalmatkul)+" / "+t._s(t.totalsks)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("DOSEN WALI:")]),a("v-card-subtitle",[t._v(" "+t._s(t.datakrs.nama_dosen)+" ["+t._s(t.datakrs.nidn)+"] ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("CREATED/UPDATED:")]),a("v-card-subtitle",[t._v(" "+t._s(t.$date(t.datakrs.created_at).format("DD/MM/YYYY HH:mm"))+" ~ "+t._s(t.$date(t.datakrs.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1):t._e()],1)},s=[],r=(a("a9e3"),a("96cf"),a("1da1")),n={name:"DataKRS",created:function(){this.initialize()},props:{datakrs:{type:Object,required:!0},totalmatkul:{type:Number,requreid:!0},totalsks:{type:Number,requreid:!0},url:{type:String,default:null}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),exit:function(){null!=this.url&&this.$router.push(this.url)}}},o=n,l=a("2877"),d=a("6544"),c=a.n(d),m=a("b0af"),u=a("99d9"),v=a("cc20"),_=a("62ad"),A=a("ce7e"),h=a("132d"),k=a("6b53"),S=a("0fd9"),p=a("2fa4"),f=a("71d9"),g=a("2a7f"),E=Object(l["a"])(o,i,s,!1,null,null,null);e["a"]=E.exports;c()(E,{VCard:m["a"],VCardSubtitle:u["b"],VCardText:u["c"],VCardTitle:u["d"],VChip:v["a"],VCol:_["a"],VDivider:A["a"],VIcon:h["a"],VResponsive:k["a"],VRow:S["a"],VSpacer:p["a"],VToolbar:f["a"],VToolbarTitle:g["b"]})},cba1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AkademikLayout",{attrs:{showrightsidebar:!1}},[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-format-columns ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" KARTU RENCANA STUDI ")]},proxy:!0},Object.keys(t.datakrs).length?{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.semester_akademik))+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk melihat detail krs mahasiswa ")])]},proxy:!0}],null,!0)}),Object.keys(t.datakrs).length?a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("DataKRS",{attrs:{datakrs:t.datakrs,url:"/akademik/perkuliahan/krs/"+t.datakrs.id+"/detail",totalmatkul:t.totalMatkul,totalsks:t.totalSKS}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[t._v(" DAFTAR PENYELENGGARAAN MATAKULIAH "),a("v-spacer")],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.datatable,"item-key":"id","show-select":"","disable-pagination":!0,"hide-default-footer":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v(" Data matakuliah belum tersedia silahkan hubungi bagian akademik ")]},proxy:!0}],null,!1,1521005542),model:{value:t.daftar_matkul_selected,callback:function(e){t.daftar_matkul_selected=e},expression:"daftar_matkul_selected"}})],1),a("v-card-actions",[a("v-chip",{staticClass:"mr-2",attrs:{color:"info",outlined:""}},[a("strong",[t._v("Jumlah Matakuliah Terpilih:")]),t._v(" "+t._s(t.daftar_matkul_selected.length)+" ")]),a("v-chip",{attrs:{color:"info",outlined:""}},[a("strong",[t._v("Jumlah SKS Terpilih:")]),t._v(" "+t._s(t.totalSKS)+" ")]),a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogfrm(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading||!t.daftar_matkul_selected.length>0},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1)],1)],1):t._e()],1)},s=[],r=(a("b64b"),a("96cf"),a("1da1")),n=a("e60c"),o=a("e477"),l=a("b468"),d={name:"PerkuliahanKRSDetail",created:function(){this.krs_id=this.$route.params.krsid,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"PERKULIAHAN",disabled:!1,href:"#"},{text:"KRS",disabled:!1,href:"/akademik/perkuliahan/krs/daftar"},{text:"TAMBAH MATAKULIAH",disabled:!0,href:"#"}],this.fetchKRS()},data:function(){return{firstloading:!0,nama_prodi:null,tahun_akademik:null,semester_akademik:null,btnLoading:!1,form_valid:!0,krs_id:null,datakrs:{},jumlah_matkul:0,jumlah_sks:0,daftar_matkul_selected:[],datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"KODE",value:"kmatkul",sortable:!0,width:120},{text:"NAMA MATAKULIAH",value:"nmatkul",sortable:!0},{text:"SKS",value:"sks",sortable:!1,width:120},{text:"SMT",value:"semester",sortable:!1,width:120},{text:"TAHUN MATKUL",value:"ta_matkul",sortable:!1,width:120}]}},methods:{fetchKRS:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax.get("/akademik/perkuliahan/krs/"+t.krs_id,{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(e){var a=e.data;if(t.datakrs=a.krs,Object.keys(t.datakrs).length){var i=t.datakrs.kjur;t.nama_prodi=t.$store.getters["uiadmin/getProdiName"](i),t.tahun_akademik=t.datakrs.tahun,t.semester_akademik=t.datakrs.idsmt}}));case 2:if(!Object.keys(t.datakrs).length){e.next=6;break}return t.datatableLoading=!0,e.next=6,t.$ajax.post("/akademik/perkuliahan/krs/penyelenggaraan",{nim:t.datakrs.nim,prodi_id:t.datakrs.kjur,ta:t.datakrs.tahun,semester_akademik:t.datakrs.idsmt,pid:"belumterdaftar"},{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(e){var a=e.data;t.datatable=a.penyelenggaraan,t.datatableLoading=!1})).catch((function(){t.datatableLoading=!1}));case 6:case"end":return e.stop()}}),e)})))()},save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/akademik/perkuliahan/krs/storematkul",{krs_id:this.krs_id,matkul_selected:JSON.stringify(Object.assign({},this.daftar_matkul_selected))},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.closedialogfrm()})).catch((function(){e.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closedialogfrm:function(){var t=this;setTimeout((function(){t.$router.push("/akademik/perkuliahan/krs/"+t.krs_id+"/detail")}),300)}},computed:{totalSKS:function(){var t,e=0;for(t in this.daftar_matkul_selected)e+=parseInt(this.daftar_matkul_selected[t].sks);return e}},components:{AkademikLayout:n["a"],ModuleHeader:o["a"],DataKRS:l["a"]}},c=d,m=a("2877"),u=a("6544"),v=a.n(u),_=a("0798"),A=a("2bc5"),h=a("8336"),k=a("b0af"),S=a("99d9"),p=a("cc20"),f=a("62ad"),g=a("a523"),E=a("8fea"),C=a("4bd4"),b=a("132d"),T=a("0fd9"),I=a("2fa4"),L=Object(m["a"])(c,i,s,!1,null,null,null);e["default"]=L.exports;v()(L,{VAlert:_["a"],VBreadcrumbs:A["a"],VBtn:h["a"],VCard:k["a"],VCardActions:S["a"],VCardText:S["c"],VCardTitle:S["d"],VChip:p["a"],VCol:f["a"],VContainer:g["a"],VDataTable:E["a"],VForm:C["a"],VIcon:b["a"],VRow:T["a"],VSpacer:I["a"]})},e60c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V_SYSTEM_BAR_CSS_CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{class:this.$store.getters["uiadmin/getTheme"]("V_APP_BAR_NAV_ICON_CSS_CLASS"),on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{class:this.$store.getters["uiadmin/getTheme"]("V_NAVIGATION_DRAWER_CSS_CLASS"),attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")?a("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_BOARD_CSS_CLASS"),attrs:{to:{path:"/akademik"},link:"",color:this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_BOARD_COLOR")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD AKADEMIK")])],1)],1):t._e(),a("v-subheader",[t._v("PERWALIAN")]),t.CAN_ACCESS("SYSTEM-USERS-DOSEN-WALI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-teach")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")||t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?a("v-subheader",[t._v("DAFTAR ULANG")]):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mhsbelumpunyanim","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BELUM PUNYA NIM ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswalama","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MAHASISWA LAMA ")])],1)],1):t._e(),a("v-subheader",[t._v("PERKULIAHAN")]),t.CAN_ACCESS("AKADEMIK-MATAKULIAH_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?a("v-list-group",{attrs:{group:"/akademik/perkuliahan/penyelenggaraan","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-home-floor-b")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("PENYELENGGARAAN")])],1)]},proxy:!0}],null,!1,2791626149)},[a("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),to:"/akademik/perkuliahan/penyelenggaraan/daftar",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),disabled:"",to:"/akademik/perkuliahan/penyelenggaraan/tambah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/penyelenggaraan/"+t.paramid+"/dosenpengampu"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN PENGAMPU ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?a("v-list-group",{attrs:{group:"/akademik/perkuliahan/krs","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-format-columns")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("KRS")])],1)]},proxy:!0}],null,!1,2196385036)},[a("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),to:"/akademik/perkuliahan/krs/daftar",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),disabled:"",to:"/akademik/perkuliahan/krs/tambah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_SHOW")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/detail"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DETAIL KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/tambahmatkul"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?a("v-list-group",{attrs:{group:"/akademik/perkuliahan/pembagiankelas","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-google-classroom")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("PEMBAGIAN KELAS")])],1)]},proxy:!0}],null,!1,3897047730)},[a("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),to:"/akademik/perkuliahan/pembagiankelas/daftar",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),disabled:"",to:"/akademik/perkuliahan/pembagiankelas/tambah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH KELAS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/pembagiankelas/"+t.paramid+"/peserta"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PESERTA ")])],1)],1):t._e()],1)]):t._e(),a("v-subheader",[t._v("NILAI")]),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_BROWSE")&&"puslahta"==t.dashboard?a("v-list-group",{attrs:{group:"/akademik/nilai/matakuliah","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-format-columns")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("ISI NILAI")])],1)]},proxy:!0}],null,!1,927400214)},[a("div",[t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),to:"/akademik/nilai/matakuliah/isiperkelasmhs",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PER KELAS MHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),to:"/akademik/nilai/matakuliah/isiperkrs",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PER KRS ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-KHS_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),to:{path:"/akademik/nilai/khs"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-TRANSKRIP-KURIKULUM_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS"),to:{path:"/akademik/nilai/transkripkurikulum"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TRANSKRIP KURIKULUM ")])],1)],1):t._e()],1)],1),t.showrightsidebar?a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V_LIST_ITEM_ACTIVE_CSS_CLASS")},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],r=(a("b0c0"),a("ac1f"),a("5319"),a("5530")),n=a("2f62"),o={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.storageURL+"/storage/images/users/no_photo.png":this.$api.storageURL+"/"+e,t},paramid:function(){var t="empty";switch(this.$route.name){case"PerkuliahanPenyelenggaraanDosenPengampu":t=this.$route.params.idpenyelenggaraan;break;case"PerkuliahanKRSDetail":t=this.$route.params.krsid;break;case"PerkuliahanKRSTambahMatkul":t=this.$route.params.krsid;break;case"PerkuliahanPembagianKelasPeserta":t=this.$route.params.kelas_mhs_id;break}return t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=a("2877"),c=a("6544"),m=a.n(c),u=a("40dc"),v=a("5bc1"),_=a("8212"),A=a("ce7e"),h=a("132d"),k=a("adda"),S=a("8860"),p=a("56b0"),f=a("da13"),g=a("8270"),E=a("5d23"),C=a("34c3"),b=a("f6c4"),T=a("e449"),I=a("f774"),L=a("2fa4"),R=a("e0c7"),K=a("afd9"),N=a("2a7f"),M=Object(d["a"])(l,i,s,!1,null,null,null);e["a"]=M.exports;m()(M,{VAppBar:u["a"],VAppBarNavIcon:v["a"],VAvatar:_["a"],VDivider:A["a"],VIcon:h["a"],VImg:k["a"],VList:S["a"],VListGroup:p["a"],VListItem:f["a"],VListItemAvatar:g["a"],VListItemContent:E["a"],VListItemIcon:C["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VMain:b["a"],VMenu:T["a"],VNavigationDrawer:I["a"],VSpacer:L["a"],VSubheader:R["a"],VSystemBar:K["a"],VToolbarTitle:N["b"]})}}]);