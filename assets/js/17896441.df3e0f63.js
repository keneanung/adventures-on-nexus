"use strict";(self.webpackChunkadventures_on_nexus=self.webpackChunkadventures_on_nexus||[]).push([[918],{8943:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var n=a(7294),l=a(6010),s=a(3783),i=a(9960),o=a(5999);var r=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(2263),d=a(907),m=a(2822);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.versionMetadata,s=(0,c.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(i).savePreferredVersionName,r=(0,d.Jo)(i),u=r.latestDocSuggestion,g=r.latestVersionSuggestion,b=null!=u?u:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:g.label,to:b.path,onClick:function(){return o(g.name)}})))}var b=function(e){var t=e.versionMetadata;return t.banner?n.createElement(g,{versionMetadata:t}):n.createElement(n.Fragment,null)},E=a(1217);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(6753),k=a(8727),L="lastUpdated_mt2f";function Z(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(k.Z,e)))}function U(e){var t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(_.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",L)},(a||s)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function C(e){var t=e.content.metadata,a=t.editUrl,s=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,r=t.tags,c=r.length>0,d=!!(a||s||o);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(Z,{tags:r}),d&&n.createElement(U,{editUrl:a,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:i})):n.createElement(n.Fragment,null)}var T=a(1575),y="tocCollapsible_aw-L",A="tocCollapsibleButton_zr6a",M="tocCollapsibleContent_0dom",w="tocCollapsibleExpanded_FSiv",x=a(5002);function H(e){var t,a=e.toc,s=e.className,i=e.minHeadingLevel,r=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(y,(t={},t[w]=!d,t),s)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",A),onClick:u},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:M,collapsed:d},n.createElement(x.Z,{toc:a,minHeadingLevel:i,maxHeadingLevel:r})))}var B=a(9649),V="docItemContainer_oiyr",F="docItemCol_zHA2",S="tocMobile_Tx6Y";function D(e){var t,a=e.content,i=e.versionMetadata,o=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,p=c.hide_table_of_contents,g=c.toc_min_heading_level,h=c.toc_max_heading_level,f=o.description,N=o.title,_=!v&&void 0===a.contentTitle,k=(0,s.Z)(),L=!p&&a.toc&&a.toc.length>0,Z=L&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:N,description:f,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[F]=!p,t))},n.createElement(b,{versionMetadata:i}),n.createElement("div",{className:V},n.createElement("article",null,i.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",i.label),L&&n.createElement(H,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:(0,l.Z)(m.kM.docs.docTocMobile,S)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},_&&n.createElement(B.N,null,N),n.createElement(a,null)),n.createElement(C,e)),n.createElement(r,{metadata:o}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:m.kM.docs.docTocDesktop}))))}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),s=a(7294),i=a(6010),o=a(5002),r="tableOfContents_vrFS",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return s.createElement("div",{className:(0,i.Z)(r,"thin-scrollbar",t)},s.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),s=a(7294),i=a(2822),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?s.createElement("ul",{className:l?void 0:a},t.map((function(e){return s.createElement("li",{key:e.id},s.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),s.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,p=e.minHeadingLevel,g=e.maxHeadingLevel,b=(0,l.Z)(e,o),E=(0,i.LU)(),h=null!=p?p:E.tableOfContents.minHeadingLevel,f=null!=g?g:E.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:f}),_=(0,s.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:h,maxHeadingLevel:f}}),[m,v,h,f]);return(0,i.Si)(_),s.createElement(r,(0,n.Z)({toc:N,className:c,linkClassName:m},b))}}}]);