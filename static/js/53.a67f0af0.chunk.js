"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[53],{2053:function(e,r,i){i.r(r),i.d(r,{default:function(){return j}});var n=i(9439),s=i(8381),l=i(9650),a=i(1956),t="Login_container__2a92S",o="Login_content__Cf1JV",d="Login_loginInfo__TJx40",c=i(5484),u=i(8388),h=i(2524),m=(i(8050),function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.password||(r.password="Required"),r}),x=i(9343),p=function(e){var r=(0,s.useState)(""),i=(0,n.Z)(r,2),t=i[0],o=i[1];return(0,x.jsx)(l.J9,{initialValues:{email:"",password:"",rememberMe:!1},validate:m,onSubmit:function(r,i){e.login(r.email,r.password,r.rememberMe,(function(e){o(e)})),i.setFieldValue("password","")},children:(0,x.jsxs)(l.l0,{children:[(0,x.jsx)(a.oi,{label:"E-mail - ",name:"email",type:"text",placeholder:"Enter E-mail here"}),(0,x.jsx)(a.oi,{label:"Password - ",name:"password",type:"password",placeholder:"Enter password here"}),(0,x.jsx)(a.XZ,{name:"rememberMe",children:"Remember me?"}),(0,x.jsx)("div",{children:t}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"Submit"})})]})})},j=(0,c.$j)((function(e){return{isAuth:e.auth.isAuth,isAuthErrorToggled:e.auth.isAuthErrorToggled}}),{login:u.x4})((function(e){var r=e.isAuth,i=e.login;return r?(0,x.jsx)(h.Fg,{to:"/profile"}):(0,x.jsxs)("div",{className:t,children:[(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("h1",{children:"Login"}),(0,x.jsx)("div",{children:(0,x.jsx)(p,{login:i})})]}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("div",{children:"You can test the site with this login information:"}),(0,x.jsx)("div",{children:"Email: free@samuraijs.com Password: free"})]})]})}))},1956:function(e,r,i){i.d(r,{XZ:function(){return m},oi:function(){return h}});var n=i(8683),s=i(9439),l=i(5987),a=i(9650),t=(i(8381),"FormComponents_textInput__3Qh+h"),o="FormComponents_textInputErrorMessage__NARsf",d=i(9343),c=["label","handleBlur"],u=["children"],h=function(e){var r=e.label,i=e.handleBlur,u=(0,l.Z)(e,c),h=(0,a.U$)(u),m=(0,s.Z)(h,2),x=m[0],p=m[1];return(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:u.id||u.name,children:r}),(0,d.jsx)("input",(0,n.Z)((0,n.Z)({className:t,onBlur:i},x),u)),p.touched&&p.error&&(0,d.jsxs)("div",{className:o,children:[" ",p.error," "]})]})},m=function(e){var r=e.children,i=(0,l.Z)(e,u),t=(0,a.U$)((0,n.Z)((0,n.Z)({},i),{},{type:"checkbox"})),o=(0,s.Z)(t,2),c=o[0],h=o[1];return(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"checkBoxInput",children:[(0,d.jsx)("input",(0,n.Z)((0,n.Z)({type:"checkbox"},c),i)),r]}),h.touched&&h.error&&(0,d.jsx)("div",{className:"error",children:h.error})]})}}}]);
//# sourceMappingURL=53.a67f0af0.chunk.js.map