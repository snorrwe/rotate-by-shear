import{J as P,K as S,L as O,x as Y,M as k,t as L,N as b,O as H,P as B,Q as C,R as T,B as g,A,y as W,f as v,T as $,V as j,W as q,X as J,Y as K,Z as Q,_ as X,d as Z,p as z,h as E,i as F,c as G}from"./runtime.CZB9YQP5.js";import{b as U}from"./disclose-version.C0wpV4qE.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,D=new Set;function m(r){var R;var e=this,n=e.ownerDocument,c=r.type,o=((R=r.composedPath)==null?void 0:R.call(r))||[],t=o[0]||r.target,d=0,_=r.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(t=o[d]||r.target,t!==e){P(r,"currentTarget",{configurable:!0,get(){return t||n}});var w=k,i=L;S(null),O(null);try{for(var a,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(Y(l)){var[I,...M]=l;I.apply(t,[r,...M])}else l.call(t,r)}catch(y){a?s.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of s)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,S(w),O(i)}}}function sr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function tr(r,e){return V(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const n=e.target,c=E,o=v;try{for(var t=H(n);t&&(t.nodeType!==8||t.data!==B);)t=C(t);if(!t)throw T;g(!0),A(t),W();const d=V(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==$)throw j(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&q(),b(),J(n),g(!1),tr(r,e);throw d}finally{g(c),A(o)}}const p=new Map;function V(r,{target:e,anchor:n,props:c={},events:o,context:t,intro:d=!0}){b();var _=new Set,u=i=>{for(var a=0;a<i.length;a++){var s=i[a];if(!_.has(s)){_.add(s);var f=rr(s);e.addEventListener(s,m,{passive:f});var l=p.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,l+1)}}};u(K(er)),D.add(u);var h=void 0,w=Q(()=>{var i=n??e.appendChild(X());return Z(()=>{if(t){z({});var a=G;a.c=t}o&&(c.$$events=o),E&&U(i,null),h=r(i,c)||{},E&&(L.nodes_end=v),t&&F()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var s=p.get(a);--s===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,s)}D.delete(u),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return N.set(h,w),h}let N=new WeakMap;function or(r,e){const n=N.get(r);return n?(N.delete(r),n(e)):Promise.resolve()}export{ir as h,tr as m,sr as s,or as u};
