"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6061],{7973:(e,o,n)=>{n.r(o),n.d(o,{default:()=>m});n(6540);var t=n(4164),c=n(1003),s=n(7559),a=n(781),l=n(1504),i=n(7763),r=n(996),d=n(2153);const u={mdxPageWrapper:"mdxPageWrapper_j9I6"};var p=n(4848);function m(e){const{content:o}=e,{metadata:{title:n,editUrl:m,description:g,frontMatter:h,unlisted:b,lastUpdatedBy:x,lastUpdatedAt:B},assets:N}=o,{keywords:k,wrapperClassName:j,hide_table_of_contents:A}=h,y=N.image??h.image,_=!!(m||B||x);return(0,p.jsx)(c.e3,{className:(0,t.A)(j??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,p.jsxs)(a.A,{children:[(0,p.jsx)(c.be,{title:n,description:g,keywords:k,image:y}),(0,p.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,p.jsxs)("div",{className:(0,t.A)("row",u.mdxPageWrapper),children:[(0,p.jsxs)("div",{className:(0,t.A)("col",!A&&"col--8"),children:[b&&(0,p.jsx)(r.A,{}),(0,p.jsx)("article",{children:(0,p.jsx)(l.A,{children:(0,p.jsx)(o,{})})}),_&&(0,p.jsx)(d.A,{className:(0,t.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:m,lastUpdatedAt:B,lastUpdatedBy:x})]}),!A&&o.toc.length>0&&(0,p.jsx)("div",{className:"col col--2",children:(0,p.jsx)(i.A,{toc:o.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},9163:(e,o,n)=>{n.d(o,{A:()=>c});n(6540);var t=n(4848);function c(e){const{type:o,icon:n,title:c,children:s,className:a}=e;return(0,t.jsx)("div",{className:function(){let e="border-neutral-400 bg-neutral-100";return"warning"===o&&(e="border-orange-400 bg-orange-100"),`admonition px-2 border-l-4 ${e}`}(),children:(0,t.jsx)("div",{children:s})})}},785:(e,o,n)=>{n.d(o,{A:()=>v});var t=n(6540),c=n(2303),s=n(4164),a=n(6058),l=n(7559),i=n(4291);const r={codeBlockContainer:"codeBlockContainer_APcc"};var d=n(4848);function u(e){let{as:o,...n}=e;const t=(0,a.A)(),c=(0,i.M$)(t);return(0,d.jsx)(o,{...n,style:c,className:(0,s.A)(n.className,r.codeBlockContainer,l.G.common.codeBlock)})}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function m(e){let{children:o,className:n}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,s.A)(p.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:p.codeBlockLines,children:o})})}var g=n(6342),h=n(6591),b=n(1765);const x={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function B(e){let{line:o,classNames:n,showLineNumbers:t,getLineProps:c,getTokenProps:a}=e;1===o.length&&"\n"===o[0].content&&(o[0].content="");const l=c({line:o,className:(0,s.A)(n,t&&x.codeLine)}),i=o.map(((e,o)=>(0,d.jsx)("span",{...a({token:e})},o)));return(0,d.jsxs)("span",{...l,children:[t?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:x.codeLineNumber}),(0,d.jsx)("span",{className:x.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var N=n(6861),k=n(1312),j=n(1473),A=n(4115);const y={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function _(e){let{code:o,className:n}=e;const[c,a]=(0,t.useState)(!1),l=(0,t.useRef)(void 0),i=(0,t.useCallback)((()=>{(0,N.A)(o),a(!0),l.current=window.setTimeout((()=>{a(!1)}),1e3)}),[o]);return(0,t.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":c?(0,k.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,k.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,k.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,y.copyButton,c&&y.copyButtonCopied),onClick:i,children:(0,d.jsxs)("span",{className:y.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(j.A,{className:y.copyButtonIcon}),(0,d.jsx)(A.A,{className:y.copyButtonSuccessIcon})]})})}var C=n(5048);const f={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function w(e){let{className:o,onClick:n,isEnabled:t}=e;const c=(0,k.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",o,t&&f.wordWrapButtonEnabled),"aria-label":c,title:c,children:(0,d.jsx)(C.A,{className:f.wordWrapButtonIcon,"aria-hidden":"true"})})}function L(e){let{children:o,className:n="",metastring:t,title:c,showLineNumbers:l,language:r}=e;const{prism:{defaultLanguage:m,magicComments:x}}=(0,g.p)(),N=function(e){return e?.toLowerCase()}(r??(0,i.Op)(n)??m),k=(0,a.A)(),j=(0,h.f)(),A=(0,i.wt)(t)||c,{lineClassNames:y,code:C}=(0,i.Li)(o,{metastring:t,language:N,magicComments:x}),f=l??(0,i._u)(t);return(0,d.jsxs)(u,{as:"div",className:(0,s.A)(n,N&&!n.includes(`language-${N}`)&&`language-${N}`),children:[A&&(0,d.jsx)("div",{className:`code-title-container ${p.codeBlockTitle}`,children:(0,d.jsx)("div",{className:"code-title",children:A})}),(0,d.jsxs)("div",{className:p.codeBlockContent,children:[(0,d.jsx)(b.f4,{theme:k,code:C,language:N??"text",children:e=>{let{className:o,style:n,tokens:t,getLineProps:c,getTokenProps:a}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:j.codeBlockRef,className:(0,s.A)(o,p.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,s.A)(p.codeBlockLines,f&&p.codeBlockLinesWithNumbering),children:t.map(((e,o)=>(0,d.jsx)(B,{line:e,getLineProps:c,getTokenProps:a,classNames:y[o],showLineNumbers:f},o)))})})}}),(0,d.jsxs)("div",{className:p.buttonGroup,children:[(j.isEnabled||j.isCodeScrollable)&&(0,d.jsx)(w,{className:p.codeButton,onClick:()=>j.toggle(),isEnabled:j.isEnabled}),(0,d.jsx)(_,{className:p.codeButton,code:C})]})]})]})}function v(e){let{children:o,...n}=e;const s=(0,c.A)(),a=function(e){return t.Children.toArray(e).some((e=>(0,t.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(o),l="string"==typeof a?L:m;return(0,d.jsx)(l,{...n,children:a},String(s))}},1504:(e,o,n)=>{n.d(o,{A:()=>s});n(6540);var t=n(2857),c=n(4848);function s(e){return(0,c.jsx)("div",{className:"prose max-w-full",children:(0,c.jsx)(t.A,{...e})})}}}]);