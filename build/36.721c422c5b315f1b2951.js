(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1571:function(e,t,a){"use strict";a.r(t);var r=a(164),n=a.n(r),c=a(165),o=a.n(c),l=a(125),s=a.n(l),i=a(166),m=a.n(i),p=a(167),u=a.n(p),d=a(124),f=a.n(d),v=a(16),h=a.n(v),b=a(4),E=a.n(b),N=a(126),g=a(947),y=a(965),D=(a(1013),a(1)),w=a(19),T=(a(951),a(946)),R=a.n(T),k=a(1251),O=a(1012);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=f()(e);if(t){var n=f()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return u()(this,a)}}var P=function(e){m()(a,e);var t=j(a);function a(e){var r;return n()(this,a),r=t.call(this,e),h()(s()(r),"handleReportTab",(function(e){r.setState({selectedTab:e.value});var t="",a=R()().format("MM-DD-YYYY");switch(e.value){case"30day":t=R()().subtract(1,"month").format("MM-DD-YYYY");break;case"90day":t=R()().subtract(2,"month").format("MM-DD-YYYY");break;default:t=R()().subtract(1,"year").format("MM-DD-YYYY")}var n={startDate:t,endDate:a};r.props.torReports(n)})),r.state={selectedTab:"",reportsData:[],csvData:[],showFilter:!1},r}return o()(a,[{key:"componentDidMount",value:function(){this.props.torReports(null)}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.reportsTor!=this.props.reportsTor){var a=this.props.reportsTor.torReportsData;a.report&&a.report.map((function(e,r){var n=a.report,c=x(x({},n[r]),{},{provider:e.provider.firstName});n[r]=c,t.setState({csvData:n})}))}}},{key:"render",value:function(){var e=this,t=y.a.reports,a=(t.title,t.tikReportsTab,t.totalNumberTik,t.averageTik,t.totalNumberDay,t.percentageChange,t.downloadCSV),r=(t.tikReportsTitle,t.XAxiosTitle,this.state),n=(r.selectedTab,r.csvData),c=this.props.reportsTor,o=c.torReportsData,l=c.torReportsLoader,s=o.totalProviders,i=o.totalDocument,m=o.highestProvider,p=o.leastProvider,u=o.report;return console.log(c),E.a.createElement(g.w,null,E.a.createElement("div",{id:"docreport",className:"wrapper wrapper-content"},E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-xl-12"},E.a.createElement("div",{id:"changingContent",className:"containerBox",onClick:function(){return e.setState({showFilter:!1})}},E.a.createElement("div",{className:"tikReport"},E.a.createElement("div",{className:"table-title"},E.a.createElement("h2",{className:"f-b mb-4 mt-0"},"Tor Report"),E.a.createElement(k.a,{showFilter:function(){return e.setState({showFilter:!0})},filterStatus:this.state.showFilter})),E.a.createElement("div",{className:"fixHeight p-0",style:{maxHeight:"calc(100vh - 340px)"}},E.a.createElement("div",{className:"tab-content mt-2"},E.a.createElement("div",{className:"col tab-pane active",id:"30day"},l&&E.a.createElement(w.a,null)||E.a.createElement("div",{id:"chartdiv",style:{height:"65vh",marginTop:"12px",overflowX:"scroll"}},E.a.createElement(g.v,{reports:u,YAxisTitle:"Number of Tiks",XAxisTitle:"Tor"})),E.a.createElement("div",{className:"row align-items-center mt-4 report-number-wrapper"},E.a.createElement("div",{className:"col-lg-8"},E.a.createElement("div",{className:"d-flex flex-wrap"},E.a.createElement("div",{className:"col-lg-4"},E.a.createElement("h3",{className:"f-b"},"Total number of tor")),E.a.createElement("div",{className:"col-lg-2"},E.a.createElement("h3",{className:!0},o&&s)),E.a.createElement("div",{className:"col-lg-4"},E.a.createElement("h3",{className:"f-b"},"Highest publishing tor")),E.a.createElement("div",{className:"col-lg-2"},E.a.createElement("h3",{className:!0},o&&m))),E.a.createElement("div",{className:"d-flex flex-wrap"},E.a.createElement("div",{className:" col-lg-4"},E.a.createElement("h3",{className:"f-b "},"Total number of tik")),E.a.createElement("div",{className:"col-lg-2 "},E.a.createElement("h3",{className:" "},o&&i)),E.a.createElement("div",{className:"col-lg-4 "},E.a.createElement("h3",{className:"f-b "},"Least publishing tor")),E.a.createElement("div",{className:"col-lg-2 "},E.a.createElement("h3",{className:" "},o&&p)))),E.a.createElement("div",{className:"col-lg-4"},n&&n.length>0&&E.a.createElement(O.CSVLink,{data:n,className:"btn btn-org px-3 ",filename:"tikData.csv"},a)))),E.a.createElement("div",{className:"tab-pane",id:"90day"},"90 days"),E.a.createElement("div",{className:"tab-pane ",id:"1year"},"1 year")))))))))}}]),a}(b.Component);t.default=Object(N.b)((function(e){return{reportsTor:e.Reports.torReports,torFilterData:e.Reports.torFilterData}}),(function(e){return{torReports:function(t){return e(D.ud(t))}}}))(P)}}]);