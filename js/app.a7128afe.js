(function(e){function t(t){for(var r,l,s=t[0],a=t[1],i=t[2],d=0,m=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=(n("15f5"),n("7051"),n("ad3d")),c=n("ecee"),l=n("c074"),s=n("6c02"),a=(n("b0c0"),n("cf1c")),i=n.n(a),u={class:"columns"},d={class:"column"},m=Object(r["createElementVNode"])("h1",{class:"title"},"Plane deine Module",-1),_={class:"is-flex is-align-content-space-evenly is-justify-content-left"},b=Object(r["createElementVNode"])("label",{class:"is-flex is-flex-direction-column is-justify-content-center"},[Object(r["createElementVNode"])("p",null,"Letztes erfolgreich abgeschlossenes Semester")],-1),p={class:"select pl-2"},O={class:"column is-narrow"},g={key:0,class:"notification is-danger"},f={class:"column is-narrow"},j={key:0,class:"notification is-danger"},h=Object(r["createTextVNode"])(" Following modules could not be restored: "),E={class:"columns schedule"},v={class:"column add-semester"},S={class:"columns desktop-ml-6 desktop-mt-6"},A={class:"column"},I=Object(r["createElementVNode"])("h2",{class:"subtitle"},"Übersicht der ECTS Punkte",-1),y={style:{"vertical-align":"bottom","padding-right":"1em","text-align":"end"}},C={style:{"padding-top":"8px"}},P=Object(r["createElementVNode"])("td",{style:{"vertical-align":"bottom","padding-right":"1em","text-align":"end"}}," Total ",-1),k={style:{"padding-top":"8px"}},N={class:"column"},M=Object(r["createElementVNode"])("h2",{class:"subtitle"},"Vertiefungen",-1),B={class:"columns is-multiline mt-5"},D=Object(r["createElementVNode"])("div",{class:"column"},[Object(r["createElementVNode"])("img",{src:i.a})],-1);function V(e,t,n,o,c,l){var s=Object(r["resolveComponent"])("Semester"),a=Object(r["resolveComponent"])("BeautifulProgressIndicator"),i=Object(r["resolveComponent"])("Focus");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("div",d,[m,Object(r["createElementVNode"])("div",_,[b,Object(r["createElementVNode"])("div",p,[Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.lastSemesterNumber=e})},[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.semesters,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("option",{key:e.number},Object(r["toDisplayString"])(e.number),1)})),128))],512),[[r["vModelSelect"],c.lastSemesterNumber]])])])]),Object(r["createElementVNode"])("div",O,[Object(r["createVNode"])(r["Transition"],null,{default:Object(r["withCtx"])((function(){return[c.errorMsg?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",g,[Object(r["createElementVNode"])("span",null,"- "+Object(r["toDisplayString"])(c.errorMsg),1)])):Object(r["createCommentVNode"])("",!0)]})),_:1})]),Object(r["createElementVNode"])("div",f,[Object(r["createVNode"])(r["Transition"],null,{default:Object(r["withCtx"])((function(){var e;return[null!==(e=c.unknownModules)&&void 0!==e&&e.length?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",j,[h,Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.unknownModules,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.moduleId},Object(r["toDisplayString"])(e.moduleId),1)})),128))]),Object(r["createElementVNode"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return l.removeUnknownModulesFromUrl&&l.removeUnknownModulesFromUrl.apply(l,arguments)})}," Remove all from URL")])):Object(r["createCommentVNode"])("",!0)]})),_:1})])]),Object(r["createElementVNode"])("div",E,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.semesters,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"column semester",key:e.name},[Object(r["createVNode"])(s,{onOnModuleDeleted:function(t){return l.onModuleDeleted(e.number,t)},onOnAddModule:l.addModule,onOnRemoveSemester:l.removeSemester,number:e.number,modules:e.modules,"onUpdate:modules":function(t){return e.modules=t},"all-modules":c.modules},null,8,["onOnModuleDeleted","onOnAddModule","onOnRemoveSemester","number","modules","onUpdate:modules","all-modules"])])})),128)),Object(r["createElementVNode"])("div",v,[Object(r["createElementVNode"])("button",{class:"add-semester-btn button is-dark is-fullwidth",onClick:t[2]||(t[2]=function(){return l.addSemester&&l.addSemester.apply(l,arguments)})}," + ")])]),Object(r["createElementVNode"])("div",S,[Object(r["createElementVNode"])("div",A,[Object(r["createElementVNode"])("article",null,[I,Object(r["createElementVNode"])("table",null,[Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.mappedCategories,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:e.name,class:Object(r["normalizeClass"])(e.categoryClass)},[Object(r["createElementVNode"])("td",y,Object(r["toDisplayString"])(e.name),1),Object(r["createElementVNode"])("td",C,[Object(r["createVNode"])(a,{required:e.required_ects,earned:e.earnedCredits,planned:e.plannedCredits,color:e.color},null,8,["required","earned","planned","color"])])],2)})),128)),Object(r["createElementVNode"])("tr",null,[P,Object(r["createElementVNode"])("td",k,[Object(r["createVNode"])(a,{required:180,earned:l.totalEarnedEcts,planned:l.totalPlannedEcts,color:"orange"},null,8,["earned","planned"])])])])])])]),Object(r["createElementVNode"])("div",N,[Object(r["createElementVNode"])("article",null,[M,Object(r["createElementVNode"])("div",B,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.mappedFocuses,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.name,class:"column is-full"},[Object(r["createVNode"])(i,{name:e.name,allModules:e.modules,filteredModules:e.filteredModules},null,8,["name","allModules","filteredModules"])])})),128))])])]),D])],64)}var w=n("1da1"),F=n("5530"),x=(n("96cf"),n("d81d"),n("5db7"),n("73d9"),n("d3b7"),n("4de4"),n("caad"),n("2532"),n("7db0"),n("a9e3"),n("498a"),n("2ca0"),n("ac1f"),n("1276"),n("fb6a"),n("a15b"),n("99af"),{class:"semester-header"}),W={class:"subtitle pl-3 mb-2"},T=Object(r["createElementVNode"])("label",{for:"additionalModule"},"Select additional module",-1),R={id:"allModules"},K=["value"],U={class:"column semester-footer"};function L(e,t,n,o,c,l){var s=Object(r["resolveComponent"])("Module"),a=Object(r["resolveComponent"])("draggable");return Object(r["openBlock"])(),Object(r["createBlock"])(a,{list:n.modules,group:"semester","item-key":"id",animation:200,onEnd:l.onDropEnd,delayOnTouchOnly:!0,delay:500,class:"columns is-flex is-flex-direction-column has-text-centered"},{header:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",x,[Object(r["createElementVNode"])("h2",W,"Semester "+Object(r["toDisplayString"])(n.number),1),Object(r["createElementVNode"])("button",{class:"delete-button delete is-medium",onClick:t[0]||(t[0]=function(e){return l.removeSemester()})})])]})),item:Object(r["withCtx"])((function(o){var c=o.element;return[Object(r["createVNode"])(s,{onOnDelete:t[1]||(t[1]=function(t){return e.$emit("on-module-deleted",t)}),module:c,semesterNumber:n.number},null,8,["module","semesterNumber"])]})),footer:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["column semester-footer",{"is-hidden":c.isAddingNewModule}])},[Object(r["createElementVNode"])("button",{class:"button is-dark button-add is-fullwidth",onClick:t[2]||(t[2]=function(e){return c.isAddingNewModule=!0})}," + ")],2),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["column",{"is-hidden":!c.isAddingNewModule}])},[T,Object(r["createElementVNode"])("input",{id:"additionalModule",ref:"addModuleInput",type:"text",list:"allModules",onChange:t[3]||(t[3]=function(e){return l.addModule(e.target.value)})},null,544),Object(r["createElementVNode"])("datalist",R,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.allModules,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("option",{key:e.name,value:e.name},Object(r["toDisplayString"])(e.name),9,K)})),128))])],2),Object(r["createElementVNode"])("div",U,[Object(r["createElementVNode"])("p",null,"Total ECTS: "+Object(r["toDisplayString"])(l.getTotalEcts),1)])]})),_:1},8,["list","onEnd"])}var z=n("b76a"),q=n.n(z),Q={class:"has-text-weight-bold"};function $(e,t,n,o,c,l){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"column module mt-1",key:n.module.name,style:Object(r["normalizeStyle"])({"background-color":this.getColorForCategory(n.module.categories[0])})},[Object(r["createElementVNode"])("button",{class:"delete-button delete is-pulled-right",onClick:t[0]||(t[0]=function(t){return e.$emit("on-delete",n.module.id)})}),Object(r["createElementVNode"])("h3",Q,Object(r["toDisplayString"])(n.module.name),1),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(n.module.ects)+" ECTS",1)],4)}var G={Auf:"#f368e0",MaPh:"#ee5253",KomEng:"#0abde3",gwr:"#10ac84",Inf:"#576574",SaBa:"#222f3e",EP:"#55efc4",RA:"#ff9f43",Fallback:"#737373"},H=function(e){return G[e]||G.Fallback},J={name:"Module",emits:["on-delete"],props:{semesterNumber:{type:Number,required:!0},module:{type:Object,required:!0}},methods:{getColorForCategory:H}},X=n("6b0d"),Y=n.n(X);const Z=Y()(J,[["render",$]]);var ee=Z,te={name:"Semester",emits:["on-module-deleted","on-add-module","on-remove-semester"],props:{number:{type:Number},modules:{type:Array},allModules:{type:Array}},components:{Module:ee,draggable:q.a},computed:{getTotalEcts:function(){return this.countTotalEcts()}},watch:{modules:{deep:!0,immediate:!1,handler:function(){this.isAddingNewModule=!1}},isAddingNewModule:function(e){var t=this;!1===e?this.$refs.addModuleInput.value=null:this.$nextTick((function(){t.$refs.addModuleInput.focus()}))}},data:function(){return{isAddingNewModule:!1}},methods:{addModule:function(e){this.$emit("on-add-module",e,this.number)},removeSemester:function(){this.$emit("on-remove-semester",this.number)},countTotalEcts:function(){return this.modules.reduce((function(e,t){return e+t.ects}),0)},onDropEnd:function(){this.$parent.updateUrlFragment()}}};const ne=Y()(te,[["render",L]]);var re=ne,oe={class:"columns is-multiline"},ce=["aria-expanded"],le={class:"focus-main"},se={key:0,class:"tag is-info is-light"},ae={key:1,class:"tag is-success is-light"},ie={class:"focus-aside"},ue={class:"icon"},de={class:"column is-full column-focus"},me={class:"box box-focus"},_e={key:0},be={key:1},pe={class:"focus-missing-modules-list"};function Oe(e,t,n,o,c,l){var s=Object(r["resolveComponent"])("font-awesome-icon");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",oe,[Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return l.toggleFocus()}),class:Object(r["normalizeClass"])(["button is-fullwidth button-focus",{"is-success":!n.filteredModules.length}]),"aria-expanded":c.isOpen},[Object(r["createElementVNode"])("div",le,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(n.name),1),n.filteredModules.length?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",se,Object(r["toDisplayString"])(n.filteredModules.length)+" Module werden noch benötigt ",1)):Object(r["createCommentVNode"])("",!0),n.filteredModules.length?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",ae," Vertiefung geplant "))]),Object(r["createElementVNode"])("div",ie,[Object(r["createElementVNode"])("span",ue,[Object(r["createVNode"])(s,{icon:c.isOpen?c.openIconClass:c.closedIconClass},null,8,["icon"])])])],10,ce),Object(r["withDirectives"])(Object(r["createElementVNode"])("div",de,[Object(r["createElementVNode"])("div",me,[n.filteredModules.length?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",_e," Alle benötigten Module sind bestanden/geplant. ")),n.filteredModules.length?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",be," Für die Vertiefung müssen folgende Module noch geplant werden: ")):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("ul",pe,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.filteredModules,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e},Object(r["toDisplayString"])(e),1)})),128))])])],512),[[r["vShow"],c.isOpen]])])}var ge={name:"Focus",props:{name:{type:String},allModules:{type:Array},filteredModules:{type:Array}},data:function(){return{isOpen:!1,openIconClass:"chevron-up",closedIconClass:"chevron-down"}},methods:{toggleFocus:function(){this.isOpen=!this.isOpen}}};const fe=Y()(ge,[["render",Oe]]);var je=fe,he={class:"container"},Ee={class:"ratio-label"},ve={key:0,class:"planned-label"},Se={class:"progress-container"};function Ae(e,t,n,o,c,l){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",he,[Object(r["createElementVNode"])("p",Ee,Object(r["toDisplayString"])(n.earned)+" / "+Object(r["toDisplayString"])(n.required),1),n.planned>0?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",ve,Object(r["toDisplayString"])(n.planned)+" noch geplant",1)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",Se,[Object(r["createElementVNode"])("div",{class:"planned-progress",style:Object(r["normalizeStyle"])({width:l.plannedProgress})},null,4),Object(r["createElementVNode"])("div",{class:"earned-progress",style:Object(r["normalizeStyle"])({width:l.earnedProgress,"background-color":n.color})},null,4)])])}var Ie={name:"BeautifulProgressIndicator",props:{required:{type:Number},earned:{type:Number},planned:{type:Number},color:{type:String}},computed:{earnedProgress:function(){return"".concat(Math.min(100,100*this.earned/this.required),"%")},plannedProgress:function(){return"".concat(Math.min(100,100*(this.planned+this.earned)/this.required),"%")}}};const ye=Y()(Ie,[["render",Ae]]);var Ce=ye,Pe="https://raw.githubusercontent.com/jeremystucki/ost-planer/2.4/data",ke="/modules.json",Ne="/categories.json",Me="/focuses.json",Be={name:"Home",data:function(){return{semesters:[],modules:[],categories:[],focuses:[],lastSemesterNumber:0,errorMsg:null,errorTimer:null,unknownModules:[]}},watch:{$route:{handler:function(){this.semesters=this.getPlanDataFromUrl()}}},computed:{mappedCategories:function(){var e=this;return this.categories.map((function(t){return Object(F["a"])({earnedCredits:e.getEarnedCredits(t),plannedCredits:e.getPlannedCredits(t),color:H(t.id)},t)}))},plannedModules:function(){return this.semesters.flatMap((function(e){return e.modules}))},mappedFocuses:function(){var e=this,t=this.plannedModules.map((function(e){return e.id}));return this.focuses.map((function(n){return Object(F["a"])(Object(F["a"])({},n),{},{filteredModules:n.modules.filter((function(e){return!t.includes(e)})).map((function(t){return e.modules.find((function(e){return e.id===t})).name}))})}))},totalPlannedEcts:function(){return this.getPlannedCredits()},totalEarnedEcts:function(){return this.getEarnedCredits()}},components:{Semester:re,Focus:je,BeautifulProgressIndicator:Ce},methods:{sumCredits:function(e,t){return e+t.ects},getColorForCategory:function(e){return H(e)},getModules:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Pe).concat(ke));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))()},getCategories:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Pe).concat(Ne));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent.map((function(e){return Object(F["a"])(Object(F["a"])({},e),{},{required_ects:Number(e.required_ects)})})));case 6:case"end":return e.stop()}}),e)})))()},getFocuses:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Pe).concat(Me));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():[]);case 4:case"end":return e.stop()}}),e)})))()},getPlanDataFromUrl:function(){var e=this,t=window.location.hash,n="#/plan/",r="_",o="-";function c(e){return!e||!e.trim()}return t.startsWith(n)?t.slice(n.length).split(o).map((function(t,n){return{number:n+1,modules:t.split(r).filter((function(e){return!c(e)})).map((function(t){var r=e.modules.find((function(e){return e.id===t}));return null==r&&e.showUnknownModulesError(n+1,t),r})).filter((function(e){return e}))}})):[]},updateUrlFragment:function(){var e=this.semesters.map((function(e){return e.modules.map((function(e){return e.id})).join("_")})).join("-");window.location.hash="plan/".concat(e)},getPlannedSemesterForModule:function(e){var t;return null===(t=this.semesters.find((function(t){return t.modules.some((function(t){return t.name===e}))})))||void 0===t?void 0:t.number},getEarnedCredits:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this.semesters.filter((function(t){return t.number<=e.lastSemesterNumber})).flatMap((function(e){return e.modules})).filter((function(e){return void 0===t||t.modules.includes(e.id)})).reduce(this.sumCredits,0)},getPlannedCredits:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this.semesters.filter((function(t){return t.number>e.lastSemesterNumber})).flatMap((function(e){return e.modules})).filter((function(e){return void 0===t||t.modules.includes(e.id)})).reduce(this.sumCredits,0)},addModule:function(e,t){var n=this.getPlannedSemesterForModule(e);if(n){var r="Module ".concat(e," is already in semester ").concat(n);return console.warn(r),void this.showErrorMsg(r)}var o=this.modules.find((function(t){return t.name===e}));void 0!==o?(this.semesters[t-1].modules.push(o),this.updateUrlFragment()):this.showErrorMsg("Module '".concat(e,"' does not exist"))},removeModule:function(e,t){this.semesters[e-1].modules=this.semesters[e-1].modules.filter((function(e){return e.id!==t})),this.unknownModules=this.unknownModules.filter((function(e){return e.moduleId!==t})),this.updateUrlFragment()},addSemester:function(){this.semesters.push({number:this.semesters.length+1,modules:[]})},removeSemester:function(e){this.semesters=this.semesters.filter((function(t){return t.number!==e})),this.unknownModules=this.unknownModules.filter((function(t){return t.semesterNumber!==e})),this.updateUrlFragment()},showErrorMsg:function(e){var t=this;null!==this.errorTimer&&clearTimeout(this.errorTimer),this.errorMsg=e,this.errorTimer=setTimeout((function(){t.errorMsg=null}),3e3)},showUnknownModulesError:function(e,t){this.unknownModules.find((function(e){return e.moduleId===t}))||this.unknownModules.push({semesterNumber:e,moduleId:t})},removeUnknownModulesFromUrl:function(){this.unknownModules=[],this.updateUrlFragment()},onModuleDeleted:function(e,t){this.removeModule(e,t)}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getModules();case 2:return e.modules=t.sent,e.semesters=e.getPlanDataFromUrl(),t.next=6,e.getCategories();case 6:return e.categories=t.sent,t.next=9,e.getFocuses();case 9:e.focuses=t.sent;case 10:case"end":return t.stop()}}),t)})))()}};const De=Y()(Be,[["render",V]]);var Ve=De,we=[{path:"/:catchAll(.*)",name:"Home",component:Ve}],Fe=Object(s["a"])({history:Object(s["b"])(),routes:we}),xe=Fe,We={class:"p-5 custom-container"};function Te(e,t,n,o,c,l){var s=Object(r["resolveComponent"])("Navigation"),a=Object(r["resolveComponent"])("router-view"),i=Object(r["resolveComponent"])("Footer");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(s),Object(r["createElementVNode"])("div",We,[Object(r["createVNode"])(a)]),Object(r["createVNode"])(i)],64)}var Re=n("cf05"),Ke=n.n(Re),Ue={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},Le={class:"navbar-brand"},ze=Object(r["createElementVNode"])("img",{src:Ke.a,class:"logo-nav"},null,-1),qe=Object(r["createElementVNode"])("span",{"aria-hidden":"true"},null,-1),Qe=Object(r["createElementVNode"])("span",{"aria-hidden":"true"},null,-1),$e=Object(r["createElementVNode"])("span",{"aria-hidden":"true"},null,-1),Ge=[qe,Qe,$e],He={class:"navbar-start"},Je=["textContent"],Xe={class:"navbar-dropdown"},Ye=["href","textContent"];function Ze(e,t,n,o,c,l){var s=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("nav",Ue,[Object(r["createElementVNode"])("div",Le,[Object(r["createVNode"])(s,{class:"navbar-item",to:"/"},{default:Object(r["withCtx"])((function(){return[ze]})),_:1}),Object(r["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(){return l.onBurgerClick&&l.onBurgerClick.apply(l,arguments)}),class:Object(r["normalizeClass"])([{"is-active":c.isBurgerActive},"navbar-burger"]),role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},Ge,2)]),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["navbar-menu",{"is-active":c.isBurgerActive}])},[Object(r["createElementVNode"])("div",He,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.categories,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.title,class:"navbar-item has-dropdown is-hoverable"},[Object(r["createElementVNode"])("a",{class:"navbar-link",textContent:Object(r["toDisplayString"])(e.title)},null,8,Je),Object(r["createElementVNode"])("div",Xe,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.plans,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{class:"navbar-item",key:e.title,href:"#/plan/"+e.path,textContent:Object(r["toDisplayString"])(e.title),onClick:t[1]||(t[1]=function(){return l.onBurgerClick&&l.onBurgerClick.apply(l,arguments)})},null,8,Ye)})),128))])])})),128))])],2)])}var et={name:"Navigation",data:function(){return{isBurgerActive:!1,categories:[{title:"Musterpläne Teilzeit",plans:[{title:"Freie Modulwahl",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-KommIng2-SEP1_ExEv-SEProj_SEP2_DigBusI-SAI21_WI2-BAI14_PhAI"},{title:"Software Engineering",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-ParProg_SecSoW_Bsys2_AIAp_DatEng_KommIng2-PmQm_CoBau_MsTe_CPl_SEP1_ExEv-CPlA_DSy_SEProj_SEP2_DigBusI-PF_AppArch_SAI21_WI2-CldSol_BAI14_PhAI"},{title:"Frontend Engineering",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_SecSoW_Bsys2_AIAp_DatEng_KommIng2-PmQm_WE3_MsTe_MGE_SEP1_ExEv-HCD_DSy_SEProj_SEP2_DigBusI-ComGra_AppArch_SAI21_WI2-CldSol_BAI14_PhAI"},{title:"Cybersecurity",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_SecSoW_Bsys2_CN2_KommIng2-PmQm_PFSec_CldInf_NISec_SEP1_ExEv-CldOp_HackL_DSy_SEProj_SEP2_DigBusI-CyDef_AppArch_SAI21_WI2-IncResp_BAI14_PhAI"},{title:"Network and Cloud Infrastructure",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_SDW_DatAna_NetAut_CN2_KommIng2-PmQm_CldInf_NISec_SEP1_ExEv-CldOp_SModSim_DSy_SEProj_SEP2_DigBusI-CyDef_AppArch_SAI21_WI2-CldSol_BAI14_PhAI"},{title:"Data Engineering and Machine Intelligence",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_MathFML_DatAna_AIAp_DatEng_KommIng2-PmQm_ML_MsTe_MGE_SEP1_ExEv-DL_DSy_SEProj_SEP2_DigBusI-BlCh_AppArch_SAI21_WI2-CldSol_BAI14_PhAI"}]},{title:"Musterpläne Vollzeit",plans:[{title:"Freie Modulwahl",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I_Dbs1_EnglScience-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I_KommIng2-WE1_AlgDat_Bsys1_AIFo_SEP1_ExEv-SEProj_SEP2_DigBusI-PmQm_SAI21_WI2-BAI14_PhAI"},{title:"Software Engineering",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I_Dbs1_EnglScience-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I_DatEng_KommIng2-WE1_AlgDat_Bsys1_AIFo_MsTe_CPl_SEP1_ExEv-ParProg_SecSoW_Bsys2_AIAp_DSy_SEProj_SEP2_DigBusI-PmQm_CoBau_PF_AppArch_SAI21_WI2-CPlA_CldSol_BAI14_PhAI"},{title:"Frontend Engineering",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I_Dbs1_EnglScience-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I_DatEng_KommIng2-WE1_AlgDat_Bsys1_AIFo_MsTe_MGE_SEP1_ExEv-WE2_SecSoW_Bsys2_AIAp_DSy_SEProj_SEP2_DigBusI-PmQm_WE3_ComGra_AppArch_SAI21_WI2-HCD_CldSol_BAI14_PhAI"},{title:"Cybersecurity",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I_Dbs1_EnglScience-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I_CN2-WE1_AlgDat_Bsys1_AIFo_CldInf_NISec_SEP1_ExEv-WE2_SecSoW_Bsys2_DSy_SEProj_SEP2_DigBusI-PmQm_PFSec_CyDef_AppArch_SAI21_WI2-CldOp_HackL_KommIng2_IncResp_BAI14_PhAI"},{title:"Network and Cloud Infrastructure",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I_Dbs1_EnglScience-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I_CN2-WE1_AlgDat_Bsys1_AIFo_CldInf_NISec_SEP1_ExEv-WE2_SDW_DatAna_NetAut_DSy_SEProj_SEP2_DigBusI-PmQm_CyDef_AppArch_SAI21_WI2-CldOp_SModSim_KommIng2_CldSol_BAI14_PhAI"},{title:"Data Engineering and Machine Intelligence",path:"RheKI_OOP1_AutPy_CN1_DMI_An1I_Dbs1_EnglScience-FunProg_OOP2_DigCod_CySec_AutoSpr_An2I_DatEng_KommIng2-WE1_AlgDat_Bsys1_AIFo_MsTe_MGE_SEP1_ExEv-WE2_MathFML_DatAna_AIAp_DSy_SEProj_SEP2_DigBusI-PmQm_ML_AppArch_BlCh_SAI21_WI2-DL_CldSol_BAI14_PhAI"}]}]}},methods:{onBurgerClick:function(){this.isBurgerActive=!this.isBurgerActive}}};const tt=Y()(et,[["render",Ze]]);var nt=tt,rt={class:"section rab-footer"},ot=Object(r["createStaticVNode"])('<div class="pt-5 divider"></div><div class="columns"><div class="column is-11"><p> © 2022 Jeremy Stucki, Gregor Stuber, Joshua Hürzeler, Mathias Fischler, Luzia Kündig </p></div><div class="column is-1 ml-auto"><a class="mr-4 is-inline-block" href="https://github.com/unkelhoebbi/semester-scheduler"><i class="fab fa-github fa-2x social"></i></a></div></div>',2),ct=[ot];function lt(e,t,n,o,c,l){return Object(r["openBlock"])(),Object(r["createElementBlock"])("footer",rt,ct)}var st={name:"Footer"};const at=Y()(st,[["render",lt]]);var it=at,ut={components:{Footer:it,Navigation:nt}};const dt=Y()(ut,[["render",Te]]);var mt=dt;c["c"].add(l["b"]),c["c"].add(l["a"]),n("b383"),Object(r["createApp"])(mt).use(xe).component("font-awesome-icon",o["a"]).mount("#app")},b383:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.192707d0.png"},cf1c:function(e,t,n){e.exports=n.p+"img/this_is_fine.ab244aeb.jpg"}});
//# sourceMappingURL=app.a7128afe.js.map