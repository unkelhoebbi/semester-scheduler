(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4383:function(e,t,n){"use strict";n("4baa")},"4b4e":function(e,t,n){},"4baa":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=(n("15f5"),n("7051"),{class:"p-5 custom-container"});function r(e,t,n,r,o,s){var i=Object(a["x"])("Navigation"),l=Object(a["x"])("router-view"),u=Object(a["x"])("Footer");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(i),Object(a["e"])("div",c,[Object(a["g"])(l)]),Object(a["g"])(u)],64)}var o=n("cf05"),s=n.n(o),i={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},l={class:"navbar-brand"},u=Object(a["e"])("img",{src:s.a,class:"logo-nav"},null,-1),d=Object(a["e"])("span",{"aria-hidden":"true"},null,-1),b=Object(a["e"])("span",{"aria-hidden":"true"},null,-1),m=Object(a["e"])("span",{"aria-hidden":"true"},null,-1),f=[d,b,m],j=Object(a["e"])("div",{class:"navbar-start"},null,-1),O=[j];function p(e,t,n,c,r,o){var s=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",i,[Object(a["e"])("div",l,[Object(a["g"])(s,{class:"navbar-item",to:"/"},{default:Object(a["D"])((function(){return[u]})),_:1}),Object(a["e"])("a",{onClick:t[0]||(t[0]=function(){return o.onBurgerClick&&o.onBurgerClick.apply(o,arguments)}),class:Object(a["m"])([{"is-active":r.isBurgerActive},"navbar-burger"]),role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},f,2)]),Object(a["e"])("div",{class:Object(a["m"])(["navbar-menu",{"is-active":r.isBurgerActive}])},O,2)])}var h={name:"Navigation",data:function(){return{isBurgerActive:!1}},methods:{onBurgerClick:function(){this.isBurgerActive=!this.isBurgerActive}}},v=n("6b0d"),g=n.n(v);const y=g()(h,[["render",p]]);var M=y,C={class:"section rab-footer"},w=Object(a["f"])('<div class="pt-5 divider" data-v-2551b617></div><div class="container" data-v-2551b617><div class="is-flex-tablet is-justify-content-between is-align-items-center" data-v-2551b617><p data-v-2551b617>© 2022 Jeremy Stucki, Gregor Stuber</p><div class="py-2 is-hidden-tablet" data-v-2551b617></div><div class="ml-auto" data-v-2551b617><a class="mr-4 is-inline-block" href="https://github.com/unkelhoebbi/semester-scheduler" data-v-2551b617><i class="fab fa-github fa-2x social" data-v-2551b617></i></a></div></div></div>',2),S=[w];function k(e,t,n,c,r,o){return Object(a["q"])(),Object(a["d"])("footer",C,S)}var _={name:"Footer"};n("e9a9");const x=g()(_,[["render",k],["__scopeId","data-v-2551b617"]]);var E=x,P={components:{Footer:E,Navigation:M}};const A=g()(P,[["render",r]]);var q=A,T=n("6c02"),z=(n("b0c0"),function(e){return Object(a["t"])("data-v-fb52c306"),e=e(),Object(a["r"])(),e}),B=z((function(){return Object(a["e"])("h1",{class:"title"},"Plane dein Semester",-1)})),I={class:"columns"},F=z((function(){return Object(a["e"])("h2",null,"Übersicht Kategorien/Credits",-1)})),N=z((function(){return Object(a["e"])("thead",null,[Object(a["e"])("tr",null,[Object(a["e"])("th",{class:"p-2"},"Name"),Object(a["e"])("th",{class:"p-2"},"Mögliche"),Object(a["e"])("th",{class:"p-2"},"Required"),Object(a["e"])("th",{class:"p-2"},"Geplante"),Object(a["e"])("th",{class:"p-2"},"Erreichte"),Object(a["e"])("th",{class:"p-2"},"Spatzig")])],-1)})),U={class:"p-2"},K={class:"p-2"},$={class:"p-2"},R={class:"p-2"},G={class:"p-2"},J={class:"p-2"},H=z((function(){return Object(a["e"])("td",{class:"p-2"},"Total geplante",-1)})),D=z((function(){return Object(a["e"])("td",null,null,-1)})),V={class:"p-2"};function W(e,t,n,c,r,o){var s=Object(a["x"])("Semester");return Object(a["q"])(),Object(a["d"])(a["a"],null,[B,Object(a["e"])("div",I,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(r.semesters,(function(e){return Object(a["q"])(),Object(a["d"])("div",{class:"column semester",key:e.name},[Object(a["g"])(s,{number:e.number,modules:e.modules,"onUpdate:modules":function(t){return e.modules=t},"all-modules":r.allModules},null,8,["number","modules","onUpdate:modules","all-modules"])])})),128))]),Object(a["e"])("article",null,[F,Object(a["e"])("table",null,[N,Object(a["e"])("tbody",null,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.mappedCategories,(function(e){return Object(a["q"])(),Object(a["d"])("tr",{key:e.name},[Object(a["e"])("td",U,Object(a["z"])(e.name),1),Object(a["e"])("td",K,Object(a["z"])(e.total_ects),1),Object(a["e"])("td",$,Object(a["z"])(e.required_ects),1),Object(a["e"])("td",R,Object(a["z"])(e.plannedCredits),1),Object(a["e"])("td",G,Object(a["z"])(e.earnedCredits),1),Object(a["e"])("td",J,Object(a["z"])(e.plannedCredits-e.required_ects),1)])})),128)),Object(a["e"])("tr",null,[H,D,Object(a["e"])("td",V,Object(a["z"])(r.totalPlanned),1)])])])])],64)}var L=n("5530"),Q=(n("d81d"),n("d3b7"),n("a434"),n("a15b"),n("7db0"),n("159b"),function(e){return Object(a["t"])("data-v-6a0eebc0"),e=e(),Object(a["r"])(),e}),X={class:"columns is-flex is-flex-direction-column has-text-centered"},Y=["onClick"],Z=Q((function(){return Object(a["e"])("i",{class:"remove-module fab fa fa-times"},null,-1)})),ee=[Z],te=Q((function(){return Object(a["e"])("label",{for:"additionalModule"},"Select additional module",-1)})),ne={id:"allModules"},ae=["value"],ce={class:"column"};function re(e,t,n,c,r,o){return Object(a["q"])(),Object(a["d"])("div",X,[Object(a["e"])("h2",null,"Semester "+Object(a["z"])(n.number),1),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(n.modules,(function(e){return Object(a["q"])(),Object(a["d"])("div",{class:Object(a["m"])(["column module mt-1",e.moduleClass]),key:e.name},[Object(a["e"])("button",{class:"is-pulled-right",onClick:function(t){return o.removeModule(e.name)}},ee,8,Y),Object(a["e"])("h3",null,Object(a["z"])(e.name),1),Object(a["e"])("p",null,Object(a["z"])(e.ects)+" ECTS",1)],2)})),128)),Object(a["e"])("div",{class:Object(a["m"])(["column",{"is-hidden":r.isAddingNewModule}])},[Object(a["e"])("button",{class:"p-2 button-add",onClick:t[0]||(t[0]=function(e){return r.isAddingNewModule=!0})},"Add")],2),Object(a["e"])("div",{class:Object(a["m"])(["column",{"is-hidden":!r.isAddingNewModule}])},[te,Object(a["E"])(Object(a["e"])("input",{id:"additionalModule",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.additionalModule=e}),list:"allModules",onChange:t[2]||(t[2]=function(){return o.addModule&&o.addModule.apply(o,arguments)})},null,544),[[a["B"],r.additionalModule]]),Object(a["e"])("datalist",ne,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(n.allModules,(function(e){return Object(a["q"])(),Object(a["d"])("option",{key:e.name,value:e.name},Object(a["z"])(e.name),9,ae)})),128))])],2),Object(a["e"])("div",ce,[Object(a["e"])("p",null,"Total ECTS: "+Object(a["z"])(r.ectsTotal),1)])])}n("a9e3"),n("99af"),n("4de4");var oe={"Aufbau (I_Auf)":"category-1","Engineering Practice (I_EP)":"category-2","Gesellschaft, Wirtschaft und Recht (I-gwr)":"category-3","Informatik (I_Inf)":"category-4","Kommunikation und Englisch (I_KomEng)":"category-5","Mathematik und Physik (Kat_MaPh)":"category-6","Rahmenausbildung (Kat_RA)":"category-7","Studien- Bachelorarbeit (I_SaBa)":"category-8"},se={name:"Semester",props:{number:{type:Number},modules:{type:Array},allModules:{type:Array}},data:function(){return{ectsTotal:0,additionalModule:null,isAddingNewModule:!1}},methods:{updateEctsTotal:function(){this.ectsTotal=this.modules.reduce((function(e,t){return e+(t.ects||0)}),0)},addModule:function(){var e=this,t=this.$parent.getPlannedSemesterForModule(this.additionalModule);if(t)console.warn("Module ".concat(this.additionalModule," is already in semester ").concat(t));else{var n=this.allModules.find((function(t){return t.name===e.additionalModule}));this.$parent.addModuleToSemester(this.number-1,n),this.additionalModule=null,this.isAddingNewModule=!1,this.updateEctsTotal(),this.$parent.updateUrlFragment()}},removeModule:function(e){var t=this.modules.filter((function(t){return t.name===e})),n=this.modules.indexOf(t[0]);this.$parent.removeModuleFromSemester(this.number-1,n),this.updateEctsTotal(),this.$parent.updateUrlFragment()},selectModuleClass:function(){this.modules.forEach((function(e){var t,n=null!==(t=e.categories[0])&&void 0!==t?t:"";e.moduleClass=n?oe[n]:""}))}},mounted:function(){this.updateEctsTotal(),this.selectModuleClass()}};n("dd3a");const ie=g()(se,[["render",re],["__scopeId","data-v-6a0eebc0"]]);var le=ie,ue="https://raw.githubusercontent.com/jeremystucki/ost-planer/main/data",de="/modules.json",be="/categories.json",me={name:"Home",data:function(){return{semesters:[],allModules:[],categories:[],totalPlanned:0,totalEarned:0,lastSemester:2}},computed:{mappedCategories:function(){var e=this;return this.categories.map((function(t){return Object(L["a"])({earnedCredits:e.getEarnedCredits(t),plannedCredits:e.getPlannedCredits(t)},t)}))}},components:{Semester:le},methods:{loadModules:function(){var e=this;fetch("".concat(ue).concat(de)).then((function(t){t.ok&&t.json().then((function(t){e.allModules=t}))}))},loadCategories:function(){var e=this;fetch("".concat(ue).concat(be)).then((function(t){t.ok&&t.json().then((function(t){e.categories=t}))}))},addModuleToSemester:function(e,t){this.semesters[e].modules.push(t)},removeModuleFromSemester:function(e,t){this.semesters[e].modules.splice(t,1)},updateUrlFragment:function(){window.location.hash="plan/".concat(this.semesters.map((function(e){return e.modules.map((function(e){return e.id})).join("_")})).join("-"))},getPlannedSemesterForModule:function(e){var t;return null===(t=this.semesters.find((function(t){return t.modules.some((function(t){return t.name===e}))})))||void 0===t?void 0:t.number},getEarnedCredits:function(e){var t=this,n=0;return this.semesters.forEach((function(a){a.number<=t.lastSemester&&a.modules.forEach((function(a){a.categories[0]===e.name&&(n+=a.ects,t.totalEarned+=a.ects)}))})),n},getPlannedCredits:function(e){var t=this,n=0;return this.semesters.forEach((function(a){a.modules.forEach((function(a){a.categories[0]===e.name&&(n+=a.ects,t.totalPlanned+=a.ects)}))})),n}},mounted:function(){this.loadModules(),this.loadCategories()}};n("4383");const fe=g()(me,[["render",W],["__scopeId","data-v-fb52c306"]]);var je=fe,Oe=[{path:"/:catchAll(.*)",name:"Home",component:je}],pe=Object(T["a"])({history:Object(T["b"])(),routes:Oe}),he=pe;n("b383"),Object(a["c"])(q).use(he).mount("#app")},b383:function(e,t,n){},c683:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.192707d0.png"},dd3a:function(e,t,n){"use strict";n("c683")},e9a9:function(e,t,n){"use strict";n("4b4e")}});
//# sourceMappingURL=app.cef6be95.js.map