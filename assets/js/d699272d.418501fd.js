"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4684],{4904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=t(4848),s=t(8453);const i={},l="JSX Attributes",a={id:"learn/javascript/ui/attributes",title:"JSX Attributes",description:"Handle events",source:"@site/docs/learn/javascript/ui/attributes.mdx",sourceDirName:"learn/javascript/ui",slug:"/learn/javascript/ui/attributes",permalink:"/docs/learn/javascript/ui/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/openexus/docs-source/tree/main/packages/create-docusaurus/templates/shared/docs/learn/javascript/ui/attributes.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI & Slots",permalink:"/docs/learn/javascript/ui/ui-slots"},next:{title:"Automatic Properties",permalink:"/docs/learn/javascript/ui/auto-properties"}},c={},o=[{value:"Handle events",id:"handle-events",level:2},{value:"Ref",id:"ref",level:2},{value:"By variable",id:"by-variable",level:3},{value:"By callback",id:"by-callback",level:3},{value:"Styling",id:"styling",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"jsx-attributes",children:"JSX Attributes"}),"\n",(0,r.jsx)(n.h2,{id:"handle-events",children:"Handle events"}),"\n",(0,r.jsxs)(n.p,{children:["Event handlers are handled by the ",(0,r.jsx)(n.code,{children:"on:"})," prefix."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function handleOnClick(e) {\n  console.log(e);\n}\nfunction render() {\n  return (\n    <div on:click={handleOnClick}>test</div>\n  )\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ref",children:"Ref"}),"\n",(0,r.jsx)(n.p,{children:"Refs are a way of getting access to underlying DOM elements in our JSX. While it is true one could just assign an element to a variable, it is more optimal to leave components in the flow of JSX. Refs are assigned at render time but before the elements are connected to the DOM. They come in 2 flavors."}),"\n",(0,r.jsx)(n.h3,{id:"by-variable",children:"By variable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"let el;\nfunction render() {\n  // after connected to DOM\n  onMount(() => console.log(el));\n  return <div ref={el} />;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"by-callback",children:"By callback"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function render() {\n  // before connected to DOM\n  return <div ref={el => console.log(el)} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"./styling",children:"Styling"})," section."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"on:"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n",(0,r.jsx)(n.li,{children:"styling"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);