(function(e){function t(t){for(var i,r,l=t[0],a=t[1],u=t[2],s=0,b=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},c={app:0},o=[];function r(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"56173015"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=c[e]=[t,i]}));t.push(n[2]=i);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.src=r(e);var u=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}c[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"067b":function(e,t,n){"use strict";n("fea0")},"0aef":function(e,t,n){e.exports=n.p+"img/icon-arrow-down.d0be4207.svg"},"11c2":function(e,t,n){"use strict";n("394b")},"394b":function(e,t,n){},"52cb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),c={key:0},o={key:0,class:"app flex"},r={class:"app-content flex flex-column"},l={key:1,class:"mobile-message flex flex-column"},a=Object(i["h"])("h2",null,"Sorry, this app is not supported on mobile devices",-1),u=Object(i["h"])("p",null,"To use this app, please use a computer or tablet",-1),s=[a,u];function d(e,t,n,a,u,d){var b=Object(i["A"])("Navigation"),O=Object(i["A"])("Modal"),f=Object(i["A"])("invoiceModal"),v=Object(i["A"])("router-view");return e.invoicesLoaded?(Object(i["t"])(),Object(i["g"])("div",c,[u.mobile?(Object(i["t"])(),Object(i["g"])("div",l,s)):(Object(i["t"])(),Object(i["g"])("div",o,[Object(i["j"])(b),Object(i["h"])("div",r,[e.modalActive?(Object(i["t"])(),Object(i["e"])(O,{key:0})):Object(i["f"])("",!0),Object(i["j"])(i["b"],{name:"invoice"},{default:Object(i["I"])((function(){return[e.invoiceModal?(Object(i["t"])(),Object(i["e"])(f,{key:0})):Object(i["f"])("",!0)]})),_:1}),Object(i["j"])(v)])]))])):Object(i["f"])("",!0)}var b=n("5530"),O=n("5502"),f=n("e88b"),v=n.n(f),p=function(e){return Object(i["w"])("data-v-39d5a431"),e=e(),Object(i["u"])(),e},j={class:"flex"},h=p((function(){return Object(i["h"])("div",{class:"branding flex"},[Object(i["h"])("img",{src:v.a,alt:" files"})],-1)})),m=[h];function I(e,t,n,c,o,r){return Object(i["t"])(),Object(i["g"])("header",j,m)}var y={name:"navigation"},C=(n("067b"),n("6b0d")),D=n.n(C);const g=D()(y,[["render",I],["__scopeId","data-v-39d5a431"]]);var x=g,E=n("7345"),T=n.n(E),_=n("d0d5"),A=n.n(_),N=function(e){return Object(i["w"])("data-v-5e76d9e4"),e=e(),Object(i["u"])(),e},k={key:1},P={key:2},S={class:"bill-from flex flex-column"},w=N((function(){return Object(i["h"])("h4",null,"Bill From",-1)})),L={class:"input flex flex-column"},U=N((function(){return Object(i["h"])("label",{for:"billerStreetAddress"},"Street Address",-1)})),G={class:"location-details flex"},V={class:"input flex flex-column"},M=N((function(){return Object(i["h"])("label",{for:"billerCity"},"City",-1)})),Z={class:"input flex flex-column"},R=N((function(){return Object(i["h"])("label",{for:"billerZipCode"},"Zip Code ",-1)})),F={class:"input flex flex-column"},q=N((function(){return Object(i["h"])("label",{for:"billerCountry"},"Country",-1)})),J={class:"bill-to flex flex-column"},z=N((function(){return Object(i["h"])("h4",null,"bill to",-1)})),$={class:"input flex flex-column"},H=N((function(){return Object(i["h"])("label",{for:"clientName"},"Client's Name",-1)})),B={class:"input flex flex-column"},Q=N((function(){return Object(i["h"])("label",{for:"clientEmail"},"Client's Email",-1)})),W={class:"input flex flex-column"},K=N((function(){return Object(i["h"])("label",{for:"clientStreetAddress"},"Street Address>",-1)})),Y={class:"location-details flex"},X={class:"input flex flex-column"},ee=N((function(){return Object(i["h"])("label",{for:"clientCity"},"City",-1)})),te={class:"input flex flex-column"},ne=N((function(){return Object(i["h"])("label",{for:"clientZipCode"},"Zip Code ",-1)})),ie={class:"input flex flex-column"},ce=N((function(){return Object(i["h"])("label",{for:"clientCountry"},"Country",-1)})),oe={class:"invoice-work flex flex-column"},re={class:"payment flex"},le={class:"input flex flex-column"},ae=N((function(){return Object(i["h"])("label",{for:"invoiceDate"},"Invoice Date",-1)})),ue={class:"input flex flex-column"},se=N((function(){return Object(i["h"])("label",{for:"paymentDueDate"},"Payment Due",-1)})),de={class:"input flex flex-column"},be=N((function(){return Object(i["h"])("label",{for:"paymentTerms"},"Payment Terms",-1)})),Oe=N((function(){return Object(i["h"])("option",{value:"30"},"Net 30 Days",-1)})),fe=N((function(){return Object(i["h"])("option",{value:"60"},"Net 60 Days",-1)})),ve=[Oe,fe],pe={class:"input flex flex-column"},je=N((function(){return Object(i["h"])("label",{for:"productDescription"},"Product Description",-1)})),he={class:"work-items"},me=N((function(){return Object(i["h"])("h3",null,"Item List",-1)})),Ie={class:"item-list"},ye=N((function(){return Object(i["h"])("tr",{class:"table-heading flex"},[Object(i["h"])("th",{class:"item-name"},"Item Name"),Object(i["h"])("th",{class:"qty"},"Qty"),Object(i["h"])("th",{class:"price"},"Price"),Object(i["h"])("th",{class:"total"},"Total")],-1)})),Ce={class:"item-name"},De=["onUpdate:modelValue"],ge={class:"qty"},xe=["onUpdate:modelValue"],Ee={class:"price"},Te=["onUpdate:modelValue"],_e={class:"total flex"},Ae=["onClick"],Ne=N((function(){return Object(i["h"])("img",{src:A.a,alt:""},null,-1)})),ke=Object(i["i"])(" Add New Item "),Pe=[Ne,ke],Se={class:"save flex"},we={class:"left"},Le={class:"right flex"},Ue={key:2,type:"submit",class:"purple"};function Ge(e,t,n,c,o,r){var l=Object(i["A"])("Loading");return Object(i["t"])(),Object(i["g"])("div",{onClick:t[19]||(t[19]=function(){return r.checkClick&&r.checkClick.apply(r,arguments)}),ref:"invoiceWrap",class:"invoice-wrap flex flex-column"},[Object(i["h"])("form",{onSubmit:t[18]||(t[18]=Object(i["K"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"])),class:"invoice-content"},[o.loading?(Object(i["t"])(),Object(i["e"])(l,{key:0})):Object(i["f"])("",!0),e.editInvoice?(Object(i["t"])(),Object(i["g"])("h1",P,"Edit Invoice")):(Object(i["t"])(),Object(i["g"])("h1",k,"New Invoice")),Object(i["h"])("div",S,[w,Object(i["h"])("div",L,[U,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"billerStreetAddress","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.billerStreetAddress=e})},null,512),[[i["F"],o.billerStreetAddress]])]),Object(i["h"])("div",G,[Object(i["h"])("div",V,[M,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"billerCity","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.billerCity=e})},null,512),[[i["F"],o.billerCity]])]),Object(i["h"])("div",Z,[R,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"billerZipCode","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.billerZipCode=e})},null,512),[[i["F"],o.billerZipCode]])]),Object(i["h"])("div",F,[q,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"billerCountry","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.billerCountry=e})},null,512),[[i["F"],o.billerCountry]])])])]),Object(i["h"])("div",J,[z,Object(i["h"])("div",$,[H,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"clientName","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.clientName=e})},null,512),[[i["F"],o.clientName]])]),Object(i["h"])("div",B,[Q,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"clientEmail","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.clientEmail=e})},null,512),[[i["F"],o.clientEmail]])]),Object(i["h"])("div",W,[K,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"clientStreetAddress","onUpdate:modelValue":t[6]||(t[6]=function(e){return o.clientStreetAddress=e})},null,512),[[i["F"],o.clientStreetAddress]])]),Object(i["h"])("div",Y,[Object(i["h"])("div",X,[ee,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"clientCity","onUpdate:modelValue":t[7]||(t[7]=function(e){return o.clientCity=e})},null,512),[[i["F"],o.clientCity]])]),Object(i["h"])("div",te,[ne,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"clientZipCode","onUpdate:modelValue":t[8]||(t[8]=function(e){return o.clientZipCode=e})},null,512),[[i["F"],o.clientZipCode]])]),Object(i["h"])("div",ie,[ce,Object(i["J"])(Object(i["h"])("input",{type:"text",required:"",id:"clientCountry","onUpdate:modelValue":t[9]||(t[9]=function(e){return o.clientCountry=e})},null,512),[[i["F"],o.clientCountry]])])])]),Object(i["h"])("div",oe,[Object(i["h"])("div",re,[Object(i["h"])("div",le,[ae,Object(i["J"])(Object(i["h"])("input",{disabled:"",type:"text",id:"invoiceDate","onUpdate:modelValue":t[10]||(t[10]=function(e){return o.invoiceDate=e})},null,512),[[i["F"],o.invoiceDate]])]),Object(i["h"])("div",ue,[se,Object(i["J"])(Object(i["h"])("input",{disabled:"",type:"text",id:"paymentDueDate","onUpdate:modelValue":t[11]||(t[11]=function(e){return o.paymentDueDate=e})},null,512),[[i["F"],o.paymentDueDate]])])]),Object(i["h"])("div",de,[be,Object(i["J"])(Object(i["h"])("select",{required:"",id:"paymentTerms","onUpdate:modelValue":t[12]||(t[12]=function(e){return o.paymentTerms=e})},ve,512),[[i["E"],o.paymentTerms]])]),Object(i["h"])("div",pe,[je,Object(i["J"])(Object(i["h"])("input",{required:"",type:"text",id:"productDescription","onUpdate:modelValue":t[13]||(t[13]=function(e){return o.productDescription=e})},null,512),[[i["F"],o.productDescription]])]),Object(i["h"])("div",he,[me,Object(i["h"])("table",Ie,[ye,(Object(i["t"])(!0),Object(i["g"])(i["a"],null,Object(i["z"])(o.invoiceItemList,(function(e,t){return Object(i["t"])(),Object(i["g"])("tr",{class:"table-items flex",key:t},[Object(i["h"])("td",Ce,[Object(i["J"])(Object(i["h"])("input",{type:"text","onUpdate:modelValue":function(t){return e.itemName=t}},null,8,De),[[i["F"],e.itemName]])]),Object(i["h"])("td",ge,[Object(i["J"])(Object(i["h"])("input",{type:"text","onUpdate:modelValue":function(t){return e.qty=t}},null,8,xe),[[i["F"],e.qty]])]),Object(i["h"])("td",Ee,[Object(i["J"])(Object(i["h"])("input",{type:"text","onUpdate:modelValue":function(t){return e.price=t}},null,8,Te),[[i["F"],e.price]])]),Object(i["h"])("td",_e," $"+Object(i["C"])(e.total=e.qty*e.price),1),Object(i["h"])("img",{onClick:function(t){return r.deleteInvoiceItem(e.id)},src:T.a,alt:"",class:"trash"},null,8,Ae)])})),128))]),Object(i["h"])("div",{onClick:t[14]||(t[14]=function(){return r.addNewInvoiceItem&&r.addNewInvoiceItem.apply(r,arguments)}),class:"flex button"},Pe)])]),Object(i["h"])("div",Se,[Object(i["h"])("div",we,[Object(i["h"])("button",{type:"button",onClick:t[15]||(t[15]=function(){return r.closeInvoice&&r.closeInvoice.apply(r,arguments)}),class:"red"}," Cancel ")]),Object(i["h"])("div",Le,[e.editInvoice?Object(i["f"])("",!0):(Object(i["t"])(),Object(i["g"])("button",{key:0,type:"submit",onClick:t[16]||(t[16]=function(){return r.saveDraft&&r.saveDraft.apply(r,arguments)}),class:"dark-purple"}," save Draft ")),e.editInvoice?Object(i["f"])("",!0):(Object(i["t"])(),Object(i["g"])("button",{key:1,type:"submit",onClick:t[17]||(t[17]=function(){return r.publishInvoice&&r.publishInvoice.apply(r,arguments)}),class:"purple"}," Create Invoice ")),e.editInvoice?(Object(i["t"])(),Object(i["g"])("button",Ue,"Update Invoice")):Object(i["f"])("",!0)])])],32)],512)}var Ve=n("1da1"),Me=(n("96cf"),n("4de4"),n("d3b7"),n("159b"),n("4f60")),Ze=(n("1862"),{apiKey:"AIzaSyD7_4o0hpaYbmda-nR6ROiQRQh2js_ZMpI",authDomain:"my-invoice-app-f7ecc.firebaseapp.com",projectId:"my-invoice-app-f7ecc",storageBucket:"my-invoice-app-f7ecc.appspot.com",messagingSenderId:"485809309144",appId:"1:485809309144:web:f27fb52c1af08cfa971ead"}),Re=Me["a"].initializeApp(Ze),Fe=Re.firestore(),qe=n("8a77"),Je={class:"loading"},ze=Object(i["h"])("span",null,null,-1),$e=[ze];function He(e,t,n,c,o,r){return Object(i["t"])(),Object(i["g"])("div",Je,$e)}var Be={name:"loading"};n("9c88");const Qe=D()(Be,[["render",He]]);var We=Qe,Ke={components:{Loading:We},name:"invoiceModal",data:function(){return{dateOptions:{year:"numeric",month:"short",day:"numeric"},docId:null,billerStreetAddress:null,billerCity:null,billerZipCode:null,billerCountry:null,clientName:null,clientEmail:null,clientStreetAddress:null,clientCity:null,clientZipCode:null,clientCountry:null,invoiceDateUnix:null,invoiceDate:null,paymentTerms:null,paymentDueDateUnix:null,paymentDueDate:null,productDescription:null,invoicePending:null,invoiceDraft:null,invoiceItemList:[],invoiceTotal:0,loading:null}},created:function(){if(this.editInvoice||(this.invoiceDateUnix=Date.now(),this.invoiceDate=new Date(this.invoiceDateUnix).toLocaleDateString("en-us",this.dateOptions)),this.editInvoice){var e=this.currentInvoiceArray[0];this.docId=e.docId,this.billerStreetAddress=e.billerStreetAddress,this.billerCity=e.billerCity,this.billerZipCode=e.billerZipCode,this.billerCountry=e.billerCountry,this.clientName=e.clientName,this.clientEmail=e.clientEmail,this.clientStreetAddress=e.clientStreetAddress,this.clientCity=e.clientCity,this.clientZipCode=e.clientZipCode,this.clientCountry=e.clientCountry,this.invoiceDateUnix=e.invoiceDateUnix,this.invoiceDate=e.invoiceDate,this.paymentTerms=e.paymentTerms,this.paymentDueDateUnix=e.paymentDueDateUnix,this.paymentDueDate=e.paymentDueDate,this.productDescription=e.productDescription,this.invoicePending=e.invoicePending,this.invoiceDraft=e.invoiceDraft,this.invoiceItemList=e.invoiceItemList,this.invoiceTotal=e.invoiceTotal}},methods:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(O["c"])(["TOGGLE_INVOICE","TOGGLE_MODAL","TOGGLE_EDIT_INVOICE"])),Object(O["b"])(["UPDATE_INVOICE","GET_INVOICES"])),{},{checkClick:function(e){e.target===this.$refs.invoiceWrap&&this.TOGGLE_MODAL()},closeInvoice:function(){this.TOGGLE_INVOICE(),this.editInvoice&&this.TOGGLE_EDIT_INVOICE()},addNewInvoiceItem:function(){this.invoiceItemList.push({id:Object(qe["a"])(),itemName:"",qty:"",price:0,total:0})},deleteInvoiceItem:function(e){this.invoiceItemList=this.invoiceItemList.filter((function(t){return t.id!==e}))},calInvoiceTotal:function(){var e=this;this.invoiceTotal=0,this.invoiceItemList.forEach((function(t){e.invoiceTotal+=t.total}))},publishInvoice:function(){this.invoicePending=!0},saveDraft:function(){this.invoiceDraft=!0},uploadInvoice:function(){var e=this;return Object(Ve["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.invoiceItemList.length<=0)){t.next=3;break}return alert("Please ensure you fill out work item"),t.abrupt("return");case 3:return e.loading=!0,e.calInvoiceTotal(),n=Fe.collection("invoices").doc(),t.next=8,n.set({invoiceId:Object(qe["a"])(6),billerStreetAddress:e.billerStreetAddress,billerCity:e.billerCity,billerZipCode:e.billerZipCode,billerCountry:e.billerCountry,clientName:e.clientName,clientEmail:e.clientEmail,clientStreetAddress:e.clientStreetAddress,clientCity:e.clientCity,clientZipCode:e.clientZipCode,clientCountry:e.clientCountry,invoiceDate:e.invoiceDate,invoiceDateUnix:e.invoiceDateUnix,paymentTerms:e.paymentTerms,paymentDueDate:e.paymentDueDate,paymentDueDateUnix:e.paymentDueDateUnix,productDescription:e.productDescription,invoiceItemList:e.invoiceItemList,invoiceTotal:e.invoiceTotal,invoicePending:e.invoicePending,invoiceDraft:e.invoiceDraft,invoicePaid:null});case 8:e.loading=!1,e.TOGGLE_INVOICE(),e.GET_INVOICES();case 11:case"end":return t.stop()}}),t)})))()},updateInvoice:function(){var e=this;return Object(Ve["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.invoiceItemList.length<=0)){t.next=3;break}return alert("Please ensure you fill out work item"),t.abrupt("return");case 3:return e.loading=!0,e.calInvoiceTotal(),n=Fe.collection("invoices").doc(e.docId),t.next=8,n.update({billerStreetAddress:e.billerStreetAddress,billerCity:e.billerCity,billerZipCode:e.billerZipCode,billerCountry:e.billerCountry,clientName:e.clientName,clientEmail:e.clientEmail,clientStreetAddress:e.clientStreetAddress,clientCity:e.clientCity,clientZipCode:e.clientZipCode,clientCountry:e.clientCountry,paymentTerms:e.paymentTerms,paymentDueDate:e.paymentDueDate,paymentDueDateUnix:e.paymentDueDateUnix,productDescription:e.productDescription,invoiceItemList:e.invoiceItemList,invoiceTotal:e.invoiceTotal});case 8:e.loading=!1,i={docId:e.docId,routeId:e.$route.params.invoiceId},e.UPDATE_INVOICE(i);case 11:case"end":return t.stop()}}),t)})))()},submitForm:function(){this.editInvoice?this.updateInvoice():this.uploadInvoice()}}),computed:Object(b["a"])({},Object(O["d"])(["editInvoice","currentInvoiceArray"])),watch:{paymentTerms:function(){var e=new Date;this.paymentDueDateUnix=e.setDate(e.getDate()+parseInt(this.paymentTerms)),this.paymentDueDate=new Date(this.paymentDueDateUnix).toLocaleDateString("en-us",this.dateOptions)}}};n("904d");const Ye=D()(Ke,[["render",Ge],["__scopeId","data-v-5e76d9e4"]]);var Xe=Ye,et=function(e){return Object(i["w"])("data-v-25ccf03c"),e=e(),Object(i["u"])(),e},tt={class:"modal flex"},nt={class:"modal-content"},it=et((function(){return Object(i["h"])("p",null,"Are you sure you want to exit? Your changes will not be saved.",-1)})),ct={class:"actions flex"};function ot(e,t,n,c,o,r){return Object(i["t"])(),Object(i["g"])("div",tt,[Object(i["h"])("div",nt,[it,Object(i["h"])("div",ct,[Object(i["h"])("button",{onClick:t[0]||(t[0]=function(){return r.closeModal&&r.closeModal.apply(r,arguments)}),class:"purple"},"Return"),Object(i["h"])("button",{onClick:t[1]||(t[1]=function(){return r.closeInvoice&&r.closeInvoice.apply(r,arguments)}),class:"red"},"Close")])])])}var rt={name:"modal",methods:Object(b["a"])(Object(b["a"])({},Object(O["c"])(["TOGGLE_MODAL","TOGGLE_INVOICE","TOGGLE_EDIT_INVOICE"])),{},{closeModal:function(){this.TOGGLE_MODAL()},closeInvoice:function(){this.TOGGLE_MODAL(),this.TOGGLE_INVOICE(),this.editInvoice&&this.TOGGLE_EDIT_INVOICE()}}),computed:Object(b["a"])({},Object(O["d"])(["editInvoice"]))};n("acbc");const lt=D()(rt,[["render",ot],["__scopeId","data-v-25ccf03c"]]);var at=lt,ut={name:"Home",data:function(){return{mobile:null}},components:{Navigation:x,invoiceModal:Xe,Modal:at},created:function(){this.GET_INVOICES(),this.checkScreen(),window.addEventListener("resize",this.checkScreen)},methods:Object(b["a"])(Object(b["a"])({},Object(O["b"])(["GET_INVOICES"])),{},{checkScreen:function(){var e=window.innerWidth;this.mobile=e<=750}}),computed:Object(b["a"])({},Object(O["d"])(["invoiceModal","modalActive","invoicesLoaded"]))};n("fa86");const st=D()(ut,[["render",d]]);var dt=st,bt=(n("3ca3"),n("ddb0"),n("6c02")),Ot=n("0aef"),ft=n.n(Ot),vt=n("952f"),pt=n.n(vt),jt=function(e){return Object(i["w"])("data-v-4d786c5f"),e=e(),Object(i["u"])(),e},ht={class:"home container"},mt={class:"header flex"},It={class:"left flex flex-column"},yt=jt((function(){return Object(i["h"])("h1",null,"Invoices",-1)})),Ct={class:"right flex"},Dt=Object(i["i"])("Filter by status "),gt={key:0},xt=jt((function(){return Object(i["h"])("img",{src:ft.a,alt:""},null,-1)})),Et={class:"filter-menu"},Tt=jt((function(){return Object(i["h"])("div",{class:"inner-button flex"},[Object(i["h"])("img",{src:A.a,alt:""})],-1)})),_t=jt((function(){return Object(i["h"])("span",null,"New Invoice",-1)})),At=[Tt,_t],Nt={key:0},kt={key:1,class:"empty flex flex-column"},Pt=jt((function(){return Object(i["h"])("img",{src:pt.a,alt:" no invoice"},null,-1)})),St=jt((function(){return Object(i["h"])("h3",null,"There is nothing here",-1)})),wt=jt((function(){return Object(i["h"])("p",null,"Create a new invoice by clicking on the New Invoice button and get started",-1)})),Lt=[Pt,St,wt];function Ut(e,t,n,c,o,r){var l=Object(i["A"])("Invoice");return Object(i["t"])(),Object(i["g"])("div",ht,[Object(i["h"])("div",mt,[Object(i["h"])("div",It,[yt,Object(i["h"])("span",null,"There are "+Object(i["C"])(e.invoiceData.length)+" total invoices",1)]),Object(i["h"])("div",Ct,[Object(i["h"])("div",{onClick:t[4]||(t[4]=function(){return r.toggleFilterMenu&&r.toggleFilterMenu.apply(r,arguments)}),class:"filter flex"},[Object(i["h"])("span",null,[Dt,o.filteredInvoice?(Object(i["t"])(),Object(i["g"])("span",gt,": "+Object(i["C"])(o.filteredInvoice),1)):Object(i["f"])("",!0)]),xt,Object(i["J"])(Object(i["h"])("ul",Et,[Object(i["h"])("li",{onClick:t[0]||(t[0]=function(){return r.filteredInvoices&&r.filteredInvoices.apply(r,arguments)})},"Draft"),Object(i["h"])("li",{onClick:t[1]||(t[1]=function(){return r.filteredInvoices&&r.filteredInvoices.apply(r,arguments)})},"Pending"),Object(i["h"])("li",{onClick:t[2]||(t[2]=function(){return r.filteredInvoices&&r.filteredInvoices.apply(r,arguments)})},"Paid"),Object(i["h"])("li",{onClick:t[3]||(t[3]=function(){return r.filteredInvoices&&r.filteredInvoices.apply(r,arguments)})},"Clear Filter")],512),[[i["G"],o.filterMenu]])]),Object(i["h"])("div",{onClick:t[5]||(t[5]=function(){return r.newInvoice&&r.newInvoice.apply(r,arguments)}),class:"button flex"},At)])]),e.invoiceData.length>0?(Object(i["t"])(),Object(i["g"])("div",Nt,[(Object(i["t"])(!0),Object(i["g"])(i["a"],null,Object(i["z"])(r.filteredData,(function(e,t){return Object(i["t"])(),Object(i["e"])(l,{key:t,invoice:e},null,8,["invoice"])})),128))])):(Object(i["t"])(),Object(i["g"])("div",kt,Lt))])}var Gt=n("c43b"),Vt=n.n(Gt),Mt=function(e){return Object(i["w"])("data-v-3cc1ffbe"),e=e(),Object(i["u"])(),e},Zt={class:"left flex"},Rt={class:"tracking-number"},Ft={class:"due-date"},qt={class:"person"},Jt={class:"right flex"},zt={class:"price"},$t={key:0},Ht={key:1},Bt={key:2},Qt=Mt((function(){return Object(i["h"])("div",{class:"icon"},[Object(i["h"])("img",{src:Vt.a,alt:""})],-1)}));function Wt(e,t,n,c,o,r){var l=Object(i["A"])("router-link");return Object(i["t"])(),Object(i["e"])(l,{class:"invoice flex",to:{name:"Invoice",params:{invoiceId:n.invoice.invoiceId}}},{default:Object(i["I"])((function(){return[Object(i["h"])("div",Zt,[Object(i["h"])("span",Rt,"#"+Object(i["C"])(n.invoice.invoiceId),1),Object(i["h"])("span",Ft,Object(i["C"])(n.invoice.paymentDueDate),1),Object(i["h"])("span",qt,Object(i["C"])(n.invoice.clientName),1)]),Object(i["h"])("div",Jt,[Object(i["h"])("span",zt,"$"+Object(i["C"])(n.invoice.invoiceTotal),1),Object(i["h"])("div",{class:Object(i["p"])(["status-button flex",{paid:n.invoice.invoicePaid,draft:n.invoice.invoiceDraft,pending:n.invoice.invoicePending}])},[n.invoice.invoicePaid?(Object(i["t"])(),Object(i["g"])("span",$t,"Paid")):Object(i["f"])("",!0),n.invoice.invoiceDraft?(Object(i["t"])(),Object(i["g"])("span",Ht,"Draft")):Object(i["f"])("",!0),n.invoice.invoicePending?(Object(i["t"])(),Object(i["g"])("span",Bt,"Pending")):Object(i["f"])("",!0)],2),Qt])]})),_:1},8,["to"])}var Kt={name:"invoice",props:["invoice"]};n("cc56");const Yt=D()(Kt,[["render",Wt],["__scopeId","data-v-3cc1ffbe"]]);var Xt=Yt,en={name:"Home",data:function(){return{filterMenu:null,filteredInvoice:null}},components:{Invoice:Xt},methods:Object(b["a"])(Object(b["a"])({},Object(O["c"])(["TOGGLE_INVOICE"])),{},{newInvoice:function(){console.log("clicked"),this.TOGGLE_INVOICE()},toggleFilterMenu:function(){this.filterMenu=!this.filterMenu},filteredInvoices:function(e){"Clear Filter"===e.target.innerText&&(this.filteredInvoice=null),this.filteredInvoice=e.target.innerText}}),computed:Object(b["a"])(Object(b["a"])({},Object(O["d"])(["invoiceData"])),{},{filteredData:function(){var e=this;return this.invoiceData.filter((function(t){return"Draft"===e.filteredInvoice?!0===t.invoiceDraft:"Pending"===e.filteredInvoice?!0===t.invoicePending:"Paid"===e.filteredInvoice?!0===t.invoicePaid:t}))}})};n("a3dd");const tn=D()(en,[["render",Ut],["__scopeId","data-v-4d786c5f"]]);var nn=tn,cn=n("9ef1"),on=n.n(cn),rn=function(e){return Object(i["w"])("data-v-ef1e6570"),e=e(),Object(i["u"])(),e},ln={key:0,class:"invoice-view container"},an=rn((function(){return Object(i["h"])("img",{src:on.a,alt:""},null,-1)})),un=Object(i["i"])(" Go Back "),sn={class:"header flex"},dn={class:"left flex"},bn=rn((function(){return Object(i["h"])("span",null,"Status",-1)})),On={key:0},fn={key:1},vn={key:2},pn={class:"right flex"},jn={class:"invoice-details flex flex-column"},hn={class:"top flex"},mn={class:"left flex"},In=rn((function(){return Object(i["h"])("span",null,"#",-1)})),yn={class:"right flex flex-column"},Cn={class:"middle flex"},Dn={class:"payment flex flex-column"},gn=rn((function(){return Object(i["h"])("h4",null,"Invoice Date",-1)})),xn=rn((function(){return Object(i["h"])("h4",null,"Payment Date",-1)})),En={class:"bill flex flex-column"},Tn=rn((function(){return Object(i["h"])("h4",null,"Bill to",-1)})),_n={class:"send-to flex flex-column"},An=rn((function(){return Object(i["h"])("h4",null,"Send To",-1)})),Nn={class:"bottom flex flex-column"},kn={class:"billing-items"},Pn=rn((function(){return Object(i["h"])("div",{class:"heading flex"},[Object(i["h"])("p",null,"Item Name"),Object(i["h"])("p",null,"Qty"),Object(i["h"])("p",null,"Price"),Object(i["h"])("p",null,"Total")],-1)})),Sn={class:"total flex"},wn=rn((function(){return Object(i["h"])("p",null,"Amount Due",-1)}));function Ln(e,t,n,c,o,r){var l=Object(i["A"])("router-link");return Object(i["t"])(),Object(i["g"])(i["a"],null,[Object(i["i"])(Object(i["C"])(o.currentInvoice)+" ",1),o.currentInvoice?(Object(i["t"])(),Object(i["g"])("div",ln,[Object(i["j"])(l,{class:"nav-link flex",to:{name:"Home"}},{default:Object(i["I"])((function(){return[an,un]})),_:1}),Object(i["h"])("div",sn,[Object(i["h"])("div",dn,[bn,Object(i["h"])("div",{class:Object(i["p"])(["status-button flex",{paid:o.currentInvoice.invoicePaid,draft:o.currentInvoice.invoiceDraft,pending:o.currentInvoice.invoicePending}])},[o.currentInvoice.invoicePaid?(Object(i["t"])(),Object(i["g"])("span",On,"Paid")):Object(i["f"])("",!0),o.currentInvoice.invoiceDraft?(Object(i["t"])(),Object(i["g"])("span",fn,"Draft")):Object(i["f"])("",!0),o.currentInvoice.invoicePending?(Object(i["t"])(),Object(i["g"])("span",vn,"Pending")):Object(i["f"])("",!0)],2)]),Object(i["h"])("div",pn,[Object(i["h"])("button",{class:"dark-purple",onClick:t[0]||(t[0]=function(){return r.toggleEditInvoice&&r.toggleEditInvoice.apply(r,arguments)})}," Edit "),Object(i["h"])("button",{onClick:t[1]||(t[1]=function(e){return r.deleteInvoice(o.currentInvoice.docId)}),class:"red"}," Delete "),o.currentInvoice.invoicePending?(Object(i["t"])(),Object(i["g"])("button",{key:0,class:"green",onClick:t[2]||(t[2]=function(e){return r.updateStatusToPaid(o.currentInvoice.docId)})}," Mark as Paid ")):Object(i["f"])("",!0),o.currentInvoice.invoiceDraft||o.currentInvoice.invoicePaid?(Object(i["t"])(),Object(i["g"])("button",{key:1,onClick:t[3]||(t[3]=function(e){return r.updateStatusToPending(o.currentInvoice.docId)}),class:"orange"}," Mark as Pending ")):Object(i["f"])("",!0)])]),Object(i["h"])("div",jn,[Object(i["h"])("div",hn,[Object(i["h"])("div",mn,[Object(i["h"])("p",null,[In,Object(i["i"])(Object(i["C"])(o.currentInvoice.invoiceId),1)]),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.productDescription),1)]),Object(i["h"])("div",yn,[Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.billerStreetAddress),1),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.billerCity),1),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.billerZipCode),1),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.billerCountry),1)])]),Object(i["h"])("div",Cn,[Object(i["h"])("div",Dn,[gn,Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.invoiceDate),1),xn,Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.paymentDueDate),1)]),Object(i["h"])("div",En,[Tn,Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.clientName),1),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.clientStreetAddress),1),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.clientCity),1),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.clientZipCode),1),Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.clientCountry),1)]),Object(i["h"])("div",_n,[An,Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.clientEmail),1)])]),Object(i["h"])("div",Nn,[Object(i["h"])("div",kn,[Pn,(Object(i["t"])(!0),Object(i["g"])(i["a"],null,Object(i["z"])(o.currentInvoice.invoiceItemList,(function(e,t){return Object(i["t"])(),Object(i["g"])("div",{key:t,class:"item flex"},[Object(i["h"])("p",null,Object(i["C"])(e.itemName),1),Object(i["h"])("p",null,Object(i["C"])(e.qty),1),Object(i["h"])("p",null,Object(i["C"])(e.price),1),Object(i["h"])("p",null,Object(i["C"])(e.total),1)])})),128))]),Object(i["h"])("div",Sn,[wn,Object(i["h"])("p",null,Object(i["C"])(o.currentInvoice.invoiceTotal),1)])])])])):Object(i["f"])("",!0)],64)}var Un={name:"invoiceView",data:function(){return{currentInvoice:null}},created:function(){this.getCurrentInvoice()},methods:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(O["c"])(["SET_CURRENT_INVOICE","TOGGLE_EDIT_INVOICE","TOGGLE_INVOICE"])),Object(O["b"])(["DELETE_INVOICE","UPDATE_STATUS_TO_PENDING","UPDATE_STATUS_TO_PAID"])),{},{getCurrentInvoice:function(){this.SET_CURRENT_INVOICE(this.$route.params.invoiceId),this.currentInvoice=this.currentInvoiceArray[0]},toggleEditInvoice:function(){this.TOGGLE_EDIT_INVOICE(),this.TOGGLE_INVOICE()},deleteInvoice:function(e){var t=this;return Object(Ve["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,t.DELETE_INVOICE(e);case 3:t.$router.push({name:"Home"});case 4:case"end":return n.stop()}}),n)})))()},updateStatusToPaid:function(e){this.UPDATE_STATUS_TO_PAID(e)},updateStatusToPending:function(e){this.UPDATE_STATUS_TO_PENDING(e)}}),computed:Object(b["a"])({},Object(O["d"])(["currentInvoiceArray","editInvoice"])),watch:{editInvoice:function(){this.editInvoice||(this.currentInvoice=this.currentInvoiceArray[0])}}};n("11c2");const Gn=D()(Un,[["render",Ln],["__scopeId","data-v-ef1e6570"]]);var Vn=Gn,Mn=[{path:"/",name:"Home",component:nn},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/invoice/:invoiceId",name:"Invoice",component:Vn}],Zn=Object(bt["a"])({history:Object(bt["b"])("/"),routes:Mn}),Rn=Zn,Fn=Object(O["a"])({state:{invoiceData:[],invoiceModal:null,modalActive:null,invoicesLoaded:null,currentInvoiceArray:null,editInvoice:null},mutations:{TOGGLE_INVOICE:function(e){e.invoiceModal=!e.invoiceModal},TOGGLE_MODAL:function(e){e.modalActive=!e.modalActive},SET_INVOICE_DATA:function(e,t){e.invoiceData.push(t),console.log(e.invoiceData)},INVOICES_LOADED:function(e){e.invoicesLoaded=!0},SET_CURRENT_INVOICE:function(e,t){e.currentInvoiceArray=e.invoiceData.filter((function(e){return e.invoiceId===t}))},TOGGLE_EDIT_INVOICE:function(e){e.editInvoice=!e.editInvoice},DELETE_INVOICE:function(e,t){e.invoiceData=e.invoiceData.filter((function(e){return e.docId!==t}))},UPDATE_STATUS_TO_PAID:function(e,t){e.invoiceData.forEach((function(e){e.docId==t&&(e.invoicePaid=!0,e.invoicePending=!1)}))},UPDATE_STATUS_TO_PENDING:function(e,t){e.invoiceData.forEach((function(e){e.docId==t&&(e.invoicePaid=!1,e.invoicePending=!0,e.invoicedraft=!1)}))}},actions:{GET_INVOICES:function(e){return Object(Ve["a"])(regeneratorRuntime.mark((function t(){var n,i,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,i=e.state,c=Fe.collection("invoices"),t.next=4,c.get();case 4:o=t.sent,o.forEach((function(e){if(!i.invoiceData.some((function(t){return t.docId===e.id}))){var t={docId:e.id,invoiceId:e.data().invoiceId,billerStreetAddress:e.data().billerStreetAddress,billerCity:e.data().billerCity,billerZipCode:e.data().billerZipCode,billerCountry:e.data().billerCountry,clientName:e.data().clientName,clientEmail:e.data().clientEmail,clientStreetAddress:e.data().clientStreetAddress,clientCity:e.data().clientCity,clientZipCode:e.data().clientZipCode,clientCountry:e.data().clientCountry,invoiceDateUnix:e.data().invoiceDateUnix,invoiceDate:e.data().invoiceDate,paymentTerms:e.data().paymentTerms,paymentDueDateUnix:e.data().paymentDueDateUnix,paymentDueDate:e.data().paymentDueDate,productDescription:e.data().productDescription,invoiceItemList:e.data().invoiceItemList,invoiceTotal:e.data().invoiceTotal,invoicePending:e.data().invoicePending,invoiceDraft:e.data().invoiceDraft,invoicePaid:e.data().invoicePaid};n("SET_INVOICE_DATA",t)}})),n("INVOICES_LOADED");case 7:case"end":return t.stop()}}),t)})))()},UPDATE_INVOICE:function(e,t){return Object(Ve["a"])(regeneratorRuntime.mark((function n(){var i,c,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,c=e.dispatch,o=t.docId,r=t.routeId,i("DELETE_INVOICE",o),n.next=5,c("GET_INVOICES");case 5:i("TOGGLE_INVOICE"),i("TOGGLE_EDIT_INVOICE"),i("SET_CURRENT_INVOICE",r);case 8:case"end":return n.stop()}}),n)})))()},DELETE_INVOICE:function(e,t){return Object(Ve["a"])(regeneratorRuntime.mark((function n(){var i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,c=Fe.collection("invoices").doc(t),n.next=4,c.delete();case 4:i("DELETE_INVOICE",t);case 5:case"end":return n.stop()}}),n)})))()},UPDATE_STATUS_TO_PAID:function(e,t){return Object(Ve["a"])(regeneratorRuntime.mark((function n(){var i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,c=Fe.collection("invoices").doc(t),n.next=4,c.update({invoicePaid:!0,invoicePending:!1});case 4:i("UPDATE_STATUS_TO_PAID",t);case 5:case"end":return n.stop()}}),n)})))()},UPDATE_STATUS_TO_PENDING:function(e,t){return Object(Ve["a"])(regeneratorRuntime.mark((function n(){var i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,c=Fe.collection("invoices").doc(t),n.next=4,c.update({invoicePaid:!1,invoicePending:!0,invoiceDraft:!1});case 4:i("UPDATE_STATUS_TO_PENDING",t);case 5:case"end":return n.stop()}}),n)})))()}},modules:{}});Object(i["d"])(dt).use(Fn).use(Rn).mount("#app")},7345:function(e,t,n){e.exports=n.p+"img/icon-delete.f4e672a7.svg"},"7dbc":function(e,t,n){},"8d39":function(e,t,n){},"904d":function(e,t,n){"use strict";n("d0a2")},"952f":function(e,t,n){e.exports=n.p+"img/illustration-empty.b5ea7699.svg"},"9c88":function(e,t,n){"use strict";n("cf2e")},"9ef1":function(e,t,n){e.exports=n.p+"img/icon-arrow-left.84c9b35f.svg"},a3dd:function(e,t,n){"use strict";n("c290")},acbc:function(e,t,n){"use strict";n("8d39")},c290:function(e,t,n){},c43b:function(e,t,n){e.exports=n.p+"img/icon-arrow-right.7b0bb5ab.svg"},cc56:function(e,t,n){"use strict";n("7dbc")},cf2e:function(e,t,n){},d0a2:function(e,t,n){},d0d5:function(e,t,n){e.exports=n.p+"img/icon-plus.e562c3c7.svg"},e88b:function(e,t,n){e.exports=n.p+"img/file-invoice-dollar-solid.4c212de9.png"},fa86:function(e,t,n){"use strict";n("52cb")},fea0:function(e,t,n){}});
//# sourceMappingURL=app.4f36b0a8.js.map