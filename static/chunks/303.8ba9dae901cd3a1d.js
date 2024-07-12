"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{9303:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},headerID:function(){return g}});var r=n(5893),i=n(4080),s=n(1479),o=n(7473),a=n(4184),l=n.n(a),c=n(1664),u=n.n(c),d=n(7294),f=n(1124);let m=(e,t)=>{(0,d.useEffect)(()=>{let n=document.querySelectorAll(e),r=Array.from(n),i=document.getElementById(g),s=new IntersectionObserver(e=>{e.forEach(e=>{let n=e.boundingClientRect.y,s=e.target.getAttribute("id");if(i){let a={id:s,currentIndex:r.findIndex(e=>e.getAttribute("id")===s),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:n<i.getBoundingClientRect().y,belowToc:!(n<i.getBoundingClientRect().y)};if(a.isIntersecting)t(a.id);else if(!a.isIntersecting&&a.currentRatio<1&&a.currentRatio>0&&a.belowToc){var o;let e=null===(o=r[a.currentIndex-1])||void 0===o?void 0:o.getAttribute("id");t(e)}}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return n.forEach(e=>{s.observe(e)}),()=>{s.disconnect()}},[])},g="headerNav",x=(0,d.memo)(()=>{let[e,t]=(0,d.useState)(null),n=(0,d.useMemo)(()=>[f._h.About,f._h.Resume,f._h.Portfolio,f._h.Testimonials,f._h.Contact],[]),i=(0,d.useCallback)(e=>{e&&t(e)},[]);return m(n.map(e=>"#".concat(e)).join(","),i),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{currentSection:e,navSections:n}),(0,r.jsx)(h,{currentSection:e,navSections:n})]})}),h=(0,d.memo)(e=>{let{navSections:t,currentSection:n}=e,i="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100",s=l()(i,"text-orange-500"),o=l()(i,"text-neutral-100");return(0,r.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:g,children:(0,r.jsx)("nav",{className:"flex justify-center gap-x-8",children:t.map(e=>(0,r.jsx)(b,{activeClass:s,current:e===n,inactiveClass:o,section:e},e))})})}),v=(0,d.memo)(e=>{let{navSections:t,currentSection:n}=e,[a,c]=(0,d.useState)(!1),u=(0,d.useCallback)(()=>{c(!a)},[a]),f="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",m=l()(f,"bg-neutral-900 text-white font-bold"),g=l()(f,"text-neutral-200 font-medium");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{"aria-label":"Menu Button",className:"fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden",onClick:u,children:[(0,r.jsx)(o.Z,{className:"h-8 w-8 text-white"}),(0,r.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,r.jsx)(i.u.Root,{as:d.Fragment,show:a,children:(0,r.jsxs)(s.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:u,children:[(0,r.jsx)(i.u.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(s.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,r.jsx)(i.u.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,r.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,r.jsx)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:t.map(e=>(0,r.jsx)(b,{activeClass:m,current:e===n,inactiveClass:g,onClick:u,section:e},e))})})})]})})]})}),b=(0,d.memo)(e=>{let{section:t,current:n,inactiveClass:i,activeClass:s,onClick:o}=e;return(0,r.jsx)(u(),{className:l()(n?s:i),href:"/#".concat(t),onClick:o,children:t},t)});x.displayName="Header";var p=x}}]);