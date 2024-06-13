"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[206],{813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=n(4848),s=n(8453);const i={sidebar_position:2},l="Multipler",a={id:"learn/examples/multiplier",title:"Multipler",description:"A simple module that accepts a value and a multipler. Output the result in a separate property.",source:"@site/docs/learn/examples/multiplier.mdx",sourceDirName:"learn/examples",slug:"/learn/examples/multiplier",permalink:"/docs/learn/examples/multiplier",draft:!1,unlisted:!1,editUrl:"https://github.com/openexus/docs-source/tree/main/packages/create-docusaurus/templates/shared/docs/learn/examples/multiplier.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Counter",permalink:"/docs/learn/examples/counter"},next:{title:"Gallery",permalink:"/docs/learn/examples/gallery"}},c={},o=[];function u(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"multipler",children:"Multipler"}),"\n",(0,r.jsx)(t.p,{children:"A simple module that accepts a value and a multipler. Output the result in a separate property."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Reading and writing values to properties using ",(0,r.jsx)(t.code,{children:"context.get"})," and ",(0,r.jsx)(t.code,{children:"context.set"})]}),"\n",(0,r.jsxs)(t.li,{children:["Indicating properties direction with ",(0,r.jsx)(t.code,{children:"io"})]}),"\n",(0,r.jsxs)(t.li,{children:["Reactivity using ",(0,r.jsx)(t.code,{children:"effect"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",metastring:'title="manifest.yaml"',children:"name: Multiplier\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",metastring:'title="properties.yaml"',children:"value:\n  datatype: number\n  io: input\nmultiplier:\n  datatype: number\n  io: input\nresult:\n  datatype: number\n  io: output\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="src/main.jsx"',children:"import { effect } from '@modules-js/effect';\n\neffect(() => {\n  // This effect is automatically run whenever value and multipler changes\n  context.set('result', context.get('value') * context.get('multiplier'));\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);