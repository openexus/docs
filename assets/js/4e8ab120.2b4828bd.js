"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8850],{8457:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(4848),r=s(8453);const i={sidebar_position:1},l="Structure",c={id:"learn/spec/structure",title:"Structure",description:"There are 3 major components to the spec:",source:"@site/docs/learn/spec/structure.mdx",sourceDirName:"learn/spec",slug:"/learn/spec/structure",permalink:"/docs/learn/spec/structure",draft:!1,unlisted:!1,editUrl:"https://github.com/openexus/docs-source/tree/main/packages/create-docusaurus/templates/shared/docs/learn/spec/structure.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chart",permalink:"/docs/learn/examples/chart"},next:{title:"Overview",permalink:"/docs/learn/spec/manifest/"}},a={},o=[{value:"Manifest",id:"manifest",level:2},{value:"Properties",id:"properties",level:2},{value:"Files",id:"files",level:2},{value:"File System Structure",id:"file-system-structure",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.p,{children:"There are 3 major components to the spec:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Manifest"}),"\n",(0,t.jsx)(n.li,{children:"Properties"}),"\n",(0,t.jsx)(n.li,{children:"Files"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"manifest",children:"Manifest"}),"\n",(0,t.jsx)(n.p,{children:"The manifest describes the metadata of the node, and any additional configuration. A very simple manifest may have these fields:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",metastring:'title="manifest.yaml"',children:"name: My Custom Node\ndescription: Simple node that double a number!\nicon: mdi:star\n"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.p,{children:"The properties define all a list of properties of the node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",metastring:'title="properties.yaml"',children:"value:\n  description: Provide a number, and get back the double value in ((double))\n  default: 1\ndouble:\n  description: The doubled value!\n  default: 2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"files",children:"Files"}),"\n",(0,t.jsx)(n.p,{children:"The files section are all additional files for the node. These can include assets or actual code that needs to be interpreted. For example, there maybe a Javascript file for this node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/main.js"',children:"effect(() => {\n  context.set('double', context.get('value') * 2);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"file-system-structure",children:"File System Structure"}),"\n",(0,t.jsx)(n.p,{children:"Files and folder structure in a manifest may look like this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"manifest.yaml"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"properties.yaml"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"main.tsx"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"assets"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"screenshot1.png"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);