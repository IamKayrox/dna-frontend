import{Aa as n,Ba as i,Ca as C,Ja as r,Ka as l,Na as O,Oa as _,Pa as y,S as P,V as M,ia as p,oa as a,va as m,xa as d,ya as g,za as f}from"./chunk-FY3C5UYS.js";var u={appSpace:"/dna-frontend"};var h=(()=>{let t=class t{transform(s){let o=s.replace(/^\//,"");return`${u.appSpace}/${o}`}};t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=M({name:"appAsset",type:t,pure:!0,standalone:!0});let e=t;return e})();function b(e,t){if(e&1&&(n(0,"div",7)(1,"p",8),r(2),i(),n(3,"p",9),r(4),i(),n(5,"p",10),r(6),i()()),e&2){let c=t.$implicit;a(2),l(" ",c.name," "),a(2),l(" ",c.email," "),a(2),l(" ",c.phone," ")}}function w(e,t){if(e&1&&(n(0,"div",3)(1,"div",4),C(2,"img",5),_(3,"appAsset"),i(),n(4,"h3"),r(5," Contacto: "),i(),n(6,"div",6),g(7,b,7,3,"div",11,d),i()()),e&2){let c=t.$implicit;a(2),m("src",y(3,1,c.icon),p),a(5),f(c.contacts)}}var F=(()=>{let t=class t{constructor(){this.entities=[{icon:"/assets/logos/logo-dna.jpg",contacts:[{name:"Alejandra",phone:"(+54) 351 3850526",email:"museodnacba@gmail.com"},{name:"Lina",phone:"(+54) 3537 324749",email:"lina.museo.dna@gmail.com"}]},{icon:"/assets/logo-protectores.png",contacts:[{name:"Ian",phone:"(+54) 3541 599885",email:"protectores.museodna@gmail.com"}]}]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=P({type:t,selectors:[["app-welcome"]],standalone:!0,features:[O],decls:6,vars:3,consts:[[1,"page-title"],["alt","DNA",3,"src"],[1,"entities"],[1,"entity-card"],[1,"entity-logo"],["alt","logo",3,"src"],[1,"contacts"],[1,"entity-contact"],[1,"contact-name","contact-info"],[1,"contact-email","contact-info"],[1,"contact-phone","contact-info"],["class","entity-contact"],["class","entity-card"]],template:function(o,v){o&1&&(n(0,"div",0),C(1,"img",1),_(2,"appAsset"),i(),n(3,"div",2),g(4,w,9,3,"div",12,d),i()),o&2&&(a(1),m("src",y(2,1,"/assets/page-title.png"),p),a(3),f(v.entities))},dependencies:[h],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:3rem;gap:3rem}.page-title[_ngcontent-%COMP%]{width:50%}.page-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;filter:drop-shadow(0 0 .25rem black)}.entities[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:flex-start;width:100%}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]{background-color:var(--background-1);padding:1rem;border-radius:.5rem;display:flex;flex-direction:column;align-items:flex-start;width:20rem}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-logo[_ngcontent-%COMP%]{align-self:center;width:10rem}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:var(--text-color);font-family:Akatab,sans-serif;font-size:1.4rem}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]{width:100%}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .entity-contact[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid var(--border-color)}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .entity-contact[_ngcontent-%COMP%]:last-child{border-bottom:none}.entities[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .entity-contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Akatab,sans-serif;color:var(--text-color)}"],changeDetection:0});let e=t;return e})();export{F as WelcomeComponent};
