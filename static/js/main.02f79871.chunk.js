(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,function(e,a,i){},,function(e,a,i){},function(e,a,i){},,function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var c=i(2),t=i.n(c),n=i(6),s=i.n(n),d=(i(11),i(4)),m=i(3),r=i(1),l=i.n(r),o=(i(13),i(14),i(0));var g=function(e){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"directions",children:"Try to click every character, without clicking a character more than once. "}),Object(o.jsxs)("div",{className:"high-scores",children:[Object(o.jsxs)("div",{className:"score-container",children:[Object(o.jsx)("span",{className:"score-label",children:"Score: "}),Object(o.jsx)("span",{className:"score",children:e.score})]}),Object(o.jsxs)("div",{className:"best-container",children:[Object(o.jsx)("span",{className:"best-label",children:"Best: "}),Object(o.jsx)("span",{className:"best",children:e.best})]})]})]})},p=(i(16),i.p+"static/media/card-back.1461fe59.png"),b=i.p+"static/media/babyluigi.7e46e60a.png",j=i.p+"static/media/babymario.9bb656f3.png",u=i.p+"static/media/bowser.0a05bb29.png",f=i.p+"static/media/crankykong.45a1dbaf.png",h=i.p+"static/media/daisy.ac64f81f.png",O=i.p+"static/media/diddykong.70bcd8c3.png",k=i.p+"static/media/dixiekong.9ecbc610.png",y=i.p+"static/media/donkeykong.4f3d3afe.png",x=i.p+"static/media/funkykong.44737d63.png",v=i.p+"static/media/goomba.4da1fc78.png",N=i.p+"static/media/kameck.ae96eb19.png",S=i.p+"static/media/koopatroopa.c881da08.png",w=i.p+"static/media/link.f66cbaac.png",T=i.p+"static/media/luigi.3e66488b.png",K=i.p+"static/media/mario.1c947fc3.png",C=i.p+"static/media/peach.5682e687.png",B=i.p+"static/media/poochy.73f2d96a.png",E=i.p+"static/media/princesszelda.8a93e060.png",L=i.p+"static/media/rambi.1e00a8a5.png",M=i.p+"static/media/rosalina.050ee241.png",D=i.p+"static/media/shyguy.57ae608b.png",A=i.p+"static/media/snowmads.3c7e081e.png",P=i.p+"static/media/tikitaktribe.ab4b4192.png",q=i.p+"static/media/toad.547d4ca9.png",z=i.p+"static/media/toadette.ec398eb6.png",G=i.p+"static/media/waluigi.9c15cb96.png",J=i.p+"static/media/wario.b49d7a55.png",R=i.p+"static/media/yoshi.38c42111.png";var W=function(e){return Object(c.useEffect)((function(){return setTimeout((function(){document.querySelectorAll(".flip-card-inner").forEach((function(e){e.classList.add("flip")}))}),1e3),function(){document.querySelectorAll(".flip-card-inner").forEach((function(e){e.classList.remove("flip")}))}})),Object(o.jsx)("div",{className:"flip-card",onClick:e.handleClick,id:e.id,children:Object(o.jsxs)("div",{className:"flip-card-inner",children:[Object(o.jsx)("div",{className:"flip-card-front",children:Object(o.jsx)("img",{className:"card-back-image",src:p,alt:"stylized card back"})}),Object(o.jsxs)("div",{className:"flip-card-back",children:[Object(o.jsx)("img",{className:"card-image",src:e.image,alt:e.name}),Object(o.jsx)("p",{className:"card-name",children:e.name})]})]})})};i(17);var F=function(e){var a=function(){for(var a=[];a.length<12;){var i=Math.floor(Math.random()*e.characters.length),c=e.characters[i];a.includes(c)||a.push(c)}return a};Object(c.useEffect)((function(){s(a())}),[e.characters]);var i=Object(c.useState)(a()),t=Object(m.a)(i,2),n=t[0],s=t[1];return Object(o.jsx)("div",{className:"grid",children:n.map((function(a){return Object(o.jsx)(W,{id:a.id,name:a.name,image:a.image,handleClick:e.handleClick},a.id)}))})};var I=function(){var e=Object(c.useState)([{id:l()(),name:"Baby Luigi",image:b,selected:!1},{id:l()(),name:"Baby Mario",image:j,selected:!1},{id:l()(),name:"Bowser",image:u,selected:!1},{id:l()(),name:"Cranky Kong",image:f,selected:!1},{id:l()(),name:"Daisy",image:h,selected:!1},{id:l()(),name:"Diddy Kong",image:O,selected:!1},{id:l()(),name:"Dixie Kong",image:k,selected:!1},{id:l()(),name:"Donkey Kong",image:y,selected:!1},{id:l()(),name:"Funky Kong",image:x,selected:!1},{id:l()(),name:"Goomba",image:v,selected:!1},{id:l()(),name:"Kameck",image:N,selected:!1},{id:l()(),name:"Koopa Troopa",image:S,selected:!1},{id:l()(),name:"Link",image:w,selected:!1},{id:l()(),name:"Luigi",image:T,selected:!1},{id:l()(),name:"Mario",image:K,selected:!1},{id:l()(),name:"Peach",image:C,selected:!1},{id:l()(),name:"Poochy",image:B,selected:!1},{id:l()(),name:"Princess Zelda",image:E,selected:!1},{id:l()(),name:"Rambi",image:L,selected:!1},{id:l()(),name:"Rosalina",image:M,selected:!1},{id:l()(),name:"Shy Guy",image:D,selected:!1},{id:l()(),name:"Snowmads",image:A,selected:!1},{id:l()(),name:"Tiki Tak Tribe",image:P,selected:!1},{id:l()(),name:"Toad",image:q,selected:!1},{id:l()(),name:"Toadette",image:z,selected:!1},{id:l()(),name:"Waluigi",image:G,selected:!1},{id:l()(),name:"Wario",image:J,selected:!1},{id:l()(),name:"Yoshi",image:R,selected:!1}]),a=Object(m.a)(e,2),i=a[0],t=a[1],n=Object(c.useState)(0),s=Object(m.a)(n,2),r=s[0],p=s[1],W=Object(c.useState)(0),I=Object(m.a)(W,2),Y=I[0],Z=I[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(g,{score:r,best:Y}),Object(o.jsx)(F,{characters:i,handleClick:function(e){var a=e.currentTarget.id;!1===i.filter((function(e){return e.id===a}))[0].selected?(t(i.map((function(e){return e.id===a?Object(d.a)(Object(d.a)({},e),{},{selected:!0}):Object(d.a)({},e)}))),p(r+1)):(r>Y&&Z(r),p(0),t(i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{selected:!1})}))))}})]})};s.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.02f79871.chunk.js.map