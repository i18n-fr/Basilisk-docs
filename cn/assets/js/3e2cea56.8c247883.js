(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(7),a=(n(0),n(91)),o=n(92),c={id:"identity",title:"Set your Identity"},s={unversionedId:"identity",id:"identity",isDocsHomePage:!1,title:"Set your Identity",description:"Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network.",source:"@site/docs/identity.md",slug:"/identity",permalink:"/cn/identity",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/identity.md",version:"current",sidebar:"sidebar",previous:{title:"\u6210\u4e3a\u9a8c\u8bc1\u4eba",permalink:"/cn/start_validating"},next:{title:"\u8fde\u63a5\u5230\u672c\u5730\u8282\u70b9",permalink:"/cn/polkadotjs_apps_local"}},l=[{value:"01 Set identity",id:"01-set-identity",children:[]},{value:"02 Submit your identity for verification",id:"02-verify-identity",children:[]},{value:"03 Outcome of the verification procedure",id:"03-verification-outcome",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you are participating as a HydraDX validator we ",Object(a.b)("strong",{parentName:"p"},"highly recommend")," that you both set your identity and undergo the verification process. Verified validators appear more trustworthy and attract more nominations, thereby increasing their chances to be included in the set of active validators."))),Object(a.b)("h2",{id:"01-set-identity"},"01 Set identity"),Object(a.b)("p",null,"To set your identity, open Polkadot/apps (connected to ",Object(a.b)("em",{parentName:"p"},"HydraDX Snakenet")," network) and navigate to ",Object(a.b)("em",{parentName:"p"},"My accounts"),". Alternatively, you can follow this link:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts")),Object(a.b)("p",null,"On the accounts page, locate the account holding your bonded HDX tokens. After that, click on the three dots next to the account (on the right side) and select ",Object(a.b)("em",{parentName:"p"},"Set on-chain identity"),"."),Object(a.b)("img",{alt:"authorize",src:Object(o.a)("/identity/set-identity-1.jpg")}),Object(a.b)("p",null,"You will see a popup called ",Object(a.b)("em",{parentName:"p"},"register identity"),". Here, you can enter the following information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"legal name"),Object(a.b)("li",{parentName:"ul"},"email"),Object(a.b)("li",{parentName:"ul"},"web address"),Object(a.b)("li",{parentName:"ul"},"twitter"),Object(a.b)("li",{parentName:"ul"},"riot name (in case you are using Matrix messaging)")),Object(a.b)("p",null,"In the last field of the popup, you can see the amount of HDX you need to deposit to store your identity information. You will receive this deposit back once you decide to clear your identity at a later point."),Object(a.b)("img",{alt:"authorize",src:Object(o.a)("/identity/set-identity-2.jpg")}),Object(a.b)("p",null,"After filling out the information, click on ",Object(a.b)("em",{parentName:"p"},"Set Identity")," and sign the transaction using the Polkadot.js browser extension. Once the transaction is confirmed, your identity is set."),Object(a.b)("h2",{id:"02-verify-identity"},"02 Submit your identity for verification"),Object(a.b)("p",null,"After you have set your identity, you can submit it to the network registrars for verification. To do so, open Polkadot/apps and navigate to ",Object(a.b)("em",{parentName:"p"},"Developer")," > ",Object(a.b)("em",{parentName:"p"},"Extrinsics"),". Alternatively, you can follow this link:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics")),Object(a.b)("p",null,"After selecting the relevant HydraDX account from the last step, you need to fill out the following information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"extrinsic"),": identity"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"action"),": requestJudgment"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"reg_index"),": here you need to enter the ID of the registrar that you choose to carry out the verification.",Object(a.b)("br",{parentName:"li"}),"HydraDX has 2 registrars: Simon Kraus - HydraSik (ID: ",Object(a.b)("strong",{parentName:"li"},"0"),") and Jimmy Tudeski - stakenode (ID: ",Object(a.b)("strong",{parentName:"li"},"1"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"max_fee"),": here you need to enter the maximum fee in HDX that you are willing to pay to the registrar for the verification. Only registrars with a fee below your max_fee will be eligible to carry out the verification.")),Object(a.b)("p",null,"To submit your verification request, click on ",Object(a.b)("em",{parentName:"p"},"Submit Transaction")," and sign the transaction."),Object(a.b)("img",{alt:"authorize",src:Object(o.a)("/identity/set-identity-3.jpg")}),Object(a.b)("p",null,"Please note that the process of identity verification may take some time to complete. To see the status of your request, navigate to ",Object(a.b)("strong",{parentName:"p"},"My accounts")," and hover the section displaying your identity - you will see a popup showing the current status."),Object(a.b)("h2",{id:"03-verification-outcome"},"03 Outcome of the verification procedure"),Object(a.b)("p",null,"After processing your verification request, the registrar will submit one of the following judgments which will become visible in your identity status:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Unknown")," - default value, no judgment has been made yet."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Reasonable")," - the provided information appears reasonable, however no in-depth checks were made."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"KnownGood")," - the information is correct."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OutOfDate")," - the information was correct in the past but it is now out of date."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"LowQuality")," - the information is unprecise but it can be fixed by updating it."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Erroneous")," - the provided information is wrong and might indicate a malicious intent.")))}d.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var i=n(16),r=n(93);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},93:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))}}]);