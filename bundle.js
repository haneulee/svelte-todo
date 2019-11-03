var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function l(){return Object.create(null)}function i(t){t.forEach(o)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const d="undefined"!=typeof window;let s=d?()=>window.performance.now():()=>Date.now(),a=d?t=>requestAnimationFrame(t):t;const u=new Set;let f,p=!1;function m(){u.forEach(t=>{t[0](s())||(u.delete(t),t[1]())}),(p=u.size>0)&&a(m)}function h(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function T(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function k(t,e){(null!=e||t.value)&&(t.value=e)}function C(t,e,n){t.classList[n?"add":"remove"](e)}function w(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let E,F=0,q={};function A(t,e,n,o,l,i,c,r=0){const d=16.666/o;let s="{\n";for(let t=0;t<=1;t+=d){const o=e+(n-e)*i(t);s+=100*t+`%{${c(o,1-o)}}\n`}const a=s+`100% {${c(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${r}`;if(!q[u]){if(!f){const t=v("style");document.head.appendChild(t),f=t.sheet}q[u]=!0,f.insertRule(`@keyframes ${u} ${a}`,f.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${o}ms linear ${l}ms 1 both`,F+=1,u}function R(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--F&&a(()=>{if(F)return;let t=f.cssRules.length;for(;t--;)f.deleteRule(t);q={}})}function M(t){E=t}const S=[],j=[],z=[],L=[],O=Promise.resolve();let D,N=!1;function P(t){z.push(t)}function B(){const t=new Set;do{for(;S.length;){const t=S.shift();M(t),I(t.$$)}for(;j.length;)j.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];t.has(n)||(n(),t.add(n))}z.length=0}while(S.length);for(;L.length;)L.pop()();N=!1}function I(t){t.fragment&&(t.update(t.dirty),i(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(P))}function H(t,e,n){t.dispatchEvent(w(`${e?"intro":"outro"}${n}`))}const W=new Set;let G;function J(t,e){t&&t.i&&(W.delete(t),t.i(e))}function K(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),G.c.push(()=>{W.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const Q={duration:0};function U(n,o,l,r){let d=o(n,l),f=r?0:1,h=null,g=null,$=null;function v(){$&&R(n,$)}function y(t,e){const n=t.b-f;return e*=Math.abs(n),{a:f,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(o){const{delay:l=0,duration:c=300,easing:r=e,tick:b=t,css:_}=d||Q,T={start:s()+l,b:o};o||(T.group=G,G.r+=1),h?g=T:(_&&(v(),$=A(n,f,o,c,l,r,_)),o&&b(0,1),h=y(T,c),P(()=>H(n,o,"start")),function(t){let e;p||(p=!0,a(m)),new Promise(n=>{u.add(e=[t,n])})}(t=>{if(g&&t>g.start&&(h=y(g,c),g=null,H(n,h.b,"start"),_&&(v(),$=A(n,f,h.b,h.duration,0,r,d.css))),h)if(t>=h.end)b(f=h.b,1-f),H(n,h.b,"end"),g||(h.b?v():--h.group.r||i(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;f=h.a+h.d*r(e/h.duration),b(f,1-f)}return!(!h&&!g)}))}return{run(t){c(d)?(D||(D=Promise.resolve()).then(()=>{D=null}),D).then(()=>{d=d(),b(t)}):b(t)},end(){v(),h=g=null}}}function V(t,e,n){const{fragment:l,on_mount:r,on_destroy:d,after_update:s}=t.$$;l.m(e,n),P(()=>{const e=r.map(o).filter(c);d?d.push(...e):i(e),t.$$.on_mount=[]}),s.forEach(P)}function X(t,e){t.$$.fragment&&(i(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function Y(t,e){t.$$.dirty||(S.push(t),N||(N=!0,O.then(B)),t.$$.dirty=l()),t.$$.dirty[e]=!0}function Z(e,n,o,c,r,d){const s=E;M(e);const a=n.props||{},u=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:r,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:l(),dirty:null};let f=!1;u.ctx=o?o(e,a,(t,n,o=n)=>(u.ctx&&r(u.ctx[t],u.ctx[t]=o)&&(u.bound[t]&&u.bound[t](o),f&&Y(e,t)),n)):a,u.update(),f=!0,i(u.before_update),u.fragment=c(u.ctx),n.target&&(n.hydrate?u.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):u.fragment.c(),n.intro&&J(e.$$.fragment),V(e,n.target,n.anchor),B()),M(s)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function et(t){const e=t-1;return e*e*e+1}function nt(t,{delay:e=0,duration:n=400,easing:o=et,x:l=0,y:i=0,opacity:c=0}){const r=getComputedStyle(t),d=+r.opacity,s="none"===r.transform?"":r.transform,a=d*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${s} translate(${(1-t)*l}px, ${(1-t)*i}px);\n\t\t\topacity: ${d-a*e}`}}function ot(t){var e,n,o,l,c,r,d,s,a,u,f;return{c(){e=v("div"),n=v("div"),o=v("input"),l=b(),c=v("div"),r=y(t.title),s=b(),(a=v("div")).textContent="×",T(o,"type","checkbox"),T(c,"class","todo-item-label svelte-1tmopvz"),C(c,"completed",t.completed),T(n,"class","todo-item-left svelte-1tmopvz"),T(a,"class","remove-item svelte-1tmopvz"),T(e,"class","todo-item svelte-1tmopvz"),f=[_(o,"change",t.input_change_handler),_(o,"change",t.toggleComplete),_(a,"click",t.deleteTodo)]},m(i,d){g(i,e,d),h(e,n),h(n,o),o.checked=t.completed,h(n,l),h(n,c),h(c,r),h(e,s),h(e,a),u=!0},p(t,e){t.completed&&(o.checked=e.completed),u&&!t.title||x(r,e.title),t.completed&&C(c,"completed",e.completed)},i(t){u||(P(()=>{d||(d=U(n,nt,{y:20,duration:300},!0)),d.run(1)}),u=!0)},o(t){d||(d=U(n,nt,{y:20,duration:300},!1)),d.run(0),u=!1},d(t){t&&($(e),d&&d.end()),i(f)}}}function lt(t,e,n){let{id:o,title:l,completed:i}=e;const c=function(){const t=E;return(e,n)=>{const o=t.$$.callbacks[e];if(o){const l=w(e,n);o.slice().forEach(e=>{e.call(t,l)})}}}();return t.$set=t=>{"id"in t&&n("id",o=t.id),"title"in t&&n("title",l=t.title),"completed"in t&&n("completed",i=t.completed)},{id:o,title:l,completed:i,deleteTodo:function(){c("deleteTodo",{id:o})},toggleComplete:function(){c("toggleComplete",{id:o})},input_change_handler:function(){i=this.checked,n("completed",i)}}}class it extends tt{constructor(t){super(),Z(this,t,lt,ot,r,["id","title","completed"])}}function ct(t,e,n){const o=Object.create(t);return o.todo=e[n],o}function rt(t){var e,o,l=[t.todo];let i={};for(var c=0;c<l.length;c+=1)i=n(i,l[c]);var r=new it({props:i});return r.$on("deleteTodo",t.handleDeleteTodo),r.$on("toggleComplete",t.handleToggleComplete),{c(){e=v("div"),r.$$.fragment.c(),T(e,"class","todo-item")},m(t,n){g(t,e,n),V(r,e,null),o=!0},p(t,e){var n,o=t.filteredTodos?function(t,e){const n={},o={},l={$$scope:1};let i=t.length;for(;i--;){const c=t[i],r=e[i];if(r){for(const t in c)t in r||(o[t]=1);for(const t in r)l[t]||(n[t]=r[t],l[t]=1);t[i]=r}else for(const t in c)l[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(l,[(n=e.todo,"object"==typeof n&&null!==n?n:{})]):{};r.$set(o)},i(t){o||(J(r.$$.fragment,t),o=!0)},o(t){K(r.$$.fragment,t),o=!1},d(t){t&&$(e),X(r)}}}function dt(t){var e,n,o,l,c,r,d,s,a,u,f,p,m,w,E,F,q,A,R,M,S,j,z,L,O,D,N,P,B,I;let H=t.filteredTodos,W=[];for(let e=0;e<H.length;e+=1)W[e]=rt(ct(t,H,e));const Q=t=>K(W[t],1,1,()=>{W[t]=null});return{c(){e=v("div"),(n=v("a")).innerHTML='<img src="/img/CTSWLogo.png" alt="svelte logo" class="logo svelte-f0q9yb">',o=b(),(l=v("h2")).textContent="Svelte Todo App",c=b(),r=v("input"),d=b();for(let t=0;t<W.length;t+=1)W[t].c();s=b(),a=v("div"),u=v("div"),f=v("label"),p=v("input"),m=y("Check All"),w=b(),E=v("div"),F=y(t.todosRemaining),q=y(" items left"),A=b(),R=v("div"),M=v("div"),(S=v("button")).textContent="All",j=b(),(z=v("button")).textContent="Active",L=b(),(O=v("button")).textContent="Completed",D=b(),N=v("div"),(P=v("button")).textContent="Clear Completed",T(n,"href","https://codingthesmartway.com"),T(n,"target","_blank"),T(r,"type","text"),T(r,"class","todo-input svelte-f0q9yb"),T(r,"placeholder","Insert todo item ..."),T(p,"class","inner-container-input svelte-f0q9yb"),T(p,"type","checkbox"),T(a,"class","inner-container svelte-f0q9yb"),T(S,"class","svelte-f0q9yb"),C(S,"active","all"===t.currentFilter),T(z,"class","svelte-f0q9yb"),C(z,"active","active"===t.currentFilter),T(O,"class","svelte-f0q9yb"),C(O,"active","completed"===t.currentFilter),T(P,"class","svelte-f0q9yb"),T(R,"class","inner-container svelte-f0q9yb"),T(e,"class","container svelte-f0q9yb"),I=[_(r,"input",t.input0_input_handler),_(r,"keydown",t.addTodo),_(p,"change",t.checkAllTodos),_(S,"click",t.click_handler),_(z,"click",t.click_handler_1),_(O,"click",t.click_handler_2),_(P,"click",t.clearCompleted)]},m(i,$){g(i,e,$),h(e,n),h(e,o),h(e,l),h(e,c),h(e,r),k(r,t.newTodoTitle),h(e,d);for(let t=0;t<W.length;t+=1)W[t].m(e,null);h(e,s),h(e,a),h(a,u),h(u,f),h(f,p),h(f,m),h(a,w),h(a,E),h(E,F),h(E,q),h(e,A),h(e,R),h(R,M),h(M,S),h(M,j),h(M,z),h(M,L),h(M,O),h(R,D),h(R,N),h(N,P),B=!0},p(t,n){if(t.newTodoTitle&&r.value!==n.newTodoTitle&&k(r,n.newTodoTitle),t.filteredTodos){let o;for(H=n.filteredTodos,o=0;o<H.length;o+=1){const l=ct(n,H,o);W[o]?(W[o].p(t,l),J(W[o],1)):(W[o]=rt(l),W[o].c(),J(W[o],1),W[o].m(e,s))}for(G={r:0,c:[],p:G},o=H.length;o<W.length;o+=1)Q(o);G.r||i(G.c),G=G.p}B&&!t.todosRemaining||x(F,n.todosRemaining),t.currentFilter&&(C(S,"active","all"===n.currentFilter),C(z,"active","active"===n.currentFilter),C(O,"active","completed"===n.currentFilter))},i(t){if(!B){for(let t=0;t<H.length;t+=1)J(W[t]);B=!0}},o(t){W=W.filter(Boolean);for(let t=0;t<W.length;t+=1)K(W[t]);B=!1},d(t){t&&$(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(W,t),i(I)}}}function st(t,e,n){let o="",l="all",i=4,c=[{id:1,title:"My first todo",completed:!1},{id:2,title:"My second todo",completed:!1},{id:3,title:"My third todo",completed:!1}];function r(t){n("currentFilter",l=t)}let d,s;return t.$$.update=(t={currentFilter:1,todos:1,filteredTodos:1})=>{(t.currentFilter||t.todos)&&n("filteredTodos",d="all"===l?c:"completed"===l?c.filter(t=>t.completed):c.filter(t=>!t.completed)),t.filteredTodos&&n("todosRemaining",s=d.filter(t=>!t.completed).length)},{newTodoTitle:o,currentFilter:l,addTodo:function(t){"Enter"===t.key&&(n("todos",c=[...c,{id:i,completed:!1,title:o}]),i+=1,n("newTodoTitle",o=""))},checkAllTodos:function(t){c.forEach(e=>e.completed=t.target.checked),n("todos",c)},updateFilter:r,clearCompleted:function(){n("todos",c=c.filter(t=>!t.completed))},handleDeleteTodo:function(t){n("todos",c=c.filter(e=>e.id!==t.detail.id))},handleToggleComplete:function(t){const e=c.findIndex(e=>e.id===t.detail.id),o={...c[e],completed:!c[e].completed};n("todos",c=[...c.slice(0,e),o,...c.slice(e+1)])},filteredTodos:d,todosRemaining:s,input0_input_handler:function(){o=this.value,n("newTodoTitle",o)},click_handler:()=>r("all"),click_handler_1:()=>r("active"),click_handler_2:()=>r("completed")}}class at extends tt{constructor(t){super(),Z(this,t,st,dt,r,[])}}function ut(e){var n,o=new at({});return{c(){o.$$.fragment.c()},m(t,e){V(o,t,e),n=!0},p:t,i(t){n||(J(o.$$.fragment,t),n=!0)},o(t){K(o.$$.fragment,t),n=!1},d(t){X(o,t)}}}return new class extends tt{constructor(t){super(),Z(this,t,null,ut,r,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
