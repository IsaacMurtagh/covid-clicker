(function(e){function t(t){for(var r,u,i=t[0],s=t[1],a=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&f.push(c[u][0]),c[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/covid-clicker/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1771:function(e,t,n){var r={"./5g.png":"cd2c","./anti-mask.png":"4a38","./covid.png":"680b","./earth.png":"d2c9","./mutate-virus.png":"d7c5","./news.png":"cd65","./protest.png":"a4d0","./toilet-paper.png":"f800","./travel.png":"6128"};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=o,e.exports=c,c.id="1771"},"4a38":function(e,t,n){e.exports=n.p+"img/anti-mask.43555882.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"max-w-2xl"},o={class:"flex justify-center space-x-8"},u={class:"flex justify-center p-4"};function i(e,t,n,i,s,a){var l=Object(r["l"])("floater"),p=Object(r["l"])("earth"),f=Object(r["l"])("shop");return Object(r["j"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(l,{floats:s.floats},null,8,["floats"]),Object(r["e"])("div",c,[Object(r["e"])("div",o,[Object(r["e"])("div",null," Community Cases: "+Object(r["o"])(s.cases),1),Object(r["e"])("div",null," Cases Per Second: "+Object(r["o"])(a.casesPerSecond),1)]),Object(r["e"])("div",u,[Object(r["g"])(p,{class:"select-none",onEarthClick:a.handleEarthClick},null,8,["onEarthClick"])])]),Object(r["g"])(f,{score:s.cases,onPurchase:a.handlePurchase},null,8,["score","onPurchase"])],64)}n("d81d"),n("4de4");var s=n("d2c9"),a=n.n(s),l={class:"relative"},p={id:"earth",ref:"earth",class:"pointer-events-none"},f=Object(r["e"])("img",{class:"h-full w-full select-none",src:a.a},null,-1),d=[f];function b(e,t,n,c,o,u){return Object(r["j"])(),Object(r["d"])("div",l,[Object(r["e"])("div",p,d,512),Object(r["e"])("div",{onClick:t[0]||(t[0]=function(){return u.handleClick&&u.handleClick.apply(u,arguments)}),class:"absolute top-0 cursor-pointer rounded-full z-20 h-full w-full"})])}var g={methods:{handleClick:function(e){window.earth=this.$refs.earth,this.$emit("earth-click",e)}}};g.render=b;var j=g,h={class:"bg-gray-300"},y={class:"flex text-gray-900 text-2xl select-none"},O={key:0,class:"px-2 py-4 space-y-2"},m={key:1,class:"px-2 py-4 space-y-2"};function v(e,t,n,c,o,u){var i=Object(r["l"])("generator-option"),s=Object(r["l"])("upgrade-option");return Object(r["j"])(),Object(r["d"])("div",h,[Object(r["e"])("div",y,[Object(r["e"])("div",{class:Object(r["h"])(["flex-auto flex justify-center p-4 border-r",{"border-b hover:bg-gray-300 bg-gray-200 cursor-pointer":!o.shopMode}]),onClick:t[0]||(t[0]=function(e){return o.shopMode=!0})}," Shop ",2),Object(r["e"])("div",{class:Object(r["h"])(["flex-auto flex justify-center p-4",{"border-b hover:bg-gray-300 bg-gray-200 cursor-pointer":o.shopMode}]),onClick:t[1]||(t[1]=function(e){return o.shopMode=!1})}," Upgrages ",2)]),o.shopMode?(Object(r["j"])(),Object(r["d"])("div",O,[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(o.generators,(function(c,o){return Object(r["j"])(),Object(r["c"])(i,{key:"generator-".concat(o),model:c,score:n.score,onPurchase:t[2]||(t[2]=function(t){return e.$emit("purchase",t)})},null,8,["model","score"])})),128))])):(Object(r["j"])(),Object(r["d"])("div",m,[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(o.upgrades,(function(c,o){return Object(r["j"])(),Object(r["c"])(s,{key:"upgrade-".concat(o),model:c,score:n.score,onPurchase:t[3]||(t[3]=function(t){return e.$emit("purchase",t)})},null,8,["model","score"])})),128))]))])}n("a9e3");var k=n("d4ec"),x=n("bee2"),w=function(){function e(){Object(k["a"])(this,e),this.type="generator"}return Object(x["a"])(e,[{key:"cost",get:function(){return e.cost}},{key:"spread",get:function(){return e.spread}}],[{key:"spread",get:function(){return 1}},{key:"image",get:function(){return"anti-mask.png"}},{key:"label",get:function(){return"Anti Masker"}},{key:"cost",get:function(){return 50}}]),e}(),P=function(){function e(){Object(k["a"])(this,e),this.type="generator"}return Object(x["a"])(e,[{key:"cost",get:function(){return e.cost}},{key:"spread",get:function(){return e.spread}}],[{key:"image",get:function(){return"protest.png"}},{key:"spread",get:function(){return 10}},{key:"label",get:function(){return"Lock Down Protest"}},{key:"cost",get:function(){return 300}}]),e}(),C=function(){function e(){Object(k["a"])(this,e),this.type="generator"}return Object(x["a"])(e,[{key:"cost",get:function(){return e.cost}},{key:"spread",get:function(){return e.spread}}],[{key:"image",get:function(){return"toilet-paper.png"}},{key:"spread",get:function(){return 50}},{key:"label",get:function(){return"TP Outage"}},{key:"cost",get:function(){return 1100}}]),e}(),M=function(){function e(){Object(k["a"])(this,e),this.type="generator"}return Object(x["a"])(e,[{key:"cost",get:function(){return e.cost}},{key:"spread",get:function(){return e.spread}}],[{key:"spread",get:function(){return 2e3}},{key:"image",get:function(){return"news.png"}},{key:"label",get:function(){return"Fox News Special"}},{key:"cost",get:function(){return 88e3}}]),e}(),_=[w,P,C,M],S=function(){function e(){Object(k["a"])(this,e),this.type="upgrade"}return Object(x["a"])(e,[{key:"cost",get:function(){return e.cost}},{key:"multiplier",get:function(){return e.multiplier}}],[{key:"multiplier",get:function(){return.1}},{key:"image",get:function(){return"travel.png"}},{key:"label",get:function(){return"Travel Bubble"}},{key:"cost",get:function(){return 21e3}}]),e}(),E=function(){function e(){Object(k["a"])(this,e),this.type="upgrade"}return Object(x["a"])(e,[{key:"cost",get:function(){return e.cost}},{key:"multiplier",get:function(){return e.multiplier}}],[{key:"multiplier",get:function(){return 2}},{key:"image",get:function(){return"mutate-virus.png"}},{key:"label",get:function(){return"Mutate Virus"}},{key:"cost",get:function(){return 9e5}}]),e}(),U=function(){function e(){Object(k["a"])(this,e),this.type="upgrade"}return Object(x["a"])(e,[{key:"cost",get:function(){return e.cost}},{key:"multiplier",get:function(){return e.multiplier}}],[{key:"multiplier",get:function(){return 25}},{key:"image",get:function(){return"5g.png"}},{key:"label",get:function(){return"Vaccine contains 5G"}},{key:"cost",get:function(){return 80081500}}]),e}(),q=[S,E,U],A={class:"shadow rounded-2xl bg-gray-100 p-4 flex items-center space-x-4"},F={class:""},I=["src"],N={class:"flex-grow"},$=["disabled"],T={class:"text-blue-700"},G=Object(r["e"])("br",null,null,-1),D=Object(r["f"])(" cases p/s ");function z(e,t,n,c,o,u){return Object(r["j"])(),Object(r["d"])("div",A,[Object(r["e"])("div",F,[Object(r["e"])("img",{class:"h-14 w-14",src:u.getImgUrl(n.model.image)},null,8,I)]),Object(r["e"])("div",N,[Object(r["e"])("h3",null,Object(r["o"])(n.model.label),1),Object(r["e"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("purchase",new n.model)}),class:"btn-primary",disabled:!u.canAfford},"Cost: "+Object(r["o"])(n.model.cost),9,$)]),Object(r["e"])("div",T,[Object(r["f"])(" +"+Object(r["o"])(n.model.spread)+" ",1),G,D])])}var J={props:{model:{type:Function,required:!0},score:{type:Number,required:!0}},computed:{canAfford:function(){return this.score>=this.model.cost}},methods:{getImgUrl:function(e){return n("1771")("./".concat(e))}}};J.render=z;var L=J,V={class:"shadow rounded-2xl bg-gray-100 p-4 flex items-center space-x-4"},B={class:""},H=["src"],K={class:"flex-grow"},Q=["disabled"],R={class:"text-blue-700"};function W(e,t,n,c,o,u){return Object(r["j"])(),Object(r["d"])("div",V,[Object(r["e"])("div",B,[Object(r["e"])("img",{class:"h-14 w-14",src:u.getImgUrl(n.model.image)},null,8,H)]),Object(r["e"])("div",K,[Object(r["e"])("h3",null,Object(r["o"])(n.model.label),1),Object(r["e"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("purchase",new n.model)}),class:"btn-primary",disabled:!u.canAfford},"Cost: "+Object(r["o"])(n.model.cost),9,Q)]),Object(r["e"])("div",R," x"+Object(r["o"])(n.model.multiplier)+" more infectious ",1)])}var X={props:{model:{type:Function,required:!0},score:{type:Number,required:!0}},computed:{canAfford:function(){return this.score>=this.model.cost}},methods:{getImgUrl:function(e){return n("1771")("./".concat(e))}}};X.render=W;var Y=X,Z={components:{UpgradeOption:Y,GeneratorOption:L},props:{score:{type:Number,required:!0}},data:function(){return{generators:_,upgrades:q,shopMode:!0}}};Z.render=v;var ee=Z,te=(n("99af"),n("680b")),ne=n.n(te),re=Object(r["e"])("img",{class:"h-8 w-8 select-none",src:ne.a},null,-1),ce=[re];function oe(e,t,n,c,o,u){return Object(r["j"])(),Object(r["d"])("span",{class:"absolute z-10 pointer-event-none animate__animated animate__slow animate__fadeOutUp",style:Object(r["i"])("top: ".concat(n.config.yPos,"px; left: ").concat(n.config.xPos,"px;"))},ce,4)}var ue={props:{config:{type:Object,required:!0}}};ue.render=oe;var ie=ue,se=function(){function e(t){Object(k["a"])(this,e),this.component=Object(r["n"])(ie),this.xPos=t.xPos,this.yPos=t.yPos,this.content=t.content}return Object(x["a"])(e,[{key:"config",get:function(){return{xPos:this.xPos,yPos:this.yPos,content:this.content}}}],[{key:"fromEvent",value:function(t){var n=t.event,r=t.score;return new e({content:"+".concat(r),xPos:n.x-20,yPos:n.y-20})}}]),e}();function ae(e,t,n,c,o,u){return Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(n.floats,(function(e,t){return Object(r["j"])(),Object(r["c"])(Object(r["m"])(e.component),{key:"float-".concat(t),config:e.config},null,8,["config"])})),128)}var le={props:{floats:{type:Array,required:!0}}};le.render=ae;var pe=le,fe={name:"App",components:{Earth:j,Floater:pe,Shop:ee},data:function(){return{cases:0,floats:[],purchases:[],addCasesInterval:null}},computed:{casesPerSecond:function(){return Math.floor(this.caseGenerator*this.caseMultiplier)},caseMultiplier:function(){return this.purchases.filter((function(e){return"upgrade"==e.type})).map((function(e){return e.multiplier})).reduce((function(e,t){return e+t}),1)||1},caseGenerator:function(){return this.purchases.filter((function(e){return"generator"==e.type})).map((function(e){return e.spread})).reduce((function(e,t){return e+t}),0)}},created:function(){window.setInterval(this.destroyFloats,15e3),window.setInterval(this.addCommunityCases,1e3)},methods:{handleEarthClick:function(e){this.cases+=1,this.floats.push(se.fromEvent({event:e,score:1}))},destroyFloats:function(){this.floats=[]},addCommunityCases:function(){this.cases+=this.casesPerSecond},handlePurchase:function(e){this.cases-=e.cost,this.purchases.push(e)}}};fe.render=i;var de=fe;n("a766"),n("77ed");Object(r["b"])(de).mount("#app")},6128:function(e,t,n){e.exports=n.p+"img/travel.51321602.png"},"680b":function(e,t,n){e.exports=n.p+"img/covid.12701290.png"},a4d0:function(e,t,n){e.exports=n.p+"img/protest.6a793d2d.png"},a766:function(e,t,n){},cd2c:function(e,t,n){e.exports=n.p+"img/5g.c0eaadfb.png"},cd65:function(e,t,n){e.exports=n.p+"img/news.35952e99.png"},d2c9:function(e,t,n){e.exports=n.p+"img/earth.3c46cb62.png"},d7c5:function(e,t,n){e.exports=n.p+"img/mutate-virus.c3226ce3.png"},f800:function(e,t,n){e.exports=n.p+"img/toilet-paper.63ac9642.png"}});
//# sourceMappingURL=app.c5bb2649.js.map