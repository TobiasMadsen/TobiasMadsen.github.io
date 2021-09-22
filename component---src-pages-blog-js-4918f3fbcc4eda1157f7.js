"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[7],{8131:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var r=a(7294),n=a(7361),o=a.n(n),i=a(5414),s=a(6422),c=a(7903),d=a(5444),m=a(7462),l=a(3366),u=a(5505),f=a(600),p=a(1294),g=a(2371),v=a(8953),Z=a(2717),C=a(5495);function M(e){return(0,Z.Z)("MuiCard",e)}(0,C.Z)("MuiCard",["root"]);var b=a(5893),h=["className","raised"],k=(0,p.ZP)(v.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),N=r.forwardRef((function(e,t){var a=(0,g.Z)({props:e,name:"MuiCard"}),r=a.className,n=a.raised,o=void 0!==n&&n,i=(0,l.Z)(a,h),s=(0,m.Z)({},a,{raised:o}),c=function(e){var t=e.classes;return(0,f.Z)({root:["root"]},M,t)}(s);return(0,b.jsx)(k,(0,m.Z)({className:(0,u.Z)(c.root,r),elevation:o?8:void 0,ref:t,ownerState:s},i))}));function w(e){return(0,Z.Z)("MuiCardContent",e)}(0,C.Z)("MuiCardContent",["root"]);var x=["className","component"],E=(0,p.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),R=r.forwardRef((function(e,t){var a=(0,g.Z)({props:e,name:"MuiCardContent"}),r=a.className,n=a.component,o=void 0===n?"div":n,i=(0,l.Z)(a,x),s=(0,m.Z)({},a,{component:o}),c=function(e){var t=e.classes;return(0,f.Z)({root:["root"]},w,t)}(s);return(0,b.jsx)(E,(0,m.Z)({as:o,className:(0,u.Z)(c.root,r),ownerState:s,ref:t},i))}));function y(e){return(0,Z.Z)("MuiCardMedia",e)}(0,C.Z)("MuiCardMedia",["root","media","img"]);var I=["children","className","component","image","src","style"],S=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,r=a.isMediaComponent,n=a.isImageComponent;return[t.root,r&&t.media,n&&t.img]}})((function(e){var t=e.ownerState;return(0,m.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),P=["video","audio","picture","iframe","img"],j=["picture","img"],_=r.forwardRef((function(e,t){var a=(0,g.Z)({props:e,name:"MuiCardMedia"}),r=a.children,n=a.className,o=a.component,i=void 0===o?"div":o,s=a.image,c=a.src,d=a.style,p=(0,l.Z)(a,I),v=-1!==P.indexOf(i),Z=!v&&s?(0,m.Z)({backgroundImage:'url("'.concat(s,'")')},d):d,C=(0,m.Z)({},a,{component:i,isMediaComponent:v,isImageComponent:-1!==j.indexOf(i)}),M=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,f.Z)(a,y,t)}(C);return(0,b.jsx)(S,(0,m.Z)({className:(0,u.Z)(M.root,n),as:i,role:!v&&s?"image":void 0,ref:t,style:Z,ownerState:C,src:v?s||c:void 0},p,{children:r}))})),B=(0,s.Z)({container:{columnCount:2,columnGap:"3%",columnWidth:"400px"},blogPostCard:{width:"100%",breakInside:"avoid",padding:"20px",marginBottom:"35px"},title:{margin:"0.5rem 0.0rem",font:"200 22px montserrat, sans-serif"},titleContainer:{display:"flex",alignItems:"baseline",justifyContent:"space-between"},excerpt:{font:"400 18px cormorant garamond, sans-serif",color:"black"},date:{font:"200 12px montserrat, sans-serif",color:"black"},media:{height:140}}),O=function(e){var t=B(),a=o()(e,".data.site.siteMetadata.title"),n=o()(e,"data.allMarkdownRemark.edges");return r.createElement(c.Z,null,r.createElement(i.Z,{title:a}),r.createElement("div",{className:t.container},n.map((function(e){var a=e.node,n=o()(a,"frontmatter.title")||a.fields.slug,i="../"+a.frontmatter.date+a.fields.slug,s=a.excerpt;return r.createElement(N,{key:n,className:t.blogPostCard},r.createElement(d.Link,{to:i},a.frontmatter.image?r.createElement(_,{className:t.media,image:a.frontmatter.image.childImageSharp.fluid.src,title:n}):null,r.createElement(R,null,r.createElement("div",{className:t.titleContainer},r.createElement("h2",{className:t.title},n),r.createElement("p",{className:t.date},a.frontmatter.date)),r.createElement("p",{className:t.excerpt},s))))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-4918f3fbcc4eda1157f7.js.map