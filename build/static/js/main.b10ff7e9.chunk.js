(this["webpackJsonpnote-machine"]=this["webpackJsonpnote-machine"]||[]).push([[0],{38:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e(2),r=e(15),a=e.n(r),i=e(6),u=e(3),s=e(4),l=e.n(s),j="https://stark-savannah-62913.herokuapp.com/api/notes",b=function(){var t=l.a.get(j),n={id:1e4,content:"This not is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},d=function(t){return l.a.post(j,t).then((function(t){return t.data}))},f=function(t,n){return l.a.put("".concat(j,"/").concat(t),n).then((function(t){return t.data}))},h=function(t){var n=t.note,e=t.toggleImportance,o=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:o})]})},m=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},O=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app by Josh Sanderlin 2020"})]})},p=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],a=Object(o.useState)(""),s=Object(u.a)(a,2),l=s[0],j=s[1],p=Object(o.useState)(!0),v=Object(u.a)(p,2),x=v[0],g=v[1],S=Object(o.useState)(null),k=Object(u.a)(S,2),y=k[0],w=k[1];Object(o.useEffect)((function(){b().then((function(t){r(t)}))}),[]),console.log("render",e.length,"notes");var I=x?e:e.filter((function(t){return!0===t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(m,{message:y}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:I.map((function(t){return Object(c.jsx)(h,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});f(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){w("The note '".concat(n.content,"' was already deleted from the server")),setTimeout((function(){w(null)}),5e3),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:l,date:(new Date).toISOString(),important:Math.random()<.5};d(n).then((function(t){r(e.concat(t)),j("")}))},children:[Object(c.jsx)("input",{value:l,onChange:function(t){console.log(t.target.value),j(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(O,{})]})};e(38);a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b10ff7e9.chunk.js.map