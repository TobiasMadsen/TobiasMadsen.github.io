(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return E});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(192),s=n.n(l),c=n(163),m=n(193),u=n.n(m),d=n(159),p=n.n(d),f=n(238),h=n(161),g=(n(185),n(186),n(187),n(247),n(248),n(166)),y=n(206),v=n.n(y),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.props.data.markdownRemark,n=u()(this.props,"data.site.siteMetadata.title"),a=t.excerpt,r=null,i=null;this.props.pageContext&&(r=this.props.pageContext.previous,i=this.props.pageContext.next),console.log(r);var l={title:t.frontmatter.title};return o.a.createElement(g.a,null,o.a.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:t.frontmatter.title+" | "+n}),o.a.createElement("div",{className:e.postContainer},o.a.createElement("h1",{className:e.title},t.frontmatter.title),o.a.createElement("h2",{className:e.subtitle},t.frontmatter.subtitle),o.a.createElement("div",{className:e.contentContainer},o.a.createElement("div",{className:e.leftSideContent},o.a.createElement("img",{src:v.a,alt:"Tobias Madsen",style:{marginRight:Object(h.a)(.5),marginBottom:0,width:"80%"}})),o.a.createElement("div",{className:e.content},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),o.a.createElement("div",{className:e.rightSideContent})),o.a.createElement("ul",{className:e.nextPrevPost},r&&o.a.createElement("li",null,o.a.createElement(c.Link,{to:""+r.frontmatter.date+r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i&&o.a.createElement("li",null,o.a.createElement(c.Link,{to:""+i.frontmatter.date+i.fields.slug,rel:"next"},i.frontmatter.title," →"))),o.a.createElement("hr",{style:{marginTop:Object(h.a)(1),marginBottom:Object(h.a)(1)}}),o.a.createElement(f.DiscussionEmbed,{shortname:"tobiasmadsen",config:l})))},t}(o.a.Component),x=p()({title:{margin:"2.0rem, 2.0rem",font:"200 85px playfair display,helvetica,arial"},subtitle:{margin:"2.0rem, 2.0rem",font:"200 22px montserrat, sans-serif"},content:{width:"70%",font:"400 20px cormorant garamond, sans-serif","& .katex":{fontSize:"0.85em !important"},"& .katex-display":{width:"100%",margin:"0.5em 0"},"& p":{margin:"0.0em"}},contentContainer:{display:"flex"},leftSideContent:{width:"15%"},rightSideContent:{width:"15%"},"@media (max-width: 1024px)":{title:{font:"200 8vw playfair display,helvetica,arial"},leftSideContent:{display:"none"},rightSideContent:{display:"none"},content:{width:"100%"}},postContainer:{"& h1":{margin:"0.3em 0em"},"& h2":{margin:"0.3em 0em 1.5em 0em"},"& h4":{margin:"1.5em 0.0em 0.5em 0em"},"& blockquote":{display:"block",borderWidth:"2px 0",borderStyle:"solid",borderColor:"#eee",padding:"1.5em 0 0.5em",margin:"1.5em 0",position:"relative"},"& blockquote:before":{content:'"“"',position:"absolute",top:"0em",left:"50%",transform:"translate(-50%, -50%)",background:"#fff",width:"3rem",height:"2rem",font:"6em/1.08em 'PT Sans', sans-serif",color:"#666",textAlign:"center"}},nextPrevPost:{font:"400 1.4em cormorant garamond, sans-serif",marginTop:"20px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}})(b);t.default=x;var E="3056079478"},160:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},161:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(183),r=n.n(a),i=n(184),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var s=l.rhythm;l.scale},163:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(150),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(160),m=n.n(c);n.d(t,"PageRenderer",function(){return m.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},164:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(54),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},166:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=(n(188),n(150)),s=n.n(l),c=n(159),m=n.n(c),u=(n(189),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement("div",{className:e.linkContainer},o.a.createElement(s.a,{to:"/",className:e.link},"HOME"),o.a.createElement(s.a,{to:"/blog",className:e.link},"BLOG")),o.a.createElement("hr",{className:e.horizontalLine}))},t}(i.Component)),d=m()({horizontalLine:{color:"lightgray",backgroundColor:"lightgray",height:"1px",marginTop:"20px"},linkContainer:{width:"100%",display:"flex",justifyContent:"space-evenly"},link:{font:"400 12px open sans,helvetica,arial",color:"gray",fontFeatureSettings:"normal",textDecoration:"none",boxShadow:"none","&:hover":{color:"black",textDecoration:"inherit"}}})(u),p=n(161),f={container:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(44),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75)}},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.container},o.a.createElement(d,null),o.a.createElement("div",{className:"content"},this.props.children))},t}(i.Component),g=m()(f)(h);t.a=g},206:function(e,t,n){e.exports=n.p+"static/profil-9ff0ba773ca9df2c1660d4ee0281b6f6.png"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d0385492b87f6f463588.js.map