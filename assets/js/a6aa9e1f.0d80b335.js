"use strict";(self.webpackChunkadventures_on_nexus=self.webpackChunkadventures_on_nexus||[]).push([[89],{8665:function(e,a,t){t.d(a,{Z:function(){return E}});var r=t(3366),l=t(7294),n=t(6010),i=t(4814),s=t(9960),m="sidebar_q+wC",o="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",d="sidebarItem_cjdF",g="sidebarItemLink_zyXk",p="sidebarItemLinkActive_wcJs",u=t(5999);function v(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},a.title),l.createElement("ul",{className:c},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))}))))}var b=["sidebar","toc","children"];var E=function(e){var a=e.sidebar,t=e.toc,s=e.children,m=(0,r.Z)(e,b),o=a&&a.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:a})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),t&&l.createElement("div",{className:"col col--2"},t))))}},2754:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var r=t(7294),l=t(2263),n=t(8665),i=t(8561),s=t(9960),m=t(5999);var o=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(2822);var d=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,d=a.blogDescription,g=a.blogTitle,p="/"===a.permalink?m:g;return r.createElement(n.Z,{title:p,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a}))}},8561:function(e,a,t){t.d(a,{Z:function(){return N}});var r=t(7294),l=t(6010),n=t(3905),i=t(5999),s=t(9960),m=t(4996),o=t(2822),c=t(7707),d=t(6753),g="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n",v=t(8727),b="image_9q7L";var E=function(e){var a=e.author,t=a.name,l=a.title,n=a.url,i=a.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:b,src:i,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},h="authorCol_8c0z";function _(e){var a=e.authors,t=e.assets;return 0===a.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},a.map((function(e,a){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",h),key:a},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(n=t.authorsImageUrls[a])?n:e.imageURL})}))})))}var N=function(e){var a,t,b,E,h=(b=(0,o.c2)().selectMessage,function(e){var a=Math.ceil(e);return b(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),N=(0,m.C)().withBaseUrl,f=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,I=void 0!==w&&w,L=P.date,x=P.formattedDate,y=P.permalink,M=P.tags,C=P.readingTime,U=P.title,A=P.editUrl,B=P.authors,R=null!=(a=k.image)?a:Z.image,D=!I&&T,F=M.length>0;return r.createElement("article",{className:I?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=I?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:g,itemProp:"headline"},I?U:r.createElement(s.Z,{itemProp:"url",to:y},U)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},x),void 0!==C&&r.createElement(r.Fragment,null," \xb7 ",h(C))),r.createElement(_,{authors:B,assets:k}))),R&&r.createElement("meta",{itemProp:"image",content:N(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},f)),(F||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[u]=I,t))},F&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":D})},r.createElement(v.Z,{tags:M})),I&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:A})),D&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":F})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+U},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}}}]);