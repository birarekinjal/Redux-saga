(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(143))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(4));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return l(this,t),u(this,f(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.duration,c=e.easing,i=e.expanded,l=e.maxHeight,s=e.overflow,u=e.rootTag,f=e.uuid,d={maxHeight:l,overflow:s,transition:"max-height ".concat(a,"ms ").concat(c)};return o.default.createElement(u,{"aria-hidden":!i,"aria-labelledby":"react-sanfona-item-title-".concat(f),className:(0,r.default)("react-sanfona-item-body",n),id:"react-sanfona-item-body-".concat(f),style:d},o.default.createElement("div",{className:"react-sanfona-item-body-wrapper"},t))}}])&&s(n.prototype,a),c&&s(n,c),t}(o.Component);t.default=p,p.defaultProps={rootTag:"div"}},1253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=o(n(143)),r=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){var t=e.className,n=e.expanded,o=e.onClick,i=e.onMouseOver,l=e.rootTag,s=e.title,u=e.uuid;return"object"===c(s)?r.default.cloneElement(s,{onClick:o,id:"react-sanfona-item-title-".concat(u),"aria-controls":"react-sanfona-item-body-".concat(u)}):r.default.createElement(l,{"aria-controls":"react-sanfona-item-body-".concat(u),"aria-expanded":n,className:(0,a.default)("react-sanfona-item-title",t),id:"react-sanfona-item-title-".concat(u),onClick:o,onMouseOver:i,style:{cursor:"pointer",margin:0}},s)}i.defaultProps={rootTag:"h3"}},1544:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Accordion",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"AccordionItem",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"AccordionItemTitle",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"AccordionItemBody",{enumerable:!0,get:function(){return c.default}});var a=i(n(1545)),r=i(n(1547)),o=i(n(1253)),c=i(n(1252));function i(e){return e&&e.__esModule?e:{default:e}}},1545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(143))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(4)),c=n(1546);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,f(t).call(this,e))).state={activeItems:(0,c.getActiveItems)(e.children,e.allowMultiple)},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.children,n=e.allowMultiple;(0,c.isSame)((0,c.getChildrenActiveItems)(this.props.children),(0,c.getChildrenActiveItems)(t))||this.setState({activeItems:(0,c.getActiveItems)(t,n)})}},{key:"handleChange",value:function(e){var t=this.props,n=t.allowMultiple,a=t.children,r=t.onChange,o=t.openNextAccordionItem,c=this.state.activeItems.slice(0),i=c.indexOf(e);-1!==i?(c.splice(i,1),o&&e!==a.length-1&&c.push(e+1)):n?c.push(e):c=[e];var l={activeItems:c};this.setState(l,(function(){r&&r(l)}))}},{key:"renderItems",value:function(){var e=this,t=this.props,n=t.children,a=t.duration,r=t.easing,i=t.isHovered;if(!n)return null;var l=this.state.activeItems;return(0,c.arrayify)(n).reduce((function(t,n,c){if(n){var s=n.props,u=s.disabled,f=s.duration,d=s.easing,p=!u&&-1!==l.indexOf(c),m=e.handleChange.bind(e,c),v=o.default.cloneElement(n,{duration:f||a,easing:d||r,expanded:p,key:c,index:c,onClick:m,onMouseOver:i&&!u?m:null,ref:"item-".concat(c)});t.push(v)}return t}),[])}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=e.rootTag;return o.default.createElement(a,{className:(0,r.default)("react-sanfona",t),style:n},this.renderItems())}}])&&s(n.prototype,a),i&&s(n,i),t}(o.Component);t.default=p,p.defaultProps={activeItems:[0],allowMultiple:!1,duration:300,easing:"ease",rootTag:"div"}},1546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getChildrenActiveItems=r,t.getActiveItems=function(e,t){var n=r(e);!t&&n.length>0&&(n=n.slice(0,1));return n},t.isSame=function(e,t){return e.length===t.length&&e.every((function(e,n){return e===t[n]}))},t.arrayify=void 0;var a=function(e){return[].concat(e)};function r(e){var t=[];return a(e).filter((function(e){return e})).forEach((function(e,n){!e.props.disabled&&e.props.expanded&&t.push(n)})),t}t.arrayify=a},1547:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(143)),r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(4)),o=u(n(73)),c=u(n(380)),i=u(n(1252)),l=u(n(1253));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,h(t).call(this,e))).state={maxHeight:e.expanded?"none":0,overflow:e.expanded?"visible":"hidden"},n}var n,s,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(s=[{key:"UNSAFE_componentWillMount",value:function(){this.uuid=this.props.uuid||c.default.v4()}},{key:"componentDidMount",value:function(){this.setMaxHeight(!1)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.children,a=t.disabled,r=t.expanded;if(e.expanded!==r){if(a)return;r?this.handleExpand():this.handleCollapse()}else e.children!==n&&this.setMaxHeight(!1)}},{key:"handleExpand",value:function(){var e=this.props,t=e.index,n=e.onExpand,a=e.slug;this.setMaxHeight(!1),n&&(a?n(a,t):n(t))}},{key:"handleCollapse",value:function(){var e=this.props,t=e.index,n=e.onClose,a=e.slug;this.setMaxHeight(!0),n&&(a?n(a,t):n(t))}},{key:"setMaxHeight",value:function(e){var t=this,n=this.props,a=n.duration,r=n.expanded;clearTimeout(this.timeout);var c=o.default.findDOMNode(this.refs.body),i=c.querySelectorAll("img");if(i.length>0)return this.preloadImages(c,i);this.setState({maxHeight:r||e?c.scrollHeight+"px":0,overflow:"hidden"}),this.timeout=r?setTimeout((function(){t.setState({maxHeight:"none",overflow:"visible"})}),a):setTimeout((function(){t.setState({maxHeight:0})}),0)}},{key:"preloadImages",value:function(e){for(var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=this.props,r=a.duration,o=a.expanded,c=0,i=function(){++c===n.length&&(o?(t.setState({maxHeight:"".concat(e.scrollHeight,"px")}),setTimeout((function(){t.setState({overflow:"visible"})}),r)):t.setState({maxHeight:0,overflow:"hidden"}))},l=0;l<n.length;l+=1){var s=new Image;s.src=n[l].src,s.onload=s.onerror=i}}},{key:"getProps",value:function(){var e=this.props,t=e.className,n=e.disabled,r=e.disabledClassName,o=e.expanded,c=e.expandedClassName,i=e.style;return{className:(0,a.default)("react-sanfona-item",t,{"react-sanfona-item-expanded":o&&!n,"react-sanfona-item-disabled":n},c&&p({},c,o),r&&p({},r,n)),style:i}}},{key:"render",value:function(){var e=this.props,t=e.bodyClassName,n=e.bodyTag,a=e.children,o=e.disabled,c=e.duration,s=e.easing,u=e.onClick,f=e.onMouseOver,p=e.rootTag,m=e.title,v=e.titleClassName,h=e.titleTag,y=this.state,b=y.maxHeight,g=y.overflow;return r.default.createElement(p,d({},this.getProps(),{ref:"item"}),r.default.createElement(l.default,{className:v,expanded:this.props.expanded,onClick:o?null:u,onMouseOver:o?null:f,rootTag:h,title:m,uuid:this.uuid}),r.default.createElement(i.default,{className:t,duration:c,easing:s,expanded:this.props.expanded,maxHeight:b,overflow:g,ref:"body",rootTag:n,uuid:this.uuid},a))}}])&&m(n.prototype,s),u&&m(n,u),t}(r.Component);t.default=b,b.defaultProps={rootTag:"div",titleTag:"h3",bodyTag:"div"}},1585:function(e,t,n){"use strict";n.r(t);var a=n(164),r=n.n(a),o=n(165),c=n.n(o),i=n(125),l=n.n(i),s=n(166),u=n.n(s),f=n(167),d=n.n(f),p=n(124),m=n.n(p),v=n(16),h=n.n(v),y=n(4),b=n.n(y),g=n(126),E=n(947),w=n(1),O=(n(951),n(946)),P=n.n(O);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var x=function(e){u()(n,e);var t=j(n);function n(){return r()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props,t=e.closePopup;e.sharedData;return b.a.createElement(E.k,{closePopup:t},b.a.createElement("div",{class:"modal-body pt-0 pb-5"},b.a.createElement("a",{class:"d-flex justify-content-between align-items-center mt-4 mb-2"},b.a.createElement("span",{class:"p-1 f-b"},"Date"),b.a.createElement("span",{class:"pl-4r f-b"},"Time"),b.a.createElement("span",{class:"p-1 f-b"},"Status"))))}}]),n}(y.Component);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var k=function(e){u()(n,e);var t=S(n);function n(){return r()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props,t=e.closePopup;e.sharedData;return b.a.createElement(E.k,{closePopup:t},b.a.createElement("div",{class:"modal-body pt-0 pb-5"},b.a.createElement("a",{class:"d-flex justify-content-between align-items-center flex-wrap mt-4 mb-2"},b.a.createElement("span",{class:"p-1 f-b"},"ID"),b.a.createElement("span",{class:"p-1 f-b"},"Date & Time"))))}}]),n}(y.Component);n(1544);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var A=n(971),I=function(e){u()(n,e);var t=T(n);function n(e){var a;return r()(this,n),a=t.call(this,e),h()(l()(a),"successPopup",(function(){a.setState({deleteSuccessFlag:!1,deleteDraftFlag:!1,deleteDraftData:{},SuccessPopupFlag:!0})})),h()(l()(a),"successPopupClosePopup",(function(){a.props.tikInitialization(),a.setState({deleteDraftFlag:!1,deleteDraftData:{},SuccessPopupFlag:!1,deleteSuccessFlag:!1})})),h()(l()(a),"showAccord",(function(e,t){a.setState({tab:a.updateTabs(e)})})),h()(l()(a),"closePopup",(function(){a.setState({sharedModal:!1,sharedMeModal:!1})})),h()(l()(a),"showShared",(function(){a.setState({sharedModal:!0})})),h()(l()(a),"showSharedMe",(function(){a.setState({sharedMeModal:!0})})),a.state={showAccord:!1,sharedModal:!1,sharedMeModal:!1,index:"",initial:"start",tab:[],tabList:[]},a}return c()(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("docId"));this.props.viewTik({Id:e})}},{key:"updateTabs",value:function(e){return this.state.tabList.map((function(t,n){return n==e?1==t.activeAcc?t.activeAcc=!1:t.activeAcc=!0:t.activeAcc=!1,t}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.viewTikData!=e.viewTikData){var n=[];this.props.viewTikData.timeline.map((function(e){n.push(JSON.parse(e.blockchainData.DocumentObject.Attributes))})),this.setState({templateField:n});this.props.viewTikData&&this.props.viewTikData.timeline.map((function(e,n){console.log(e);var a=t.state.tab,r=M(M({},a[n]),{},{activeAcc:!1,at:e.at,blockchainData:e.blockchainData,description:e.description,blockchainDocId:e.blockchainDocId});a[n]=r,t.setState({tab:a})})),this.state.tab.map((function(e,n){var a=t.state.tabList,r=M(M({},a[n]),{},{data:[_.sortBy(JSON.parse(e.blockchainData.DocumentObject.Attributes),["order"])],description:e.description,at:e.at,activeAcc:e.activeAcc});a[n]=r,t.setState({tabList:a})}))}}},{key:"render",value:function(){var e=this;console.log(this.state.tabList);var t=this.props.viewTikData;return b.a.createElement(E.w,null,b.a.createElement("div",{id:"tikDetail",class:"wrapper wrapper-content"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-xl-12"},b.a.createElement("div",{class:"containerBox"},b.a.createElement("div",{class:"fixHeight",style:{maxHeight:"calc(100vh - 240px)"}},b.a.createElement("div",{class:"container-fluid"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16 f-b"},"Tor Name")),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16"},t&&"".concat(t.providerData.firstName," ").concat(t.providerData.lastName))),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16 f-b"},"Affiliated")),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16"},t&&t.orgName)))),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col"},b.a.createElement("h3",{class:"f-16 f-b"},"Receiver Name and Email Address"),t&&"".concat(t.receiver.firstName," ").concat(t.receiver.lastName,"  (").concat(t.receiver.email,")")))))),b.a.createElement("hr",null),b.a.createElement("div",{class:"container-fluid"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16 f-b"},"Tik Name")),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16"},t.doc&&t.doc.metaList[0].value)))),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16 f-b"},"Tik ID")),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16"},t.doc&&t.doc.metaList[1].value))))),b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16 f-b"},"Published At")),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16"},t.doc&&t.doc.metaList[2].value)))),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16 f-b"},"Published To")),b.a.createElement("div",{class:"col-lg-6"},b.a.createElement("h3",{class:"f-16"},t.doc&&t.doc.metaList[3].value)))))),b.a.createElement("hr",null),b.a.createElement("div",{id:"accordion",class:"mt-5"},b.a.createElement("div",{class:"middle-line"},b.a.createElement("div",{class:"mCircle mx-auto mb-4"})),this.state.tabList&&this.state.tabList.map((function(t,n){return b.a.createElement("div",{class:"card"},b.a.createElement("div",{class:"card-header",id:"headingThree"},b.a.createElement("h5",{class:"m-0 d-flex justify-content-between align-items-center",style:{fontSize:"12px"}},b.a.createElement("div",null,b.a.createElement("h5",{class:"f-18 f-m"},t.description),b.a.createElement("p",{class:"f-16 mb-2"},P()(t.at).format("DD/MM/YYYY")," ",b.a.createElement("span",null,P()(t.at).format("LT")))),b.a.createElement("a",{onClick:function(){return e.showAccord(n)},"data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"true","aria-controls":"collapseThree",style:{fontSize:"12px"}},t.activeAcc?b.a.createElement("i",{class:"fas fa-angle-down"}):b.a.createElement("i",{class:"fas fa-angle-right"})))),b.a.createElement("div",{id:"collapseThree",class:t.activeAcc?"collapse show":"collapse","aria-labelledby":"headingThree","data-parent":"#accordion"},b.a.createElement("div",{class:"card-body"},b.a.createElement("div",{class:"card-body"},b.a.createElement("div",{class:"container"},b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-10"},t.data[0].map((function(e){return"Image"!=e.dataType&&"Boolean"!=e.dataType?b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-2 f-b f-16"},e.name),b.a.createElement("div",{class:"col-lg-8"},e.value)):"Boolean"==e.dataType?b.a.createElement("div",{class:"row"},b.a.createElement("div",{class:"col-lg-2 f-b f-16"},e.name),b.a.createElement("div",{class:"col-lg-8"},!0===e.value?"true":"false")):void 0}))),b.a.createElement("div",{class:"col-lg-2"},t.data[0].map((function(e){return"Image"==e.dataType?b.a.createElement(b.a.Fragment,null,b.a.createElement("img",{class:"img-fluid",src:e.value}),b.a.createElement("div",{style:{marginBottom:"10px"}},e.name)):"Qr"==e.dataType?b.a.createElement("div",{style:{marginBottom:"10px"}},b.a.createElement(A,{value:e.value,size:80,bgColor:"#ffffff",fgColor:"#000000",includeMargin:!1,renderAs:"svg",imageSettings:{excavate:!0}}),b.a.createElement("div",null,e.name)):void 0})))))))))})))))))),1==this.state.sharedModal?b.a.createElement(x,{closePopup:this.closePopup,sharedData:t&&t.timeline}):null,1==this.state.sharedMeModal?b.a.createElement(k,{closePopup:this.closePopup,sharedData:t&&t.timeline}):null)}}]),n}(y.Component);t.default=Object(g.b)((function(e){return{documentList:e.Tik.documentList,viewTikData:e.Tik.viewTik}}),(function(e){return{getDocumentListInfo:function(t){return e(w.Hb(t))},viewTik:function(t){return e(w.Ad(t))}}}))(I)},951:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(946),r=n.n(a),o=n(953),c=function(e){return e&&r()(e).format("MM-DD-YYYY")},i=function(e){return e&&r()(e).format("Do MMM YYYY")},l=function(e){return e&&r()(e).format("hh:mm A")},s=function(e,t,n){o.h[t].forEach((function(t){n.push(e[t])}))},u=function(e){var t=new FormData;return t.append("autoSave",e.autoSave),t.append("template_name",e.template_name),t.append("template_type",e.template_type),t.append("isAcceptanceDocument",e.isAcceptanceDocument),t.append("attribute",JSON.stringify(e.attribute)),e.acceptance_form&&t.append("acceptance_form",e.acceptance_form),t.append("thumbnail",e.thumbnail),e.templateId&&t.append("templateId",e.templateId),t},f=function(e,t,n,a,r){var o=[];return s(e,"role",o),s(t,"document",o),s(n,"template",o),s(a,"invoice",o),s(r,"payment",o),o}}}]);