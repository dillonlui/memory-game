(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var i=t(1),a=t.n(i),n=t(7),r=t.n(n),s=(t(12),t(0)),m=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{children:"Coffee Memory Game"}),Object(s.jsx)("p",{children:"Gain points by clicking on an image, but don't click on the same image twice!"})]})},j=t(3),o=t(5),d=function(e){return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("img",{src:"/memory-game"+e.data.img,alt:e.data.name})})},l=[{name:"Aeropress",img:"/images/aeropress.jpg",clicked:!1},{name:"Chemex",img:"/images/chemex.jpg",clicked:!1},{name:"Cold Brew",img:"/images/coldBrew.jpg",clicked:!1},{name:"French Press",img:"/images/frenchPress.jpg",clicked:!1},{name:"Mocha Pot",img:"/images/mochaPot.jpg",clicked:!1},{name:"Pour Over",img:"/images/pourOver.jpg",clicked:!1},{name:"Siphon",img:"/images/siphon.jpg",clicked:!1},{name:"Turkish Coffee",img:"/images/turkishCoffee.jpg",clicked:!1},{name:"Vietnamese Coffee",img:"/images/vietnamese.jpg",clicked:!1}],g=function(){var e=Object(i.useState)(Object(j.a)(l)),c=Object(o.a)(e,2),t=c[0],a=c[1],n=Object(i.useState)(0),r=Object(o.a)(n,2),m=r[0],g=r[1],h=Object(i.useState)(0),b=Object(o.a)(h,2),u=b[0],O=b[1],p=function(e){for(var c,t,i=e.length;0!==i;)t=Math.floor(Math.random()*i),c=e[i-=1],e[i]=e[t],e[t]=c;return e},f=function(e){var c=e.target.parentNode.parentNode.attributes[0].value;if(!1===t[c].clicked){var i=Object(j.a)(t);i[c].clicked=!i[c].clicked,a(p(Object(j.a)(i))),g(m+=1),m>u&&O(m)}else{g(0);for(var n=Object(j.a)(t),r=0;r<n.length;r++)n[r].clicked=!1;a(p(n))}};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"scoreContainer",children:[Object(s.jsxs)("p",{children:["Current Score: ",m]}),Object(s.jsxs)("p",{children:["High Score: ",u]})]}),Object(s.jsx)("div",{className:"cardContainer",children:t.map((function(e,c){return Object(s.jsx)("div",{onClick:f,"data-id":c,children:Object(s.jsx)(d,{data:e})},c)}))})]})};var h=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(m,{}),Object(s.jsx)(g,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b277af65.chunk.js.map