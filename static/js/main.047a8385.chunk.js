(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{61:function(e,t,n){e.exports=n(73)},66:function(e,t,n){},67:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(66),n(14)),l=n(40),u=n(21),s=n(11),d=(n(67),n(12)),m=n(107),f=n(104),b=n(108),g=n(101),p=Object(g.a)({button:{margin:"20px 30px 0px 20px",background:"linear-gradient(45deg, #B22222 30%, #DC143C 60%)"}});var v=function(e){var t=e.setHomeTodos,n=e.setSchoolTodos,a=e.kind,r=p();return o.a.createElement(f.a,{onClick:function(){"school tasks"===a?n([]):t([])},className:r.button,id:"CLEAR ALL",type:"submit"},"Delete all")};function h(){var e=Object(s.a)(["\n  float: left;\n"]);return h=function(){return e},e}var O=Object(g.a)({textField:{margin:"20px 0px 0px 0px",background:"linear-gradient(45deg, white 30%, gray 90%)"},button:{margin:"20px 30px 0px 20px",background:"linear-gradient(45deg, #32CD32 30%, #00FF00 80%)"}}),k=d.a.h3(h());var j=function(e){var t=e.addTodo,n=e.setSchoolTodos,r=e.setHomeTodos,c=e.kind,l=O(),s=Object(a.useState)({id:"",task:"",completed:!1}),d=Object(u.a)(s,2),g=d[0],p=d[1];return o.a.createElement("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),g.task.trim()&&(t(Object(i.a)(Object(i.a)({},g),{},{id:Object(b.a)()})),p(Object(i.a)(Object(i.a)({},g),{},{task:""})))}},o.a.createElement(k,null,c),o.a.createElement(m.a,{id:"inputField",className:l.textField,placeholder:"Add task here.",type:"text",name:"task",value:g.task,onChange:function(e){p(Object(i.a)(Object(i.a)({},g),{},{task:e.target.value}))}}),o.a.createElement(f.a,{className:l.button,id:"+",type:"submit"},"+"),o.a.createElement(v,{setSchoolTodos:n,setHomeTodos:r,kind:c}))},E=n(110),x=n(109),T=n(106),S=n(53),y=n.n(S);function C(){var e=Object(s.a)(["\n  text-align: right;\n"]);return C=function(){return e},e}function w(){var e=Object(s.a)(["\n  width: 100%;\n"]);return w=function(){return e},e}function F(){var e=Object(s.a)(["\n  margin-left: 30%;\n  margin-right: 10%;\n  font-size: xx-large;\n"]);return F=function(){return e},e}function N(){var e=Object(s.a)(["\n  font-size: xx-large;\n  margin-right: 10%;\n"]);return N=function(){return e},e}var D=d.a.div(N()),A=d.a.div(F()),H=d.a.div(w()),L=d.a.div(C());var I=function(e){var t=e.todo,n=e.toggleComplete,a=e.removeTodo;return o.a.createElement(H,{style:{display:"flex"}},o.a.createElement(A,null,o.a.createElement(x.a,{checked:t.completed,onClick:function(){n(t.id)}})),o.a.createElement(D,{variant:"body1",style:{textDecoration:t.completed?"line-through":null}},t.task),o.a.createElement(T.a,{className:L,onClick:function(){a(t.id)}},o.a.createElement(y.a,null)))};function J(){var e=Object(s.a)(["\n  margin-top: 3%;\n"]);return J=function(){return e},e}var K=d.a.div(J());var B=function(e){var t=e.homeTodos,n=e.schoolTodos,a=e.removeTodo,r=e.toggleComplete,c=e.kind;function i(){return"school tasks"===c?o.a.createElement(E.a,null,n.map((function(e){return o.a.createElement(I,{key:e.id,todo:e,removeTodo:a,toggleComplete:r})}))):o.a.createElement(E.a,null,t.map((function(e){return o.a.createElement(I,{key:e.id,todo:e,removeTodo:a,toggleComplete:r})})))}return o.a.createElement(K,null,o.a.createElement(i,null))},M=Object(g.a)({button:{margin:"20px 30px 0px 20px",background:"linear-gradient(45deg, #33FFFF 30%, #33CEFF 80%)"}});var z=function(e){var t=e.setKind,n=M();return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{onClick:function(){t("school tasks")},id:"SCHOOL TASKS",className:n.button,type:"submit"},"School tasks"),o.a.createElement(f.a,{onClick:function(){t("home tasks")},id:"HOME TASKS",className:n.button,type:"submit"},"Home tasks"))},W=Object(a.createContext)();function P(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useMemo)((function(){return{activeToDoList:r,setActiveToDoList:c}}),[r,c]);return o.a.createElement(W.Provider,{value:i},e.children)}function R(){var e=Object(s.a)(["\n  background-color: #323633;\n  border-radius: 10px;\n  box-shadow: 0 0 50px 5px darkgray;\n  margin: 2% 8%;\n  padding: 0.5%;\n  text-align: center;\n"]);return R=function(){return e},e}function $(){var e=Object(s.a)(["\n  background-color: #323633;\n  color: white;\n  border-radius: 10px;\n  box-shadow: 0 0 50px 1px darkgray;\n  margin: 2% 12%;\n  padding: 0.5%;\n  text-align: center;\n  height: fit-content;\n"]);return $=function(){return e},e}function q(){var e=Object(s.a)(["\n  color: white;\n"]);return q=function(){return e},e}var G=d.a.h1(q()),Q=d.a.div($()),U=d.a.div(R());var V=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(u.a)(c,2),d=s[0],m=s[1],f=Object(a.useState)("school tasks"),b=Object(u.a)(f,2),g=b[0],p=b[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-schoolTodos"));e&&m(e)}),[]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-homeTodos"));e&&r(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-todo-list-homeTodos",JSON.stringify(n))}),[n]),Object(a.useEffect)((function(){localStorage.setItem("react-todo-list-schoolTodos",JSON.stringify(d))}),[d]),o.a.createElement("div",{className:"App"},o.a.createElement(P,null,o.a.createElement(U,null,o.a.createElement(G,null,"TO DO LIST"),o.a.createElement(z,{setKind:p})),o.a.createElement(Q,null,o.a.createElement(j,{addTodo:function(e){"school tasks"===g?m([e].concat(Object(l.a)(d))):r([e].concat(Object(l.a)(n)))},setSchoolTodos:m,setHomeTodos:r,kind:g}),o.a.createElement(B,{kind:g,homeTodos:n,schoolTodos:d,removeTodo:function(e){"school tasks"===g?m(d.filter((function(t){return t.id!==e}))):r(n.filter((function(t){return t.id!==e})))},toggleComplete:function(e){r(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t}))),m(d.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.047a8385.chunk.js.map