(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eedafbd"],{"4bd4":function(t,a,e){"use strict";var i=e("5530"),n=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("159b"),e("7db0"),e("58df")),s=e("7e2b"),r=e("3206");a["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(a.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"553a":function(t,a,e){"use strict";var i=e("5530"),n=(e("a9e3"),e("c7cd"),e("b5b6"),e("8dd9")),s=e("3a66"),r=e("d10f"),o=e("58df"),d=e("80d2");a["a"]=Object(o["a"])(n["a"],Object(s["a"])("footer",["height","inset"]),r["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(d["g"])(t),left:Object(d["g"])(this.computedLeft),right:Object(d["g"])(this.computedRight),bottom:Object(d["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var a=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,a,this.$slots.default)}})},"6ba9":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list-item",[e("v-list-item-content",[e("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN PENDAFTARAN",outlined:""},model:{value:t.tahun_pendaftaran,callback:function(a){t.tahun_pendaftaran=a},expression:"tahun_pendaftaran"}})],1)],1)},n=[],s={name:"FilterMode9",created:function(){this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"]},data:function(){return{firstloading:!0,daftar_ta:[],tahun_pendaftaran:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_pendaftaran:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunPendaftaran",t),this.$emit("changeTahunPendaftaran",t))}}},r=s,o=e("2877"),d=e("6544"),u=e.n(d),l=e("da13"),c=e("5d23"),h=e("b974"),f=Object(o["a"])(r,i,n,!1,null,null,null);a["a"]=f.exports;u()(f,{VListItem:l["a"],VListItemContent:c["a"],VSelect:h["a"]})},b5b6:function(t,a,e){},f58b:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("SystemMigrationLayout",{scopedSlots:t._u([{key:"filtersidebar",fn:function(){return[e("Filter9",{ref:"filter9",on:{changeTahunPendaftaran:t.changeTahunPendaftaran}})]},proxy:!0}])},[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-bank-transfer-in ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" MIGRASI SISTEM ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN PENDAFTARAN "+t._s(t.tahun_pendaftaran)+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini digunakan untuk melakukan migrasi data mahasiswa. ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",{staticClass:"mb-4"},[e("v-card-title",[t._v(" BIODATA MAHASISWA ")]),e("v-card-text",[e("v-alert",{attrs:{type:"info"}},[t._v(" Isi form mahasiswa dengan lengkap dan benar; hasil inputan bisa dilihat di Akademik->Daftar Mahasiswa atau Akademik->Daftar Ulang ")]),e("v-text-field",{attrs:{label:"NIM",rules:t.rule_nim,outlined:""},model:{value:t.formdata.nim,callback:function(a){t.$set(t.formdata,"nim",a)},expression:"formdata.nim"}}),e("v-text-field",{attrs:{label:"NIRM",rules:t.rule_nirm,outlined:""},model:{value:t.formdata.nirm,callback:function(a){t.$set(t.formdata,"nirm",a)},expression:"formdata.nirm"}}),e("v-text-field",{attrs:{label:"NAMA LENGKAP",rules:t.rule_nama_mhs,outlined:""},model:{value:t.formdata.nama_mhs,callback:function(a){t.$set(t.formdata,"nama_mhs",a)},expression:"formdata.nama_mhs"}}),e("v-select",{attrs:{label:"PROGRAM STUDI",items:t.daftar_prodi,"item-text":"text","item-value":"id",rules:t.rule_prodi,outlined:""},model:{value:t.formdata.prodi_id,callback:function(a){t.$set(t.formdata,"prodi_id",a)},expression:"formdata.prodi_id"}}),e("v-select",{attrs:{label:"KELAS",items:t.daftar_kelas,"item-text":"text","item-value":"id",rules:t.rule_kelas,outlined:""},model:{value:t.formdata.idkelas,callback:function(a){t.$set(t.formdata,"idkelas",a)},expression:"formdata.idkelas"}}),e("v-select",{attrs:{label:"DOSEN WALI",items:t.daftar_dw,"item-text":"name","item-value":"id",rules:t.rule_dw,outlined:""},model:{value:t.formdata.dosen_id,callback:function(a){t.$set(t.formdata,"dosen_id",a)},expression:"formdata.dosen_id"}})],1)],1),e("v-card",{staticClass:"mb-4"},[e("v-card-title",[t._v(" Daftar Ulang Mahasiswa ")]),e("v-card-text",[e("v-data-table",{attrs:{loading:t.datatableLoading,"loading-text":"Loading... Please wait","disable-pagination":!0,"hide-default-footer":!0,headers:t.headers,"item-key":"id",items:t.daftar_tasmt,dense:""},scopedSlots:t._u([{key:"item.k_status",fn:function(a){var i=a.item;return[e("v-select",{attrs:{items:t.daftar_status_mhs,"item-text":"text","item-value":"id"},model:{value:t.formdata.status_mhs[t.daftar_tasmt.indexOf(i)],callback:function(a){t.$set(t.formdata.status_mhs,t.daftar_tasmt.indexOf(i),a)},expression:"formdata.status_mhs[daftar_tasmt.indexOf(item)]"}})]}},{key:"no-data",fn:function(){return[t._v(" belum ada data tahun akademik dan semester, silahkan ganti Tahun Pendaftaran ke yang lebih kecil dari 2020 ")]},proxy:!0}])})],1)],1),e("v-card",[e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},n=[],s=e("1da1"),r=(e("96cf"),e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-MIGRATION_BROWSE")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-migration"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-bank-transfer-in")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("MIGRASI SISTEM")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),e("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[e("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[e("v-divider"),e("v-card-text",{staticClass:"py-2 white--text text-center"},[e("strong",[t._v("SIMAK (2021-2022)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),e("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[e("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)}),o=[],d=e("5530"),u=(e("5319"),e("ac1f"),e("2f62")),l={name:"SystemMigrationLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(d["a"])(Object(d["a"])({},Object(u["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},c=l,h=e("2877"),f=e("6544"),m=e.n(f),v=e("40dc"),p=e("5bc1"),_=e("8212"),g=e("8336"),b=e("b0af"),k=e("99d9"),T=e("ce7e"),A=e("553a"),x=e("132d"),w=e("adda"),y=e("8860"),$=e("da13"),S=e("8270"),I=e("5d23"),E=e("34c3"),V=e("f6c4"),M=e("e449"),C=e("f774"),O=e("2fa4"),R=e("afd9"),N=e("2a7f"),L=Object(h["a"])(c,r,o,!1,null,null,null),B=L.exports;m()(L,{VAppBar:v["a"],VAppBarNavIcon:p["a"],VAvatar:_["a"],VBtn:g["a"],VCard:b["a"],VCardText:k["c"],VDivider:T["a"],VFooter:A["a"],VIcon:x["a"],VImg:w["a"],VList:y["a"],VListItem:$["a"],VListItemAvatar:S["a"],VListItemContent:I["a"],VListItemIcon:E["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMain:V["a"],VMenu:M["a"],VNavigationDrawer:C["a"],VSpacer:O["a"],VSystemBar:R["a"],VToolbarTitle:N["b"]});var P=e("e477"),j=e("6ba9"),D={name:"SystemMigration",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"MIGRASI SISTEM",disabled:!0,href:"#"}],this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"]},mounted:function(){this.initialize()},data:function(){return{firstloading:!0,breadcrumbs:[],tahun_pendaftaran:0,form_valid:!0,btnLoading:!1,daftar_prodi:[],daftar_kelas:[],daftar_dw:[],daftar_tasmt:[],daftar_status_mhs:[],formdata:{nim:"",nirm:"",nama_mhs:"",dosen_id:"",prodi_id:"",idkelas:"",status_mhs:[]},rule_nim:[function(t){return!!t||"Nomor Induk Mahasiswa (NIM) mohon untuk diisi !!!"},function(t){return/^[0-9]+$/.test(t)||"Nomor Induk Mahasiswa (NIM) hanya boleh angka"}],rule_nirm:[function(t){return!!t||"Nomor Induk Registrasi Masuk (NIRM) mohon untuk diisi !!!"},function(t){return/^[0-9]+$/.test(t)||"Nomor Induk Registrasi Masuk (NIRM) hanya boleh angka"}],rule_nama_mhs:[function(t){return!!t||"Nama Mahasiswa mohon untuk diisi !!!"},function(t){return/^[A-Za-z\s\\,\\.]*$/.test(t)||"Nama Mahasiswa hanya boleh string dan spasi"}],rule_prodi:[function(t){return!!t||"Program studi mohon untuk dipilih !!!"}],rule_kelas:[function(t){return!!t||"Kelas mohon untuk dipilih !!!"}],rule_dw:[function(t){return!!t||"Mohon dipilih Dosen Wali untuk Mahasiswa ini !!!"}],datatableLoading:!1,headers:[{text:"TAHUN AKADEMIK",value:"ta",sortable:!1},{text:"SEMESTER",value:"semester",sortable:!1},{text:"STATUS",value:"k_status",sortable:!1,width:250}]}},methods:{changeTahunPendaftaran:function(t){this.tahun_pendaftaran=t},initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.daftar_prodi=this.$store.getters["uiadmin/getDaftarProdi"],this.daftar_kelas=this.$store.getters["uiadmin/getDaftarKelas"],t.next=4,this.$ajax.get("/akademik/dosenwali",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.daftar_dw=e.users}));case 4:return this.datatableLoading=!0,t.next=7,this.$ajax.post("/system/migration",{TA:this.tahun_pendaftaran},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.daftar_tasmt=e.daftar_tasmt;var i=a.daftar_tasmt,n=0;i.forEach((function(){a.formdata.status_mhs[n]="A",n+=1})),a.datatableLoading=!1}));case 7:this.daftar_status_mhs=this.$store.getters["uiadmin/getDaftarStatusMahasiswa"],this.firstloading=!1,this.$refs.filter9.setFirstTimeLoading(this.firstloading);case 10:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/migration/store",{nim:this.formdata.nim,nirm:this.formdata.nirm,nama_mhs:this.formdata.nama_mhs,dosen_id:this.formdata.dosen_id,prodi_id:this.formdata.prodi_id,idkelas:this.formdata.idkelas,tahun_pendaftaran:this.tahun_pendaftaran,status_mhs:JSON.stringify(Object.assign({},this.formdata.status_mhs))},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){setTimeout((function(){t.$router.go(),t.btnLoading=!1}),300)})).catch((function(){t.btnLoading=!1})))}},watch:{tahun_pendaftaran:function(){this.firstloading||this.initialize()}},components:{SystemMigrationLayout:B,ModuleHeader:P["a"],Filter9:j["a"]}},U=D,F=e("0798"),z=e("2bc5"),H=e("62ad"),K=e("a523"),G=e("8fea"),W=e("4bd4"),J=e("0fd9"),Y=e("b974"),Z=e("8654"),q=Object(h["a"])(U,i,n,!1,null,null,null);a["default"]=q.exports;m()(q,{VAlert:F["a"],VBreadcrumbs:z["a"],VBtn:g["a"],VCard:b["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VCol:H["a"],VContainer:K["a"],VDataTable:G["a"],VForm:W["a"],VIcon:x["a"],VRow:J["a"],VSelect:Y["a"],VSpacer:O["a"],VTextField:Z["a"]})}}]);