(this.webpackJsonpy=this.webpackJsonpy||[]).push([[0],[,,,,function(e,a,t){e.exports={inputWrapper:"Affairs_inputWrapper__dLCdA",checkboxesWrapper:"Affairs_checkboxesWrapper__3IXD7",checkboxWrap:"Affairs_checkboxWrap__3GACK",addBtn:"Affairs_addBtn__3HzIz",affairsWrapper:"Affairs_affairsWrapper__1-hVj",affairWrapper:"Affairs_affairWrapper__eLbvz",name:"Affairs_name__1W_BW",priority:"Affairs_priority__2F93L",high:"Affairs_high__uJ-qk",low:"Affairs_low__1LKaL",middle:"Affairs_middle__f5FIX",deleteBtn:"Affairs_deleteBtn__2xAZ6",filterBtn:"Affairs_filterBtn__xELh3"}},function(e,a,t){e.exports={HW5Container:"Styles_HW5Container__2TRyT",activeNavItem:"Styles_activeNavItem__3N9eN",navWrapper:"Styles_navWrapper__1fHFE",wrapper:"Styles_wrapper__3gIei",burgerMenuCommon:"Styles_burgerMenuCommon__j_aZ1",burgerMenuClose:"Styles_burgerMenuClose__1zssl",burgerMenuOpen:"Styles_burgerMenuOpen__3rQWc",error404:"Styles_error404__1BSw3"}},function(e,a,t){e.exports={wrapper:"Greeting_wrapper__1RMeT",errorMessage:"Greeting_errorMessage__2F-2c",error:"Greeting_error__3sLy9",validInput:"Greeting_validInput__1L5fi",input:"Greeting_input__2Vqo7",addBtn:"Greeting_addBtn__1VVWj",usersCounter:"Greeting_usersCounter__mIp3u",modal:"Greeting_modal__2tgb5",flexContainer:"Greeting_flexContainer__2tMLQ",modalGreeting:"Greeting_modalGreeting__2Dq_7",modalSubmit:"Greeting_modalSubmit__1YSfA"}},,,function(e,a,t){e.exports={App:"App_App__kkXd9",mb30:"App_mb30__3aug6",hw3Wrapper:"App_hw3Wrapper__3_Rkf",modalWrapper:"App_modalWrapper__2DWE6"}},,function(e,a,t){e.exports={chatItem:"Message_chatItem__Qs8Ne",avatar:"Message_avatar__DP0F-",message:"Message_message__1rxC6",name:"Message_name__SQNEl",messageInfo:"Message_messageInfo__3tJxS",text:"Message_text__2AGbl",time:"Message_time__39zST"}},,,function(e,a,t){e.exports={editableSpanWrap:"HW6_editableSpanWrap__2r0XH",hint:"HW6_hint__1PR15",editableSpan:"HW6_editableSpan__z3e_9"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__HEnCQ",errorInput:"SuperInputText_errorInput__1lv20",error:"SuperInputText_error__Q-u9E"}},function(e,a,t){e.exports={blue:"HW4_blue__5ReLP",inputWrap:"HW4_inputWrap__3Z1sG",column:"HW4_column__1A_gd",btn:"HW4_btn__jDglV"}},,,,,,,,function(e,a,t){e.exports={default:"SuperButton_default__FNELl",red:"SuperButton_red__2yKjf"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__JRyxI",spanClassName:"SuperCheckbox_spanClassName__ldfzO"}},,,,,,,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),s=(t(38),t(9)),o=t.n(s),i=t(2),u=t(12),m=t(5),p=t.n(m);var _=function(e){var a={top:e.menuStatus?"0px":"-100px"};return r.a.createElement("nav",{className:p.a.navContainer},r.a.createElement("div",{className:p.a.navWrapper,style:a},r.a.createElement(u.b,{to:"/pre-junior",activeClassName:p.a.activeNavItem},"Pre-junior"),r.a.createElement(u.b,{to:"/junior",activeClassName:p.a.activeNavItem},"Junior"),r.a.createElement(u.b,{to:"/junior-plus",activeClassName:p.a.activeNavItem},"Junior +")))},d=t(3);var f=function(){return r.a.createElement("div",{className:p.a.error404})},E=t(11),v=t.n(E);var b=function(e){return r.a.createElement("div",{className:v.a.chatItem},r.a.createElement("img",{className:v.a.avatar,src:e.avatar,alt:"Awatar"}),r.a.createElement("div",{className:v.a.message},r.a.createElement("div",{className:v.a.name},e.name),r.a.createElement("div",{className:v.a.messageInfo},r.a.createElement("div",{className:v.a.text},e.message),r.a.createElement("div",{className:v.a.time},e.time))))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Yehor",N="Let play the GAME :-)",C="22:00";var k=function(){return r.a.createElement("div",{className:o.a.mb30},r.a.createElement(b,{avatar:g,name:h,message:N,time:C}))},S=t(4),x=t.n(S);var j=function(e){var a=e.affair,t=a.name,n=a.priority,l=a._id;return r.a.createElement("div",{className:x.a.affairWrapper},r.a.createElement("div",{className:x.a.name},t),r.a.createElement("div",{className:x.a.priority},r.a.createElement("span",{className:"".concat(x.a[n])},n)),r.a.createElement("button",{className:x.a.deleteBtn,onClick:function(){e.deleteAffairCallback(l)}},"X"))};var O=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,r.a.createElement("div",{className:x.a.affairsWrapper},a),r.a.createElement("button",{className:x.a.filterBtn,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:x.a.filterBtn,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:x.a.filterBtn,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:x.a.filterBtn,onClick:function(){e.setFilter("low")}},"Low"))},W=t(20);var y=function(e){var a=Object(n.useState)("low"),t=Object(i.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],m=o[1],p=function(e){var a=e.currentTarget.value;c(a)};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t,n=(t=e.data).length?t[t.length-1]._id+1:1;""!==u.trim()?(e.data.push({_id:n,name:u,priority:l}),e.setAffairs(Object(W.a)(e.data)),m("")):alert("Enter affair name!")}},r.a.createElement("div",{className:x.a.inputWrapper},r.a.createElement("input",{onChange:function(e){var a=e.currentTarget.value;m(a)},type:"text",value:u})),r.a.createElement("div",{className:x.a.checkboxesWrapper},r.a.createElement("label",{className:x.a.checkboxWrap},r.a.createElement("input",{onChange:p,type:"radio",name:"status",value:"high"}),"high"),r.a.createElement("label",{className:x.a.checkboxWrap},r.a.createElement("input",{onChange:p,type:"radio",name:"status",value:"middle"}),"middle"),r.a.createElement("label",{className:x.a.checkboxWrap},r.a.createElement("input",{onChange:p,type:"radio",name:"status",value:"low"}),"low")),r.a.createElement("button",{type:"submit",className:x.a.addBtn},"Add")))},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(A),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(i.a)(c,2),u=s[0],m=s[1],p=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",{className:o.a.mb30},r.a.createElement("h4",null,"HW2"),r.a.createElement(y,{data:p,setAffairs:l}),r.a.createElement(O,{data:p,setFilter:m,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},w=t(6),M=t.n(w),B=t(31),T=t(32),G=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=""===l?"".concat(M.a.validInput," ").concat(M.a.input):"".concat(M.a.error," ").concat(M.a.input);return r.a.createElement("div",{className:M.a.wrapper},r.a.createElement("div",{className:M.a.errorMessage},l),r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement(B.a,{icon:T.a,style:{color:"#2858f5"}}),r.a.createElement("span",{className:M.a.usersCounter},c),r.a.createElement("div",null,r.a.createElement("button",{onClick:n,className:M.a.addBtn},"add")))},H=function(e){var a={display:e.modalOpen?"inline-block":"none"};return r.a.createElement("div",{className:M.a.modal,style:a},r.a.createElement("div",{className:M.a.flexContainer},r.a.createElement("div",{className:M.a.modalGreeting},"Hello ",e.name,"!!"),r.a.createElement("button",{onClick:function(){e.setName(""),e.setModalOpen(!1)},className:M.a.modalSubmit},"Ok")))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),s=c[0],u=c[1],m=Object(n.useState)(""),p=Object(i.a)(m,2),_=p[0],d=p[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),v=E[0],b=E[1],g=function(e){return/(^\d+)|(^\s)/g.test(e)},h=a.length;return r.a.createElement("div",{className:o.a.hw3Wrapper},r.a.createElement(G,{name:s,setNameCallback:function(e){var a=e.currentTarget.value;d(""),u(a)},addUser:function(){var e=g(s);s.trim()&&!e?(d(""),t(s),b(!0)):(d("Enter valid name! It can not start from numbers or spaces!"),u(""))},error:_,totalUsers:h}),r.a.createElement("div",{className:o.a.modalWrapper},r.a.createElement(H,{modalOpen:v,setModalOpen:b,name:s,setName:u})))},L=t(48);var J=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:o.a.mb30},r.a.createElement("h4",{style:{marginBottom:"40px"}},"HW3"),r.a.createElement(F,{users:t,addUserCallback:function(e){var a={_id:Object(L.a)(),name:e};l([a].concat(Object(W.a)(t)))}}))},P=t(10),D=t(16),z=t.n(D),R=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(z.a.error," ").concat(o||""),m="".concat(c)?"".concat(z.a.errorInput):"".concat(z.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:"".concat(m," ").concat(z.a.input)},i)),c&&r.a.createElement("span",{className:u},c))},K=t(17),Q=t.n(K),U=t(25),X=t.n(U),V=function(e){var a=e.red,t=e.className,n=Object(P.a)(e,["red","className"]),l="".concat(a?X.a.red:X.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},q=t(26),Z=t.n(q),Y=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:Z.a.spanClassName},l))};var $=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"Fill the form...",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(i.a)(o,2),m=u[0],p=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:Q.a.column},r.a.createElement("div",{className:Q.a.inputWrap},r.a.createElement(R,{value:t,onChangeText:l,onEnter:s,error:c,className:Q.a.blue})),r.a.createElement(V,{red:!0,onClick:s,className:Q.a.btn},"delete "),r.a.createElement(Y,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(Y,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})))},ee=t(14),ae=t.n(ee),te=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(P.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(i.a)(s,2),u=o[0],m=o[1],p=l||{},_=p.children,d=p.onDoubleClick,f=p.className,E=Object(P.a)(p,["children","onDoubleClick","className"]),v=Object(n.useState)(!1),b=Object(i.a)(v,2),g=b[0],h=b[1],N="".concat(ae.a.editableSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(R,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()},onChange:function(e){c.onChangeText&&c.onChangeText(e.currentTarget.value)},error:""},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:N},E),_||c.value),u?null:function(){var e=setInterval((function(){return h(!g)}),2e3);setTimeout((function(){clearInterval(e)}),2e3)}(),g?r.a.createElement("span",{className:ae.a.hint},"Double click to change..."):"")};function ne(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function re(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}ne("test",{x:"A",y:1});re("test",{x:"",y:0});var le=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:ae.a.editableSpanWrap},r.a.createElement(te,{value:t,onChangeText:l,spanProps:{children:t?void 0:"Enter text..."}})),r.a.createElement(V,{onClick:function(){ne("editable-span-value",t)}},"save"),r.a.createElement(V,{onClick:function(){var e=re("editable-span-value",t);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};function ce(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(I,null),r.a.createElement(J,null),r.a.createElement($,null),r.a.createElement(le,null))}var se=function(){return r.a.createElement("div",null,'"JuniorPlus"')},oe=function(){return r.a.createElement("div",null,'"Junior"')},ie="/pre-junior",ue="/junior",me="/junior-plus";var pe=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:ie})}}),r.a.createElement(d.b,{path:ie,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(d.b,{path:ue,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(d.b,{path:me,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(f,null)}})))},_e=function(e){var a=(e.menuStatus?p.a.burgerMenuOpen:p.a.burgerMenuClose)+" "+p.a.burgerMenuCommon;return r.a.createElement("div",{className:p.a.wrapper,onClick:function(){return e.toggleMenu()}},r.a.createElement("span",{className:a}))};var de=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:p.a.HW5Container},r.a.createElement(u.a,null,r.a.createElement(_e,{menuStatus:t,toggleMenu:function(){return l(!t)}}),r.a.createElement(_,{menuStatus:t}),r.a.createElement(pe,null)))};var fe=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.3fa85391.chunk.js.map