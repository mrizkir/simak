(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3600dd6f"],{"0bc6":function(t,e,i){},"25e8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SystemConfigLayout",[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-face-profile ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" LAYOUT ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Mengatur css class untuk layout ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[i("v-card",[i("v-card-title",[t._v(" LAYOUT CSS CLASS ")]),i("v-card-text",[i("v-text-field",{attrs:{label:"SYSTEM BAR",outlined:"",rules:t.rule_required},model:{value:t.formdata.V_SYSTEM_BAR_CSS_CLASS,callback:function(e){t.$set(t.formdata,"V_SYSTEM_BAR_CSS_CLASS",e)},expression:"formdata.V_SYSTEM_BAR_CSS_CLASS"}}),i("v-text-field",{attrs:{label:"APPLICATION BAR",outlined:"",rules:t.rule_required},model:{value:t.formdata.V_APP_BAR_NAV_ICON_CSS_CLASS,callback:function(e){t.$set(t.formdata,"V_APP_BAR_NAV_ICON_CSS_CLASS",e)},expression:"formdata.V_APP_BAR_NAV_ICON_CSS_CLASS"}}),i("v-text-field",{attrs:{label:"NAVIGATION DRAWER",outlined:"",rules:t.rule_required},model:{value:t.formdata.V_NAVIGATION_DRAWER_CSS_CLASS,callback:function(e){t.$set(t.formdata,"V_NAVIGATION_DRAWER_CSS_CLASS",e)},expression:"formdata.V_NAVIGATION_DRAWER_CSS_CLASS"}}),i("v-text-field",{attrs:{label:"LIST ITEM BOARD",outlined:"",rules:t.rule_required},model:{value:t.formdata.V_LIST_ITEM_BOARD_CSS_CLASS,callback:function(e){t.$set(t.formdata,"V_LIST_ITEM_BOARD_CSS_CLASS",e)},expression:"formdata.V_LIST_ITEM_BOARD_CSS_CLASS"}}),i("v-text-field",{attrs:{label:"LIST ITEM ACTIVE",outlined:"",rules:t.rule_required},model:{value:t.formdata.V_LIST_ITEM_ACTIVE_CSS_CLASS,callback:function(e){t.$set(t.formdata,"V_LIST_ITEM_ACTIVE_CSS_CLASS",e)},expression:"formdata.V_LIST_ITEM_ACTIVE_CSS_CLASS"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},s=[],r=i("5530"),n=i("1da1"),o=(i("96cf"),i("2f62")),l=i("6135"),c=i("e477"),d={name:"ThemesLayout",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"THEMES",disabled:!1,href:"#"},{text:"LAYOUT",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,form_valid:!0,formdata:{V_SYSTEM_BAR_CSS_CLASS:"",V_APP_BAR_NAV_ICON_CSS_CLASS:"",V_NAVIGATION_DRAWER_CSS_CLASS:"",V_LIST_ITEM_BOARD_CSS_CLASS:"",V_LIST_ITEM_ACTIVE_CSS_CLASS:""},rule_required:[function(t){return!!t||"Mohon untuk diisi dengan nama class !!!"}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var i=t.data,a=i.setting;e.formdata.V_SYSTEM_BAR_CSS_CLASS=a.V_SYSTEM_BAR_CSS_CLASS,e.formdata.V_APP_BAR_NAV_ICON_CSS_CLASS=a.V_APP_BAR_NAV_ICON_CSS_CLASS,e.formdata.V_NAVIGATION_DRAWER_CSS_CLASS=a.V_NAVIGATION_DRAWER_CSS_CLASS,e.formdata.V_LIST_ITEM_BOARD_CSS_CLASS=a.V_LIST_ITEM_BOARD_CSS_CLASS,e.formdata.V_LIST_ITEM_ACTIVE_CSS_CLASS=a.V_LIST_ITEM_ACTIVE_CSS_CLASS}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"Class Css Layout",setting:JSON.stringify({801:this.formdata.V_SYSTEM_BAR_CSS_CLASS,802:this.formdata.V_APP_BAR_NAV_ICON_CSS_CLASS,803:this.formdata.V_NAVIGATION_DRAWER_CSS_CLASS,804:this.formdata.V_LIST_ITEM_BOARD_CSS_CLASS,805:this.formdata.V_LIST_ITEM_BOARD_COLOR,806:this.formdata.V_LIST_ITEM_ACTIVE_CSS_CLASS})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})),this.$store.dispatch("uiadmin/init",this.$ajax))}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:l["a"],ModuleHeader:c["a"]}},u=d,_=i("2877"),S=i("6544"),m=i.n(S),v=i("0798"),h=i("2bc5"),f=i("8336"),A=i("b0af"),p=i("99d9"),C=i("62ad"),b=i("a523"),T=i("4bd4"),E=i("132d"),I=i("0fd9"),g=i("2fa4"),V=i("8654"),L=Object(_["a"])(u,a,s,!1,null,null,null);e["default"]=L.exports;m()(L,{VAlert:v["a"],VBreadcrumbs:h["a"],VBtn:f["a"],VCard:A["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:C["a"],VContainer:b["a"],VForm:T["a"],VIcon:E["a"],VRow:I["a"],VSpacer:g["a"],VTextField:V["a"]})},"2bc5":function(t,e,i){"use strict";var a=i("5530"),s=(i("a15b"),i("abd3"),i("ade3")),r=i("1c87"),n=i("58df"),o=Object(n["a"])(r["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return t("li",[t(i,Object(a["a"])(Object(a["a"])({},s),{},{attrs:Object(a["a"])(Object(a["a"])({},s.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),l=i("80d2"),c=Object(l["i"])("v-breadcrumbs__divider","li"),d=i("7560");e["a"]=Object(n["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],a=0;a<this.items.length;a++){var s=this.items[a];i.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(o,{key:i.join("."),props:s},[s.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"4bd4":function(t,e,i){"use strict";var a=i("5530"),s=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),r=i("7e2b"),n=i("3206");e["a"]=Object(s["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"553a":function(t,e,i){"use strict";var a=i("5530"),s=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),r=i("3a66"),n=i("d10f"),o=i("58df"),l=i("80d2");e["a"]=Object(o["a"])(s["a"],Object(r["a"])("footer",["height","inset"]),n["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["g"])(t),left:Object(l["g"])(this.computedLeft),right:Object(l["g"])(this.computedRight),bottom:Object(l["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},6135:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),i("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-identifier")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/variables"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-variable")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" VARIABLES ")])],1)],1):t._e(),i("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-page-layout-header")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),i("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/cache"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-cached")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CACHE ")])],1)],1):t._e(),i("v-subheader",[t._v("PLUGIN")]),t.CAN_ACCESS("PLUGINS-H2H-ZOOMAPI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/zoom"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" ZOOM ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-subheader",[t._v("THEMES")]):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/themes/colordashboard"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" WARNA DASHBOARD ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/themes/layout"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" LAYOUT ")])],1)],1):t._e()],1)],1),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[i("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 white--text text-center"},[i("strong",[t._v("SIMAK (2021-2022)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),i("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],r=i("5530"),n=(i("5319"),i("ac1f"),i("2f62")),o={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=i("2877"),d=i("6544"),u=i.n(d),_=i("40dc"),S=i("5bc1"),m=i("8212"),v=i("8336"),h=i("b0af"),f=i("99d9"),A=i("ce7e"),p=i("553a"),C=i("132d"),b=i("adda"),T=i("8860"),E=i("da13"),I=i("8270"),g=i("5d23"),V=i("34c3"),L=i("f6c4"),O=i("e449"),R=i("f774"),N=i("2fa4"),B=i("e0c7"),y=i("afd9"),k=i("2a7f"),M=Object(c["a"])(l,a,s,!1,null,null,null);e["a"]=M.exports;u()(M,{VAppBar:_["a"],VAppBarNavIcon:S["a"],VAvatar:m["a"],VBtn:v["a"],VCard:h["a"],VCardText:f["c"],VDivider:A["a"],VFooter:p["a"],VIcon:C["a"],VImg:b["a"],VList:T["a"],VListItem:E["a"],VListItemAvatar:I["a"],VListItemContent:g["a"],VListItemIcon:V["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VMain:L["a"],VMenu:O["a"],VNavigationDrawer:R["a"],VSpacer:N["a"],VSubheader:B["a"],VSystemBar:y["a"],VToolbarTitle:k["b"]})},abd3:function(t,e,i){},b5b6:function(t,e,i){},e0c7:function(t,e,i){"use strict";var a=i("5530"),s=(i("0bc6"),i("7560")),r=i("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(a["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},e477:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:t.isReportPage}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("h1",{staticClass:"subheading grey--text"},[i("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},n=r,o=i("2877"),l=i("6544"),c=i.n(l),d=i("62ad"),u=i("a523"),_=i("132d"),S=i("0fd9"),m=Object(o["a"])(n,a,s,!1,null,null,null);e["a"]=m.exports;c()(m,{VCol:d["a"],VContainer:u["a"],VIcon:_["a"],VRow:S["a"]})}}]);