(this["webpackJsonphuitre-project"]=this["webpackJsonphuitre-project"]||[]).push([[0],{54:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(5),i=c(40),a=c.n(i),n=c(9),r=c.p+"static/media/huitre3.637ad136.jpg",l=c(31),j=c(26),o=c(12),d=(c(54),c(3)),u=c(0),b=c.n(u),h=c(30),O=c(41),x=Object(O.a)({apiKey:"AIzaSyDONkDCKtfyt3QZtzCfd3ONp6DliGO_TzA",authDomain:"ventehuitres-9aa8b.firebaseapp.com",projectId:"ventehuitres-9aa8b",storageBucket:"ventehuitres-9aa8b.appspot.com",messagingSenderId:"1013400951266",appId:"1:1013400951266:web:0f1f957dc882296f6441bb",measurementId:"G-SWCYK887WM"}),p=Object(h.b)(x),m=c(1);var A=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(""),r=Object(n.a)(a,2),l=r[0],j=r[1],u=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.c)(p,l,c);case 3:e.sent,alert("success: vous etes connect\xe9"),j(""),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),alert("le mot de passe doit contenir minimum 6 charact\xe9re ");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{id:"main",className:"signupUser",children:[Object(m.jsx)("h2",{children:"Connectez-vous \xe0 votre compte"}),Object(m.jsxs)("form",{className:"form",children:[Object(m.jsxs)("div",{className:"inputBox",children:[Object(m.jsx)("label",{children:"Entrer votre Email"}),Object(m.jsx)("input",{onChange:function(e){j(e.target.value)},placeholder:"Email"})]}),Object(m.jsxs)("div",{className:"inputBox",children:[Object(m.jsx)("label",{children:"Entrer votre mot de passe"}),Object(m.jsx)("input",{onChange:function(e){i(e.target.value)},type:"password",placeholder:"votre mot de passe"})]})]}),Object(m.jsx)("button",{onClick:u,className:"btn-acceuil",children:"Connexion"}),Object(m.jsx)(o.b,{className:"btn-acceuil",to:"/Signup",children:"Vous voulez vous incrire? incrivez-vous"}),Object(m.jsx)(o.b,{className:"btn-acceuil",to:"/Landing",children:"Revenir page d'accueil"})]})},g=Object(s.createContext)(null),N=Object(s.createContext)(null),v=Object(s.createContext)(null),f=Object(s.createContext)(null),E=function(e){e.state;var t=e.setState,c=Object(s.useContext)(g),i=c.price,a=(c.setPrice,Object(s.useContext)(N)),n=a.count,r=a.setCount,l=Object(s.useContext)(v),j=l.counter,o=l.setCounter,d=n*parseInt(Number(14)),u=j*parseInt(Number(15)),b=n*parseInt(Number(14))+parseInt(j*Number(15));return Object(s.useEffect)((function(){(d<0&&u<0||n<=0&&j<=0)&&(r(0),o(0))}),[d,u,n,j]),Object(m.jsxs)("div",{className:"Menu-choice",style:{position:"fixed",postion:"relative",zIndex:"100",opacity:"0.8",right:"15px",top:"250px",width:"50%",height:"61%",background:"grey"},children:[Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignContent:"center"},children:[Object(m.jsx)("h1",{children:"votre panier"}),Object(m.jsx)("button",{style:{padding:"15px",cursor:"pointer"},className:"btn-choice",onClick:function(){t(!1)},children:"X"})]}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"35px"},children:[Object(m.jsx)("div",{className:"oyester plate",children:Object(m.jsxs)("ul",{style:{listStyleType:"none",textDecoration:"none"},children:[Object(m.jsx)("li",{children:Object(m.jsx)("h4",{children:"Quantit\xe9"})}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("p",{children:n}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("h4",{children:"Prix"})]}),Object(m.jsxs)("p",{children:[i.Firstprice,"euros"]})]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("h4",{children:"Total"})]}),Object(m.jsxs)("li",{children:[d," euros"]})]})}),Object(m.jsx)("div",{className:"oyester creuse",children:Object(m.jsxs)("ul",{style:{listStyleType:"none",textDecoration:"none"},children:[Object(m.jsx)("li",{children:Object(m.jsx)("h4",{children:"Quantit\xe9"})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:j})}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("h4",{children:"Prix"})]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsxs)("p",{children:[i.secondPrice," euros"]})," "]}),Object(m.jsx)("li",{children:Object(m.jsx)("h4",{children:"Total"})}),Object(m.jsxs)("li",{children:[u,"euros"]})]})})]}),Object(m.jsxs)("h2",{children:["Total:  ",b,"  euros"]}),Object(m.jsx)("div",{className:"btnId",children:Object(m.jsx)("input",{style:{transform:"translate3d(75px, 33px, 0px)",backgroundColor:"#1a528b",color:"white",padding:"15px"},type:"submit",value:"Envoyer votre commande"})})]})},C=function(){Object(s.useRef)(null);var e=Object(s.useRef)(null),t=Object(s.useState)(!1),c=Object(n.a)(t,2),i=c[0],a=c[1],d=Object(s.useContext)(N),u=d.count,b=(d.setCount,Object(s.useContext)(v)),h=b.counter;b.setCounter;return Object(m.jsxs)("div",{className:"q-hero",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("img",{style:{transform:"translate3d(-2px,12px,0)",height:"50px",width:"50px",borderRadius:"50%"},src:r}),"hu\xeetre en ligne",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{onClick:function(){e.current.classList.add("showMenu")},className:"menu-burger",children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]}),Object(m.jsx)(o.b,{style:{marginRight:"15px"},className:"logo",to:"/Welcome",children:Object(m.jsx)(l.a,{className:"logoStry",style:{cursor:"pointer",color:"white"},icon:j.c})}),Object(m.jsx)(l.a,{style:{cursor:"pointer",color:"white"},icon:j.b}),u+h]}),Object(m.jsx)("button",{style:{color:"white",cursor:"pointer",background:"black",padding:"15px",fontSize:"15px",marginTop:"15px"},onClick:function(){a(!0)},children:"Voir votre panier"}),i&&Object(m.jsxs)("div",{children:[Object(m.jsx)(E,{state:i,setState:a}),Object(m.jsx)(o.b,{to:"/Panier"})]}),Object(m.jsx)("nav",{ref:e,class:"navigation",children:Object(m.jsxs)("ul",{className:"nav",children:[Object(m.jsx)("h1",{className:"title-nav",children:"Menu"}),Object(m.jsxs)("div",{onClick:function(){e.current.classList.remove("showMenu")},className:"burger",children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]}),Object(m.jsx)("li",{style:{cursor:"pointer"},className:"first-li",children:"NOS HUITRES"}),Object(m.jsx)("li",{style:{cursor:"pointer"},children:"NOS PRODUCTEURS"}),Object(m.jsx)("li",{style:{cursor:"pointer"},children:"CONTACT"})]})})]})},k=c(2),D=function(){var e;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(l.a,{style:{color:"blue"},icon:j.a}),Object(m.jsxs)("h1",{children:[Object(m.jsx)("i",(e={className:"ancre",style:{marginRight:"5px"}},Object(k.a)(e,"className","dash-blue"),Object(k.a)(e,"children","---"),e)),Object(m.jsx)("span",{style:{color:"blue"},children:"Du producteur"})," au ",Object(m.jsx)("span",{style:{color:"red"},children:"consommateur"}),Object(m.jsx)("i",{style:{marginLeft:"5px"},className:"dash-red",children:"---"})]}),Object(m.jsx)(l.a,{style:{color:"red"},icon:j.a})]})},S=c.p+"static/media/huitre.e7ae847e.png",y=c(29),Q=c.n(y),W=(c(38),function(){return Object(s.useEffect)((function(){Q.a.init({duration:2e3})}),[]),Object(m.jsx)("div",{className:"container-article",children:Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsxs)("div",{"data-aos":"fade-right",className:"article1",children:[Object(m.jsx)("h2",{children:"hu\xeetre naturelle"}),Object(m.jsxs)("p",{children:["une huitre exceptionnelle,",Object(m.jsx)("br",{}),"r\xe9serv\xe9e aux connaisseurs"]}),Object(m.jsx)(o.b,{className:"btn",to:"/",children:"D\xe9couvrir"})]}),Object(m.jsxs)("div",{"data-aos":"fade-left",className:"article2",children:[Object(m.jsx)("h2",{children:"--hu\xeetre-- Bio"}),Object(m.jsxs)("p",{children:["---une huitre Bio,",Object(m.jsx)("br",{}),"\xe0 decouvrir dans la r\xe9gion---"]}),Object(m.jsx)(o.b,{className:"btn",to:"/",children:"D\xe9couvrir"}),Object(m.jsx)("img",{style:{zIndex:"-1",height:"50px",marginTop:"35px",borderRadius:"50%"},src:S})]})]})})}),G=c.p+"static/media/camion.8691816e.jpg",w=c.p+"static/media/telephone.eca5d3be.jpg",R=c.p+"static/media/carte.d5d3286f.jpg",B=c.p+"static/media/cadeaux.5e6391da.jpg",J=c.p+"static/media/huitredessin.a5e552fc.jpg",Z=function(){return Object(s.useEffect)((function(){Q.a.init({duration:2e3})}),[]),Object(m.jsxs)("div",{"data-aos":"fade-bottom",className:"colunm-client",children:[Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["Livraison garantie gratuit",Object(m.jsx)("img",{src:G})]}),Object(m.jsxs)("li",{children:["Service client",Object(m.jsx)("img",{src:w})]}),Object(m.jsxs)("li",{children:["Paiement s\xe9curis\xe9",Object(m.jsx)("img",{src:R})]}),Object(m.jsxs)("li",{children:["Offres exclusives",Object(m.jsx)("img",{src:B})]})]}),Object(m.jsxs)("div",{className:"slide",children:[Object(m.jsx)("img",{className:"img-huitre",src:J}),Object(m.jsx)("h1",{children:"S\xe9lection d'huitre"})]})]})},F=c.p+"static/media/photo1.235ca92b.jpg",H=c.p+"static/media/huitrespeciale.7730f3e0.jpg",M=c.p+"static/media/photo2.126eaa5e.jpg",T=c.p+"static/media/photo4.517ab970.jpg",I=c.p+"static/media/photo5.08cfc6d1.jpg",z=c.p+"static/media/photo6.48bbc41d.jpg",U=c.p+"static/media/huitre7.602592e3.jpg",L=c.p+"static/media/huitrecreusebaie.c359d656.jpg",P=function(){var e=Object(s.useContext)(g),t=(e.price,e.setPrice,Object(s.useContext)(N)),c=t.count,i=t.setCount,a=Object(s.useContext)(v),n=a.counter,r=a.setCounter,l=Object(s.useContext)(f),j=l.stateButton,d=l.setstateButton;return Object(s.useEffect)((function(){Q.a.init({duration:2e3})}),[]),Object(s.useEffect)((function(){n>=0&&c>=0?d(!0):(c<=0||n<=0||c+n<=0)&&(d(!1),i(0),r(0))}),[n,c]),Object(m.jsxs)("div",{className:"containers",children:[Object(m.jsxs)("div",{"data-aos":"fade-right",className:"container1",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("i",{className:"first-letter",children:"H"}),"uitre de qualit",Object(m.jsx)("i",{className:"last-letter",children:"\xe9"})]}),Object(m.jsx)("h2",{children:"L'huitres creuse"}),Object(m.jsxs)("p",{children:["Nos huitres p\xe9ch\xe9es dans la baie de Quiberon, offrent un gout exceptionnelle et unique de part sa qualit\xe9 unique Elles offrent des propri\xe9te gustative inedite sa particularit\xe9 en fait une huitre d'exception. la qualit\xe9, la fra\xeecheur et le respect de la tradition sont au c\u0153ur de nos pr\xe9occupations. C\u2019est aussi la recherche constante de l\u2019excellence \xe0 travers le go\xfbt des hu\xeetres propos\xe9es.",Object(m.jsx)("br",{}),"Creuses ou plates ? D\u2019un point de vue anatomique, on distingue les hu\xeetres creuses des hu\xeetres plates. Ces derni\xe8res sont les plus rares alors qu\u2019elles \xe9taient la seule esp\xe8ce connue en France jusqu\u2019au si\xe8cle dernier. Actuellement, ce sont les hu\xeetres creuses qui sont le plus produites sur nos c\xf4tes. Les hu\xeetres plates ont un go\xfbt plus prononc\xe9 en iode que les creuses. Elles sont \xe9galement plus ch\xe8res car moins produites (2% de la production fran\xe7aise)."]})]}),Object(m.jsx)("div",{"data-aos":"fade-left",className:"container2",children:Object(m.jsx)("img",{style:{width:"50%",height:"150%",margin:"0"},src:F})}),Object(m.jsxs)("div",{"data-aos":"fade-bottom",className:"container3",children:[Object(m.jsxs)("h1",{"data-aos":"fade-bottom",children:[Object(m.jsx)("i",{className:"first-letter",children:"Huitre de la"})," baie de ",Object(m.jsx)("i",{className:"last-letter",children:"Quiberon"})]}),Object(m.jsx)("p",{children:"Retrouvez la gamme d\u2019excellence des hu\xeetres creuse produites par les ma\xeetres affineurs fred qui est l'une des exploitations les plus r\xe9put\xe9es de la baie de Quiberon."}),Object(m.jsx)("img",{style:{display:"block",margin:"auto",width:"30%",height:"40%"},src:H}),Object(m.jsx)(o.b,{className:"btn",to:"/",children:"D\xe9couvrir"})]}),Object(m.jsxs)("div",{className:"article-images",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{"data-aos":"fade-right",className:"skewElem",style:{width:"100%",height:"100%"},src:F})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{"data-aos":"fade-left",className:"skewElem",style:{width:"100%",height:"100%"},src:M})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{"data-aos":"fade-right",className:"skewElem",style:{width:"100%",height:"100%"},src:"data:image/jpeg;base64,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"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{"data-aos":"fade-left",className:"skewElem",style:{width:"100%",height:"100%"},src:T})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{"data-aos":"fade-right",className:"skewElem",style:{width:"100%",height:"100%"},src:I})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{"data-aos":"fade-left",className:"skewElem",style:{width:"100%",height:"100%"},src:z})})]}),Object(m.jsxs)("div",{className:"sale-oyster",children:[Object(m.jsx)("h1",{className:"title-oyester",children:"Nos ventes"}),Object(m.jsx)("h2",{children:"huitre baie de quiberon"}),Object(m.jsxs)("div",{style:{transform:"translateX(-33px)"},className:"wrapper-oyster",children:[Object(m.jsx)(o.b,{to:"/sale",children:Object(m.jsx)("img",{"data-aos":"fade-up",src:L})}),Object(m.jsx)("label",{style:{marginRight:"10px",display:"block",fontSize:"30px"},htmlFor:"quantit\xe9",children:"Quantit\xe9"}),Object(m.jsx)("button",{value:"+",onClick:function(){i(c+1)},style:{width:"50px"},children:Object(m.jsx)("i",{children:"+"})}),j?Object(m.jsx)("button",{value:"-",onClick:function(){i(c-1)},style:{width:"50px"},children:Object(m.jsx)("i",{children:"-"})}):Object(m.jsx)("button",{disabled:!0,value:"-",onClick:function(){i(c-1)},style:{width:"50px"},children:Object(m.jsx)("i",{children:"-"})}),Object(m.jsx)("p",{children:"Prix: 14 euros la bourriche (huitres plates)"}),Object(m.jsxs)("h2",{style:{margin:"25px"},children:["nombre de bourriche:",c]}),Object(m.jsx)("img",{style:{marginTop:"150px"},"data-aos":"fade-up",src:U}),Object(m.jsx)("label",{style:{marginRight:"10px",display:"block",fontSize:"30px"},htmlFor:"quantit\xe9",children:"Quantit\xe9"}),Object(m.jsx)("button",{value:"+",onClick:function(){r(n+1)},style:{width:"50px"},children:Object(m.jsx)("i",{children:"+"})}),j?Object(m.jsx)("button",{value:"-",onClick:function(){r(n-1)},style:{width:"50px"},children:Object(m.jsx)("i",{children:"-"})}):Object(m.jsx)("button",{disabled:!0,value:"-",onClick:function(){r(n-1)},style:{width:"50px"},children:Object(m.jsx)("i",{children:"-"})}),Object(m.jsx)("p",{children:"Prix: 12 euros la bourriche (huitres creuses)"}),Object(m.jsxs)("h2",{style:{margin:"25px"},children:["nombre de bourriche:",n]})]})]})]})};var Y=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(""),r=Object(n.a)(a,2),l=r[0],j=r[1],u=Object(s.useState)(""),O=Object(n.a)(u,2),x=O[0],A=O[1],g=Object(s.useState)(""),N=Object(n.a)(g,2),v=(N[0],N[1],Object(s.useState)("")),f=Object(n.a)(v,2),E=f[0],C=(f[1],""===E&&Object(m.jsx)("span",{children:E.message}));Object(s.useEffect)((function(){i(""!==l&&""!==x)}),[l,x]);var k=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.a)(p,x,l);case 3:e.sent,alert("success:vous etes d\xe9sormais incrit"),j(""),A(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),"auth/invalid-email"===e.t0.code&&alert("format invalide");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{id:"main",className:"signupUser",children:[Object(m.jsx)("h2",{children:"Inscription"}),Object(m.jsxs)("form",{className:"form",children:[Object(m.jsxs)("div",{className:"inputBox",children:[Object(m.jsx)("label",{children:"Entrer votre Email"}),Object(m.jsx)("input",{onChange:function(e){A(e.target.value)},placeholder:"Email"})]}),Object(m.jsxs)("div",{className:"inputBox",children:[Object(m.jsx)("label",{children:"Entrer votre mot de passe"}),Object(m.jsx)("input",{onChange:function(e){j(e.target.value)},type:"password",placeholder:"votre mot de passe"}),Object(m.jsxs)("h1",{children:[" ",C]}),Object(m.jsx)("button",{onClick:k,style:{marginTop:"25px",border:"none",opacity:"0.4"},children:"mot de passe oubli\xe9?"})]})]}),c?Object(m.jsx)("button",{onClick:k,className:"btn-acceuil",children:"Inscription"}):Object(m.jsx)("button",{style:{color:"black"},disabled:!0,onClick:k,className:"btn-acceuil",children:"Inscription"}),Object(m.jsx)(o.b,{className:"btn-acceuil",to:"/Landing",children:"Revenir page d'accueil"})]})},q=function(){return Object(m.jsx)("div",{className:"card-client",children:Object(m.jsxs)("div",{className:"New-client",children:[Object(m.jsx)("h1",{children:"Nouveaux clients"}),Object(m.jsx)("p",{children:"Vous pouvez vous inscrire,vous pourrez passer vos commande plus rapidement et ainsi etre informer pour pouvoir profitez des offres commerciales"}),Object(m.jsxs)("div",{className:"btn-client",children:[Object(m.jsx)(o.b,{className:"btn-signup",to:"/Signup",children:"Cr\xe9ez votre compte"}),Object(m.jsx)(o.b,{className:"btn-login",to:"/login",children:"Se connecter"}),Object(m.jsx)(o.b,{className:"btn-acceuil",to:"/",children:"Revenir \xe0 l'acceuil "})]})]})})},K=(c(62),c(13));var X=function(){var e=Object(s.useState)({Firstprice:14,secondPrice:15}),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(0),r=Object(n.a)(a,2),l=r[0],j=r[1],d=Object(s.useState)(0),u=Object(n.a)(d,2),b=u[0],h=u[1],O=Object(s.useState)(!0),x=Object(n.a)(O,2),p=x[0],k=x[1];return Object(m.jsx)(o.a,{children:Object(m.jsx)(f.Provider,{value:{stateButton:p,setstateButton:k},children:Object(m.jsx)(N.Provider,{value:{count:l,setCount:j},children:Object(m.jsx)(g.Provider,{value:{price:c,setPrice:i},children:Object(m.jsxs)(v.Provider,{value:{counter:b,setCounter:h},children:[Object(m.jsx)(C,{}),Object(m.jsxs)(K.c,{children:[Object(m.jsx)(K.a,{path:"/Welcome",component:q}),Object(m.jsx)(K.a,{path:"/login",component:A}),Object(m.jsx)(K.a,{path:"/Signup",component:Y}),Object(m.jsx)(K.a,{path:"/Panier",component:E})]}),Object(m.jsx)(D,{}),Object(m.jsx)(W,{}),Object(m.jsx)(Z,{}),Object(m.jsx)(P,{})]})})})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))};a.a.render(Object(m.jsx)(o.a,{children:Object(m.jsx)(X,{})}),document.getElementById("root")),V()}},[[63,1,2]]]);
//# sourceMappingURL=main.642ec93b.chunk.js.map