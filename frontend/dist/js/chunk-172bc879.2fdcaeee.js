(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-172bc879"],{"03f6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SystemConfigLayout",[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-page-layout-header ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" HEADER LAPORAN ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Mengatur halaman header untuk laporan ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{label:"HEADER 1",outlined:""},model:{value:t.formdata.header_1,callback:function(e){t.$set(t.formdata,"header_1",e)},expression:"formdata.header_1"}}),i("v-text-field",{attrs:{label:"HEADER 2",outlined:""},model:{value:t.formdata.header_2,callback:function(e){t.$set(t.formdata,"header_2",e)},expression:"formdata.header_2"}}),i("v-text-field",{attrs:{label:"HEADER 3",outlined:""},model:{value:t.formdata.header_3,callback:function(e){t.$set(t.formdata,"header_3",e)},expression:"formdata.header_3"}}),i("v-text-field",{attrs:{label:"HEADER 4",outlined:""},model:{value:t.formdata.header_4,callback:function(e){t.$set(t.formdata,"header_4",e)},expression:"formdata.header_4"}}),i("v-text-field",{attrs:{label:"HEADER ALAMAT INSTITUSI",outlined:""},model:{value:t.formdata.header_address,callback:function(e){t.$set(t.formdata,"header_address",e)},expression:"formdata.header_address"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},s=[],r=i("5530"),n=(i("96cf"),i("1da1")),o=i("2f62"),l=i("6135"),d=i("e477"),c={name:"HeaderLaporan",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"PERGURUAN TINGGI",disabled:!1,href:"#"},{text:"HEADER LAPORAN",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,form_valid:!0,formdata:{header_1:null,header_2:null,header_3:null,header_4:null,header_address:null}}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var i=t.data,a=i.setting;e.formdata.header_1=a.HEADER_1,e.formdata.header_2=a.HEADER_2,e.formdata.header_3=a.HEADER_3,e.formdata.header_4=a.HEADER_4,e.formdata.header_address=a.HEADER_ADDRESS}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"Header Laporan",setting:JSON.stringify({701:this.formdata.header_1,702:this.formdata.header_2,703:this.formdata.header_3,704:this.formdata.header_4,705:this.formdata.header_address})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:l["a"],ModuleHeader:d["a"]}},u=c,h=i("2877"),v=i("6544"),m=i.n(v),f=i("0798"),p=i("2bc5"),_=i("8336"),b=i("b0af"),E=i("99d9"),S=i("62ad"),A=i("a523"),g=i("4bd4"),T=i("132d"),C=i("0fd9"),I=i("2fa4"),y=i("8654"),R=Object(h["a"])(u,a,s,!1,null,null,null);e["default"]=R.exports;m()(R,{VAlert:f["a"],VBreadcrumbs:p["a"],VBtn:_["a"],VCard:b["a"],VCardActions:E["a"],VCardText:E["c"],VCol:S["a"],VContainer:A["a"],VForm:g["a"],VIcon:T["a"],VRow:C["a"],VSpacer:I["a"],VTextField:y["a"]})},"0bc6":function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),s=i("58df"),r=i("7e2b"),n=i("3206");e["a"]=Object(s["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"553a":function(t,e,i){"use strict";i("a9e3"),i("c7cd");var a=i("5530"),s=(i("b5b6"),i("8dd9")),r=i("3a66"),n=i("d10f"),o=i("58df"),l=i("80d2");e["a"]=Object(o["a"])(s["a"],Object(r["a"])("footer",["height","inset"]),n["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["g"])(t),left:Object(l["g"])(this.computedLeft),right:Object(l["g"])(this.computedRight),bottom:Object(l["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},6135:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),i("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-identifier")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/variables"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-variable")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" VARIABLES ")])],1)],1):t._e(),i("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-page-layout-header")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),i("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/cache"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-cached")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CACHE ")])],1)],1):t._e(),i("v-subheader",[t._v("PLUGIN")]),t.CAN_ACCESS("PLUGINS-H2H-ZOOMAPI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/zoom"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" ZOOM ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-subheader",[t._v("THEMES")]):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/themes/colordashboard"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" WARNA DASHBOARD ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/themes/layout"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" LAYOUT ")])],1)],1):t._e()],1)],1),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[i("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 white--text text-center"},[i("strong",[t._v("SIMAK (2021-2022)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),i("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],r=(i("ac1f"),i("5319"),i("5530")),n=i("2f62"),o={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=i("2877"),c=i("6544"),u=i.n(c),h=i("40dc"),v=i("5bc1"),m=i("8212"),f=i("8336"),p=i("b0af"),_=i("99d9"),b=i("ce7e"),E=i("553a"),S=i("132d"),A=i("adda"),g=i("8860"),T=i("da13"),C=i("8270"),I=i("5d23"),y=i("34c3"),R=i("f6c4"),N=i("e449"),k=i("f774"),O=i("2fa4"),V=i("e0c7"),x=i("afd9"),B=i("2a7f"),L=Object(d["a"])(l,a,s,!1,null,null,null);e["a"]=L.exports;u()(L,{VAppBar:h["a"],VAppBarNavIcon:v["a"],VAvatar:m["a"],VBtn:f["a"],VCard:p["a"],VCardText:_["c"],VDivider:b["a"],VFooter:E["a"],VIcon:S["a"],VImg:A["a"],VList:g["a"],VListItem:T["a"],VListItemAvatar:C["a"],VListItemContent:I["a"],VListItemIcon:y["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMain:R["a"],VMenu:N["a"],VNavigationDrawer:k["a"],VSpacer:O["a"],VSubheader:V["a"],VSystemBar:x["a"],VToolbarTitle:B["b"]})},b5b6:function(t,e,i){},e0c7:function(t,e,i){"use strict";var a=i("5530"),s=(i("0bc6"),i("7560")),r=i("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(a["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);