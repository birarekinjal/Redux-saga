(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1589:function(e,t,a){"use strict";a.r(t);var l=a(164),r=a.n(l),n=a(165),s=a.n(n),c=a(125),i=a.n(c),o=a(166),m=a.n(o),u=a(167),d=a.n(u),p=a(124),f=a.n(p),g=a(16),v=a.n(g),h=a(4),E=a.n(h),b=a(947),y=a(126),w=a(950),k=a(1),x=a(956),D=a(1011),N=a.n(D),S=a(972),T=a.n(S);a(963);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(l,arguments,r)}else a=l.apply(this,arguments);return d()(this,a)}}var C=a(971),P=function(e){m()(a,e);var t=j(a);function a(e){var l;return r()(this,a),(l=t.call(this,e)).state={disabled:!1},l}return s()(a,[{key:"render",value:function(){var e=this.props.closePopup;return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"modal fade show",id:"twoFactor",tabIndex:"-1",role:"dialog","aria-labelledby":"twoFactorTitle","aria-hidden":"true",style:{zIndex:1,overflowY:"auto",overflowX:"hidden"}},E.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},E.a.createElement("div",{className:"modal-content",style:{height:"850px"}},E.a.createElement("div",{className:"modal-header "},E.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e},E.a.createElement("img",{src:w.a.close}))),E.a.createElement("div",{class:"modal-body pt-0 plr-100 pb-5 iframe-container"},E.a.createElement("img",{class:"mx-auto my-0 d-block width-auto mobile",src:w.a.mb1}),E.a.createElement("div",{class:"mb-5 br-20 right-ticket"},E.a.createElement("div",{class:" right-container"},E.a.createElement("div",{class:"pr-0 min-fixHeight"},this.props.imgList.map((function(e){if(null!=e.value&&""!=e.value&&1==e.default)return E.a.createElement("div",{class:"px-3 py-4 border-dark br-20 first-box"},E.a.createElement("div",{class:"d-flex  flex-wrap flex-column justify-content-center"},E.a.createElement("div",{className:"d-flex justify-content-center flex-column align-items-center my-5"},E.a.createElement(C,{value:e.value,size:128,bgColor:"#ffffff",fgColor:"#000000",includeMargin:!1,renderAs:"svg",imageSettings:{excavate:!0}})),E.a.createElement("div",{class:"text-center d-flex justify-content-center align-items-center"},E.a.createElement("h3",{style:{wordBreak:"break-all"},class:"f-26 f-b mr-3"},e.name),E.a.createElement("h3",{style:{wordBreak:"break-all"},class:"f-26"},e.value))))})),E.a.createElement("div",{class:"px-3 py-4 border-dark br-20 mt-2 second-box"},E.a.createElement("div",{class:" justify-content-center"},""!=this.props.image?this.props.image.map((function(e){if(1==e.default)return E.a.createElement("img",{style:{height:"132px",width:"132px"},class:"d-block mx-auto  mb-2 img-fluid",src:URL.createObjectURL(e.image)})})):E.a.createElement("img",{style:{height:"132px",width:"132px"},class:"d-block mx-auto  mb-2 img-fluid",src:w.a.certi}),E.a.createElement("div",{class:"text-center justify-content-center align-items-center"},E.a.createElement("h3",{class:"f-26 f-b "}," ",this.props.templateDetail.template_type)))),E.a.createElement("div",{class:"px-3 py-4 border-dark br-20 mt-2 third-box"},E.a.createElement("h4",{class:"f-24 f-m text-center",style:{wordBreak:"break-all"}},this.props.templateDetail.template_name),this.props.imgList.map((function(e){if(null!=e.value&&""!=e.value&&0==e.default)return E.a.createElement("div",{className:"d-flex justify-content-center flex-column align-items-center my-5"},E.a.createElement(C,{value:e.value,size:128,bgColor:"#ffffff",fgColor:"#000000",includeMargin:!1,renderAs:"svg",imageSettings:{excavate:!0}}))})),this.props.image.map((function(e){if(0==e.default)return E.a.createElement(E.a.Fragment,null,E.a.createElement("img",{style:{height:"132px",width:"132px"},class:"my-5 mx-auto d-block",src:URL.createObjectURL(e.image)}))})),this.props.attrVal.map((function(e,t){return E.a.createElement("div",{class:"d-flex flex-wrap"},E.a.createElement("div",{class:"col-sm-4"},E.a.createElement("h3",{class:"f-16 f-b"},e.name)),E.a.createElement("div",{class:"col-sm-8"},E.a.createElement("h3",{class:"f-16"},1==e.value?"True":0==e.value?"False":e.value)))})))))))))),E.a.createElement("div",{className:"modal-backdrop fade show",style:{zIndex:0}}))}}]),a}(h.Component),L=a(11),_=a(1016),O=a(961),V=a.n(O);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(l,arguments,r)}else a=l.apply(this,arguments);return d()(this,a)}}var M=a(971),U=function(e){m()(a,e);var t=R(a);function a(e){var l,n;return r()(this,a),n=t.call(this,e),v()(i()(n),"updateWidth",(function(){var e=document.getElementById("screenPixel").offsetWidth;n.setState({screenwidth:e})})),v()(i()(n),"logoutHandler",(function(){document.body.classList.add("modal-open"),n.setState({logout:!0})})),v()(i()(n),"closeSuccessPopup",(function(){n.setState({showSuccess:!1}),n.props.history.push("/docHistory")})),v()(i()(n),"logout",(function(){document.body.classList.remove("modal-open"),localStorage.removeItem("jwtToken"),localStorage.removeItem("userInfo"),n.props.history.push("/signin")})),v()(i()(n),"ticketHandler",(function(){n.setState({showTicket:!n.state.showTicket})})),v()(i()(n),"closeLogoutPopup",(function(){document.body.classList.remove("modal-open"),n.setState({logout:!1})})),v()(i()(n),"showNotification",(function(){n.setState({showNotification:!n.state.showNotification})})),v()(i()(n),"activeTab",(function(e){n.setState({tabActive:e})})),v()(i()(n),"updateToggle",(function(){n.setState({updateBtn:!0})})),v()(i()(n),"handleSubmit",(function(){n.setState({submit:!0});var e,t=[],a=[],l=[],r=[],s=[],c=n.props,i=(c.metaData,c.templateDetail);e=i.attribute.filter((function(e){return"Text"!=e.dataType}));var o=n.state.attrVal.filter((function(e){return 0!=Object.keys(e).length})),m=n.state.imgList.filter((function(e){return 0!=Object.keys(e).length})),u=n.state.image.filter((function(e){return 0!=Object.keys(e).length}));o.map((function(e){l.push(e.value)})),o.map((function(e){"Number"==e.dataType&&s.push(e.value)})),m.map((function(e){r.push(e.value)}));var d=JSON.parse(localStorage.getItem("addMetaData")),p=d[0].value,f=i._id;u.map((function(e){t.push(e.image)})),null!=n.state.reciverList&&n.state.reciverList.map((function(e){a.push(e.value)}));var g=o.concat(m);console.log(s,l,g,g.length,e.length,!l.includes(""),0!=a.length,0==n.state.error,/^[0-9]*$/i.test(s)),g.length===e.length&&!l.includes("")&&0!=a.length&&0==n.state.error&&/^[0-9]*$/i.test(s)&&(n.setState({loader:!0}),n.props.createTik({documentName:p,templateId:f,metaData:d,sortattrVal:g,sortimgList:m,images:t,receiverList:a}))})),v()(i()(n),"saveDraft",(function(){var e=[],t=[],a=[],l=[],r=n.props,s=(r.metaData,r.templateDetail),c=n.state.attrVal.filter((function(e){return 0!=Object.keys(e).length})),i=n.state.imgList.filter((function(e){return 0!=Object.keys(e).length})),o=n.state.image.filter((function(e){return 0!=Object.keys(e).length}));c.map((function(e){a.push(e.value)})),i.map((function(e){l.push(e.value)}));var m=JSON.parse(localStorage.getItem("addMetaData")),u=m?m[0].value:"",d=s._id;o.map((function(t){e.push(t.image)})),null!=n.state.reciverList&&n.state.reciverList.map((function(e){t.push(e.value)}));var p=c.concat(i);console.log(p.length,s.attribute.length,!a.includes(""),0!=t.length,0==n.state.error),n.props.saveDraft({documentName:u,templateId:d,metaData:m,sortattrVal:p,sortimgList:i,images:e,receiverList:t,removeDraftId:""})})),v()(i()(n),"imageChangeHandler",(function(e){n.setState({imageURL:URL.createObjectURL(e.target.files[0]),coverImage:e.target.files[0]})})),v()(i()(n),"closePopup",(function(){document.body.classList.remove("modal-open"),n.setState({mobileNumberUpdate:!1})})),v()(i()(n),"mobileUpdateHandler",(function(){n.setState({mobileNumberUpdate:!0})})),v()(i()(n),"mobileOtpModalClose",(function(){n.setState({MobileOtpPopup:!1})})),v()(i()(n),"showTimeHandler",(function(e){n.setState({showTime:!0,timeIndex:e})})),v()(i()(n),"showTimeCloseHandler",(function(){n.setState({showTime:!1})})),v()(i()(n),"setTime",(function(e,t){n.setState({time:e})})),v()(i()(n),"handleChange",(function(e,t,a,l,r,s){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";if("attribute_name"==t){var i=n.state.attrVal,o=n.state.livepreview,m=i[a],u=o[a],d=F(F({},m),{},{name:l,value:null!=e.target?"boolean"==c?e.target.checked:e.target.value:"date"==c?("0"+new Date(e).getDate()).slice(-2)+"-"+("0"+(new Date(e).getMonth()+1)).slice(-2)+"-"+e.getFullYear():e,order:a+1,dataType:r,default:s}),p=F(F({},u),{},{name:l,value:null!=e.target?"boolean"==c?e.target.checked:e.target.value:"date"==c?("0"+new Date(e).getDate()).slice(-2)+"-"+("0"+(new Date(e).getMonth()+1)).slice(-2)+"-"+e.getFullYear():e,order:a+1});i[a]=d,o[a]=p,n.setState({attrVal:i,livepreview:o},(function(){return console.log("again added",n.state.attrVal)}))}if("image_title"==t)if(null==e.target.files){var f=n.state.imgList,g=f[a],v=F(F({},g),{},{name:l,value:e.target.value,order:a+1,dataType:r,default:s});f[a]=v,n.setState({imgList:f})}else if(e.target.files[0].name.split(".").includes("jpg")||e.target.files[0].name.split(".").includes("jpeg")||e.target.files[0].name.split(".").includes("png")){var h=n.state.imgList,E=n.state.image,b=h[a],y=E[a],w=F(F({},b),{},{name:l,order:a+1,dataType:r,default:s}),k=F(F({},y),{},{name:l,image:e.target.files[0],order:a+1,default:s,value:e.target.files[0].name});h[a]=w,E[a]=k,n.setState({imgList:h,image:E})}else L.c.error("Only jpg,jpeg and png files are supported")})),v()(i()(n),"handleTeeChange",(function(e){null!=e&&(0!=e.length&&(e.filter((function(e){return!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.value)})).length>0?n.setState({error:!0,errormessage:"invalid email address"}):(n.setState({error:!1,errormessage:""}),n.setState({reciverList:e}))))})),v()(i()(n),"imageChangeHandler",(function(e){e.target.files[0].name.split(".").includes("jpg")||e.target.files[0].name.split(".").includes("jpeg")||e.target.files[0].name.split(".").includes("png")?n.setState({imageURL:URL.createObjectURL(e.target.files[0]),coverImage:e.target.files[0]}):L.c.error("Only jpg,jpeg and png files are supported")})),v()(i()(n),"closeMobilePopup",(function(){n.setState({MobileViewPoppup:!1})})),v()(i()(n),"showMobileView",(function(){n.setState({MobileViewPoppup:!0})})),n.state=(l={toggle:!1,showNotification:!1,logout:!1,tabActive:"Personal",updateBtn:!1,firstName:"",lastName:"",designation:"",companyName:"",address:"",showSuccess:!1,message:"",coverImage:"",imageURL:"",mobileNumberUpdate:!1,MobileOtpPopup:!1,showTime:!1,time:"12:34pm",attrVal:[],timeIndex:null,imgList:[]},v()(l,"imageURL",""),v()(l,"coverImage",""),v()(l,"image",[]),v()(l,"livepreview",[]),v()(l,"MobileViewPoppup",!1),v()(l,"submit",!1),v()(l,"reciverList",[]),v()(l,"teeDetail",[]),v()(l,"showTicket",!1),v()(l,"screenwidth",""),v()(l,"loader",!1),v()(l,"error",!1),v()(l,"errormessage",""),l),n.updateWidth=n.updateWidth.bind(i()(n)),n}return s()(a,[{key:"componentDidMount",value:function(){this.props.errorClear();var e=JSON.parse(localStorage.getItem("templateId"));this.props.profile(),this.props.getTemplateDetail({templateId:e,whiteList:!0});var t=JSON.parse(localStorage.getItem("addMetaData"));console.log(t),null==t&&this.props.history.push("/add-metadata"),console.log(this.props.metaData),this.props.reciverListInfo(),window.addEventListener("resize",this.updateWidth)}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.templateDetail!=this.props.templateDetail&&null!=this.props.templateDetail){var a=[];Object.keys(this.props.templateDetail).map((function(e){"attribute"==e&&t.props.templateDetail.attribute.map((function(e){a.push(e)})),"image"==e&&t.props.templateDetail.image.map((function(e){a.push(e)})),"text"==e&&t.props.templateDetail.text.map((function(e){a.push(e)}))})),V.a.sortBy(a,["order"]).map((function(e){if("Boolean"==e.dataType){var a=t.state.attrVal,l=F(F({},a[e.order-1]),{},{name:e.attribute_name,value:!1,order:e.order,dataType:e.dataType,default:e.default});a[e.order-1]=l,t.setState({attrVal:a},(function(){return console.log("sasvddvhjdadhjddhjdahd",t.state.attrVal)}))}}))}if(e.createTikSuccess!=this.props.createTikSuccess&&this.setState({showSuccess:!0,message:"Tik published successfully",loader:!1}),this.props.error!=e.error&&this.setState({loader:!1}),null!=this.props.reciverData&&this.props.reciverData instanceof Array&&this.props.reciverData!=e.reciverData){var l=[],r=[];this.props.reciverData.map((function(e){r.push(e.email);F(F({},r),{},{value:e.email,label:e.email})})),r.map((function(e){var t={value:e,label:e};l.push(t)})),this.setState({teeDetail:l})}this.props.saveDraftSuccess!=e.saveDraftSuccess&&this.setState({showSuccess:!0,message:"Draft saved sucessfully",loader:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.showNotification,l=t.logout,r=t.showSuccess,n=t.message,s=t.showTime,c=(t.time,t.timeIndex),i=t.attrVal,o=t.imgList,m=t.image,u=t.loader,d=t.MobileViewPoppup,p=this.props,f=p.templateDetail,g=(p.metaData,p.reciverData,p.document),v=p.roledocument;g&&v&&0==g.create&&0==v.create&&(this.props.history.push("/docHistory"),L.c.error("you are not authorized"));var h=/^[0-9]*$/i,y=i.filter((function(e){return 0!=Object.keys(e).length})),k=o.filter((function(e){return 0!=Object.keys(e).length})),D=m.filter((function(e){return 0!=Object.keys(e).length})),S=JSON.parse(localStorage.getItem("addMetaData")),j=JSON.parse(localStorage.getItem("prevroute"));console.log("before sort",o),console.log("after sort",y,k,D),console.log("concat",y.concat(k),D);var C=[],O=[];Object.keys(this.props.templateDetail).map((function(t){"attribute"==t&&e.props.templateDetail.attribute.map((function(e){O.push(e)})),"image"==t&&e.props.templateDetail.image.map((function(e){O.push(e)})),"text"==t&&e.props.templateDetail.text.map((function(e){O.push(e)}))}));var I=V.a.sortBy(O,["order"]);return I.map((function(e){Object.keys(e).map((function(t){"attribute_name"==t&&C.push(e)}))})),E.a.createElement(E.a.Fragment,null,E.a.createElement("nav",{className:"navbar beforel navbar-expand-md py-1"},E.a.createElement("a",{class:"navbar-brand",onClick:function(){return e.props.history.push("/dashboard")}},E.a.createElement("img",{class:"big img-fluid",src:w.a.header_logo}),E.a.createElement("img",{class:"mini img-fluid",src:w.a.logom})),E.a.createElement("ul",{className:"nav navbar-top-links navbar-right"},E.a.createElement("li",{className:"ml-2 mr-2"},E.a.createElement("a",{className:"btn p-0","data-toggle":"modal","data-target":"#searchmodal"},E.a.createElement("img",{className:!0,src:w.a.searcho}))),E.a.createElement("li",{className:"ml-2 mr-2"},null==this.props.document?E.a.createElement("li",{className:"ml-2 mr-2"},E.a.createElement("a",{onClick:function(){e.props.history.push("/add-metadata"),localStorage.setItem("prevroute",JSON.stringify("create-tik"))},className:"btn-border org-border br-6 d-flex p-2"},E.a.createElement("img",{className:!0,src:w.a.doc}),E.a.createElement("h4",{style:{fontSize:"14px",marginTop:"5px"},className:"txt-org f-m ml-2 mb-0 newDoc"},"Create New Tik"))):null!=this.props.roledocument&&(this.props.document.create||this.props.roledocument.create)?E.a.createElement("a",{onClick:function(){e.props.history.push("/add-metadata"),localStorage.setItem("prevroute",JSON.stringify("create-tik"))},className:"btn-border org-border br-6 d-flex p-2"},E.a.createElement("img",{className:!0,src:w.a.doc}),E.a.createElement("h4",{style:{fontSize:"14px",marginTop:"5px"},className:"txt-org f-m ml-2 mb-0 newDoc"},"Create New Tik")):null),E.a.createElement("li",{className:"dropdown mx-2"},E.a.createElement("a",{className:"dropdown-toggle count-info px-0","data-toggle":"dropdown",onClick:function(){return e.showNotification()}},E.a.createElement("i",{className:"fa fa-bell f-26"})," ",E.a.createElement("span",{className:"label label-primary"},"8")),!0===a?E.a.createElement(b.l,null):null),E.a.createElement("li",{className:"ml-2"},E.a.createElement(b.m,{logout:this.logoutHandler})))),l?E.a.createElement(b.k,{closePopup:this.closeLogoutPopup},E.a.createElement("div",{class:"modal-body pt-0 plr-100 pb-5"},E.a.createElement("h4",{class:"modal-title text-center f-20 f-m",id:""},"Are you sure you want to log out?"),E.a.createElement("div",{class:"d-flex logout-buttons"},E.a.createElement(b.c,{type:"button",buttonText:"No",className:"m-1 clear_button",onClick:function(){return e.closeLogoutPopup()}}),E.a.createElement(b.c,{type:"button",buttonText:"Yes",className:"m-1",onClick:function(){return e.logout()}})))):"",E.a.createElement("div",{id:"content",class:"container-fluid my-5 createDoc"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-md-12 d-flex align-items-center f-m"},E.a.createElement("h1",{class:"text-center txt-blk mb-4 f-b w-100"},"editDraft"==j?"Edit Draft":"Create Tik"),E.a.createElement("a",{onClick:this.showMobileView,class:"btn btn-primary f-16",style:{whiteSpace:"nowrap"},"data-toggle":"modal","data-target":"#mView"},"Mobile Preivew"," "),E.a.createElement("a",{onClick:this.saveDraft,style:{whiteSpace:"nowrap"},class:"btn btn-primary f-16 mView-btn saveDraft m-1"},"editDraft"==j?"Save":"Save as Draft"))),E.a.createElement("div",{class:"row ox-hide",id:"screenPixel",onClick:function(){return e.showTimeCloseHandler()}},E.a.createElement("div",{class:"col mb-5  flex-grow-3"},E.a.createElement("div",{class:"border br-20 px-3 py-4 left-container"},E.a.createElement("div",{class:"min-fixHeight pr-3",style:{minHeight:"470px"}},E.a.createElement("h3",{class:"f-20 f-b"},"Metadata"),E.a.createElement("div",{class:"container"},E.a.createElement("div",{class:"row"},S&&S.map((function(e){return E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16 f-b"},e.name)),E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16"},e.value))))})))),E.a.createElement("hr",null),E.a.createElement("h3",{class:"f-20 f-b"},"Template"),E.a.createElement("div",{class:"container"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16 f-b"},"Template Name")),E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16"},f.template_name)))),E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16 f-b"},"Number of Attributes")),E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16"},null!=f.attribute?f.attribute.length:null))))),E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16 f-b"},"Template Type")),E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16"},f.template_type)))),E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16 f-b"},"Acceptance From Integrated")),E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("h3",{class:"f-16"},f.isAcceptanceDocument?"Yes":"No")))))),E.a.createElement("hr",null),E.a.createElement("h3",{class:"f-20 f-b"},"Template Fields"),E.a.createElement("div",{class:"container"},E.a.createElement("div",{class:"row"},I.map((function(t,a){return"String"==t.dataType?E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{style:{marginTop:"10px"},class:"f-16 f-b"},t.attribute_name)),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("form",{onSubmit:function(e){e.preventDefault()},class:"form-group"},E.a.createElement("input",{type:"text",class:"form-control f-16 px-3 py-2",placeholder:"Enter ".concat(t.attribute_name),value:null!=e.state.attrVal[a]?e.state.attrVal[a].value:null,onChange:function(l){return e.handleChange(l,"attribute_name",a,t.attribute_name,t.dataType,t.default)}})))),null!=e.state.attrVal[a]?""==e.state.attrVal[a].value?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):null:e.state.submit?E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name))):null):"Boolean"==t.dataType?E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{style:{marginTop:"13px"},class:"f-16 f-b"},t.attribute_name)),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("form",{class:"d-flex flex-wrap form-group"},E.a.createElement("div",{class:"form-check-inline custom-control custom-checkbox"},E.a.createElement("input",{onChange:function(l){return e.handleChange(l,"attribute_name",a,t.attribute_name,t.dataType,t.default,"boolean")},type:"checkbox",class:"custom-control-input",id:a,name:"example1"}),E.a.createElement("label",{class:"custom-control-label f-m",for:a})))))):"Number"==t.dataType?E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{style:{marginTop:"10px"},class:"f-16 f-b"},t.attribute_name)),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("form",{onSubmit:function(e){e.preventDefault()},class:"form-group"},E.a.createElement("input",{type:"text",class:"form-control f-16 px-3 py-2",placeholder:"Enter ".concat(t.attribute_name),onChange:function(l){return e.handleChange(l,"attribute_name",a,t.attribute_name,t.dataType,t.default)}})))),null!=e.state.attrVal[a]?""==e.state.attrVal[a].value?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):h.test(e.state.attrVal[a].value)?null:E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the only number")))):e.state.submit?E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name))):null):"Date"==t.dataType?E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{style:{marginTop:"6px"},class:"f-16 f-b"},t.attribute_name)),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("form",{onSubmit:function(e){e.preventDefault()},class:"form-group"},E.a.createElement(T.a,{value:null!=e.state.attrVal[a]?e.state.attrVal[a].value:null,onChange:function(l){return e.handleChange(l,"attribute_name",a,t.attribute_name,t.dataType,t.default,"date")},dateFormat:"MM-dd-yyyy",className:"form-control f-14 w-70 float-left text-center py-1 dull datetimepicker1",showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select"}),E.a.createElement("label",{class:"w-30"},E.a.createElement("button",{class:"border-0 event-none ml-1",disabled:""},E.a.createElement("img",{src:w.a.calander})))))),null!=e.state.attrVal[a]?""==e.state.attrVal[a].value?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):null:e.state.submit?E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name))):null):"Time"==t.dataType?E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{style:{marginTop:"6px"},class:"f-16 f-b"},t.attribute_name)),E.a.createElement("div",{class:"col-lg-8",onClick:function(e){return e.stopPropagation()}},E.a.createElement("form",{onSubmit:function(e){e.preventDefault()},class:"form-group date"},E.a.createElement("input",{onClick:function(){return e.showTimeHandler(a)},type:"text",class:"timepicker form-control f-14 w-70 float-left text-center py-1 dull",id:"",placeholder:"00:00",value:null!=e.state.attrVal[a]?e.state.attrVal[a].value:""}),s&&c==a&&E.a.createElement(N.a,{onChange:function(l){return e.handleChange(l.formatted12,"attribute_name",a,t.attribute_name,t.dataType,t.default)},onDoneClick:function(l){e.showTimeCloseHandler(),e.handleChange(l.formatted12,"attribute_name",a,t.attribute_name,t.dataType,t.default)},switchToMinuteOnHourSelect:!0}),E.a.createElement("label",{class:"w-30"},E.a.createElement("button",{class:"border-0 event-none ml-1",disabled:""},E.a.createElement("img",{src:w.a.time})))))),null!=e.state.attrVal[a]?""==e.state.attrVal[a].value?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):null:e.state.submit?E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name))):null):"Qr"==t.dataType?E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{style:{marginTop:"10px"},class:"f-16 f-b"},t.attribute_name)),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("form",{onSubmit:function(e){e.preventDefault()},class:"form-group"},E.a.createElement("input",{type:"text",class:"form-control f-16 px-3 py-2",placeholder:"Enter ".concat(t.attribute_name),onChange:function(l){return e.handleChange(l,"image_title",a,t.attribute_name,t.dataType,t.default)}})))),null!=e.state.imgList[a]?""==e.state.imgList[a].value?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):null:e.state.submit?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):null):"Image"==t.dataType?E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{style:{marginTop:"10px"},class:"f-16 f-b"},t.attribute_name)),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},E.a.createElement("div",{class:"custom-file"},E.a.createElement("input",{type:"file",class:"custom-file-input",id:"customFile",onChange:function(l){return e.handleChange(l,"image_title",a,t.attribute_name,t.dataType,t.default)}}),E.a.createElement("label",{class:"custom-file-label f-m",for:"customFile"},null!=e.state.image[a]?V.a.truncate(e.state.image[a].value,{length:12}):"No file selected"))))),null!=e.state.image[a]?(""==e.state.image[a].value?!E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):e.state.image[a].value.split(".").includes("jpg")||e.state.image[a].value.split(".").includes("jpeg")||e.state.image[a].value.split(".").includes("png"))?null:E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Only jpg,jpeg,png files are supported"))):e.state.submit?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please enter the ",t.attribute_name)))):null):void 0})))),E.a.createElement("hr",null),E.a.createElement("h3",{class:"f-20 f-b"},"Tee Details"),E.a.createElement("div",{class:"container"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-6"},E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"},E.a.createElement("h3",{class:"f-16 f-b",style:{marginTop:"12px"}},"Email Address")),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("form",{onSubmit:function(e){e.preventDefault()},class:"form-group createDoc"},E.a.createElement(_.a,{isMulti:!0,onChange:this.handleTeeChange,options:this.state.teeDetail})))),this.state.submit?null!=this.state.reciverList?0==this.state.reciverList.length?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please select the email")))):this.state.error?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},this.state.errormessage)))):null:E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},"Please select the email")))):this.state.error?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"col-lg-4"}),E.a.createElement("div",{class:"col-lg-8"},E.a.createElement("div",{className:"input-feedback-tik"},this.state.errormessage)))):null))),E.a.createElement("hr",null),E.a.createElement("div",{class:"row"},E.a.createElement("div",{class:"offset-lg-1 col-lg-10 mt-5"},E.a.createElement("div",{class:"offset-lg-2 col-lg-8 d-flex"},E.a.createElement("a",{onClick:function(){return e.props.history.push("/select-template")},class:"btn btn-default m-1 w-100 f-b"},"Previous"),E.a.createElement("a",{onClick:this.handleSubmit,id:"","data-toggle":"modal","data-target":"#successPublished",class:"btn btn-org m-1 w-100 f-b published"},u?E.a.createElement("i",{class:"fa fa-refresh fa-spin"}):"Publish"))))))),E.a.createElement("div",{className:this.state.showTicket?"col flex-grow-0 d-flex align-items-center justify-content-center rotate":"col flex-grow-0 d-flex align-items-center justify-content-center"},E.a.createElement("a",{onClick:this.ticketHandler,class:"arrow-toggle text-center text-white btn btn-primary d-table"},E.a.createElement("i",{class:"f-24 fas fa-chevron-left d-table-cell vertical-align-m"}))),E.a.createElement("div",{className:this.state.showTicket?"col-lg-3 col-md-4 mb-5 br-20 right-ticket":"col-lg-3 col-md-4 mb-5 br-20 right-ticket hide-right-panel"},E.a.createElement("div",{class:"br-20 px-3 py-4 right-container"},E.a.createElement("div",{class:"pr-0 min-fixHeight"},this.state.imgList.map((function(e){if(null!=e.value&&""!=e.value&&1==e.default)return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{class:"px-3 py-4 border-dark br-20 first-box"},E.a.createElement("div",{class:"d-flex  flex-wrap justify-content-center flex-column"},E.a.createElement("div",{className:"d-flex justify-content-center flex-column align-items-center my-5"},E.a.createElement(M,{value:e.value,size:128,bgColor:"#ffffff",fgColor:"#000000",includeMargin:!1,renderAs:"svg",imageSettings:{excavate:!0}})),E.a.createElement("div",{class:"text-center d-flex justify-content-center align-items-center"},E.a.createElement("h3",{style:{wordBreak:"break-all"},class:"f-26 f-b mr-3"},e.name),E.a.createElement("h3",{style:{wordBreak:"break-all"},class:"f-26"},e.value)))))})),E.a.createElement("div",{class:"px-3 py-4 border-dark br-20 mt-2 second-box"},E.a.createElement("div",{class:" justify-content-center"},""!=this.state.image?this.state.image.map((function(e){if(1==e.default)return E.a.createElement("img",{style:{height:"132px",width:"132px"},class:"d-block mx-auto  mb-2 img-fluid",src:""!=e.image?URL.createObjectURL(e.image):w.a.certi})})):E.a.createElement("img",{style:{height:"132px",width:"132px"},class:"d-block mx-auto  mb-2 img-fluid",src:w.a.certi}),E.a.createElement("div",{class:"text-center d-flex justify-content-center align-items-center"},E.a.createElement("h3",{class:"f-26 f-b "},f.template_type)))),E.a.createElement("div",{class:"px-3 py-4 border-dark br-20 mt-2"},E.a.createElement("h4",{class:"f-24 f-m text-center",style:{wordBreak:"break-all"}},this.props.templateDetail.template_name),this.state.imgList.map((function(e){if(null!=e.value&&""!=e.value&&0==e.default)return E.a.createElement("div",{className:"d-flex justify-content-center flex-column align-items-center my-5"},E.a.createElement(M,{value:e.value,size:128,bgColor:"#ffffff",fgColor:"#000000",includeMargin:!1,renderAs:"svg",imageSettings:{excavate:!0}}))})),this.state.image.map((function(e){if(0==e.default)return E.a.createElement(E.a.Fragment,null,E.a.createElement("img",{style:{height:"132px",width:"132px"},class:"my-5 mx-auto d-block",src:URL.createObjectURL(e.image)}))})),this.state.attrVal.map((function(e,t){return E.a.createElement("div",{class:"d-flex flex-wrap"},E.a.createElement("div",{class:"col-sm-4"},E.a.createElement("h3",{class:"f-16 f-b"},e.name)),E.a.createElement("div",{class:"col-sm-8"},E.a.createElement("h3",{class:"f-16"},!0===e.value?"True":!1===e.value?"False":e.value)))})))))))),1==r?E.a.createElement(x.a,{closePopup:this.closeSuccessPopup,history:this.props.history,message:n}):null,1==d?E.a.createElement(P,{closePopup:this.closeMobilePopup,history:this.props.history,attrVal:this.state.attrVal,image:this.state.image,imgList:this.state.imgList,templateDetail:this.props.templateDetail}):null)}}]),a}(h.Component);t.default=Object(y.b)((function(e){return{firstName:e.Profile.firstName,templateDetail:e.Template.templateDetail,metaData:e.Tik.metaData,reciverData:e.Tik.reciverData,createTikSuccess:e.Tik.createTikSuccess,error:e.Auth.error,document:e.Profile.document,saveDraftSuccess:e.Tik.saveDraftSuccess,roledocument:e.Profile.Roledocument}}),(function(e){return{profile:function(t){return e(k.zc(t))},getTemplateDetail:function(t){return e(k.Yb(t))},createTikEdit:function(t){return e(k.Q(t))},createTik:function(t){return e(k.P(t))},reciverListInfo:function(){return e(k.Mc())},errorClear:function(){return e(k.Fb())},saveDraft:function(t){return e(k.Pc(t))}}}))(U)},956:function(e,t,a){"use strict";var l=a(164),r=a.n(l),n=a(165),s=a.n(n),c=a(166),i=a.n(c),o=a(167),m=a.n(o),u=a(124),d=a.n(u),p=a(4),f=a.n(p),g=a(950);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(l,arguments,r)}else a=l.apply(this,arguments);return m()(this,a)}}var h=function(e){i()(a,e);var t=v(a);function a(){return r()(this,a),t.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props.closePopup;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",null,f.a.createElement("div",{className:"modal fade show",id:"twoFactor",tabIndex:"-1",role:"dialog","aria-labelledby":"twoFactorTitle","aria-hidden":"true",style:{zIndex:1}},f.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},f.a.createElement("div",{className:"modal-content"},f.a.createElement("div",{className:"modal-header "},f.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e},f.a.createElement("img",{src:g.a.close}))),f.a.createElement("div",{className:"modal-body pt-0 plr-100 pb-5"},f.a.createElement("h4",{className:"modal-title text-center f-24 mb-4 f-b",id:"successTitle"},this.props.message),f.a.createElement("img",{className:"mx-auto my-0 d-block ",src:g.a.success})))))),f.a.createElement("div",{className:"modal-backdrop fade show",style:{zIndex:0}}))}}]),a}(p.Component);t.a=h}}]);