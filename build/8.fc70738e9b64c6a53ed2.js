(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1012:function(e,t,a){e.exports=a(1050)},1013:function(e,t,a){"use strict";var n=a(164),r=a.n(n),o=a(165),c=a.n(o),i=a(125),l=a.n(i),s=a(166),u=a.n(s),f=a(167),p=a.n(f),d=a(124),m=a.n(d),h=a(16),v=a.n(h),y=a(4),b=a.n(y),g=a(126),D=(a(963),a(965)),w=a(946),E=a.n(w),k=a(1),T=a(951),O=a(1014);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return p()(this,a)}}var _=function(e){u()(a,e);var t=R(a);function a(e){var n;return r()(this,a),n=t.call(this,e),v()(l()(n),"handleChanges",(function(e,t){n.setState({selectedTab:"",startDateTab:e,endDateTab:t});var a={startDate:Object(T.e)(e),endDate:Object(T.e)(t)};n.props.tikReports(a)})),v()(l()(n),"handleReportTab",(function(e){if("all"==e.value){var t=n.props.sortedReportData;t.length>0&&n.setState({selectedTab:e.value,startDateTab:new Date(t[0]._id)}),n.props.tikReports(null)}else{var a="",r=E()().format("MM-DD-YYYY");switch(e.value){case"30day":a=E()().subtract(1,"month").format("MM-DD-YYYY");break;case"90day":a=E()().subtract(2,"month").format("MM-DD-YYYY");break;default:a=E()().subtract(1,"year").format("MM-DD-YYYY")}var o=new Date(a);n.setState({selectedTab:e.value,startDateTab:o,endDateTab:new Date});var c={startDate:a,endDate:r};n.props.getTikTabData(e.value),n.props.tikReports(c)}})),n.state={selectedTab:"all",startDateTab:new Date,endDateTab:new Date,flag:!1},n}return c()(a,[{key:"componentDidMount",value:function(){var e=this.props.sortedReportData;e.length>0&&this.setState({startDateTab:new Date(e[0]._id)})}},{key:"componentDidUpdate",value:function(e){var t=this.props.sortedReportData;this.props.sortedReportData!==e.sortedReportData&&!1===this.state.flag&&t.length>0&&this.setState({flag:!0,startDateTab:new Date(t[0]._id)})}},{key:"render",value:function(){var e=this,t=D.a.reports.tikReportsTab,a=this.state,n=a.startDateTab,r=a.endDateTab,o=a.selectedTab;return b.a.createElement("ul",{className:"nav nav-pills"},t.map((function(t){return b.a.createElement("li",{className:"nav-item"},b.a.createElement("a",{className:"nav-link ".concat(o===t.value?"active":""),onClick:function(){return e.handleReportTab(t)}},t.label))})),b.a.createElement("li",{className:"nav-item w-50 d-flex align-items-center"},b.a.createElement(O.a,{startDateTab:n,endDateTab:r,handleChanges:this.handleChanges})))}}]),a}(y.Component);t.a=Object(g.b)((function(e){return{}}),(function(e){return{tikReports:function(t){return e(k.jd(t))},getTikTabData:function(t){return e(k.cc(t))}}}))(_)},1014:function(e,t,a){"use strict";var n=a(270),r=a.n(n),o=a(4),c=a.n(o),i=a(950),l=a(972),s=a.n(l),u=(a(963),a(965));t.a=function(e){var t=Object(o.useState)(!0),a=r()(t,2),n=a[0],l=a[1],f=e.startDateTab,p=e.endDateTab,d=e.handleChanges,m=u.a.reports,h=m.reportFrom,v=m.reportTo;return c.a.createElement("div",{className:"pl-5 dateinput d-flex align-items-center date-filter-wrapper"},c.a.createElement("h3",{className:"mx-2"},h),c.a.createElement("div",{style:{minWidth:"150px"}},c.a.createElement(s.a,{value:f,onChange:function(e){d(e,p),l(!1)},dateFormat:"dd-MM-yyyy",className:"text-center dull py-1 px-2 f-14 f-m form-control w-100 datetimepicker1",selected:f,maxDate:new Date,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",placeholderText:"MM/DD/YYYY",selectsStart:!0})),c.a.createElement("button",{class:"border-0 mr-1 event-none",disabled:!0},c.a.createElement("img",{src:i.a.calander})),c.a.createElement("h3",{className:"mr-2 ml-4"},v),c.a.createElement("div",{style:{minWidth:"150px"}},c.a.createElement(s.a,{value:p,onChange:function(e){d(f,e)},dateFormat:"dd-MM-yyyy",className:"text-center dull py-1 px-2 f-14 f-m form-control w-100 datetimepicker2",selected:p,minDate:f,maxDate:new Date,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",placeholderText:"DD/MM/YYYY",selectsEnd:!0,disabled:n})),c.a.createElement("button",{className:"border-0 mr-1 event-none",disabled:!0},c.a.createElement("img",{src:i.a.cal})))}},1050:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var n=o(a(1051)),r=o(a(1052));function o(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=n.default,t.CSVLink=r.default},1051:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(4),c=(n=o)&&n.__esModule?n:{default:n},i=a(993),l=a(994);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,a=e.headers,n=e.separator,r=e.enclosingCharacter,o=e.uFEFF,c=e.target,i=e.specs,l=e.replace;this.state.page=window.open(this.buildURI(t,o,a,n,r),c,i,l)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(c.default.Component);s.defaultProps=Object.assign(l.defaultProps,{target:"_blank"}),s.propTypes=l.propTypes,t.default=s},1052:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(4),i=(n=c)&&n.__esModule?n:{default:n},l=a(993),s=a(994);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.buildURI=a.buildURI.bind(a),a.state={href:""},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,a=e.headers,n=e.separator,r=e.uFEFF,o=e.enclosingCharacter;this.setState({href:this.buildURI(t,r,a,n,o)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,a=t.data,n=t.headers,r=t.separator,o=t.uFEFF;this.setState({href:this.buildURI(a,o,n,r)})}}},{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,a=t.data,n=t.headers,r=t.separator,o=t.filename,c=t.enclosingCharacter,i=t.uFEFF,s=new Blob([i?"\ufeff":"",(0,l.toCSV)(a,n,r,c)]);return window.navigator.msSaveBlob(s,o),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(a){!1!==a?t.handleLegacy(e):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"==typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,a=(t.data,t.headers,t.separator,t.filename),n=(t.uFEFF,t.children),o=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return i.default.createElement("a",r({download:a},o,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),n)}}]),t}(i.default.Component);u.defaultProps=s.defaultProps,u.propTypes=s.propTypes,t.default=u},1570:function(e,t,a){"use strict";a.r(t);var n=a(164),r=a.n(n),o=a(165),c=a.n(o),i=a(166),l=a.n(i),s=a(167),u=a.n(s),f=a(124),p=a.n(f),d=a(4),m=a.n(d),h=a(126),v=a(1012),y=a(961),b=a.n(y),g=a(947),D=a(965),w=a(1013),E=a(1),k=a(19),T=a(946),O=a.n(T);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var _=function(e){l()(a,e);var t=R(a);function a(e){var n;return r()(this,a),(n=t.call(this,e)).state={reportsData:[],startDate:"",endDate:""},n}return c()(a,[{key:"componentDidMount",value:function(){this.props.tikReports(null)}},{key:"render",value:function(){var e=D.a.reports,t=e.title,a=e.totalNumberTik,n=e.averageTik,r=e.totalNumberDay,o=(e.percentageChange,e.downloadCSV),c=e.tikReportsTitle,i=e.XAxiosTitle,l=this.props,s=l.reportsTik,u=(l.tabData,s.tikReportsData),f=s.tikReportsLoader,p=u.totalDoc,d=u.avgPerDay,h=u.numberOfDays,y=(u.percentageOfChange,u.report),E="";y&&y.length>0&&(E=b.a.sortBy(y,(function(e){return new Date(e._id)})));var T=E&&E.length>0&&O()(E[0]._id).format("MM/DD/YYYY"),R=E&&E.length>0&&O()(E[E.length-1]._id).format("MM/DD/YYYY"),_="";y&&y.length>0&&(_=JSON.parse(JSON.stringify(y)).map((function(e){return e.totaltik=e.total,delete e.total,delete e.createdDate,e})));return m.a.createElement(g.w,null,m.a.createElement("div",{id:"docreport",className:"wrapper wrapper-content"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-12"},m.a.createElement("div",{id:"changingContent",className:"containerBox"},m.a.createElement("div",{className:"tikReport"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"table-title"},m.a.createElement("h2",{className:"f-b mb-4 mt-0"},t),m.a.createElement(w.a,{sortedReportData:E})),m.a.createElement("div",{className:"fixHeight p-0",style:{maxHeight:"calc(100vh - 340px)"}},m.a.createElement("div",{className:"tab-content mt-2"},m.a.createElement("div",{className:"col tab-pane active",id:"30day"},f&&m.a.createElement(k.a,null)||m.a.createElement("div",{id:"chartdiv",style:{height:"60vh",marginTop:"-40px",overflow:"hidden",textAlign:"left"}},m.a.createElement(g.n,{reports:E,YAxisTitle:c,XAxisTitle:i})),m.a.createElement("div",{className:"row align-items-center mt-4 report-number-wrapper"},m.a.createElement("div",{className:"col-lg-8"},m.a.createElement("div",{className:"d-flex flex-wrap"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("h3",{className:"f-b"},a)),m.a.createElement("div",{className:"col-lg-2"},m.a.createElement("h3",{className:!0},u&&p||"-")),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("h3",{className:"f-b"},n)),m.a.createElement("div",{className:"col-lg-2"},m.a.createElement("h3",{className:!0},u&&Math.round(d)||"-"))),m.a.createElement("div",{className:"d-flex flex-wrap"},m.a.createElement("div",{className:" col-lg-4"},m.a.createElement("h3",{className:"f-b "},r)),m.a.createElement("div",{className:"col-lg-2 "},m.a.createElement("h3",{className:" "},u&&h||"-")),m.a.createElement("div",{class:"col-lg-6 d-flex flex-wrap from-to-data"},m.a.createElement("div",{class:"col d-flex p-0"},m.a.createElement("h3",{class:"f-b "},"From :"),m.a.createElement("span",{class:"f-b f-20 mt-1"},"  ",T)),m.a.createElement("div",{class:"col d-flex p-0"},m.a.createElement("h3",{class:"f-b "},"To :"),m.a.createElement("span",{class:"f-b f-20 mt-1"},"  ",R))))),m.a.createElement("div",{className:"col-lg-4"},_&&_.length>0&&m.a.createElement(v.CSVLink,{data:_,className:"btn btn-org px-3 ",filename:"tikData.csv"},o)))),m.a.createElement("div",{className:"tab-pane",id:"90day"},"90 days"),m.a.createElement("div",{className:"tab-pane ",id:"1year"},"1 year"))))))))))}}]),a}(d.Component);t.default=Object(h.b)((function(e){return{reportsTik:e.Reports.tikReports,tabData:e.Reports.tabData}}),(function(e){return{tikReports:function(t){return e(E.jd(t))}}}))(_)},951:function(e,t,a){"use strict";a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(946),r=a.n(n),o=a(953),c=function(e){return e&&r()(e).format("MM-DD-YYYY")},i=function(e){return e&&r()(e).format("Do MMM YYYY")},l=function(e){return e&&r()(e).format("hh:mm A")},s=function(e,t,a){o.h[t].forEach((function(t){a.push(e[t])}))},u=function(e){var t=new FormData;return t.append("autoSave",e.autoSave),t.append("template_name",e.template_name),t.append("template_type",e.template_type),t.append("isAcceptanceDocument",e.isAcceptanceDocument),t.append("attribute",JSON.stringify(e.attribute)),e.acceptance_form&&t.append("acceptance_form",e.acceptance_form),t.append("thumbnail",e.thumbnail),e.templateId&&t.append("templateId",e.templateId),t},f=function(e,t,a,n,r){var o=[];return s(e,"role",o),s(t,"document",o),s(a,"template",o),s(n,"invoice",o),s(r,"payment",o),o}},993:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},c=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===(void 0===e?"undefined":n(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},l=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},s=t.jsons2arrays=function(e,t){var a=t=t||l(e),n=t;c(t)&&(a=t.map((function(e){return e.label})),n=t.map((function(e){return e.key})));var o=e.map((function(e){return n.map((function(t){return u(t,e)}))}));return[a].concat(r(o))},u=t.getHeaderValue=function(e,t){var a=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,a,n){if(void 0!==e[t])return e[t];n.splice(1)}),t);return void 0===a?e in t?t[e]:"":a},f=t.elementOrEmpty=function(e){return e||0===e?e:""},p=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return f(e)})).map((function(e){return""+a+e+a})).join(t)})).join("\n")},d=t.arrays2csv=function(e,t,a,n){return p(t?[t].concat(r(e)):e,a,n)},m=t.jsons2csv=function(e,t,a,n){return p(s(e,t),a,n)},h=t.string2csv=function(e,t,a,n){return t?t.join(a)+"\n"+e:e},v=t.toCSV=function(e,t,a,n){if(c(e))return m(e,t,a,n);if(i(e))return d(e,t,a,n);if("string"==typeof e)return h(e,t,a);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,a,n,r){var c=v(e,a,n,r),i=o()?"application/csv":"text/csv",l=new Blob([t?"\ufeff":"",c],{type:i}),s="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+c,u=window.URL||window.webkitURL;return void 0===u.createObjectURL?s:u.createObjectURL(l)}},994:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var n,r=a(4),o=((n=r)&&n.__esModule,a(84));t.propTypes={data:(0,o.oneOfType)([o.string,o.array]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]}}]);