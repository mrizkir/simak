(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b2561d0"],{"0160":function(t,e,i){},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("fe6c"),n=i("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"40dc":function(t,e,i){"use strict";i("a9e3"),i("c7cd");var a=i("5530"),n=(i("8b0d"),i("71d9")),s=i("53ca");function r(t,e){var i=e.modifiers||{},a=i.self,n=void 0!==a&&a,r=e.value,o="object"===Object(s["a"])(r)&&r.options||{passive:!0},l="function"===typeof r||"handleEvent"in r?r:r.handler,c=n?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",l,o),t._onScroll={handler:l,options:o,target:n?void 0:c})}function o(t){if(t._onScroll){var e=t._onScroll,i=e.handler,a=e.options,n=e.target,s=void 0===n?t:n;s.removeEventListener("scroll",i,a),delete t._onScroll}}var l={inserted:r,unbind:o},c=l,d=i("3a66"),u=i("d9bd"),h=i("2b0e"),m=h["a"].extend({name:"scrollable",directives:{Scroll:l},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(u["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),p=i("d10f"),v=i("f2e7"),f=i("80d2"),g=i("58df"),b=Object(g["a"])(n["a"],m,p["a"],v["a"],Object(d["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=b.extend({name:"v-app-bar",directives:{Scroll:c},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return m.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=n["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return n["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.styles.call(this)),{},{fontSize:Object(f["g"])(this.computedFontSize,"rem"),marginTop:Object(f["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(f["g"])(this.computedTransform),")"),left:Object(f["g"])(this.computedLeft),right:Object(f["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=n["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},8308:function(t,e,i){},"8b0d":function(t,e,i){},"969c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("AdminLayout",["mahasiswabaru"==t.dashboard?i("v-container",[i("DashboardMB")],1):i("v-container",{attrs:{fluid:"",color:"#f1f2f6"}},[i("v-row",[t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("DMASTER-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.dmaster},nativeOn:{click:function(e){return t.$router.push("/DMaster")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.dmaster}},[t._v(" mdi-monitor-multiple ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" DATA MASTER ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Pengaturan berbagai parameter sebagai referensi dari modul-modul lain dalam sistem. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SPMB-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.spmb},nativeOn:{click:function(e){return t.$router.push("/SPMB")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.spmb}},[t._v(" mdi-account-box ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" SPMB ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk mengelola Seleksi Penerimaan Mahasiswa Baru (SPMB) tahun "+t._s(t.tahun_pendaftaran)+". ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("KEUANGAN-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.keuangan},nativeOn:{click:function(e){return t.$router.push("/keuangan")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.keuangan}},[t._v(" mdi-note-multiple-outline ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" KEUANGAN ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk mengelola Keuangan Perguruan Tinggi. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("AKADEMIK-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.akademik},nativeOn:{click:function(e){return t.$router.push("/akademik")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.akademik}},[t._v(" mdi-book ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" AKADEMIK ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk mengelola Akademik Perguruan Tinggi. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SYSTEM-USERS-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.kemahasiswaan},nativeOn:{click:function(e){return t.$router.push("/kemahasiswaan")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.kemahasiswaan}},[t._v(" mdi-account-group ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" KEMAHASISWAAN ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk mengelola data kemahasiswaan. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("ELEARNING-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.elearning},nativeOn:{click:function(e){return t.$router.push("/elearning")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.elearning}},[t._v(" mdi-lan-connect ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" E-LEARNING ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk mengelola E-Learning. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SYSTEM-USERS-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.user_sistem},nativeOn:{click:function(e){return t.$router.push("/system-users")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.user_sistem}},[t._v(" mdi-account-key ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" USER SISTEM ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk mengelola user sistem. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SYSTEM-SETTING-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.konfigurasi_sistem},nativeOn:{click:function(e){return t.$router.push("/system-setting")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.konfigurasi_sistem}},[t._v(" mdi-database-plus ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" KONFIGURASI SISTEM ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk mengatur berbagai macam konfigurasi sistem. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SYSTEM-USERS-GROUP")?i("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[i("v-card",{staticClass:"mx-auto clickable",attrs:{elevation:"0","max-width":"344","min-height":"210",color:t.color_dashboard.migrasi_sistem},nativeOn:{click:function(e){return t.$router.push("/system-migration")}}},[i("div",{staticClass:"text-center pt-4"},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",elevation:"0",color:"white"}},[i("v-icon",{attrs:{color:t.color_dashboard.migrasi_sistem}},[t._v(" mdi-source-pull ")])],1)],1),i("v-card-title",{staticClass:"white--text font-weight-bold justify-center"},[t._v(" MIGRASI SISTEM ")]),i("v-card-subtitle",{staticClass:"white--text font-weight-medium text-center"},[t._v(" Modul ini digunakan untuk melakukan migrasi data atau sistem lama. ")])],1)],1):t._e()],1)],1)],1)},n=[],s=(i("96cf"),i("1da1")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},[i("v-timeline-item",{attrs:{color:"purple darken-1",icon:"mdi-book-variant","fill-dot":""}},[i("v-card",{attrs:{color:"purple darken-1",dark:""}},[i("v-card-title",{staticClass:"title"},[t._v("Formulir Pendaftaran")]),i("v-card-text",{staticClass:"white text--primary"},[i("p",[t._v(" Isi formulir pendaftaran dan lengkapi persyaratannya yaitu: "),i("ul",[i("li",[t._v("Scan Pas Foto")]),i("li",[t._v("Scan Ijazah Terakhir")]),i("li",[t._v("Scan KTP")]),i("li",[t._v("Scan Kartu Keluarga")])])]),i("v-btn",{staticClass:"mx-0 mr-2",attrs:{color:"purple darken-1",outlined:"",to:"/spmb/formulirpendaftaran"}},[t._v(" Isi Formulir ")]),i("v-btn",{staticClass:"mx-0",attrs:{color:"purple darken-1",outlined:"",to:"/spmb/persyaratan"}},[t._v(" Upload Persyaratan ")])],1)],1)],1),i("v-timeline-item",{attrs:{color:"red lighten-2",icon:"mdi-account-cash","fill-dot":""}},[i("v-card",{attrs:{color:"red lighten-2",dark:""}},[i("v-card-title",{staticClass:"title"},[t._v("Konfirmasi Pembayaran")]),i("v-card-text",{staticClass:"white text--primary"},[i("p",[t._v("Konfirmasi Pembayaran Biaya Pendaftaran.")]),i("v-btn",{staticClass:"mx-0",attrs:{color:"red lighten-2",outlined:"",to:"/keuangan/konfirmasipembayaran"}},[t._v(" Konfirmasi ")])],1)],1)],1),t.status_ujian?i("v-timeline-item",{attrs:{color:"indigo",icon:"mdi-head-question-outline","fill-dot":""}},[i("v-card",{attrs:{color:"indigo"}},[i("v-card-title",{staticClass:"title white--text"},[t._v("Ujian Online")]),i("v-card-text",{staticClass:"white text--primary"},[i("table",{attrs:{width:"100%"}},[i("tbody",[i("tr",[i("td",{attrs:{width:"25%"}},[t._v("No. Peserta")]),i("td",[t._v(": "+t._s(t.peserta.no_peserta))])]),i("tr",[i("td",{attrs:{width:"25%"}},[t._v("Tanggal Daftar")]),i("td",[t._v(": "+t._s(t.$date(t.peserta.created_at).format("DD/MM/YYYY HH:mm")))])]),i("tr",[i("td",{attrs:{width:"25%"}},[t._v("Tanggal Ujian")]),i("td",[t._v(": "+t._s(t.$date(t.jadwal_ujian.tanggal_ujian).format("DD/MM/YYYY")))])]),i("tr",[i("td",{attrs:{width:"25%"}},[t._v("Waktu Ujian")]),i("td",[t._v(": "+t._s(t.jadwal_ujian.jam_mulai_ujian)+" - "+t._s(t.jadwal_ujian.jam_selesai_ujian)+" ("+t._s(t.durasiUjian(t.jadwal_ujian))+")")])]),i("tr",[i("td",{attrs:{width:"25%"}},[t._v("Keterangan")]),i("td",[t._v(": "+t._s(t.keterangan_ujian))])])])]),i("v-btn",{staticClass:"mx-0",attrs:{color:"indigo",disabled:t.ismulai,outlined:""},on:{click:function(e){return e.stopPropagation(),t.mulaiUjian(e)}}},[t._v(" Mulai ")])],1)],1)],1):i("v-timeline-item",{attrs:{color:"indigo",icon:"mdi-head-question-outline","fill-dot":""}},[i("v-card",{attrs:{color:"indigo"}},[i("v-card-title",{staticClass:"title text--white"},[t._v("Ujian Online")]),i("v-card-text",{staticClass:"white text--primary"},[i("p",[t._v("Untuk mengikuti ujian online, silahkan pilih jadwal terlebih dahulu")]),i("v-btn",{staticClass:"mx-0 mr-2",attrs:{color:"indigo",outlined:""},on:{click:function(e){return e.stopPropagation(),t.showPilihJadwal(e)}}},[t._v(" Pilih Jadwal Ujian ")])],1)],1)],1)],1)],1),i("v-dialog",{attrs:{persistent:""},model:{value:t.dialogpilihjadwal,callback:function(e){t.dialogpilihjadwal=e},expression:"dialogpilihjadwal"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Pilih Jadwal Ujian PMB")])]),i("v-card-text",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id","sort-by":"name",loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.tanggal_ujian",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.$date(i.tanggal_ujian).format("DD/MM/YYYY"))+" ")]}},{key:"item.tanggal_akhir_daftar",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.$date(i.tanggal_akhir_daftar).format("DD/MM/YYYY"))+" ")]}},{key:"item.durasi_ujian",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.jam_mulai_ujian)+" - "+t._s(a.jam_selesai_ujian)+" "),i("br"),t._v("("+t._s(t.durasiUjian(a))+") ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-icon",{attrs:{loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.pilihJadwal(a)}}},[t._v(" mdi-select-drag ")])]}}])})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogfrm(e)}}},[t._v("BATAL")])],1)],1)],1)],1)},o=[],l={name:"DashboardMahasiswaBaru",created:function(){this.initialize(),this.$store.dispatch("uiadmin/deletePage","ujianonline")},data:function(){return{btnLoading:!1,datatableLoading:!1,datatable:[],headers:[{text:"NAMA UJIAN",value:"nama_kegiatan",sortable:!0,width:300},{text:"TGL. UJIAN",value:"tanggal_ujian",sortable:!0,width:100},{text:"TGL. AKHIR PENDAFTARAN",value:"tanggal_akhir_daftar",sortable:!0,width:100},{text:"DURASI UJIAN",value:"durasi_ujian",sortable:!0,width:100},{text:"RUANGAN",value:"namaruang",sortable:!0,width:100},{text:"AKSI",value:"actions",sortable:!1,width:100}],dialogpilihjadwal:!1,ismulai:!0,status_ujian:!1,jadwal_ujian:null,peserta:null,keterangan_ujian:""}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/spmb/ujianonline/peserta/"+this.$store.getters["auth/AttributeUser"]("id"),{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;1==i.status&&(e.status_ujian=!0,e.peserta=i.peserta,e.jadwal_ujian=i.jadwal_ujian,e.ismulai=0==e.jadwal_ujian.status_ujian,1==e.peserta.isfinish?(e.ismulai=!0,e.keterangan_ujian="SELESAI UJIAN"):e.keterangan_ujian="BELUM UJIAN")}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showPilihJadwal:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dialogpilihjadwal=!0,e=this.$store.getters["auth/AttributeUser"]("ta"),i=this.$store.getters["auth/AttributeUser"]("idsmt"),this.datatableLoading=!0,t.next=6,this.$ajax.post("/spmb/ujianonline/jadwal",{tahun_pendaftaran:e,semester_pendaftaran:i},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datatable=e.jadwal_ujian,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),pilihJadwal:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/spmb/ujianonline/daftar",{user_id:this.$store.getters["auth/AttributeUser"]("id"),jadwal_ujian_id:e.id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){i.initialize(),i.closedialogfrm(),i.btnLoading=!1})).catch((function(){i.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),durasiUjian:function(t){var e=this.$date(t.tanggal_ujian+" "+t.jam_mulai_ujian),i=this.$date(t.tanggal_ujian+" "+t.jam_selesai_ujian);return i.diff(e,"minute")+" menit"},mulaiUjian:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!1,t.next=3,this.$ajax.post("/spmb/ujianonline/mulaiujian",{_method:"put",user_id:this.$store.getters["auth/AttributeUser"]("id")},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;e.btnLoading=!1,e.$store.dispatch("uiadmin/addToPages",{name:"ujianonline",data_ujian:e.jadwal_ujian,data_peserta:i.peserta}),e.$router.push("/spmb/ujianonline")})).catch((function(){e.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closedialogfrm:function(){this.dialogpilihjadwal=!1}}},c=l,d=i("2877"),u=i("6544"),h=i.n(u),m=i("8336"),p=i("b0af"),v=i("99d9"),f=i("62ad"),g=i("8fea"),b=i("169a"),_=i("132d"),w=i("0fd9"),S=i("2fa4"),k=i("5530"),x=(i("0160"),i("58df")),j=i("7560"),O=Object(x["a"])(j["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(k["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),y=(i("c96a"),i("9d26")),C=i("a9ad"),T=Object(x["a"])(C["a"],j["a"]),$=T.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(y["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(k["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(k["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),A=Object(d["a"])(c,r,o,!1,null,null,null),E=A.exports;h()(A,{VBtn:m["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:f["a"],VDataTable:g["a"],VDialog:b["a"],VIcon:_["a"],VRow:w["a"],VSpacer:S["a"],VTimeline:O,VTimelineItem:$});var U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{staticClass:"white--text",attrs:{app:"",color:"#a4b0be"}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{staticClass:"white",attrs:{app:"",elevation:"0"}},[i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),i("v-main",{staticClass:"mx-4 mb-4 grey lighten-3"},[t._t("default")],2)],1)},R=[],B=(i("ac1f"),i("5319"),i("2f62")),M={name:"AdminLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(k["a"])(Object(k["a"])({},Object(B["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.storageURL+"/storage/images/users/no_photo.png":this.$api.storageURL+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},P=M,I=i("40dc"),L=i("8212"),D=i("ce7e"),N=i("adda"),V=i("8860"),K=i("da13"),H=i("8270"),Y=i("5d23"),G=i("34c3"),z=i("f6c4"),J=i("e449"),F=i("afd9"),q=i("2a7f"),W=Object(d["a"])(P,U,R,!1,null,null,null),Q=W.exports;h()(W,{VAppBar:I["a"],VAvatar:L["a"],VDivider:D["a"],VIcon:_["a"],VImg:N["a"],VList:V["a"],VListItem:K["a"],VListItemAvatar:H["a"],VListItemContent:Y["a"],VListItemIcon:G["a"],VListItemSubtitle:Y["b"],VListItemTitle:Y["c"],VMain:z["a"],VMenu:J["a"],VSpacer:S["a"],VSystemBar:F["a"],VToolbarTitle:q["a"]});var X={name:"Dashboard",created:function(){this.TOKEN=this.$route.params.token,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.TOKEN},{text:"DASHBOARD",disabled:!0,href:"#"}],this.tahun_pendaftaran=this.$store.getters["uifront/getTahunPendaftaran"],this.color_dashboard=this.$store.getters["uifront/getTheme"]("COLOR_DASHBOARD"),this.initialize()},data:function(){return{breadcrumbs:[],TOKEN:null,dashboard:null,tahun_pendaftaran:"",color_dashboard:{}}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/auth/me",{headers:{Authorization:"Bearer "+this.TOKEN}}).then((function(t){var i=t.data;e.dashboard=i.role[0],e.$store.dispatch("uiadmin/changeDashboard",e.dashboard)}));case 2:this.$store.dispatch("uiadmin/init",this.$ajax);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:{},components:{AdminLayout:Q,DashboardMB:E}},Z=X,tt=i("a523"),et=i("6b53"),it=Object(d["a"])(Z,a,n,!1,null,null,null);e["default"]=it.exports;h()(it,{VBtn:m["a"],VCard:p["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VCol:f["a"],VContainer:tt["a"],VIcon:_["a"],VResponsive:et["a"],VRow:w["a"]})},afd9:function(t,e,i){"use strict";i("a9e3"),i("c7cd");var a=i("5530"),n=(i("8308"),i("3a66")),s=i("a9ad"),r=i("7560"),o=i("58df"),l=i("80d2");e["a"]=Object(o["a"])(Object(n["a"])("bar",["height","window"]),s["a"],r["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return Object(a["a"])({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(l["g"])(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(l["s"])(this))}})},e4cd:function(t,e,i){"use strict";i("caad"),i("b0c0"),i("a9e3");var a=i("d9bd"),n=i("2b0e");e["a"]=n["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,a=t.name,n=t.mobileBreakpoint;if(n===this.mobileBreakpoint)return e;var s=parseInt(this.mobileBreakpoint,10),r=!isNaN(s);return r?i<s:a===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(a["d"])("mobile-break-point","mobile-breakpoint",this)}})}}]);