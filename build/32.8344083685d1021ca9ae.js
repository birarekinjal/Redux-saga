(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1563:function(e,t,a){"use strict";a.r(t);var n=a(164),r=a.n(n),l=a(165),i=a.n(l),c=a(125),u=a.n(c),o=a(166),s=a.n(o),p=a(167),m=a.n(p),d=a(124),b=a.n(d),f=a(16),h=a.n(f),v=a(4),g=a.n(v),S=a(954),_=a(961),y=a.n(_),F=a(126),E=a(11),w=a(947),k=a(1256),T=a(1239),O=a(1240),A=a(1241),D=a(1),N=a(1242),C=a(951),j=a(946),x=a.n(j);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=b()(e);if(t){var r=b()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}var I="",V=!1,z=!1,B=function(e){s()(a,e);var t=L(a);function a(e){var n;return r()(this,a),n=t.call(this,e),h()(u()(n),"getTemplateItem",(function(e){var t=n.state.template;t.push({type:e.toLowerCase(),attribute_name:"",attribute_dropdown:"",include_in_thumbnail:""}),n.setState({template:t,addFlag:!1})})),h()(u()(n),"successPopup",(function(){n.setState({addFlag:!1,successFlag:!0,SuccessPopupFlag:!0})})),h()(u()(n),"successPopupClosePopup",(function(){n.props.templateInitialization(),n.setState({addFlag:!1,SuccessPopupFlag:!1})})),h()(u()(n),"formateTemplateData",(function(e){var t=n.props.templateObj.autoSaveData,a=n.state.autoSaveFlag,r=e.attribute,l=e.template_name,i=e.template_type,c=e.isAcceptanceDocument,u=e.thumbnail,o={};r&&r.length>0&&(o=r.map((function(e,t){return R(R({},e),{},{order:t+1})})).reduce((function(e,t){return e[t.type]=e[t.type]||[],"attribute"===t.type&&("Text"===t.attribute_dropdown?e[t.type].push({order:t.order,attribute_name:t.attribute_name,dataType:t.attribute_dropdown,include_in_thumbnail:t.include_in_thumbnail,value:t.description}):"Image"===t.attribute_dropdown||"Qr"===t.attribute_dropdown?e[t.type].push({order:t.order,attribute_name:t.attribute_name,dataType:t.attribute_dropdown,default:t.include_in_thumbnail}):e[t.type].push({order:t.order,attribute_name:t.attribute_name,dataType:t.attribute_dropdown,include_in_thumbnail:t.include_in_thumbnail})),e}),Object.create(null)));return!("attribute"in o)&&(o.attribute=[]),o.autoSave=a||!1,o.template_name=l||"",o.template_type=i||"",o.isAcceptanceDocument=c||!1,o.thumbnail=u||"",null!==t&&(o.templateId=t._id||""),o})),h()(u()(n),"handleSubmit",(function(e){var t=n.state,a=t.autoSaveFlagCheck,r=t.autoSaveFlag,l={};if(0===e.attribute.length)E.c.error("At least one attribute is required"),n.setState({autoSaveFlag:!r});else if(l=n.formateTemplateData(e),!0===a){if(!0===l.isAcceptanceDocument&&"Acceptance Tik"!==l.template_type)E.c.error("Acceptance tik is required"),n.setState({autoSaveFlag:!r});else{z=!0;var i=Object(C.a)(l);n.props.autoSaveTemplate(i)}n.setState({autoSaveFlagCheck:!1})}else if(!0===l.isAcceptanceDocument&&"Acceptance Tik"!==l.template_type)n.props.history.push("/selectAcceptanceTemp",{finalObj:l,editFlag:!1});else{var c=Object(C.a)(l);n.props.createTemplate(c)}z=!1})),h()(u()(n),"addFlag",(function(){var e=n.state.addFlag;n.setState({addFlag:!e})})),h()(u()(n),"handleTabAttribute",(function(e){"recent"===e?n.setState({recentAttributeFlag:!0}):n.setState({recentAttributeFlag:!1})})),h()(u()(n),"inilitizeTempValue",(function(e){var t=e.attribute,a=e.image,n=e.text,r=[];if(null!==e){var l=y.a.unionBy(a,n,t),i=y.a.orderBy(l,["_id"],["asc"]);null!==e&&i.length>0&&i.map((function(e){var t="";t=e.image_title?"image":e.attribute_name?"attribute":"text",r.push({type:t,attribute_name:e.attribute_name||e.image_title||e.title||"",attribute_dropdown:e.dataType||"",include_in_thumbnail:e.include_in_thumbnail||!1,description:e.value||""})}))}return r})),h()(u()(n),"handleCheckboxAutoSave",(function(e){n.setState({autoSaveFlag:e.target.checked,autoSaveFlagCheck:!0,autoSaveLoader:!0},(function(){n.buttonRef.current.click()}))})),h()(u()(n),"getFormData",(function(e){n.props.templateObj;var t=n.formateTemplateData(e),a=Object(C.a)(t);n.props.autoSaveTemplate(a)})),n.state={flag:!1,selectTemplate:["Attribute","Thumbnail","Text"],addFlag:!1,recentAttributeFlag:!0,attribute:[],successFlag:!0,SuccessPopupFlag:!0,autoSaveFlag:!1,formData:"",checkDetailsLoader:!1,autoSaveFlagCheck:!1},n.wrapperRef=g.a.createRef(),n.handleClickOutside=n.handleClickOutside.bind(u()(n)),n.buttonRef=g.a.createRef(),n.getFormData=n.getFormData.bind(u()(n)),n}return i()(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.templateObj,r=n.templateUpdate,l=n.autoSaveSuccess,i=n.autoSaveData,c=this.state.autoSaveFlag;this.props!==t&&(!0===r&&this.props.history.push("template"),""!==n&&null!==i&&(!0===i.autoSave&&!1===V?(I=setInterval((function(){a.setState({autoSaveFlagCheck:!0},(function(){a.buttonRef.current.click()}))}),6e4),V=!0):!1!==i.autoSave&&void 0!==i.autoSave||!0!==V||(clearInterval(I),V=!1,this.setState({autoSaveFlagCheck:!1}))),!0===l&&this.props.getTemplateListInfo({search:""})),this.props.error&&(this.setState({autoSaveFlag:!c}),this.props.errorClear())}},{key:"componentWillUnmount",value:function(){clearInterval(I),V=!1,this.setState({autoSaveFlag:!1,autoSaveData:{}}),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&this.setState({addFlag:!1})}},{key:"componentDidMount",value:function(){this.props.recentAttributeListInfo(),document.addEventListener("mousedown",this.handleClickOutside),this.props.errorClear()}},{key:"render",value:function(){var e=this,t=this.state,a=t.recentAttributeFlag,n=t.SuccessPopupFlag,r=t.autoSaveFlag,l=this.props,i=l.templateObj,c=l.location,u=i.recentAttribute,o=i.recentAttributeLoader,s=i.successPopup,p=i.successLoader,m=(i.templateDetailsInfo,i.autoSaveData),d={},b=c.state;if(b){var f=b.finalObj,h=this.inilitizeTempValue(f),v=f.isAcceptanceDocument,_=f.template_name,y=f.template_type,F=f.thumbnail;d.template_name=_,d.template_type=y,d.isAcceptanceDocument=v,d.thumbnail=F||"",d.attribute=h}else d.template_name="",d.template_type="",d.isAcceptanceDocument=!1,d.thumbnail="",d.attribute=[];var E=null!==m&&x()(m.createdAt).fromNow();return g.a.createElement(w.w,null,g.a.createElement("div",{id:"createTemp",className:"wrapper wrapper-content createTemp"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-xl-12"},g.a.createElement("div",{className:"containerBox p-0"},g.a.createElement("div",{className:"row"},g.a.createElement(S.d,{initialValues:d,validationSchema:O.a,onSubmit:this.handleSubmit,render:function(t){var n=t.values,l=t.errors,i=t.touched,c=t.handleSubmit,s=t.setFieldValue,d=t.setFieldTouched;return g.a.createElement(g.a.Fragment,null,g.a.createElement(S.b,{name:"attribute",render:function(t){return g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{id:"createTemplateleft",className:"col-xl-9 col-lg-8 col-sm-12 border-right py-4 pl-5"},g.a.createElement("div",{className:"table-title d-flex justify-content-between align-items-center mb-4"},g.a.createElement("ul",{className:"ks-cboxtags"},g.a.createElement("li",null,z&&g.a.createElement("i",{className:"fa fa-refresh fa-spin"})||g.a.createElement(g.a.Fragment,null,g.a.createElement("input",{type:"checkbox",id:"checkboxOne",value:"",onChange:function(t){return e.handleCheckboxAutoSave(t)},checked:null!==m&&r}),g.a.createElement("label",{htmlFor:"checkboxOne"},"Auto Save"))),null!==m&&g.a.createElement("li",null,g.a.createElement("span",null,"Last saved a ",E))),g.a.createElement("h2",{className:"f-b m-0"},"Create Template"),g.a.createElement("button",{type:"submit",onClick:c,className:"btn-primary p-2 next mr-15 templateButton",disabled:p,ref:e.buttonRef},p?g.a.createElement("i",{className:"fa fa-refresh fa-spin"}):0==n.isAcceptanceDocument?"Submit":"Next")),g.a.createElement("div",{className:"fixHeight",style:{minHeight:"calc(100vh - 280px)",position:"relative"}},g.a.createElement(S.c,null,g.a.createElement("ul",{className:"slides"},g.a.createElement(T.a,{setFieldTouched:d,values:n,errors:l,touched:i,setFieldValue:s,successLoader:p}),g.a.createElement("div",null,g.a.createElement(k.a,{data:n.attribute,setFieldTouched:d,values:n,errors:l,touched:i,setFieldValue:s,arrayHelpers:t}))))),g.a.createElement("div",{className:"dropup puls-drop show",ref:e.wrapperRef},g.a.createElement("a",{className:"btn plus-btn f-24 text-center p-2",onClick:function(){t.push({type:"attribute",attribute_name:"",attribute_dropdown:"",include_in_thumbnail:!1,description:""}),e.setState({addFlag:!1})}}," ",g.a.createElement("i",{className:"fas fa-plus"})))),g.a.createElement("div",{id:"createTemplateright",className:"col-xl-3 col-lg-4 col-sm-12"},g.a.createElement("ul",{className:"nav nav-pills my-3 flex-wrap justify-content-center",role:"tablist"},g.a.createElement("li",{className:"nav-item"},g.a.createElement("a",{className:"nav-link  ".concat(!0===a?"active":""),"data-toggle":"pill",role:"tab",onClick:function(){return e.handleTabAttribute("recent")}},"Recent Attributes")),g.a.createElement("li",{className:"nav-item"},g.a.createElement("a",{className:"nav-link  ".concat(!0===a?"":"active"),"data-toggle":"pill",role:"tab",onClick:function(){return e.handleTabAttribute("live")}},"Live Preview"))),g.a.createElement("div",{className:" recent-attribute-main-container"},g.a.createElement("div",null,g.a.createElement("div",{className:"tab-content pr-3 br-6 mr-2",style:{maxHeight:"calc(100vh - 320px)",overflowY:"auto"}},!0===a?g.a.createElement(A.a,{recentAttribute:a,recentAttributeLoader:o,attribute:u.length>0?u:[],addRecentAttribute:function(e){var a={type:"attribute",attribute_name:e.attribute_name||e.image_title||e.title,attribute_dropdown:e.dataType,include_in_thumbnail:e.include_in_thumbnail,description:e.description};t.push(a)}}):g.a.createElement(N.a,{attribute:n.attribute}))))))}}))}})))))),!0===n&&s?g.a.createElement(w.q,{msg:s.msg,closePopup:this.successPopupClosePopup,history:this.props.history}):null)}}]),a}(v.Component);t.default=Object(F.b)((function(e){return{templateObj:e.Template,template:e.Profile.template,error:e.Auth.error}}),(function(e){return{recentAttributeListInfo:function(){return e(D.Jc())},createTemplate:function(t){return e(D.L(t))},templateInitialization:function(){return e(D.fd())},errorClear:function(){return e(D.Fb())},autoSaveTemplate:function(t){return e(D.D(t))},getTemplateListInfo:function(t){return e(D.ac(t))}}}))(B)}}]);