(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),s=a(38),i=a(43),o=a(71),l=a(35),u=a(12),p=a(156),j=a(50),d=a(25),h=a(27),b=a.n(h),O=a(44),m=a(32),x=a(153),g=a(159),f=a(120),v=a(151),w=a(157),k=a(79),y=a.n(k),S=a(148),C=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),N=a(158),T=a(154),I=a(155),P=a(76),D=a.n(P),F=a(77),B=a.n(F),J=a(5),W=function(e){var t=e.name,a=e.handleChange,n=e.label,r=e.autoFocus,c=e.type,s=e.handleShowPassword;return Object(J.jsx)(v.a,{item:!0,xs:12,sm:12,children:Object(J.jsx)(N.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:r,type:c,InputProps:"password"===t?{endAdornment:Object(J.jsx)(T.a,{position:"end",children:Object(J.jsx)(I.a,{onClick:s,children:"password"===c?Object(J.jsx)(D.a,{}):Object(J.jsx)(B.a,{})})})}:null})})},A="AUTH",E="LOGOUT",L=a(78),M=a.n(L).a.create({baseURL:"https://create-one-app.herokuapp.com/"}),U=function(e,t){return M.post("/signin",e).catch((function(e){return alert(e.response.data.message)}))},q=function(e,t){return M.post("/signup",e).catch((function(e){return alert(e.response.data.message)}))},G=function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(n){var r,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,U(e);case 3:r=a.sent,(c=r.data).result.password=e.password,n({type:A,data:c}),t.push("/"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),t.push("/auth");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},H=function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(n){var r,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q(e);case 3:r=a.sent,(c=r.data).result.password=e.password,n({type:A,data:c}),t.push("/"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),t.push("/auth");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},R=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=C(),i=Object(n.useState)({email:"",password:"",confirmPassword:""}),o=Object(m.a)(i,2),l=o[0],h=o[1],k=Object(n.useState)(!1),S=Object(m.a)(k,2),N=S[0],T=S[1],I=Object(n.useState)(!1),P=Object(m.a)(I,2),D=P[0],F=P[1],B=Object(u.f)(),A=Object(s.b)(),E=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(l),F(!0),e.prev=3,!a){e.next=9;break}return e.next=7,A(H(l,B));case 7:e.next=11;break;case 9:return e.next=11,A(G(l,B));case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(3);case 15:return e.prev=15,F(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,13,15,18]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e){h(Object(d.a)(Object(d.a)({},l),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(J.jsx)(p.a,{component:"main",maxWidth:"xs",children:Object(J.jsx)(x.a,{className:c.paper,elevation:3,children:D?Object(J.jsx)("p",{children:"Loading...."}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(g.a,{className:c.avatar,children:Object(J.jsx)(y.a,{})}),Object(J.jsx)(f.a,{component:"h1",variant:"h5",children:a?"\u0110\u0103ng k\xfd":"\u0110\u0103ng nh\u1eadp"}),Object(J.jsxs)("form",{className:c.form,onSubmit:E,children:[Object(J.jsxs)(v.a,{container:!0,spacing:2,children:[Object(J.jsx)(W,{name:"email",label:"Email Address",handleChange:L,type:"email"}),Object(J.jsx)(W,{name:"password",label:"Password",handleChange:L,type:N?"text":"password",handleShowPassword:function(){return T(!N)}}),a&&Object(J.jsx)(W,{name:"confirmPassword",label:"Confirm Password",handleChange:L,type:"password"})]}),Object(J.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:a?"\u0110\u0103ng k\xfd":"\u0110\u0103ng nh\u1eadp"}),Object(J.jsx)(v.a,{container:!0,justifyContent:"flex-end",children:Object(J.jsx)(v.a,{item:!0,children:Object(J.jsx)(w.a,{onClick:function(){r((function(e){return!e})),T(!1)},children:a?"\u0110\xe3 c\xf3 t\xe0i kho\u1ea3n? \u0110\u0103ng nh\u1eadp":"Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? \u0110\u0103ng k\xfd"})})})]})]})})})},V=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},form:{width:"100%",marginTop:e.spacing(3)}}})),z=function(){var e,t,a=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))?JSON.parse(localStorage.getItem("profile")):null),r=Object(m.a)(a,1)[0],c=V(),i=Object(s.b)(),o=Object(u.f)();return Object(J.jsx)(p.a,{component:"main",maxWidth:"xs",children:Object(J.jsx)(x.a,{className:c.paper,elevation:3,children:r?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(f.a,{variant:"h5",gutterBottom:!0,children:"Email: ".concat(null===r||void 0===r||null===(e=r.result)||void 0===e?void 0:e.email)}),Object(J.jsx)(f.a,{variant:"h5",gutterBottom:!0,children:"M\u1eadt kh\u1ea9u: ".concat(null===r||void 0===r||null===(t=r.result)||void 0===t?void 0:t.password)}),Object(J.jsx)(w.a,{onClick:function(){i({type:E}),o.push("/auth")},color:"secondary",variant:"contained",children:"\u0110\u0103ng xu\u1ea5t"})]}):Object(J.jsx)(w.a,{children:Object(J.jsx)(l.b,{to:"/auth",children:"Vui l\xf2ng x\xe1c th\u1ef1c"})})})})},K=function(){return Object(J.jsx)(l.a,{children:Object(J.jsx)(p.a,{children:Object(J.jsxs)(u.c,{children:[Object(J.jsx)(u.a,{path:"/",exact:!0,component:z}),Object(J.jsx)(u.a,{path:"/auth",exact:!0,component:R})]})})})},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return localStorage.setItem("profile",JSON.stringify(Object(d.a)({},null===t||void 0===t?void 0:t.data))),Object(d.a)(Object(d.a)({},e),{},{authData:null});case E:return localStorage.clear(),Object(d.a)(Object(d.a)({},e),{},{authData:null});default:return e}},X=Object(i.b)({auth:Q}),Y=Object(i.d)(X,Object(i.c)(Object(i.a)(o.a)));c.a.render(Object(J.jsx)(s.a,{store:Y,children:Object(J.jsx)(K,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.3fae16a3.chunk.js.map