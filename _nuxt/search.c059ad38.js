import{_ as p}from"./ProductItem.vue.b67ae9e2.js";import{u as l}from"./asyncData.3621e9fb.js";import{u as f}from"./index.32a424e1.js";import{d as h,N as y,A as t,B as s,Q as a,R as v,u as c,Y as I,Z as w,C as r}from"./swiper-vue.aad54847.js";import{_ as n}from"./entry.5ebd9678.js";const x={class:"product-wrap search-wrap"},S={class:"product-item"},g=h({__name:"SearchItem",setup(_){const e=f(),o=l("Item",async()=>await e.searchKeyward).data,d=e.searchItem;return y(()=>{console.log(e.searchKeyward)}),($,A)=>{const m=p;return t(),s("div",null,[a("div",x,[a("h1",null,"'"+v(c(o))+"'에 대한 검색 결과입니다.",1),a("div",S,[(t(!0),s(I,null,w(c(d),(u,i)=>(t(),s("div",{class:"item",key:i},[r(m,{product:u},null,8,["product"])]))),128))])])])}}});const B=n(g,[["__scopeId","data-v-65285677"]]),k={},K={class:"wrap"};function N(_,e){const o=B;return t(),s("div",K,[r(o)])}const L=n(k,[["render",N]]);export{L as default};