this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["stock-filter"]=function(e){function t(t){for(var c,l,s=t[0],a=t[1],i=t[2],b=0,d=[];b<s.length;b++)l=s[b],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(c=!1)}c&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},o={45:0,1:0},r=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=a;return r.push([410,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wc.wcBlocksData},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0);const o=Object(c.createContext)({}),r=()=>{const{wrapper:e}=Object(c.useContext)(o);return t=>{e&&e.current&&(e.current.hidden=!t)}}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(13);function o(e,t){const n=Object(c.useRef)();return Object(c.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(10),o=n(7),r=n(0),l=n(40),s=n(144);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:i={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(r.useRef)({results:[],isLoading:!0}),d=Object(l.a)(i),p=Object(l.a)(a),f=Object(s.a)(),O=Object(o.useSelect)(e=>{if(!u)return null;const o=e(c.COLLECTIONS_STORE_KEY),r=[t,n,d,p],l=o.getCollectionError(...r);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(l)}return{results:o.getCollection(...r),isLoading:!o.hasFinishedResolution("getCollection",r)}},[t,n,p,d,u]);return null!==O&&(b.current=O),b.current}},11:function(e,t){e.exports=window.wp.compose},112:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(28);n(278),t.a=e=>{let{name:t,count:n}=e;return Object(c.createElement)(c.Fragment,null,t,null!==n&&Number.isFinite(n)&&Object(c.createElement)(r.a,{label:n.toString(),screenReaderLabel:Object(o.sprintf)(
/* translators: %s number of products. */
Object(o._n)("%s product","%s products",n,"woocommerce"),n),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},12:function(e,t){e.exports=window.wp.primitives},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0),o=n(1),r=n(9),l=n(7),s=n(3),a=n(5);const i=e=>{let{clientId:t,setAttributes:n,filterType:i,attributes:u}=e;const{replaceBlock:b}=Object(l.useDispatch)("core/block-editor"),{heading:d,headingLevel:p}=u;if(Object(l.useSelect)(e=>{const{getBlockParentsByBlockName:n}=e("core/block-editor");return n(t,"woocommerce/filter-wrapper").length>0},[t])||!i)return null;const f=[Object(c.createElement)(s.Button,{key:"convert",onClick:()=>{const e=[Object(r.createBlock)("woocommerce/"+i,{...u,heading:""})];d&&""!==d&&e.unshift(Object(r.createBlock)("core/heading",{content:d,level:null!=p?p:2})),b(t,Object(r.createBlock)("woocommerce/filter-wrapper",{heading:d,filterType:i},[...e])),n({heading:"",lock:{remove:!0}})},variant:"primary"},Object(o.__)("Upgrade block","woocommerce"))];return Object(c.createElement)(a.Warning,{actions:f},Object(o.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woocommerce"))}},124:function(e,t,n){"use strict";var c=n(0),o=n(5),r=n(11),l=n(1);n(168),t.a=Object(r.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:r,heading:s,instanceId:a}=e;const i="h"+n;return Object(c.createElement)(i,{className:t},Object(c.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(l.__)("Block title","woocommerce")),Object(c.createElement)(o.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:s,onChange:r}))})},125:function(e,t,n){"use strict";var c=n(0);n(169),t.a=e=>{let{children:t}=e;return Object(c.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},126:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(4),l=n.n(r),s=n(28);n(170),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(o.__)("Reset","woocommerce"),onClick:r,screenReaderLabel:a=Object(o.__)("Reset filter","woocommerce")}=e;return Object(c.createElement)("button",{className:l()("wc-block-components-filter-reset-button",t),onClick:r},Object(c.createElement)(s.a,{label:n,screenReaderLabel:a}))}},127:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(4),l=n.n(r),s=n(28);n(171),t.a=e=>{let{className:t,isLoading:n,disabled:r,label:
/* translators: Submit button text for filters. */
a=Object(o.__)("Apply","woocommerce"),onClick:i,screenReaderLabel:u=Object(o.__)("Apply filter","woocommerce")}=e;return Object(c.createElement)("button",{type:"submit",className:l()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:r,onClick:i},Object(c.createElement)(s.a,{label:a,screenReaderLabel:u}))}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},13:function(e,t){e.exports=window.React},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(5),o=n(55),r=n(33),l=n(99);const s=e=>{if(!Object(o.b)())return{className:"",style:{}};const t=Object(r.a)(e)?e:{},n=Object(l.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const o=()=>{const[,e]=Object(c.useState)();return Object(c.useCallback)(t=>{e(()=>{throw t})},[])}},15:function(e,t){e.exports=window.wp.htmlEntities},157:function(e,t,n){"use strict";var c=n(6),o=n.n(c),r=n(0),l=n(310),s=n(4),a=n.n(s);n(198),t.a=e=>{let{className:t,style:n,suggestions:c,multiple:s=!0,saveTransform:i=(e=>e.trim().replace(/\s/g,"-")),messages:u={},validateInput:b=(e=>c.includes(e)),label:d="",...p}=e;return Object(r.createElement)("div",{className:a()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!s}),style:n},Object(r.createElement)(l.a,o()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:i,maxLength:s?void 0:1,suggestions:c,messages:u},p)))}},158:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(4),l=n.n(r),s=n(16);n(199),t.a=e=>{let{className:t,onChange:n,options:r=[],checked:a=[],isLoading:i=!1,isDisabled:u=!1,limit:b=10}=e;const[d,p]=Object(c.useState)(!1),f=Object(c.useMemo)(()=>[...Array(5)].map((e,t)=>Object(c.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),O=Object(c.useMemo)(()=>{const e=r.length-b;return!d&&Object(c.createElement)("li",{key:"show-more",className:"show-more"},Object(c.createElement)("button",{onClick:()=>{p(!0)},"aria-expanded":!1,"aria-label":Object(o.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(o._n)("Show %s more option","Show %s more options",e,"woocommerce"),e)},Object(o.sprintf)(
/* translators: %s number of options to reveal. */
Object(o._n)("Show %s more","Show %s more",e,"woocommerce"),e)))},[r,b,d]),m=Object(c.useMemo)(()=>d&&Object(c.createElement)("li",{key:"show-less",className:"show-less"},Object(c.createElement)("button",{onClick:()=>{p(!1)},"aria-expanded":!0,"aria-label":Object(o.__)("Show less options","woocommerce")},Object(o.__)("Show less","woocommerce"))),[d]),g=Object(c.useMemo)(()=>{const e=r.length>b+5;return Object(c.createElement)(c.Fragment,null,r.map((t,o)=>Object(c.createElement)(c.Fragment,{key:t.value},Object(c.createElement)("li",e&&!d&&o>=b&&{hidden:!0},Object(c.createElement)(s.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:a.includes(t.value),onChange:()=>{n(t.value)},disabled:u})),e&&o===b-1&&O)),e&&m)},[r,n,a,d,b,m,O,u]),j=l()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":i},t);return Object(c.createElement)("ul",{className:j},i?f:g)}},16:function(e,t){e.exports=window.wc.blocksCheckout},168:function(e,t){},169:function(e,t){},17:function(e,t){e.exports=window.wp.url},170:function(e,t){},171:function(e,t){},177:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"link":true,"__experimentalDefaultControls":{"text":true}},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},198:function(e,t){},199:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},20:function(e,t,n){"use strict";n.d(t,"o",(function(){return r})),n.d(t,"m",(function(){return l})),n.d(t,"l",(function(){return s})),n.d(t,"n",(function(){return a})),n.d(t,"j",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return O})),n.d(t,"h",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"i",(function(){return j})),n.d(t,"b",(function(){return w}));var c,o=n(2);const r=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=r.pluginUrl+"images/",s=r.pluginUrl+"build/",a=r.buildPhase,i=null===(c=o.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=o.STORE_PAGES.checkout.id,b=o.STORE_PAGES.checkout.permalink,d=o.STORE_PAGES.privacy.permalink,p=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),f=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),O=o.STORE_PAGES.cart.permalink,m=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("shippingCountries",{})),g=Object(o.getSetting)("allowedCountries",{}),j=Object(o.getSetting)("shippingStates",{}),w=Object(o.getSetting)("allowedStates",{})},240:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var c=n(17),o=n(2),r=n(128);const l=Object(o.getSettingWithCoercion)("is_rendering_php_template",!1,r.a),s="query_type_",a="filter_";function i(e){return window?Object(c.getQueryArg)(window.location.href,e):null}function u(e){l?window.location.href=e:window.history.replaceState({},"",e)}},26:function(e,t){e.exports=window.wp.isShallowEqual},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),o=n(256),r=n(8),l=n(40),s=n(33),a=n(51),i=n(108),u=n(47);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:d,queryState:p,productIds:f}=e,O=Object(u.a)();O+="-collection-data";const[m]=Object(a.a)(O),[g,j]=Object(a.b)("calculate_attribute_counts",[],O),[w,k]=Object(a.b)("calculate_price_range",null,O),[_,h]=Object(a.b)("calculate_stock_status_counts",null,O),[v,y]=Object(a.b)("calculate_rating_counts",null,O),E=Object(l.a)(t||{}),S=Object(l.a)(n),x=Object(l.a)(b),C=Object(l.a)(d);Object(c.useEffect)(()=>{"object"==typeof E&&Object.keys(E).length&&(g.find(e=>Object(s.b)(E,"taxonomy")&&e.taxonomy===E.taxonomy)||j([...g,E]))},[E,g,j]),Object(c.useEffect)(()=>{w!==S&&void 0!==S&&k(S)},[S,k,w]),Object(c.useEffect)(()=>{_!==x&&void 0!==x&&h(x)},[x,h,_]),Object(c.useEffect)(()=>{v!==C&&void 0!==C&&y(C)},[C,y,v]);const[T,N]=Object(c.useState)(!1),[R]=Object(o.a)(T,200);T||N(!0);const A=Object(c.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(r.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(m),[m]);return Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(r.isEmpty)(f)&&{include:f},...A},shouldSelect:R})}},278:function(e,t){},28:function(e,t,n){"use strict";var c=n(0),o=n(4),r=n.n(o);t.a=e=>{let t,{label:n,screenReaderLabel:o,wrapperElement:l,wrapperProps:s={}}=e;const a=null!=n,i=null!=o;return!a&&i?(t=l||"span",s={...s,className:r()(s.className,"screen-reader-text")},Object(c.createElement)(t,s,o)):(t=l||c.Fragment,a&&i&&n!==o?Object(c.createElement)(t,s,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},o)):Object(c.createElement)(t,s,n))}},3:function(e,t){e.exports=window.wp.components},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return c(e)&&t in e}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),o=n(26),r=n.n(o);function l(e){const t=Object(c.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},410:function(e,t,n){e.exports=n(489)},411:function(e,t){},412:function(e,t){},43:function(e,t){e.exports=window.wp.a11y},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0);const o=Object(c.createContext)("page"),r=()=>Object(c.useContext)(o);o.Provider},48:function(e,t){e.exports=window.wp.deprecated},489:function(e,t,n){"use strict";n.r(t);var c=n(6),o=n.n(c),r=n(0),l=n(9),s=n(79),a=n(538),i=n(4),u=n.n(i),b=n(5),d=n(1),p=n(124),f=n(3),O=n(43),m=n(544),g=n(134),j=n(40),w=n(105),k=n(51),_=n(277),h=n(2),v=n(158),y=n(127),E=n(126),S=n(125),x=n(112),C=n(157),T=n(26),N=n.n(T),R=n(15),A=n(128),P=n(33),L=n(17),B=n(240),F=n(8);const I=[{value:"preview-1",name:"In Stock",label:Object(r.createElement)(x.a,{name:"In Stock",count:3}),textLabel:"In Stock (3)"},{value:"preview-2",name:"Out of stock",label:Object(r.createElement)(x.a,{name:"Out of stock",count:3}),textLabel:"Out of stock (3)"},{value:"preview-3",name:"On backorder",label:Object(r.createElement)(x.a,{name:"On backorder",count:2}),textLabel:"On backorder (2)"}];n(412);var G=n(83),M=n(177);function q(){return Math.floor(Math.random()*Date.now())}const D=e=>e.trim().replace(/\s/g,"").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,"");var Q=n(104);const U=B.a+"stock_status";var W=e=>{let{attributes:t,isEditor:n=!1}=e;const c=Object(Q.a)(),o=Object(h.getSettingWithCoercion)("is_rendering_php_template",!1,A.a),[l,a]=Object(r.useState)(!1),{outofstock:i,...b}=Object(h.getSetting)("stockStatusOptions",{}),p=n?[]:Object(h.getSettingWithCoercion)("product_ids",[],Array.isArray),f=Object(r.useRef)(Object(h.getSetting)("hideOutOfStockItems",!1)?b:{outofstock:i,...b}),T=Object(r.useMemo)(()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"filter_stock_status";const n=Object(B.d)(t);if(!n)return[];const c=Object(G.a)(n)?n.split(","):n;return Object.keys(e).filter(e=>c.includes(e))}(f.current,U),[]),[M,W]=Object(r.useState)(T),[Y,V]=Object(r.useState)(t.isPreview?I:[]),[K]=Object(r.useState)(Object.entries(f.current).map(e=>{let[t,n]=e;return{slug:t,name:n}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[J]=Object(k.a)(),[$,z]=Object(k.b)("stock_status",T),{results:H,isLoading:Z}=Object(_.a)({queryStock:!0,queryState:J,productIds:p}),X=Object(r.useCallback)(e=>Object(P.b)(H,"stock_status_counts")&&Array.isArray(H.stock_status_counts)?H.stock_status_counts.find(t=>{let{status:n,count:c}=t;return n===e&&0!==Number(c)}):null,[H]),[ee,te]=Object(r.useState)(q()),ne=Object(g.a)(t);Object(r.useEffect)(()=>{if(Z||t.isPreview)return;const e=K.map(e=>{const n=X(e.slug);if(!(n||M.includes(e.slug)||(c=e.slug,null!=J&&J.stock_status&&J.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(c)}))))return null;var c;const o=n?Number(n.count):0;return{value:e.slug,name:Object(R.decodeEntities)(e.name),label:Object(r.createElement)(x.a,{name:Object(R.decodeEntities)(e.name),count:t.showCounts?o:null}),textLabel:t.showCounts?`${Object(R.decodeEntities)(e.name)} (${o})`:Object(R.decodeEntities)(e.name)}}).filter(e=>!!e);V(e),te(q())},[t.showCounts,t.isPreview,Z,X,M,J.stock_status,K]);const ce="single"!==t.selectType,oe=Object(r.useCallback)(e=>{n||(e&&!o&&z(e),(e=>{if(!window)return;if(0===e.length){const e=Object(L.removeQueryArgs)(window.location.href,U);return void(e!==window.location.href&&Object(B.c)(e))}const t=Object(L.addQueryArgs)(window.location.href,{[U]:e.join(",")});t!==window.location.href&&Object(B.c)(t)})(e))},[n,z,o]);Object(r.useEffect)(()=>{t.showFilterButton||oe(M)},[t.showFilterButton,M,oe]);const re=Object(r.useMemo)(()=>$,[$]),le=Object(j.a)(re),se=Object(w.a)(le);Object(r.useEffect)(()=>{N()(se,le)||N()(M,le)||W(le)},[M,le,se]),Object(r.useEffect)(()=>{l||(z(T),a(!0))},[z,l,a,T]);const ae=Object(r.useCallback)(e=>{const t=e=>{const t=Y.find(t=>t.value===e);return t?t.name:null},n=e=>{let{filterAdded:n,filterRemoved:c}=e;const o=n?t(n):null,r=c?t(c):null;o?Object(O.speak)(Object(d.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(d.__)("%s filter added.","woocommerce"),o)):r&&Object(O.speak)(Object(d.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(d.__)("%s filter removed.","woocommerce"),r))},c=M.includes(e);if(!ce){const t=c?[]:[e];return n(c?{filterRemoved:e}:{filterAdded:e}),void W(t)}if(c){const t=M.filter(t=>t!==e);return n({filterRemoved:e}),void W(t)}const o=[...M,e].sort();n({filterAdded:e}),W(o)},[M,ce,Y]);if(!Z&&0===Y.length)return c(!1),null;const ie="h"+t.headingLevel,ue=!t.isPreview&&!f.current||0===Y.length,be=!t.isPreview&&Z;if(!Object(h.getSettingWithCoercion)("has_filterable_products",!1,A.a))return c(!1),null;const de=Object(r.createElement)(ie,{className:"wc-block-stock-filter__title"},t.heading),pe=ue?Object(r.createElement)(S.a,null,de):de;return c(!0),Object(r.createElement)(r.Fragment,null,!n&&t.heading&&pe,Object(r.createElement)("div",{className:u()("wc-block-stock-filter","style-"+t.displayStyle,{"is-loading":ue})},"dropdown"===t.displayStyle?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(C.a,{key:ee,className:u()(ne.className,{"single-selection":!ce,"is-loading":ue}),style:{...ne.style},suggestions:Y.filter(e=>!M.includes(e.value)).map(e=>e.value),disabled:ue,placeholder:Object(d.__)("Select stock status","woocommerce"),onChange:e=>{!ce&&e.length>1&&(e=e.slice(-1)),e=e.map(e=>{const t=Y.find(t=>t.value===e);return t?t.value:e});const t=Object(F.difference)(e,M);if(1===t.length)return ae(t[0]);const n=Object(F.difference)(M,e);1===n.length&&ae(n[0])},value:M,displayTransform:e=>{const t=Y.find(t=>t.value===e);return t?t.textLabel:e},saveTransform:D,messages:{added:Object(d.__)("Stock filter added.","woocommerce"),removed:Object(d.__)("Stock filter removed.","woocommerce"),remove:Object(d.__)("Remove stock filter.","woocommerce"),__experimentalInvalid:Object(d.__)("Invalid stock filter.","woocommerce")}}),ce&&Object(r.createElement)(s.a,{icon:m.a,size:30})):Object(r.createElement)(v.a,{className:"wc-block-stock-filter-list",options:Y,checked:M,onChange:ae,isLoading:ue,isDisabled:be})),Object(r.createElement)("div",{className:"wc-block-stock-filter__actions"},M.length>0&&!ue&&Object(r.createElement)(E.a,{onClick:()=>{W([]),oe([])},screenReaderLabel:Object(d.__)("Reset stock filter","woocommerce")}),t.showFilterButton&&Object(r.createElement)(y.a,{className:"wc-block-stock-filter__button",isLoading:ue,disabled:ue||be,onClick:()=>oe(M)})))},Y=(n(411),n(123)),V=Object(f.withSpokenMessages)(e=>{let{clientId:t,attributes:n,setAttributes:c}=e;const{className:o,heading:l,headingLevel:s,showCounts:a,showFilterButton:i,selectType:O,displayStyle:m}=n,g=Object(b.useBlockProps)({className:u()("wc-block-stock-filter",o)});return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(b.InspectorControls,{key:"inspector"},Object(r.createElement)(f.PanelBody,{title:Object(d.__)("Display Settings","woocommerce")},Object(r.createElement)(f.ToggleControl,{label:Object(d.__)("Display product count","woocommerce"),checked:a,onChange:()=>c({showCounts:!a})}),Object(r.createElement)(f.__experimentalToggleGroupControl,{label:Object(d.__)("Allow selecting multiple options?","woocommerce"),value:O||"multiple",onChange:e=>c({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"multiple",label:Object(d.__)("Multiple","woocommerce")}),Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"single",label:Object(d.__)("Single","woocommerce")})),Object(r.createElement)(f.__experimentalToggleGroupControl,{label:Object(d.__)("Display Style","woocommerce"),value:m,onChange:e=>c({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"list",label:Object(d.__)("List","woocommerce")}),Object(r.createElement)(f.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(d.__)("Dropdown","woocommerce")})),Object(r.createElement)(f.ToggleControl,{label:Object(d.__)("Show 'Apply filters' button","woocommerce"),help:i?Object(d.__)("Products will only update when the button is clicked.","woocommerce"):Object(d.__)("Products will update as soon as attributes are selected.","woocommerce"),checked:i,onChange:e=>c({showFilterButton:e})}))),Object(r.createElement)(Y.a,{clientId:t,attributes:n,setAttributes:c,filterType:"stock-filter"}),Object(r.createElement)("div",g,l&&Object(r.createElement)(p.a,{className:"wc-block-stock-filter__title",headingLevel:s,heading:l,onChange:e=>c({heading:e})}),Object(r.createElement)(f.Disabled,null,Object(r.createElement)(W,{attributes:n,isEditor:!0}))))});const K={heading:{type:"string",default:Object(d.__)("Filter by stock status","woocommerce")}};Object(l.registerBlockType)(M,{icon:{src:Object(r.createElement)(s.a,{icon:a.a,className:"wc-block-editor-components-block-icon"})},attributes:{...M.attributes,...K},edit:V,save(e){let{attributes:t}=e;const{className:n,showCounts:c,heading:l,headingLevel:s,showFilterButton:a}=t,i={"data-show-counts":c,"data-heading":l,"data-heading-level":s};return a&&(i["data-show-filter-button"]=a),Object(r.createElement)("div",o()({},b.useBlockProps.save({className:u()("is-loading",n)}),i),Object(r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-stock-filter__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var c=n(10),o=n(7),r=n(0),l=n(26),s=n.n(l),a=n(40),i=n(105),u=n(47);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(o.useSelect)(t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(o.useDispatch)(c.QUERY_STATE_STORE_KEY);return[n,Object(r.useCallback)(t=>{l(e,t)},[e,l])]},d=(e,t,n)=>{const l=Object(u.a)();n=n||l;const s=Object(o.useSelect)(o=>o(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:a}=Object(o.useDispatch)(c.QUERY_STATE_STORE_KEY);return[s,Object(r.useCallback)(t=>{a(n,e,t)},[n,e,a])]},p=(e,t)=>{const n=Object(u.a)();t=t||n;const[c,o]=b(t),l=Object(a.a)(c),d=Object(a.a)(e),p=Object(i.a)(d),f=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{s()(p,d)||(o(Object.assign({},l,d)),f.current=!0)},[l,d,p,o]),f.current?[c,o]:[e,o]}},54:function(e,t){e.exports=window.wp.keycodes},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var c=n(9),o=n(20);const r=(e,t)=>{if(o.n>2)return Object(c.registerBlockType)(e,t)},l=()=>o.n>2,s=()=>o.n>1},66:function(e,t){e.exports=window.wp.dom},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.lodash},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"string"==typeof e},9:function(e,t){e.exports=window.wp.blocks},95:function(e,t){e.exports=window.wp.warning},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(83),o=n(33);const r=e=>Object(c.a)(e)?JSON.parse(e)||{}:Object(o.a)(e)?e:{}}});