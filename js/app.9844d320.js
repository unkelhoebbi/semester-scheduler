(function(e){function t(t){for(var c,o,s=t[0],u=t[1],i=t[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"41c2":function(e,t,n){},"4b4e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=(n("15f5"),n("7051"),{class:"p-5 custom-container"});function a(e,t,n,a,o,s){var u=Object(c["y"])("Navigation"),i=Object(c["y"])("router-view"),l=Object(c["y"])("Footer");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(u),Object(c["e"])("div",r,[Object(c["h"])(i)]),Object(c["h"])(l)],64)}var o=n("cf05"),s=n.n(o),u={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},i={class:"navbar-brand"},l=Object(c["e"])("img",{src:s.a,class:"logo-nav"},null,-1),d=Object(c["e"])("span",{"aria-hidden":"true"},null,-1),b=Object(c["e"])("span",{"aria-hidden":"true"},null,-1),f=Object(c["e"])("span",{"aria-hidden":"true"},null,-1),m=[d,b,f],j=Object(c["e"])("div",{class:"navbar-start"},null,-1),O=[j];function p(e,t,n,r,a,o){var s=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",u,[Object(c["e"])("div",i,[Object(c["h"])(s,{class:"navbar-item",to:"/"},{default:Object(c["F"])((function(){return[l]})),_:1}),Object(c["e"])("a",{onClick:t[0]||(t[0]=function(){return o.onBurgerClick&&o.onBurgerClick.apply(o,arguments)}),class:Object(c["n"])([{"is-active":a.isBurgerActive},"navbar-burger"]),role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},m,2)]),Object(c["e"])("div",{class:Object(c["n"])(["navbar-menu",{"is-active":a.isBurgerActive}])},O,2)])}var h={name:"Navigation",data:function(){return{isBurgerActive:!1}},methods:{onBurgerClick:function(){this.isBurgerActive=!this.isBurgerActive}}},v=n("6b0d"),g=n.n(v);const y=g()(h,[["render",p]]);var M=y,A={class:"section rab-footer"},E=Object(c["f"])('<div class="pt-5 divider" data-v-2551b617></div><div class="container" data-v-2551b617><div class="is-flex-tablet is-justify-content-between is-align-items-center" data-v-2551b617><p data-v-2551b617>© 2022 Jeremy Stucki, Gregor Stuber</p><div class="py-2 is-hidden-tablet" data-v-2551b617></div><div class="ml-auto" data-v-2551b617><a class="mr-4 is-inline-block" href="https://github.com/unkelhoebbi/semester-scheduler" data-v-2551b617><i class="fab fa-github fa-2x social" data-v-2551b617></i></a></div></div></div>',2),C=[E];function _(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("footer",A,C)}var w={name:"Footer"};n("e9a9");const k=g()(w,[["render",_],["__scopeId","data-v-2551b617"]]);var S=k,x={components:{Footer:S,Navigation:M}};const P=g()(x,[["render",a]]);var T=P,N=n("6c02"),B=(n("b0c0"),n("cf1c")),F=n.n(B),I=function(e){return Object(c["u"])("data-v-5cf9d8b3"),e=e(),Object(c["s"])(),e},U=I((function(){return Object(c["e"])("h1",{class:"title"},"Plan your semesters",-1)})),G=Object(c["g"])(" Last Semester "),K={class:"columns"},R={class:"columns"},q={class:"column"},J=I((function(){return Object(c["e"])("h2",{class:"subtitle"},"Overview ECTS",-1)})),$=I((function(){return Object(c["e"])("thead",null,[Object(c["e"])("tr",null,[Object(c["e"])("th",{class:"p-2"},"Name"),Object(c["e"])("th",{class:"p-2"},"Total"),Object(c["e"])("th",{class:"p-2"},"Required"),Object(c["e"])("th",{class:"p-2"},"Earned"),Object(c["e"])("th",{class:"p-2"},"Planned"),Object(c["e"])("th",{class:"p-2"},"Spatzig 🐤")])],-1)})),H={class:"p-2"},L={class:"p-2"},V={class:"p-2"},W={class:"p-2"},z={class:"p-2"},D={class:"p-2"},Q=I((function(){return Object(c["e"])("td",{class:"p-2"},"Total",-1)})),X=I((function(){return Object(c["e"])("td",null,null,-1)})),Y=I((function(){return Object(c["e"])("td",null,null,-1)})),Z={class:"p-2"},ee={class:"p-2"},te=I((function(){return Object(c["e"])("div",{class:"column"},[Object(c["e"])("section",null,[Object(c["e"])("img",{src:F.a})])],-1)}));function ne(e,t,n,r,a,o){var s=Object(c["y"])("Semester");return Object(c["r"])(),Object(c["d"])(c["a"],null,[U,Object(c["e"])("label",null,[G,Object(c["G"])(Object(c["e"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.lastSemesterNumber=e})},[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(a.semesters,(function(e){return Object(c["r"])(),Object(c["d"])("option",{key:e.number},Object(c["A"])(e.number),1)})),128))],512),[[c["C"],a.lastSemesterNumber]])]),Object(c["e"])("div",K,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(a.semesters,(function(e){return Object(c["r"])(),Object(c["d"])("div",{class:"column semester",key:e.name},[Object(c["h"])(s,{number:e.number,modules:e.modules,"onUpdate:modules":function(t){return e.modules=t},"all-modules":a.modules},null,8,["number","modules","onUpdate:modules","all-modules"])])})),128))]),Object(c["e"])("div",R,[Object(c["e"])("div",q,[Object(c["e"])("article",null,[J,Object(c["e"])("table",null,[$,Object(c["e"])("tbody",null,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(o.mappedCategories,(function(e){return Object(c["r"])(),Object(c["d"])("tr",{key:e.name,class:Object(c["n"])(e.categoryClass)},[Object(c["e"])("td",H,Object(c["A"])(e.name),1),Object(c["e"])("td",L,Object(c["A"])(e.total_ects),1),Object(c["e"])("td",V,Object(c["A"])(e.required_ects),1),Object(c["e"])("td",W,Object(c["A"])(e.earnedCredits),1),Object(c["e"])("td",z,Object(c["A"])(e.plannedCredits),1),Object(c["e"])("td",D,Object(c["A"])(e.total_ects-e.required_ects),1)],2)})),128)),Object(c["e"])("tr",null,[Q,X,Y,Object(c["e"])("td",Z,Object(c["A"])(o.totalEarnedEcts),1),Object(c["e"])("td",ee,Object(c["A"])(o.totalPlannedEcts),1)])])])])]),te])],64)}var ce=n("5530"),re=(n("d81d"),n("d3b7"),n("2ca0"),n("ac1f"),n("1276"),n("fb6a"),n("7db0"),n("a15b"),n("159b"),n("5db7"),n("73d9"),n("4de4"),n("a434"),function(e){return Object(c["u"])("data-v-18fa3bc0"),e=e(),Object(c["s"])(),e}),ae={class:"columns is-flex is-flex-direction-column has-text-centered"},oe=["onClick"],se=re((function(){return Object(c["e"])("i",{class:"remove-module fab fa fa-times"},null,-1)})),ue=[se],ie=re((function(){return Object(c["e"])("label",{for:"additionalModule"},"Select additional module",-1)})),le={id:"allModules"},de=["value"],be={class:"column"};function fe(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("div",ae,[Object(c["e"])("h2",null,"Semester "+Object(c["A"])(n.number),1),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(n.modules,(function(e){return Object(c["r"])(),Object(c["d"])("div",{class:Object(c["n"])(["column module mt-1",e.moduleClass]),key:e.name},[Object(c["e"])("button",{class:"is-pulled-right",onClick:function(t){return o.removeModule(e.name)}},ue,8,oe),Object(c["e"])("h3",null,Object(c["A"])(e.name),1),Object(c["e"])("p",null,Object(c["A"])(e.ects)+" ECTS",1)],2)})),128)),Object(c["e"])("div",{class:Object(c["n"])(["column",{"is-hidden":a.isAddingNewModule}])},[Object(c["e"])("button",{class:"p-2 button-add",onClick:t[0]||(t[0]=function(e){return a.isAddingNewModule=!0})},"Add")],2),Object(c["e"])("div",{class:Object(c["n"])(["column",{"is-hidden":!a.isAddingNewModule}])},[ie,Object(c["G"])(Object(c["e"])("input",{id:"additionalModule",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.additionalModule=e}),list:"allModules",onChange:t[2]||(t[2]=function(){return o.addModule&&o.addModule.apply(o,arguments)})},null,544),[[c["D"],a.additionalModule]]),Object(c["e"])("datalist",le,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(n.allModules,(function(e){return Object(c["r"])(),Object(c["d"])("option",{key:e.name,value:e.name},Object(c["A"])(e.name),9,de)})),128))])],2),Object(c["e"])("div",be,[Object(c["e"])("p",null,"Total ECTS: "+Object(c["A"])(o.getTotalEcts),1)])])}n("a9e3"),n("99af");var me={"Aufbau (I_Auf)":"category-1","Engineering Practice (I_EP)":"category-2","Gesellschaft, Wirtschaft und Recht (I-gwr)":"category-3","Informatik (I_Inf)":"category-4","Kommunikation und Englisch (I_KomEng)":"category-5","Mathematik und Physik (Kat_MaPh)":"category-6","Rahmenausbildung (Kat_RA)":"category-7","Studien- Bachelorarbeit (I_SaBa)":"category-8"},je={name:"Semester",props:{number:{type:Number},modules:{type:Array},allModules:{type:Array}},computed:{getTotalEcts:function(){return this.countTotalEcts()}},data:function(){return{additionalModule:null,isAddingNewModule:!1}},methods:{countTotalEcts:function(){return this.modules.reduce((function(e,t){return e+(t.ects||0)}),0)},addModule:function(){var e=this.$parent.getPlannedSemesterForModule(this.additionalModule);e?console.warn("Module ".concat(this.additionalModule," is already in semester ").concat(e)):(this.$parent.addModule(this.number,this.additionalModule),this.additionalModule=null,this.isAddingNewModule=!1)},removeModule:function(e){var t=this.modules.filter((function(t){return t.name===e})),n=this.modules.indexOf(t[0]);this.$parent.removeModule(this.number,n)},selectModuleClass:function(){this.modules.forEach((function(e){var t,n=null!==(t=e.categories[0])&&void 0!==t?t:"";e.moduleClass=n?me[n]:""}))}},mounted:function(){this.selectModuleClass()}};n("add2");const Oe=g()(je,[["render",fe],["__scopeId","data-v-18fa3bc0"]]);var pe=Oe,he="https://raw.githubusercontent.com/jeremystucki/ost-planer/main/data",ve="/modules.json",ge="/categories.json",ye={name:"Home",data:function(){return{semesters:[],modules:[],categories:[],lastSemesterNumber:0}},computed:{mappedCategories:function(){var e=this;return this.categories.map((function(t){return Object(ce["a"])({earnedCredits:e.getEarnedCredits(t),plannedCredits:e.getPlannedCredits(t)},t)}))},totalPlannedEcts:function(){return this.getTotalEcts(!0)},totalEarnedEcts:function(){return this.getTotalEcts()}},components:{Semester:pe},methods:{loadModules:function(){var e=this;fetch("".concat(he).concat(ve)).then((function(t){t.ok&&t.json().then((function(t){e.modules=t,e.restorePlanFromUrl(),e.loadCategories()}))}))},loadCategories:function(){var e=this;fetch("".concat(he).concat(ge)).then((function(t){t.ok&&t.json().then((function(t){e.categories=t}))}))},restorePlanFromUrl:function(){var e=this,t=window.location.hash;t.startsWith("#/plan/")&&(this.semesters=t.slice(7).split("-").map((function(t,n){return{number:n+1,modules:t.split("_").map((function(t){return e.modules.find((function(e){return e.id===t}))}))}})))},updateUrlFragment:function(){window.location.hash="plan/".concat(this.semesters.map((function(e){return e.modules.map((function(e){return e.id})).join("_")})).join("-"))},getPlannedSemesterForModule:function(e){var t;return null===(t=this.semesters.find((function(t){return t.modules.some((function(t){return t.name===e}))})))||void 0===t?void 0:t.number},getEarnedCredits:function(e){var t=this,n=0;return this.semesters.forEach((function(c){c.number<=t.lastSemester&&c.modules.forEach((function(t){t.categories[0]===e.name&&(n+=t.ects)}))})),n},getPlannedCredits:function(e){var t=0;return this.semesters.forEach((function(n){n.modules.forEach((function(n){n.categories[0]===e.name&&(t+=n.ects)}))})),t},getTotalEcts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.semesters.filter((function(n){return n.number<=e.lastSemesterNumber||t})).flatMap((function(e){return e.modules})).reduce((function(e,t){return e+t.ects}),0)},addModule:function(e,t){var n=this.modules.find((function(e){return e.name===t}));this.semesters[e-1].modules.push(n),this.updateUrlFragment()},removeModule:function(e,t){this.semesters[e-1].modules.splice(t,1)}},mounted:function(){this.loadModules(),window.addEventListener("hashchange",this.restorePlanFromUrl)}};n("ab16");const Me=g()(ye,[["render",ne],["__scopeId","data-v-5cf9d8b3"]]);var Ae=Me,Ee=[{path:"/:catchAll(.*)",name:"Home",component:Ae}],Ce=Object(N["a"])({history:Object(N["b"])(),routes:Ee}),_e=Ce;n("b383"),Object(c["c"])(T).use(_e).mount("#app")},ab16:function(e,t,n){"use strict";n("41c2")},add2:function(e,t,n){"use strict";n("f101")},b383:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.192707d0.png"},cf1c:function(e,t,n){e.exports=n.p+"img/this_is_fine.ab244aeb.jpg"},e9a9:function(e,t,n){"use strict";n("4b4e")},f101:function(e,t,n){}});
//# sourceMappingURL=app.9844d320.js.map