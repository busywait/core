(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config"],{1071:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.configKey?t._e():n("v-card",{attrs:{flat:""}},[n("v-list",{attrs:{tile:""}},t._l(t.conf,(function(e,i){return n("v-list-item",{key:i,attrs:{tile:""},on:{click:function(e){return t.$router.push("/config/"+i)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("conf."+i)))])],1)],1)})),1)],1),t.configKey?n("v-card",{attrs:{flat:""}},[n("v-list",{attrs:{"two-line":"",tile:""}},t._l(t.config_items,(function(e,s){return n("v-list-group",{key:s,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return["player_settings"!=t.configKey?n("v-list-item",[n("v-list-item-avatar",{staticStyle:{"margin-left":"-15px"},attrs:{tile:""}},[n("img",{staticStyle:{"border-radius":"5px",border:"1px solid rgba(0,0,0,.85)"},attrs:{src:i("9e01")("./"+s+".png")}})]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("conf."+s)))])],1)],1):t._e(),"player_settings"==t.configKey?n("v-list-item",[t._v("> "),n("v-list-item-avatar",{staticStyle:{"margin-left":"-15px"},attrs:{tile:""}},[n("img",{staticStyle:{"border-radius":"5px",border:"1px solid rgba(0,0,0,.85)"},attrs:{src:i("9e01")("./"+t.$server.players[s].provider_id+".png")}})]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$server.players[s].name))])],1)],1):t._e()]},proxy:!0}],null,!0)},[n("v-list",{attrs:{tile:""}},[t._v("> "),t._l(e,(function(e,i){return n("v-list-item",{key:i,attrs:{tile:""}},["boolean"==e["entry_type"]?n("v-switch",{attrs:{placeholder:e["default_value"],label:t.$t("conf."+e["description_key"])},on:{change:function(n){return t.saveConfig(t.configKey,s,i,e["value"])}},model:{value:e["value"],callback:function(i){t.$set(e,"value",i)},expression:"conf_item_value['value']"}}):t._e(),"string"!=e["entry_type"]&&"integer"!=e["entry_type"]&&"float"!=e["entry_type"]||e["values"].length?t._e():n("v-text-field",{attrs:{placeholder:e["default_value"]?e["default_value"].toString():"",label:t.$t("conf."+e["description_key"]),filled:""},on:{change:function(n){return t.saveConfig(t.configKey,s,i,e["value"])}},model:{value:e["value"],callback:function(i){t.$set(e,"value",i)},expression:"conf_item_value['value']"}}),"password"==e["entry_type"]?n("v-text-field",{attrs:{placeholder:e["default_value"],label:t.$t("conf."+e["description_key"]),type:"password",filled:""},on:{change:function(n){return t.saveConfig(t.configKey,s,i,e["value"])}},model:{value:e["value"],callback:function(i){t.$set(e,"value",i)},expression:"conf_item_value['value']"}}):t._e(),e["values"].length&&!e["range"].length?n("v-select",{attrs:{chips:"",clearable:"",multiple:e["multi_value"],items:e["values"],placeholder:e["default_value"]?e["default_value"].toString():"",label:t.$t("conf."+e["description_key"]),filled:""},on:{change:function(n){return t.saveConfig(t.configKey,s,i,e["value"])}},model:{value:e["value"],callback:function(i){t.$set(e,"value",i)},expression:"conf_item_value['value']"}}):t._e()],1)}))],2),n("v-divider")],1)})),1)],1):t._e()],1)},s=[],a=(i("96cf"),i("c964")),r=i("2b0e"),l={components:{},props:["configKey"],data:function(){return{conf:{base:{},providers:{},player_settings:{}},players:{},active:0}},computed:{config_items:function(){if(!this.conf)return{};if("player_settings"===this.configKey){if(this.$server.players){var t={};for(var e in this.$server.players)t[e]=this.conf.player_settings[e]}return t}return"player_settings"!==this.configKey?this.conf[this.configKey]:this.conf}},created:function(){this.$store.windowtitle=this.$t("settings"),this.configKey&&(this.$store.windowtitle+=" | "+this.$t("conf."+this.configKey)),this.getConfig()},methods:{getConfig:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.configKey){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$server.getData("config/"+t.configKey);case 4:i=e.sent,r["a"].set(t.conf,t.configKey,i);case 6:case"end":return e.stop()}}),e)})))()},saveConfig:function(t,e,i,n){var s=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r="config/"+t+"/"+e+"/"+i,a.next=3,s.$server.putData(r,n);case 3:case"end":return a.stop()}}),a)})))()}}},o=l,c=i("2877"),u=i("6544"),h=i.n(u),f=i("b0af"),v=i("ce7e"),p=i("8860"),d=i("56b0"),g=i("da13"),m=i("8270"),y=i("5d23"),_=i("b974"),b=(i("0481"),i("4069"),i("f3f3")),w=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),C=i("5607"),V=r["a"].extend({name:"rippleable",directives:{ripple:C["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),k=i("8547"),$=i("58df");function S(t){t.preventDefault()}var x=Object($["a"])(w["a"],V,k["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=w["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:S},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:S},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),K=i("c3f0"),A=i("0789"),D=i("490a"),j=i("80d2"),O=x.extend({name:"v-switch",directives:{Touch:K["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(b["a"])(Object(b["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(b["a"])(Object(b["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(b["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(b["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(A["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(D["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===j["w"].left&&this.isActive||t.keyCode===j["w"].right&&!this.isActive)&&this.onChange()}}}),L=i("8654"),E=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=E.exports;h()(E,{VCard:f["a"],VDivider:v["a"],VList:p["a"],VListGroup:d["a"],VListItem:g["a"],VListItemAvatar:m["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VSelect:_["a"],VSwitch:O,VTextField:L["a"]})},"9d01":function(t,e,i){},ec29:function(t,e,i){}}]);
//# sourceMappingURL=config.6e3bd196.js.map