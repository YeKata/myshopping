import{u as N}from"./vue.f36acd1f.a18d00a0.js";import{u as $,_ as w}from"./entry.a0b4e5e3.js";import{u as A}from"./index.13f672c0.js";import{d as C,a as n,A as b,B as j,Q as s,u as a,U as B,X as g,C as V}from"./swiper-vue.17f8de98.js";const F={class:"join wrap"},J={class:"join-form"},P={class:"login-box"},R=s("div",{class:"login-text"}," 회원가입 ",-1),q={class:"sizing"},D=["value"],E={class:"sizing"},H=["value"],M={class:"sizing"},Q=["value"],S={class:"sizing"},T=["value"],U={class:"sizing-flex"},X={class:"harf-sizing"},Y=["value"],G={class:"harf-sizing"},K=["value"],L={class:"sizing"},O=["value"],W={class:"sizing"},Z=["value"],ee={class:"sizing"},se=["value"],te={class:"sizing"},le=["value"],ne=C({__name:"JoinForm",setup(z){const x=$(),i=n(),r=n(),v=n(),_=n(),h=n(),c=n(),d=n(),m=n(),u=n(),f=n(),y=A(),p=n(!1);N({script:[{type:"text/javascript",src:"//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"}]});const k=()=>{new daum.Postcode({oncomplete:function(l){let e=l.roadAddress,t="";l.bname!==""&&/[동|로|가]$/g.test(l.bname)&&(t+=l.bname),l.buildingName!==""&&l.apartment==="Y"&&(t+=t!==""?", "+l.buildingName:l.buildingName),t!==""&&(t=" ("+t+")"),m.value=l.zonecode,u.value=e,e!==""?u.value+=t:u.value}}).open()},o=l=>{const e=l.target;if(e.id=="name")i.value=e.value;else if(e.id=="jumin"){let t=/^[0-9]{6}/;e.value.length==6&&(t.test(e.value)?r.value=e.value:(alert("숫자만 입력해 주세요"),e.value=""))}else if(e.id=="juminback"){let t=/^[0-9]{7}/;e.value.length==7&&(t.test(e.value)?v.value=e.value:(alert("숫자만 입력해 주세요"),e.value=""))}else if(e.id=="phone"){let t=/^(011|010)[0-9]{7,8}/;e.value.length>=10&&(t.test(e.value)?_.value=e.value:(alert("전화번호를 확인해주세요"),e.value=""))}else e.id=="id"?h.value=e.value:e.id=="pass"?c.value=e.value:e.id==="repass"?(d.value=e.value,c.value==d.value?p.value=!0:p.value=!1):e.id=="detail"&&(f.value=e.value)},I=()=>{const l=n(0),e={name:i.value,jumin:r.value,juminback:v.value,phone:_.value,id:h.value,pass:c.value,post:m.value,road:u.value,detail:f.value};for(const t in e)if(e[t]==null||e[t]==null){alert(t+"값이 비어있습니다 확인해주세요");break}else l.value++;l.value==9&&(e.pass===d.value?(y.addMember(e),alert("회원가입이 완료되었습니다"),x.push("/login")):alert("비밀번호가 서로 다릅니다"))};return(l,e)=>(b(),j("div",F,[s("div",J,[s("div",P,[R,s("div",q,[s("input",{type:"text",class:"input-box",id:"sample4_postcode",value:a(m),onClick:e[0]||(e[0]=t=>k()),placeholder:"우편번호",readonly:""},null,8,D)]),s("div",E,[s("input",{type:"text",class:"input-box",id:"sample4_roadAddress",value:a(u),placeholder:"도로명주소",readonly:""},null,8,H)]),s("div",M,[s("input",{type:"text",class:"input-box",id:"detail",value:a(f),onInput:o,placeholder:"상세주소"},null,40,Q)]),s("div",S,[s("input",{type:"text",value:a(i),id:"name",class:"input-box",placeholder:"이름",onInput:o},null,40,T)]),s("div",U,[s("div",X,[s("input",{type:"text",pattern:"/^[0-9]*$/",value:a(r),id:"jumin",class:"harf-input-box",placeholder:"주민등록번호",onInput:o,maxlength:"6"},null,40,Y)]),B(" - "),s("div",G,[s("input",{type:"password",pattern:"/^[0-9]*$/",value:a(v),id:"juminback",class:"harf-input-box",placeholder:"뒷자리",onInput:o,maxlength:"7"},null,40,K)])]),s("div",L,[s("input",{type:"text",pattern:"\\d*",value:a(_),id:"phone",class:"input-box",placeholder:"폰번호(-없이 입력해주세요)",onInput:o,title:"입력한 내용을 확인해주세요",minlength:"10",maxlength:"11",required:""},null,40,O)]),s("div",W,[s("input",{type:"text",value:a(h),id:"id",class:"input-box",placeholder:"아이디",onInput:o},null,40,Z)]),s("div",ee,[s("div",{class:g([a(p)===!0?"v":"x"])},null,2),s("input",{type:"password",value:a(c),id:"pass",class:"input-box",placeholder:"비밀번호",onInput:o},null,40,se)]),s("div",te,[s("div",{class:g([a(p)===!0?"v":"x"])},null,2),s("input",{type:"password",value:a(d),id:"repass",class:"input-box",placeholder:"비밀번호확인",onInput:o},null,40,le)]),s("div",{class:"login-button sizing",onClick:I}," 회원가입 ")])])]))}}),ae={},oe={class:"total-container center-container"};function ie(z,x){const i=ne;return b(),j("div",null,[s("div",oe,[V(i)])])}const re=w(ae,[["render",ie]]);export{re as default};
