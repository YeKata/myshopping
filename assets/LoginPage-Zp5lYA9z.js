import{d as r,r as _,j as I,k as E,u as R,o as u,c as p,a as o,e as b}from"./index-pXXfYhWd.js";var k={VITE_REST_API:"0267004bbd623d25f53b271d6e141135",VITE_REDIRECT_URI:"http://localhost:5173/klogin",VITE_SERVICE_APP_ADMIN_KEY:"ecb2f674de96cb0c1d45f614e43ee58d",BASE_URL:"/myshopping/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const T={class:"login wrap"},V=o("div",{class:"login-title"},[o("h2",null,"Login & Join")],-1),x={class:"login-form"},C={class:"login-box"},S=o("div",{class:"login-text"}," 회원로그인 ",-1),z={class:"sizing"},D=["value"],P={class:"sizing"},w=["value"],y=r({__name:"LoginForm",setup(g){const s=_(),n=_(),c=k,h=I(),l=E(),i=R(),a=i.member,d=t=>{t.target.id=="id"?s.value=t.target.value:t.target.id=="pass"&&(n.value=t.target.value)},v=async()=>{const t={id:s.value,pass:n.value};for(let e=0;e<a.length;e++)a[e].id==t.id&&a[e].pass==t.pass&&(i.changeLogIn(h.path),i.setloginId(t.id),console.log(i.loginId),await l.replace("/"))},m=()=>{window.location.href=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${c.VITE_REST_API}&redirect_uri=${c.VITE_REDIRECT_URI}`},f=()=>{l.push("/join")};return(t,e)=>(u(),p("div",T,[V,o("div",x,[o("div",C,[S,o("div",z,[o("input",{type:"text",value:s.value,id:"id",class:"input-box",placeholder:"아이디",onInput:d},null,40,D)]),o("div",P,[o("input",{type:"password",value:n.value,id:"pass",class:"input-box",placeholder:"비밀번호",onInput:d},null,40,w)]),o("div",{class:"login-button sizing",onClick:v}," 로그인 "),o("div",{class:"login-button sizing",onClick:f}," 회원가입 "),o("div",{class:"sizing login-button kakao",onClick:m})])])]))}}),A={class:"total-container center-container"},B=r({__name:"LoginPage",setup(g){return(s,n)=>(u(),p("div",null,[o("div",A,[b(y)])]))}});export{B as default};
