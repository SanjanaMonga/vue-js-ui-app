(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"206d":function(t,n,r){"use strict";var e=r("e50d"),a=r.n(e);a.a},a55b:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("b-card",{staticClass:"mb-2",attrs:{id:"login-card",title:"Login"}},[r("b-card-text",[r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Email","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.userAuthInfo.email,callback:function(n){t.$set(t.userAuthInfo,"email",n)},expression:"userAuthInfo.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Password","label-for":"input-2"}},[r("b-form-input",{attrs:{type:"password",id:"input-2",required:"",placeholder:"Enter password"},model:{value:t.userAuthInfo.password,callback:function(n){t.$set(t.userAuthInfo,"password",n)},expression:"userAuthInfo.password"}})],1)],1)],1),r("b-button",{attrs:{variant:"primary"},on:{click:function(n){return t.login()}}},[t._v("Submit")]),t._v(" \n    "),r("b-button",{attrs:{variant:"secondary"},on:{click:function(n){return t.signup()}}},[t._v("Sign Up")])],1)],1)},a=[],u=r("9ab4"),o=r("60a3"),i=r("9dba"),s=r("5f86"),l=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.userAuthInfo={email:"",password:""},n}return Object(u["c"])(n,t),n.prototype.login=function(t){i["a"].login(this.userAuthInfo).then((function(){return s["a"].push({name:"articles"})})).catch((function(){alert("Invalid username or password.")}))},n.prototype.signup=function(){s["a"].push({name:"signup"})},n=Object(u["b"])([o["a"]],n),n}(o["c"]),p=l,c=p,d=(r("206d"),r("2877")),f=Object(d["a"])(c,e,a,!1,null,null,null);n["default"]=f.exports},e50d:function(t,n,r){}}]);
//# sourceMappingURL=login.73a02971.js.map