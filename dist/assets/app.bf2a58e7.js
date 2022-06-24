import{f as e,r as o,a as n,c as a,b as t,o as l,d as s,w as c,p as r,e as i,g as m,h as d,u,i as p,j as v,v as f,k as g,l as h,m as R,t as k,F as y,n as b,q as _,V as C}from"./vendor.43e79aff.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((n,l)=>{const s=new URL(e,a);if(self[o].moduleMap[s])return n(self[o].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${o}.moduleMap['${s}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){l(new Error(`Failed to import: ${e}`)),t(r)},onload(){n(self[o].moduleMap[s]),t(r)}});document.head.appendChild(r)})),self[o].moduleMap={}}}("/Rock-Paper-Scissors-Online/assets/");var w={apiKey:"AIzaSyB6WCaZsYoGqeotIkZYvMj_EaeP25E7lMI",authDomain:"socket-game-f530e.firebaseapp.com",databaseURL:"https://socket-game-f530e-default-rtdb.firebaseio.com",projectId:"socket-game-f530e",storageBucket:"socket-game-f530e.appspot.com",messagingSenderId:"554022480678",appId:"1:554022480678:web:a0949656e777278ae5afe7",measurementId:"G-TN9DBP7TSL"},I={setup(){e.initializeApp(w);let n=document.documentElement.clientHeight,a=o(!1),t=document.documentElement.clientHeight;return/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&(a.value=!1),{appHeihgt:n,isSafari:a,mainHeihgt:t}}};I.render=function(e,o,s,c,r,i){const m=n("router-view");return l(),a("div",{style:{height:c.isSafari?`${c.mainHeihgt}px`:"100vh"}},[t(m)],4)};var j=s({state:{linkedRoom:"",role:""},mutations:{setLinkedRoom(e,o){e.linkedRoom=o},setRole(e,o){e.role=o}},actions:{}}),S={};const Y=c();r("data-v-22bbf8be");const A={id:"EnterPage"},D=t("h1",null,[i("Paper Scissors Rock"),t("br",{class:"hidden-pad-up"}),i("線上猜拳")],-1),$={class:"btn_group"},B=i(" English "),L=i(" 中文 "),M=t("div",{class:"footer"},null,-1);m();const P=Y(((e,o,s,c,r,i)=>{const m=n("router-link");return l(),a("div",A,[D,t("div",$,[t(m,{to:"/en-us",class:"btn"},{default:Y((()=>[B])),_:1}),t(m,{to:"/zh-tw",class:"btn"},{default:Y((()=>[L])),_:1})]),M])}));S.render=P,S.__scopeId="data-v-22bbf8be";var U={setup(n,a){const t=u(),l=p(),s=o(null),c=e.database();return{createRoom:()=>{if(!s.value)return alert("請輸入房號");const e=c.ref(`/room/${s.value}`);e.once("value").then((function(o){if(o.val()){const e=d(o.val().play_A.lastConnect).isAfter(d().add(-2,"m")),n=d(o.val().play_B.lastConnect).isAfter(d().add(-2,"m"));if(e&&n)return alert("已經存在該房間囉，請換一個房號")}e.set({play_A:{join:!0,select:null,lastConnect:d(new Date).format("YYYY/MM/DD hh:mm")},play_B:{join:!1,select:null,lastConnect:null}}).then((()=>{t.commit("setLinkedRoom",s.value),t.commit("setRole","play_A"),setInterval((()=>{c.ref(`/room/${s.value}/play_A`).update({lastConnect:d(new Date).format("YYYY/MM/DD hh:mm")})}),6e4),l.push("/zh-tw/gameRoom")}))}))},createRoomId:s,close:()=>a.emit("close")}}};const J={class:"overlay"},E={class:"popup"},O={class:"createRoom"},W=t("h2",{class:"mb_16"},"創建房間",-1);U.render=function(e,o,n,s,c,r){return l(),a("div",J,[t("div",E,[t("div",{class:"close",onClick:o[1]||(o[1]=(...e)=>s.close&&s.close(...e))},"X"),t("div",O,[W,v(t("input",{type:"phone",placeholder:"請自訂房間ID","onUpdate:modelValue":o[2]||(o[2]=e=>s.createRoomId=e)},null,512),[[f,s.createRoomId]]),t("div",{class:"btn mt_16 mb_12",onClick:o[3]||(o[3]=(...e)=>s.createRoom&&s.createRoom(...e))},"創建")])])])};var x={setup(n,a){const t=u(),l=p(),s=o(null),c=e.database();return{joinRoom:()=>{if(!s.value)return alert("請輸入房號");c.ref(`/room/${s.value}`).once("value").then((e=>{const o=e.val();if(!o)return alert("該房間不存在喔");if(!o.play_B.lastConnect||d(o.play_B.lastConnect).isBefore(d().add(-2,"m")))t.commit("setRole","play_B");else{if(o.play_A.lastConnect&&!d(o.play_A.lastConnect).isBefore(d().add(-2,"m")))return alert("該房間人數已額滿");t.commit("setRole","play_A")}t.commit("setLinkedRoom",s.value),c.ref(`/room/${s.value}/${t.state.role}`).update({lastConnect:d(new Date).format("YYYY/MM/DD hh:mm"),join:!0}).then((()=>{setInterval((()=>{c.ref(`/room/${s.value}/${t.state.role}`).update({lastConnect:d(new Date).format("YYYY/MM/DD hh:mm")})}),6e4),l.push("/zh-tw/gameRoom")}))}))},joinRoomId:s,close:()=>a.emit("close")}}};const G={class:"overlay"},H={class:"popup"},T={class:"joinRoom"},z=t("h2",{class:"mb_16"},"加入房間",-1);x.render=function(e,o,n,s,c,r){return l(),a("div",G,[t("div",H,[t("div",{class:"close",onClick:o[1]||(o[1]=(...e)=>s.close&&s.close(...e))},"X"),t("div",T,[z,v(t("input",{type:"phone",placeholder:"請輸入房間ID","onUpdate:modelValue":o[2]||(o[2]=e=>s.joinRoomId=e)},null,512),[[f,s.joinRoomId]]),t("div",{class:"btn mt_16 mb_12",onClick:o[3]||(o[3]=(...e)=>s.joinRoom&&s.joinRoom(...e))},"加入")])])])};var V={components:{CreateRoom:U,JoinRoom:x},setup:()=>({openCreateRoom:o(!1),openJoinRoom:o(!1)})};const X=c();r("data-v-f9e509b4");const F={id:"EnterPage"},N=t("h1",null,"線上猜拳",-1),q={class:"btn_group"},Z=t("div",null,"創建房間+",-1),K=t("div",{class:"btn--secondaryTitle"},null,-1),Q=t("div",null,"加入房間",-1),ee=t("div",{class:"btn--secondaryTitle"},null,-1),oe=t("div",{class:"footer"},null,-1);m();const ne=X(((e,o,s,c,r,i)=>{const m=n("CreateRoom"),d=n("JoinRoom");return l(),a("div",F,[N,t("div",q,[t("div",{class:"btn",onClick:o[1]||(o[1]=e=>c.openCreateRoom=!0)},[Z,K]),t("div",{class:"btn",onClick:o[2]||(o[2]=e=>c.openJoinRoom=!0)},[Q,ee])]),oe,c.openCreateRoom?(l(),a(m,{key:0,onClose:o[3]||(o[3]=e=>c.openCreateRoom=!1)})):g("",!0),c.openJoinRoom?(l(),a(d,{key:1,onClose:o[4]||(o[4]=e=>c.openJoinRoom=!1)})):g("",!0)])}));V.render=ne,V.__scopeId="data-v-f9e509b4";var ae="/Rock-Paper-Scissors-Online/assets/剪刀.3781ad54.png",te="/Rock-Paper-Scissors-Online/assets/石頭.401cfcbe.png",le="/Rock-Paper-Scissors-Online/assets/布.2b9332b0.png";const se=[{name:"剪刀",img:ae,color:"#86bebb",en:"Scissors"},{name:"石頭",img:te,color:"#e0808b",en:"Rock"},{name:"布",img:le,color:"#84bc7f",en:"Paper"}];var ce={setup(){const n=u(),a=p(),t=e.database(),l=h({name:"",img:"",color:"",en:""}),s=h({name:"",img:"",color:"",en:""}),c=o(!1),r=o(!1),i=o(""),m=["你贏了","你輸了","平手"];n.state.linkedRoom||a.replace("/zh-tw");n.state.linkedRoom&&t.ref(`/room/${n.state.linkedRoom}/`).on("value",(e=>{var o,a,t,d;let u=e.val();if((null==(o=u.play_A)?void 0:o.join)&&(null==(a=u.play_B)?void 0:a.join)&&(c.value=!0),(null==(t=u.play_A)?void 0:t.select)&&(null==(d=u.play_B)?void 0:d.select)){const e=u["play_A"===n.state.role?"play_B":"play_A"].select,o=se.find((o=>o.name==e));o&&(s.name=o.name,s.img=o.img,s.color=o.color,s.en=o.en,(()=>{let e=l.name,o=s.name;switch(e){case"剪刀":"剪刀"==o&&(i.value=m[2]),"石頭"==o&&(i.value=m[1]),"布"==o&&(i.value=m[0]);break;case"石頭":"剪刀"==o&&(i.value=m[0]),"石頭"==o&&(i.value=m[2]),"布"==o&&(i.value=m[1]);break;case"布":"剪刀"==o&&(i.value=m[1]),"石頭"==o&&(i.value=m[0]),"布"==o&&(i.value=m[2])}r.value=!1})())}}));const d=R((()=>n.state.linkedRoom));return{selectHandler:e=>{l.name=e.name,l.img=e.img,l.color=e.color,l.en=e.en,r.value=!0,t.ref(`/room/${n.state.linkedRoom}/${n.state.role}/`).update({select:e.name,join:!1})},selectList:se,selected:l,startGame:c,waiting:r,roomId:d,opponentSelected:s,result:i,again:()=>{l.name="",l.img="",l.color="",l.en="",s.name="",s.img="",s.color="",s.en="",c.value=!1,i.value="",t.ref(`/room/${n.state.linkedRoom}/${n.state.role}/`).update({select:null,join:!0})}}}};const re=c();r("data-v-8e825d3c");const ie={class:"wrap"},me={class:"roomId"},de={class:"container"},ue={class:"player self"},pe={class:"box"},ve={key:1},fe=t("h2",null," 自己 ",-1),ge=t("div",{class:"vs"},"VS",-1),he={class:"player other"},Re={class:"box"},ke={key:1},ye=t("h2",null,"對手",-1),be={key:0,class:"select"},_e=t("div",{class:"select_title"},"選擇出拳",-1),Ce={class:"group"},we={key:1,class:"result"},Ie={class:"result_title"},je=t("div",{class:"space"},null,-1),Se={class:"loading"},Ye={class:"loading"};m();const Ae=re(((e,o,n,s,c,r)=>(l(),a("div",ie,[t("div",me,"房號："+k(s.roomId),1),t("div",de,[t("div",ue,[t("div",pe,[s.selected.name?(l(),a("div",{key:0,class:"selectItem",style:{backgroundColor:s.selected.color}},[t("figure",null,[t("img",{src:s.selected.img,alt:""},null,8,["src"]),t("figcaption",null,[i(k(s.selected.name)+" ",1),t("span",null,k(s.selected.en),1)])])],4)):(l(),a("div",ve,"?"))]),fe]),ge,t("div",he,[t("div",Re,[s.opponentSelected.name?(l(),a("div",{key:0,class:"selectItem",style:{backgroundColor:s.opponentSelected.color}},[t("figure",null,[t("img",{src:s.opponentSelected.img,alt:""},null,8,["src"]),t("figcaption",null,k(s.opponentSelected.name),1)])],4)):(l(),a("div",ke,"?"))]),ye])]),s.result?(l(),a("div",we,[t("div",Ie,k(s.result),1),t("div",{class:"refreshBtn",onClick:o[1]||(o[1]=e=>s.again())},"再來一次！")])):(l(),a("div",be,[_e,t("div",Ce,[(l(!0),a(y,null,b(s.selectList,(e=>(l(),a("div",{class:"selectItem",style:{backgroundColor:e.color},key:e.name,onClick:o=>s.selectHandler(e)},[t("figure",null,[t("img",{src:e.img,alt:""},null,8,["src"]),t("figcaption",null,k(e.name),1)])],12,["onClick"])))),128))])])),je,v(t("div",Se,"等待對手加入中...",512),[[_,!s.startGame]]),v(t("div",Ye,"等待對手出拳...",512),[[_,s.waiting]])]))));ce.render=Ae,ce.__scopeId="data-v-8e825d3c";var De={setup(n,a){const t=u(),l=p(),s=o(null),c=e.database();return{createRoom:()=>{if(!s.value)return alert("input room id pleace!");const e=c.ref(`/room/${s.value}`);e.once("value").then((function(o){if(o.val()){const e=d(o.val().play_A.lastConnect).isAfter(d().add(-2,"m")),n=d(o.val().play_B.lastConnect).isAfter(d().add(-2,"m"));if(e&&n)return alert("This room already exists, please change the room id")}e.set({play_A:{join:!0,select:null,lastConnect:d(new Date).format("YYYY/MM/DD hh:mm")},play_B:{join:!1,select:null,lastConnect:null}}).then((()=>{t.commit("setLinkedRoom",s.value),t.commit("setRole","play_A"),setInterval((()=>{c.ref(`/room/${s.value}/play_A`).update({lastConnect:d(new Date).format("YYYY/MM/DD hh:mm")})}),6e4),l.push("/en-us/gameRoom")}))}))},createRoomId:s,close:()=>a.emit("close")}}};const $e={class:"overlay"},Be={class:"popup"},Le={class:"createRoom"},Me=t("h2",{class:"mb_16"},"Create Room",-1);De.render=function(e,o,n,s,c,r){return l(),a("div",$e,[t("div",Be,[t("div",{class:"close",onClick:o[1]||(o[1]=(...e)=>s.close&&s.close(...e))},"X"),t("div",Le,[Me,v(t("input",{type:"phone",placeholder:"Create Room ID","onUpdate:modelValue":o[2]||(o[2]=e=>s.createRoomId=e)},null,512),[[f,s.createRoomId]]),t("div",{class:"btn mt_16 mb_12",onClick:o[3]||(o[3]=(...e)=>s.createRoom&&s.createRoom(...e))},"Go!")])])])};var Pe={setup(n,a){const t=u(),l=p(),s=o(null),c=e.database();return{joinRoom:()=>{if(!s.value)return alert("input room id pleace!");c.ref(`/room/${s.value}`).once("value").then((e=>{const o=e.val();if(!o)return alert("This room doesn't exist");if(!o.play_B.lastConnect||d(o.play_B.lastConnect).isBefore(d().add(-2,"m")))t.commit("setRole","play_B");else{if(o.play_A.lastConnect&&!d(o.play_A.lastConnect).isBefore(d().add(-2,"m")))return alert("The room is full");t.commit("setRole","play_A")}t.commit("setLinkedRoom",s.value),c.ref(`/room/${s.value}/${t.state.role}`).update({lastConnect:d(new Date).format("YYYY/MM/DD hh:mm"),join:!0}).then((()=>{setInterval((()=>{c.ref(`/room/${s.value}/${t.state.role}`).update({lastConnect:d(new Date).format("YYYY/MM/DD hh:mm")})}),6e4),l.push("/en-us/gameRoom")}))}))},joinRoomId:s,close:()=>a.emit("close")}}};const Ue={class:"overlay"},Je={class:"popup"},Ee={class:"joinRoom"},Oe=t("h2",{class:"mb_16"},"Join Room",-1);Pe.render=function(e,o,n,s,c,r){return l(),a("div",Ue,[t("div",Je,[t("div",{class:"close",onClick:o[1]||(o[1]=(...e)=>s.close&&s.close(...e))},"X"),t("div",Ee,[Oe,v(t("input",{type:"phone",placeholder:"Join Room ID","onUpdate:modelValue":o[2]||(o[2]=e=>s.joinRoomId=e)},null,512),[[f,s.joinRoomId]]),t("div",{class:"btn mt_16 mb_12",onClick:o[3]||(o[3]=(...e)=>s.joinRoom&&s.joinRoom(...e))},"Go!")])])])};var We={components:{CreateRoom:De,JoinRoom:Pe},setup:()=>({openCreateRoom:o(!1),openJoinRoom:o(!1)})};const xe=c();r("data-v-9016610a");const Ge={id:"EnterPage"},He=t("h1",null,[i(" Paper Scissors Rock"),t("br",{class:"hidden-pad-up"})],-1),Te={class:"btn_group"},ze=t("div",null,"Create Room +",-1),Ve=t("div",null,"Join Room",-1),Xe=t("div",{class:"footer"},null,-1);m();const Fe=xe(((e,o,s,c,r,i)=>{const m=n("CreateRoom"),d=n("JoinRoom");return l(),a("div",Ge,[He,t("div",Te,[t("div",{class:"btn",onClick:o[1]||(o[1]=e=>c.openCreateRoom=!0)},[ze]),t("div",{class:"btn",onClick:o[2]||(o[2]=e=>c.openJoinRoom=!0)},[Ve])]),Xe,c.openCreateRoom?(l(),a(m,{key:0,onClose:o[3]||(o[3]=e=>c.openCreateRoom=!1)})):g("",!0),c.openJoinRoom?(l(),a(d,{key:1,onClose:o[4]||(o[4]=e=>c.openJoinRoom=!1)})):g("",!0)])}));We.render=Fe,We.__scopeId="data-v-9016610a";const Ne=[{name:"剪刀",img:ae,color:"#86bebb",en:"Scissors"},{name:"石頭",img:te,color:"#e0808b",en:"Rock"},{name:"布",img:le,color:"#84bc7f",en:"Paper"}];var qe={setup(){const n=u(),a=p(),t=e.database(),l=h({name:"",img:"",color:"",en:""}),s=h({name:"",img:"",color:"",en:""}),c=o(!1),r=o(!1),i=o(""),m=["Win","Lose","Draw"];n.state.linkedRoom||a.replace("/en-us");n.state.linkedRoom&&t.ref(`/room/${n.state.linkedRoom}/`).on("value",(e=>{var o,a,t,d;let u=e.val();if((null==(o=u.play_A)?void 0:o.join)&&(null==(a=u.play_B)?void 0:a.join)&&(c.value=!0),(null==(t=u.play_A)?void 0:t.select)&&(null==(d=u.play_B)?void 0:d.select)){const e=u["play_A"===n.state.role?"play_B":"play_A"].select,o=Ne.find((o=>o.name==e));o&&(s.name=o.name,s.img=o.img,s.color=o.color,s.en=o.en,(()=>{let e=l.name,o=s.name;switch(e){case"剪刀":"剪刀"==o&&(i.value=m[2]),"石頭"==o&&(i.value=m[1]),"布"==o&&(i.value=m[0]);break;case"石頭":"剪刀"==o&&(i.value=m[0]),"石頭"==o&&(i.value=m[2]),"布"==o&&(i.value=m[1]);break;case"布":"剪刀"==o&&(i.value=m[1]),"石頭"==o&&(i.value=m[0]),"布"==o&&(i.value=m[2])}r.value=!1})())}}));const d=R((()=>n.state.linkedRoom));return{selectHandler:e=>{l.name=e.name,l.img=e.img,l.color=e.color,l.en=e.en,r.value=!0,t.ref(`/room/${n.state.linkedRoom}/${n.state.role}/`).update({select:e.name,join:!1})},selectList:Ne,selected:l,startGame:c,waiting:r,roomId:d,opponentSelected:s,result:i,again:()=>{l.name="",l.img="",l.color="",l.en="",s.name="",s.img="",s.color="",s.en="",c.value=!1,i.value="",t.ref(`/room/${n.state.linkedRoom}/${n.state.role}/`).update({select:null,join:!0})}}}};const Ze=c();r("data-v-c22f8132");const Ke={class:"wrap"},Qe={class:"roomId"},eo={class:"container"},oo={class:"player self"},no={class:"box"},ao={key:1},to=t("h2",null,"You",-1),lo=t("div",{class:"vs"},"VS",-1),so={class:"player other"},co={class:"box"},ro={key:1},io=t("h2",null,"Opponent",-1),mo={key:0,class:"select"},uo=t("div",{class:"select_title"},"Choose",-1),po={class:"group"},vo={key:1,class:"result"},fo={class:"result_title"},go=t("div",{class:"space"},null,-1),ho={class:"loading"},Ro={class:"loading"};m();const ko=Ze(((e,o,n,s,c,r)=>(l(),a("div",Ke,[t("div",Qe,"Room ID："+k(s.roomId),1),t("div",eo,[t("div",oo,[t("div",no,[s.selected.name?(l(),a("div",{key:0,class:"selectItem",style:{backgroundColor:s.selected.color}},[t("figure",null,[t("img",{src:s.selected.img,alt:""},null,8,["src"]),t("figcaption",null,k(s.selected.en),1)])],4)):(l(),a("div",ao,"?"))]),to]),lo,t("div",so,[t("div",co,[s.opponentSelected.name?(l(),a("div",{key:0,class:"selectItem",style:{backgroundColor:s.opponentSelected.color}},[t("figure",null,[t("img",{src:s.opponentSelected.img,alt:""},null,8,["src"]),t("figcaption",null,[i(k(s.opponentSelected.name)+" ",1),t("span",null,k(s.opponentSelected.en),1)])])],4)):(l(),a("div",ro,"?"))]),io])]),s.result?(l(),a("div",vo,[t("div",fo,k(s.result),1),t("div",{class:"refreshBtn",onClick:o[1]||(o[1]=e=>s.again())},"Play Again！")])):(l(),a("div",mo,[uo,t("div",po,[(l(!0),a(y,null,b(s.selectList,(e=>(l(),a("div",{class:"selectItem",style:{backgroundColor:e.color},key:e.name,onClick:o=>s.selectHandler(e)},[t("figure",null,[t("img",{src:e.img,alt:""},null,8,["src"]),t("figcaption",null,k(e.en),1)])],12,["onClick"])))),128))])])),go,v(t("div",ho,"Waiting Opponent Join...",512),[[_,!s.startGame]]),v(t("div",Ro,"Waiting Opponent Choose...",512),[[_,s.waiting]])]))));qe.render=ko,qe.__scopeId="data-v-c22f8132";const yo=[{path:"/",name:"Index",component:S},{path:"/zh-tw",name:"Enter",component:V},{path:"/zh-tw/gameRoom",name:"Gameroom",component:ce},{path:"/en-us",name:"EnterUS",component:We},{path:"/en-us/gameRoom",name:"GameroomUS",component:qe}],bo=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _o(e,o){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}console.log("routes",yo),C(I,{routes:yo,base:"/Rock-Paper-Scissors-Online/"},(({app:e,router:o,routes:n,isClient:a,initialState:t})=>{e.use(j),e.config.performance=!1})),function(e){if("serviceWorker"in navigator){if(new URL({}.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const o=`${{}.PUBLIC_URL}/service-worker.js`;bo?(!function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):_o(e,o)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_o(o,e)}))}}();