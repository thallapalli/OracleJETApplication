/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojvalidation-number","ojs/internal-deps/dvt/DvtToolkit","ojdnd","promise"],function(a,g,c,b,d){function e(a,b){this.QJa=b;this.YLa=a;this.MAa="/"}a.yl=function(a){this.Init(a)};o_("AttributeGroupHandler",a.yl,a);a.f.xa(a.yl,a.f,"oj.AttributeGroupHandler");a.yl.prototype.Init=function(a){this.qF={};this.eQ=0;this.I_={};for(var b in a)this.C2(b,a[b])};a.yl.prototype.mp=function(){return[]};a.f.j("AttributeGroupHandler.prototype.getValueRamp",
{mp:a.yl.prototype.mp});a.yl.prototype.lg=function(a){if(this.I_[a])return this.I_[a];this.qF[a]||(this.Mf||(this.Mf=this.mp().slice()),this.qF[a]=this.Mf[this.eQ],this.eQ++,this.eQ==this.Mf.length&&(this.eQ=0));return this.qF[a]};a.f.j("AttributeGroupHandler.prototype.getValue",{lg:a.yl.prototype.lg});a.yl.prototype.lna=function(){var a=[],b;for(b in this.qF)a.push({category:b,value:this.qF[b]});return a};a.f.j("AttributeGroupHandler.prototype.getCategoryAssignments",{lna:a.yl.prototype.lna});a.yl.prototype.C2=
function(a,b){this.I_[a]=b};a.f.j("AttributeGroupHandler.prototype.addMatchRule",{C2:a.yl.prototype.C2});a.oA=function(a){this.Init(a)};o_("ShapeAttributeGroupHandler",a.oA,a);a.f.xa(a.oA,a.yl,"oj.ShapeAttributeGroupHandler");a.oA.rF="square circle diamond plus triangleDown triangleUp human".split(" ");a.oA.prototype.mp=function(){return a.oA.rF};a.f.j("ShapeAttributeGroupHandler.prototype.getValueRamp",{mp:a.oA.prototype.mp});e.prototype.OLa=function(a,b,c,d){for(var e={};a&&-1<b.indexOf(c);){var f=
b.substring(0,b.indexOf(c));d&&void 0===a[f]&&(a[f]={});a=a[f];b=b.substring(b.indexOf(c)+1,b.length)}a&&(e.object=a,e.parameter=b);return e};e.prototype.rja=function(a){void 0===this.$G&&(a=this.OLa(this.YLa,this.QJa,this.MAa,a),this.$G=a.object,this.$_=a.parameter)};e.prototype.lg=function(){this.rja(!1);return void 0===this.$G?void 0:this.$G[this.$_]};e.prototype.A5=function(a,b){this.rja(!0);if(b||!this.$G[this.$_])this.$G[this.$_]=a};a.le=function(b){this.rF=[];if(g(document.body).hasClass("oj-hicontrast"))this.rF=
a.le.c8.slice();else{if(!a.le.aB){var c=a.le.V2();c&&(a.le.g5(c),c.remove())}this.rF=0<a.le.aB.length?a.le.aB.slice():a.le.c8.slice()}this.Init(b)};o_("ColorAttributeGroupHandler",a.le,a);a.f.xa(a.le,a.yl,"oj.ColorAttributeGroupHandler");a.le.c8="#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");a.le.u9="oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");
a.le.aB=null;a.le.prototype.mp=function(){return this.rF};a.f.j("ColorAttributeGroupHandler.prototype.getValueRamp",{mp:a.le.prototype.mp});a.le.V2=function(){if(a.le.aB)return null;var b=g(document.createElement("div"));b.attr("style","display:none;");b.attr("id","attrGps");g(document.body).append(b);for(var c=0;c<a.le.u9.length;c++){var d=g(document.createElement("div"));d.addClass(a.le.u9[c]);b.append(d)}return b};o_("ColorAttributeGroupHandler.createAttrDiv",a.le.V2,a);a.le.g5=function(b){a.le.aB=
[];b=b.children();for(var c=0;c<b.length;c++){var d=g(b[c]).css("color");d&&a.le.aB.push(d)}};o_("ColorAttributeGroupHandler.processAttrDiv",a.le.g5,a);var f={CSS_TEXT_PROPERTIES:function(a){var b={};a&&(a.hasClass("oj-gauge-metric-label")?(b["font-size"]=!0,b.color=!0):a.hasClass(a,"oj-chart-slice-label")?b.color=!0:a.hasClass("oj-treemap-node-header")&&(b["font-weight"]=!0));return f.zya(a,b)},CSS_BACKGROUND_PROPERTIES:function(a){return f.rya(a)},t8:"rgb(254, 0, 254)",Qua:"Times",Rua:"1px",v8:"1",
u8:"normal",Jua:4,sC:{},uQa:function(a,b){return a.css(b)},rya:function(a){var b={};a.css("border-top-color")&&(b["border-color"]=a.css("border-top-color"));a.css("border-width")&&a.css("border-style")&&"none"!=a.css("border-style")&&(b["border-width"]=a.css("border-width"));a.css("background-color")&&(b["background-color"]=a.css("background-color"));return b},zya:function(a,b){var c={},d=a.css("font-family");d&&d!==f.Qua&&(c["font-family"]=d.replace(/"/g,"'"));d=a.css("font-size");!d||-1<d.indexOf("px")&&
parseFloat(d)<f.Jua||b["font-size"]||(c["font-size"]=d);(d=a.css("font-weight"))&&d!==f.v8&&!b["font-weight"]&&(c["font-weight"]=d);(d=a.css("color"))&&d!==f.t8&&!b.color&&(c.color=d);(d=a.css("font-style"))&&d!==f.u8&&(c["font-style"]=d);return c},UTa:function(b,c,d,e){for(var p=null,t=null,s="",n=0;n<d.length;n++)s=s+d[n]+" ";d={};var n={},r;for(r in e){var q=e[r];q instanceof Array||(q=[q]);var u=f.OGa(r,q);t||p||!u||(p=g(document.createElement("div")),p.attr("style","display:none;"),b.append(p),
p.attr("class",s),g(document.body).append(p),t=g(document.createElement("div")),t.css("font-size",f.Rua),t.css("color",f.t8),t.css("font-weight",f.v8),t.css("font-style",f.u8),p.append(t));d[r]=q;u&&(n[r]=f.rAa(t,r,q))}b=a.le.V2();for(r in e)f.mKa(n[r],c,r,d[r]);b&&(a.le.g5(b),b.remove());p&&p.remove()},rAa:function(a,b,c){f.sC[b]||(f.sC[b]={});for(var d=null,e=0;e<c.length;e++){var t=c[e].property;t&&"undefined"==typeof f.sC[b][t]&&!d&&(d=g(document.createElement("div")),d.addClass(b),a.append(d))}return d},
mKa:function(a,b,c,d){for(var g=0;g<d.length;g++){var t=d[g],s=t.property;if(s){var n=f.sC[c][s];"undefined"==typeof n&&a&&(n=f.PLa(a,s),f.sC[c][s]=n);if(null!=n){t=new e(b,t.path);s=f[s];if(null!=s){var r=t.lg(),q="";if(null!=r){var r=f.iEa(r),u;for(u in n)-1===r.indexOf(u)&&(q+=u+":"+n[u]+";");q+=r}else for(u in n)q+=u+":"+n[u]+";";n=q}t.A5(n,null!=s)}}}},iEa:function(a){if(a instanceof Object){var b="",c;for(c in a)var d=c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),b=b+(d+":"+a[c]+";");return b}return null!=
a&&"string"==typeof a?a:""},PLa:function(a,b){var c=f[b],c=c?c(a):f.uQa(a,b);return null==c||"string"==typeof c&&""==c.replace(/^\s+/g,"")?null:c},OGa:function(a,b){var c=f.sC[a];if(!c)return!0;for(var d=0;d<b.length;d++){var e=b[d].property;if(e&&"undefined"==typeof c[e])return!0}return!1}};a.ab("oj.dvtBaseComponent",g.oj.baseComponent,{_ComponentCreate:function(){this._super();this.fv=this.C0=0;this.mH=null;this.sn={};for(var b=this.xg(),c=0;c<b.length;c++)this.element.addClass(b[c]);this.bP=g(document.createElement("div"));
this.bP.attr("style","visibility:hidden;");this.element.append(this.bP);this.zg=(b=this.element[0].parentElement)&&b.UM?b.UM:new d.Context(this.element[0],null,this.bP[0]);this.zg.setReadingDirection(this.sd());this.zg.setTooltipAttachedCallback(a.Components.nf);this.zg.setOverlayAttachedCallback(a.Components.nf);this.zg.setTooltipStyleClass("oj-dvt-tooltip");this.zg.setDatatipStyleClass("oj-dvt-datatip");this.zg.setFixContextCallback(this.Sr.bind(this));this.zg.setDefaultFontFamily(this.bP.css("font-family"));
this.zg.setCustomElement(this.ki());g(document.body).hasClass("oj-hicontrast")&&d.Agent.setHighContrast(!0);this.Ha=this.yh(this.zg,this.Um,this);this.zg.getStage().addChild(this.Ha);!1!==d.requireJS&&(this.SMa(),this.ria());this.to();this.options._environment="jet";this.options._widgetConstructor=a.Components.nd(this.element)},Tg:function(){this._super();"off"!=this.options.trackResize&&this.IV();this.Xr();this.Xg()},refresh:function(){this._super();this.zg.setReadingDirection(this.sd());this.ria();
this.Xg()},getNodeBySubId:function(a){var b=this.Ha&&this.Ha.getAutomation?this.Ha.getAutomation():null;return b?(a=this.Pl(a),b.getDomElementForSubId(a)):null},getSubIdByNode:function(a){var b=this.Ha&&this.Ha.getAutomation?this.Ha.getAutomation():null;return b?(a=b.getSubIdForDomElement(a))?this.Ii(a):null:null},Pl:function(){return null},Ii:function(){return null},vL:function(){f.UTa(this.element,this.options,this.xg(),this.wk())},xg:function(){return["oj-dvtbase"]},wk:function(){return{"oj-dvt-no-data-message":{path:"_statusMessageStyle",
property:"CSS_TEXT_PROPERTIES"}}},Rl:function(){return[]},Ij:function(){var b=this.options.translations,b={"DvtUtilBundle.CLEAR_SELECTION":b.labelClearSelection,"DvtUtilBundle.COLON_SEP_LIST":b.labelAndValue,"DvtUtilBundle.INVALID_DATA":b.labelInvalidData,"DvtUtilBundle.NO_DATA":b.labelNoData,"DvtUtilBundle.DATA_VISUALIZATION":b.labelDataVisualization,"DvtUtilBundle.STATE_SELECTED":b.stateSelected,"DvtUtilBundle.STATE_UNSELECTED":b.stateUnselected,"DvtUtilBundle.STATE_MAXIMIZED":b.stateMaximized,
"DvtUtilBundle.STATE_MINIMIZED":b.stateMinimized,"DvtUtilBundle.STATE_EXPANDED":b.stateExpanded,"DvtUtilBundle.STATE_COLLAPSED":b.stateCollapsed,"DvtUtilBundle.STATE_ISOLATED":b.stateIsolated,"DvtUtilBundle.STATE_HIDDEN":b.stateHidden,"DvtUtilBundle.STATE_VISIBLE":b.stateVisible,"DvtUtilBundle.SCALING_SUFFIX_THOUSAND":b.labelScalingSuffixThousand,"DvtUtilBundle.SCALING_SUFFIX_MILLION":b.labelScalingSuffixMillion,"DvtUtilBundle.SCALING_SUFFIX_BILLION":b.labelScalingSuffixBillion,"DvtUtilBundle.SCALING_SUFFIX_TRILLION":b.labelScalingSuffixTrillion,
"DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":b.labelScalingSuffixQuadrillion},c=a.ob.SI("abbreviated");b["DvtUtilBundle.MONTH_SHORT_JANUARY"]=c[0];b["DvtUtilBundle.MONTH_SHORT_FEBRUARY"]=c[1];b["DvtUtilBundle.MONTH_SHORT_MARCH"]=c[2];b["DvtUtilBundle.MONTH_SHORT_APRIL"]=c[3];b["DvtUtilBundle.MONTH_SHORT_MAY"]=c[4];b["DvtUtilBundle.MONTH_SHORT_JUNE"]=c[5];b["DvtUtilBundle.MONTH_SHORT_JULY"]=c[6];b["DvtUtilBundle.MONTH_SHORT_AUGUST"]=c[7];b["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"]=c[8];b["DvtUtilBundle.MONTH_SHORT_OCTOBER"]=
c[9];b["DvtUtilBundle.MONTH_SHORT_NOVEMBER"]=c[10];b["DvtUtilBundle.MONTH_SHORT_DECEMBER"]=c[11];return b},ria:function(){var a=this.Ij();d.Bundle.addLocalizedStrings(a)},SMa:function(){var b={};b.numberConverterFactory=a.Ka.vna("number");b.dateToIsoConverter=function(b){return b instanceof Date?a.Ta.xe(b):b};b.isoToDateConverter=function(b){if("string"==typeof b){var c=a.Ta.vR(b);b=c.toJSON()?a.Ta.xe(c):b;return a.Ta.wt(b)}return b};b.dateToIsoWithTimeZoneConverter=function(b){if(b instanceof Date){var c=
-1*b.getTimezoneOffset(),d=Math.floor(Math.abs(c)/60),e=Math.abs(c)%60,c=(0<=c?"+":"-")+(2!==d.toString().length?"0"+d:d)+":"+(2!==e.toString().length?e+"0":e);return a.Ta.xe(b)+c}return b};this.zg.setLocaleHelpers(b)},_destroy:function(){this.zg.hideTooltips();this.zg=null;var a=this.element[0].parentElement;a&&a.UM&&(a.UM=null);this.Ha.destroy&&this.Ha.destroy();this.Ha=null;this.y0();this.V7();this.element.children().remove();this.element.removeAttr("role").removeAttr("tabIndex").removeAttr("aria-activedescendant");
for(var a=this.xg(),b=0;b<a.length;b++)this.element.removeClass(a[b]);this.Ze&&(this.Ze(),this.Ze=null);this._super()},_setOptions:function(a,b){this._superApply(arguments);var c=this.options.trackResize;"off"==c&&this.Zi?this.y0():"off"==c||this.Zi||this.IV();this.Xr();if(!this.R$){var d=!1,e=this.Rl(),f=["highlightedCategories","selection","dataCursorPosition"];g.each(a,function(a){if(0>e.indexOf(a)&&0>f.indexOf(a))return d=!0,!1});d?this.Xg():(void 0!==a.highlightedCategories&&this.Ha.highlight(a.highlightedCategories),
void 0!==a.selection&&this.Ha.select(a.selection),void 0!==a.dataCursorPosition&&this.Ha.positionDataCursor&&this.Ha.positionDataCursor(a.dataCursorPosition))}},yh:function(){return null},Um:function(a){var b=a.type;"selection"===b?this.Ye("selection",a.selection):"categoryHide"===b||"categoryShow"===b?this.Ye("hiddenCategories",a.hiddenCategories):"categoryHighlight"===b?this.Ye("highlightedCategories",a.categories):"optionChange"===b?this.Ye(a.key,a.value,a.optionMetadata):"touchHoldRelease"===
b&&this.options.contextMenu?this.oi(g.Event(a.nativeEvent),"touch"):"ready"===b&&0===this.fv&&this.EA()},IV:function(){this.Zi||(this.Zi=this.fh.bind(this),a.Q.al(this.element[0],this.Zi,250))},y0:function(){this.Zi&&(a.Q.ul(this.element[0],this.Zi),this.Zi=null)},fh:function(){var a=this.element.width(),b=this.element.height();(null==this.fQ||null==this.cO||5<=Math.abs(a-this.fQ)+Math.abs(b-this.cO))&&this.Xg(!0)},to:function(){},Xg:function(b){this.zg.hideTooltips();this.FA();this.zg.isReadyToRender()?
(this.fQ=this.iL()?null:this.element.width(),this.cO=this.iL()?null:this.element.height(),this.options._width=this.fQ,this.options._height=this.cO,this.options._locale=a.oa.lj(),this.options.dnd&&this.element.attr("draggable",!0),this.vL(),this.C0++,b?0===this.fv&&this.A0(b):this.MLa()&&this.A0(),this.E0=!1):(this.E0=!0,this.EA())},Vp:function(){this._super();this.E0&&this.Xg()},vo:function(){this._super();this.E0&&this.Xg()},xk:function(){this._super();this.zg.hideTooltips()},wo:function(){this._super();
this.zg.hideTooltips()},Ye:function(a,b,c){this.R$=!0;this.option(a,b,{_context:{zd:!0,lw:c,kb:!0}});this.R$=!1},mi:function(a,b,c){if("touch"!==c)if("keyboard"===c){a=this.element[0].getBoundingClientRect();var d=this.Ha.getKeyboardFocus()?this.Ha.getKeyboardFocus().getBoundingClientRect():null;this.oi(b,c,{position:{at:d?"left+"+(d.left+.5*d.width-a.left)+" top+"+(d.top+.5*d.height-a.top):"center"}})}else this._super(a,b,c)},aL:function(b){return(b=a.Components.nd(b)("instance"))?b.Ha:null},AA:function(a){for(var b=
"",c=0;c<a.length;c++)b+="["+a[c]+"]";return b},Qp:function(a){for(var b=[],c=0;0<a.indexOf("[",c);){var d=a.indexOf("[",c)+1,c=a.indexOf("]",c);b.push(Number(a.substring(d,c)));c+=1}return b},Sl:function(a){return Number(this.bL(a))},bL:function(a){var b=a.indexOf("[")+1,c=a.indexOf("]");return a.substring(b,c)},Ql:function(){return{}},$K:function(){if(!this.P_){this.P_={};var a=this,b=this.Ql().root;b&&b.forEach(function(b){a.P_[b]=!0})}return this.P_},MLa:function(){this.mH=d.JsonUtils.clone(this.options,
null,this.$K());this.fv=0;var a=this,b=this.Ql(),c;for(c in b)b[c].forEach(function(b){if("root"===c)a.nja.bind(a)(a.options,a.mH,b);else{var d=a.options[c];if(d)for(var e=0;e<d.length;e++)a.nja.bind(a)(d[e],a.mH[c][e],b)}});return 0===this.fv},nja:function(a,b,c){var d=new e(a,c),f=d.lg();f instanceof Function?f=Promise.resolve(f(this.p8(a))):this.ki()&&Array.isArray(f)&&(f=Promise.resolve(f),d.A5(f,!0));if(f instanceof Promise){var g=this.C0,s=this;f.then(function(a){s.$ia(g,b,c,a)},function(){s.$ia(g,
b,c,[])});this.fv++}},$ia:function(a,b,c,d){a===this.C0&&(this.fv--,(new e(b,c)).A5(d,!0),0===this.fv&&(this.A0(),this.mH=null))},A0:function(a){this.V7();var b=this.iL()&&this.Zi;b&&this.y0();this.Ha.render(a?null:this.mH,this.fQ,this.cO);b&&this.IV();this.element.attr("role")?this.element.attr("tabindex",0):this.element.attr("tabindex",null)},p8:function(){return{}},iL:function(){return!1},whenReady:function(){if(this.yH)return Promise.resolve(!0);if(!this.YO){var a=this;this.YO=new Promise(function(b){a.l0=
b})}return this.YO},FA:function(){this.yH=!1;if(0===this.fv&&!this.Ze){var b=a.Context.getContext(this.element[0]).ye(),c={description:"The component identified by '"+this.element.attr("id")+"' is being loaded."};this.Ze=b.Ed(c)}},EA:function(){this.l0&&(this.l0(!0),this.l0=null);this.yH=!0;this.YO=null;this.Ze&&(this.Ze(),this.Ze=null)},Xr:function(){var a=this.options.tooltip;if("function"===typeof a)this.options.tooltip={renderer:a};else if(a&&a._renderer){var b=this;this.options.tooltip={renderer:this.NE(a._renderer,
"tooltip"),_templateCleanup:function(){b.hU("tooltip")}}}},NE:function(a,b){var c=this;return function(d){var e=document.createElement("div");e.style.display="none";a({parentElement:e,context:d});return(d=e.children[0])?(c.sn[b]||(c.sn[b]=[]),c.sn[b].push(e),e.removeChild(d),g(e).remove(),d):null}},qU:function(a,b){var c=this;return function(d){var e=document.createElement("div");e.style.display="none";e.UM=c.zg;c.element.append(e);a({parentElement:e,data:d.data});return(d=e.children[0])?(c.sn[b]||
(c.sn[b]=[]),c.sn[b].push(e),"http://www.w3.org/2000/svg"===d.namespaceURI?(e.removeChild(d),g(e).remove(),d):c.aL(d)):null}},V7:function(){for(var a in this.sn)g(this.sn[a]).remove();this.sn={}},hU:function(a){this.sn[a]&&(g(this.sn[a]).remove(),this.sn[a]=[])}},!0);a.U.qb("dvtBaseComponent","baseComponent",{properties:{trackResize:{type:"string"},translations:{properties:{labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},
labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}}},methods:{},extension:{nb:"dvtBaseComponent"}})});