(()=>{var e={};e.id=595,e.ids=[595],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},14385:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(3799),r(13586),r(35866),r(28928);var s=r(23191),n=r(88716),i=r(37922),o=r.n(i),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["(root)",{children:["contact-us",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3799)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/contact-us/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,13586)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,28928)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/contact-us/page.tsx"],u="/(root)/contact-us/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(root)/contact-us/page",pathname:"/contact-us",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},99598:(e,t,r)=>{Promise.resolve().then(r.bind(r,62571))},62571:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var s=r(10326),n=r(17577),i=r(35047),o=r(39454),a=r(44976),l=r(76667),c=r(80635);let d=async(e,t)=>(await c.x.get(`/contact?limit=${e}&page=${t}`)).data.data,u=async e=>(await c.x.delete(`/contact/${e}`)).data,p=async e=>(await c.x.post("/contact/",e)).data;var h=r(10119),x=r(95441),m=r(45313),g=r(92766),b=r(85366),j=r(73413),y=r(58072),f=r(91629),v=r(74723),w=r(71284);let k=({setIsOpen:e,data:t})=>{let{control:r,watch:n}=(0,v.cI)({defaultValues:{subject:t.subject,name:t.name,email:t.email,itemContent:t.content,content:""}}),i=(0,a.NL)();console.log("modal data",t);let{mutate:o,isPending:l}=(0,h.D)({mutationFn:async e=>await p(e),onSuccess:t=>{!0===t.status?(i.invalidateQueries({queryKey:["contact-us"]}),(0,g.xO)("پیام مورد نظر با موفقیت پاسخ داده شد"),e({key:"answer",isOpen:!1})):(0,g.xO)("مشکلی پیش آمده است . لطفا مجددا تلاش نمایید")}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.rj,{width:"100%",p:"5",gapY:"14px",children:[s.jsx(v.Qr,{name:"subject",control:r,render:({field:e})=>s.jsx(x.nv,{...e,placeholder:"موضوع",readOnly:!0,style:{borderRadius:12}})}),(0,s.jsxs)(x.rj,{width:"100%",columns:"2",gapX:"5",children:[s.jsx(v.Qr,{name:"name",control:r,render:({field:e})=>s.jsx(x.nv,{...e,placeholder:"نام و نام خانوادگی",readOnly:!0,style:{borderRadius:12}})}),s.jsx(v.Qr,{name:"email",control:r,render:({field:e})=>s.jsx(x.nv,{...e,placeholder:"ایمیل",readOnly:!0,style:{borderRadius:12}})})]}),s.jsx(v.Qr,{name:"itemContent",control:r,render:({field:e})=>s.jsx(x.Kx,{...e,placeholder:"پیام",rows:5,readOnly:!0,style:{borderRadius:12}})}),s.jsx(v.Qr,{name:"content",control:r,render:({field:e})=>s.jsx(x.Kx,{...e,placeholder:"متن پاسخ",rows:6,style:{borderRadius:12}})})]}),s.jsx(w.Z,{submitButtonText:"ارسال پاسخ",closeButtonText:"لغو و بازگشت",onCloseButton:()=>e({isOpen:!1,key:"answer"}),disabled:0===n("content").length,onSubmit:()=>{o({id:t.id,subject:n("subject"),content:n("content")})},isLoading:l})]})},C=e=>{let{index:t,subject:r,content:i,name:l,created_at:c,status:d,email:p,data:v}=e,[w,C]=(0,n.useState)({key:"answer",isOpen:!1}),P=(0,a.NL)(),{mutate:O,isPending:q}=(0,h.D)({mutationFn:async()=>await u(v.id),onSuccess:e=>{!0===e.status?(P.invalidateQueries({queryKey:["contact-us"]}),(0,g.xO)("پیام مورد نظر با موفقیت حذف شد"),C({key:"delete",isOpen:!1})):(0,g.bW)("مشکلی پیش آمده است . لطفا مجددا تلاش نمایید")}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.rj,{width:"100%",p:"4",gap:"4",style:{borderRadius:8,backgroundColor:t%2==0?y.K.blue[2]:y.K.pink[2],border:t%2==0?`1px solid ${y.K.blue[6]}`:`1px solid ${y.K.pink[6]}`},children:[(0,s.jsxs)(x.kC,{width:"100%",align:"center",justify:"between",children:[s.jsx(x.xv,{...f.p.body1,style:{color:y.K.gray[12]},children:r}),s.jsx(x.xv,{...f.p.body1,style:{color:y.K.gray[12]},children:p})]}),(0,s.jsxs)(x.kC,{direction:"column",gap:"1",children:[s.jsx(x.xv,{style:{color:y.K.gray[11],fontWeight:400,fontSize:"12px",lineHeight:"15.6px"},children:l||"__"}),s.jsx(x.xv,{style:{color:y.K.gray[9],fontWeight:400,fontSize:"10px",lineHeight:"13px"},children:c?(0,b.l)(c):"__"})]}),s.jsx(x.xv,{...f.p.paragraph1,style:{color:y.K.gray[11]},children:i}),(0,s.jsxs)(x.kC,{width:"100%",align:"center",justify:"end",gap:"2",children:[s.jsx(x.zx,{size:"2",variant:"soft",type:"button",colorVariant:"DONE"===d?"BLACK":"BLUE",onClick:()=>{"PENDING"===d&&C({key:"answer",isOpen:!0})},style:"DONE"===d?{pointerEvents:"none"}:{},children:"DONE"===d?(0,s.jsxs)(x.kC,{align:"center",gap:"2",children:[s.jsx(j.Jr,{}),s.jsx(x.xv,{...f.p.body3,children:"پاسخ داده شده"})]}):"PENDING"===d&&s.jsx(x.xv,{...f.p.body3,children:"بدون پاسخ"})}),s.jsx(x.hU,{size:"2",type:"button",colorVariant:"PINK",onClick:()=>C({key:"delete",isOpen:!0}),children:s.jsx(j.rF,{})})]})]}),(0,s.jsxs)(x.u_,{isOpen:w.isOpen,onClose:()=>C({...w,isOpen:!1}),children:["answer"===w.key&&"PENDING"===d&&(0,s.jsxs)(s.Fragment,{children:[s.jsx(m.Z,{title:"ثبت پاسخ",handleClose:()=>C({...w,isOpen:!1})}),s.jsx(k,{setIsOpen:()=>C({isOpen:!1,key:"answer"}),data:v})]}),"delete"===w.key&&(0,s.jsxs)(x.rj,{gapY:"24px",p:"5",children:[(0,s.jsxs)(x.xv,{children:["آیا از حذف مورد ",s.jsx("span",{style:{fontWeight:"bold",color:"red"},children:r})," اطمینان دارید؟"]}),(0,s.jsxs)(x.rj,{gap:"10px",columns:"2",children:[s.jsx(x.zx,{variant:"soft",size:"4",onClick:()=>O(),children:s.jsx(x.xv,{...f.p.body3,children:q?s.jsx(o.$j,{}):"بله"})}),s.jsx(x.zx,{type:"button",onClick:()=>C({...w,isOpen:!1}),variant:"solid",size:"4",children:s.jsx(x.xv,{...f.p.body3,children:"خیر"})})]})]})]})]})};var P=r(48780),O=r(14260),q=r(66736),_=r(17187);function R(){let e=(0,i.useSearchParams)(),[t,r]=(0,n.useState)(e.get("page")?Number(e.get("page")):1),c=(0,a.NL)(),{data:u,isLoading:p,isFetching:h,isError:m}=(0,l.a)({queryKey:["contact-us",t],queryFn:async()=>await d(10,t)});return(console.log(u,"DATA"),p||h)?s.jsx(x.kC,{width:"100%",height:"90vh",justify:"center",align:"center",children:s.jsx(o.$j,{style:{scale:2.5}})}):!u||m?(0,g.bW)("مشکلی پیش آمده . لطفا دوباره تلاش نمایید"):(0,s.jsxs)(x.kC,{direction:"column",children:[s.jsx(P.Z,{title:"پشتیبانی",isNavigation:!0}),s.jsx(x.xu,{p:{initial:"24px 24px 40px 40px",lg:"24px 110px 40px 40px "},children:s.jsx(x.rj,{width:"100%",maxWidth:"1920px",mx:"auto",children:(0,s.jsxs)(x.rj,{width:"100%",gapY:"5",children:[0===u.allContactRequests.length?s.jsx(x.kC,{width:"100%",mt:"4",children:s.jsx(x.X6,{as:"h4",size:"4",style:{color:y.K.gray[11]},children:"در حال حاضر پیامی برای نمایش وجود ندارد."})}):u.allContactRequests.map((e,t)=>s.jsx(C,{index:t,...e,data:e},t)),0!==u.allContactRequests.length&&(0,s.jsxs)(x.kC,{width:"100%",align:"center",justify:"between",children:[s.jsx(O.Z,{current:t,total:u?.totalPages,onPageChange:e=>{r(e),(0,_.Z)(e),c.invalidateQueries({queryKey:["contact-us"]})}}),s.jsx(q.Z,{data:u?.allContactRequests,currentPage:u?.currentPage,totalCount:u?.totalCount})]})]})})})]})}},33265:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var s=r(43353),n=r.n(s)},43353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let s=r(91174);r(10326),r(17577);let n=s._(r(77028));function i(e,t){var r;let s={loading:e=>{let{error:t,isLoading:r,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let i={...s,...t};return(0,n.default)({...i,modules:null==(r=i.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=r(94129);function n(e){let{reason:t,children:r}=e;throw new s.BailoutToCSRError(t)}},77028:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let s=r(10326),n=r(17577),i=r(933),o=r(46618);function a(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},r=(0,n.lazy)(()=>t.loader().then(a)),c=t.loading;function d(e){let a=c?(0,s.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.PreloadCss,{moduleIds:t.modules}),(0,s.jsx)(r,{...e})]}):(0,s.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(r,{...e})});return(0,s.jsx)(n.Suspense,{fallback:a,children:l})}return d.displayName="LoadableComponent",d}},46618:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let s=r(10326),n=r(55403);function i(e){let{moduleIds:t}=e,r=(0,n.getExpectedRequestStore)("next/dynamic css"),i=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,s.jsx)(s.Fragment,{children:i.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},48780:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var s=r(10326),n=r(17577),i=r(41678);r(10219);var o=r(98266),a=r(57457),l=r(95441),c=r(73413),d=r(58072);let u={desktop:"1280px"};var p=r(91629),h=r(90434),x=r(35047),m=r(38887),g=r(61505),b=r(76826);let j=({isMobile:e})=>{let{dispatch:t}=(0,g.a)(),r=(0,x.useSelectedLayoutSegment)();return(0,s.jsxs)(y,{mx:"auto",height:"100%",children:[s.jsx(l.rj,{width:"100%",children:(0,s.jsxs)(l.kC,{height:"100%",direction:"column",p:"4",gap:"4",children:[s.jsx(h.default,{href:"",children:s.jsx(f,{style:{margin:"auto"},children:s.jsx(c.wD,{width:"113px",height:"32px",cursor:"pointer"})})}),m.v.map((t,n)=>s.jsx(b.Z,{...t,activeSegment:r,isMobile:e},n))]})}),s.jsx(l.rj,{width:"fit-content",children:s.jsx(l.kC,{height:"fit-content",gap:"2",p:"4",children:(0,s.jsxs)(l.kC,{px:"4",gap:"2",align:"center",onClick:()=>{t({type:"LOGOUT"})},style:{cursor:"pointer"},children:[s.jsx(c.n$,{width:"16px",height:"16px"}),s.jsx(f,{children:s.jsx(l.xv,{...p.p.body3,style:{color:d.K.pink[11]},children:"خروج از حساب کاربری"})})]})})})]})},y=(0,a.ZP)(l.rj).withConfig({componentId:"sc-759d589f-0"})(["overflow-x:hidden;overflow-y:auto;white-space:nowrap;align-content:space-between;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}"]),f=a.ZP.div.withConfig({componentId:"sc-759d589f-1"})(["overflow:hidden;display:flex;flex-direction:column;"]),v=e=>{let{title:t,isNavigation:r}=e,i=(0,o.tv)(),[a,u]=(0,n.useState)(!1),h=()=>{u(e=>!e)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(w,{children:(0,s.jsxs)(k,{children:[(0,s.jsxs)(l.kC,{align:"center",gap:"16px",children:[s.jsx(C,{variant:"surface",onClick:h,children:s.jsx(c.Oq,{})}),s.jsx(l.xv,{...p.p.title1,style:{color:d.K.gray[11]},children:t})]}),r&&s.jsx(l.hU,{size:"3",variant:"surface",onClick:()=>i.back(),children:s.jsx(c.jb,{color:"#373737"})})]})}),s.jsx(P,{open:a,onClose:h,direction:"right",children:s.jsx(j,{isMobile:!0})})]})},w=a.ZP.header.withConfig({componentId:"sc-63cd502e-0"})(["padding:14.5px 24px;position:sticky;left:0;right:0;top:0;border-bottom:1px solid ",";background-color:",";box-shadow:",";z-index:10;@media (min-width:","){padding:14.5px 100px 14.5px 24px;}"],d.K.gray[6],d.K.gray[1],d.i.shadow1,u.desktop),k=(0,a.ZP)(l.kC).withConfig({componentId:"sc-63cd502e-1"})(["max-width:1920px;width:100%;display:flex;align-items:center;justify-content:space-between;margin:auto;"]),C=(0,a.ZP)(l.hU).withConfig({componentId:"sc-63cd502e-2"})(["display:flex;@media (min-width:","){display:none;}"],u.desktop),P=(0,a.ZP)(i.Z).withConfig({componentId:"sc-63cd502e-3"})(["width:max-content !important;border-bottom-left-radius:8px !important;border-top-left-radius:8px !important;"])},66736:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(10326);r(17577);var n=r(58072),i=r(91629),o=r(95441);let a=e=>{let{data:t,currentPage:r,totalCount:a,keyText:l="برنامه"}=e,c=t?.length,d=(r-1)*c+1;return s.jsx(o.xv,{...i.p.body2,style:{color:n.K.gray[11]},children:`${d}-${Math.min(d+c-1,a)} از ${a} ${l}`})}},71284:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(10326);r(17577);var n=r(39454),i=r(58072),o=r(91629),a=r(95441);let l=({isSubmit:e=!0,closeButtonText:t,submitButtonText:r,isLoading:l,onCloseButton:c,onSubmit:d,isDisableSubmitBtn:u=!1,disabled:p=!1})=>s.jsx(a.kC,{height:"max-content",gap:"16px",left:"0",p:"16px",right:"0",style:{backgroundColor:i.K.gray[2],marginBlockStart:"auto",borderTop:`1px solid ${i.K.gray[3]}`,boxShadow:i.i.shadow1,borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"},position:"sticky",bottom:"0px",children:(0,s.jsxs)(a.rj,{gap:"16px",columns:"2",children:[s.jsx(a.zx,{disabled:u||p,onClick:d,type:e?"submit":"button",variant:"soft",size:"3",style:{width:"fit-content",padding:"9.5px 38px"},children:l?s.jsx(n.$j,{}):s.jsx(a.xv,{...o.p.body1,children:r})}),s.jsx(a.zx,{type:"button",colorVariant:"PINK",size:"3",onClick:c,style:{width:"fit-content",padding:"9.5px 38px"},children:s.jsx(a.xv,{...o.p.body1,children:t})})]})})},45313:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(10326);r(17577);var n=r(57457),i=r(73413),o=r(58072),a=r(91629),l=r(95441);let c=({handleClose:e,title:t})=>(0,s.jsxs)(d,{position:"sticky",top:"0",p:"8px 16px",justify:"between",style:{backgroundColor:o.K.blue[10],zIndex:"100"},align:"center",children:[s.jsx(l.xv,{...a.p.title2,style:{color:o.K.gray[1],fontWeight:700},children:t}),s.jsx(l.hU,{type:"button",onClick:e,variant:"soft",size:"2",style:{backgroundColor:o.K.blue[9],borderRadius:"12px"},children:s.jsx(i.x8,{})})]}),d=(0,n.zo)(l.kC).withConfig({componentId:"sc-38bd6e22-0"})(["border-top-right-radius:8px;border-top-left-radius:8px;"])},14260:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(10326);r(17577),r(71222);var n=r(33265),i=r(95441),o=r(73413);r(21111);let a=(0,n.default)(async()=>{},{loadableGenerated:{modules:["src/libs/shared/custom-pagination/CustomPagination.tsx -> react-responsive-pagination"]},ssr:!1}),l=({current:e,total:t,onPageChange:r,...n})=>s.jsx(i.kC,{align:"center",maxWidth:"348px",children:s.jsx(a,{current:e,total:t,onPageChange:r,...n,className:"pagination",previousLabel:s.jsx(o.jR,{}),nextLabel:s.jsx(o.EB,{})})})},85366:(e,t,r)=>{"use strict";r.d(t,{l:()=>i});var s=r(4465),n=r.n(s);function i(e){return n()(e).locale("fa").format("jYYYY/jMM/jDD")}},80635:(e,t,r)=>{"use strict";r.d(t,{x:()=>a,z:()=>l});var s=r(35047),n=r(44099),i=r(46611);let o=Buffer.from("bznpanelapi:VX+kPbS#@sdD5$").toString("base64"),a=n.Z.create({baseURL:"https://api-admin-dev.darkube.app/v1/",headers:{"up-auth":`Basic ${o}`}}),l=n.Z.create({baseURL:"https://uploader.bezanimbiroon.ir",headers:{"Content-Type":"application/json","up-auth":`Basic ${o}`}});l.interceptors.request.use(e=>{let t=new i.Z().get("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),a.interceptors.request.use(e=>{let t=new i.Z().get("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>{if(e.response){let t=e.response.status;401===t?console.error("Unauthorized access - perhaps the token has expired"):403===t?console.error("Forbidden - You do not have permission to access this resource."):t>=500?(console.error("Server error - Please try again later."),(0,s.redirect)("/error")):console.error(`Error: ${e.response.statusText}`)}else e.request?(console.error("Network error - the request was made but no response was received"),(0,s.redirect)("/error")):((0,s.redirect)("/error"),console.error("Error:",e.message));return Promise.reject(e)})},17187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=e=>{}},3799:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>a});var s=r(68570);let n=(0,s.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/contact-us/page.tsx`),{__esModule:i,$$typeof:o}=n;n.default;let a=(0,s.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/contact-us/page.tsx#default`)},71222:()=>{},21111:()=>{},10119:(e,t,r)=>{"use strict";r.d(t,{D:()=>u});var s=r(17577),n=r(71180),i=r(12113),o=r(64351),a=r(3341),l=class extends o.l{#e;#t=void 0;#r;#s;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,a.VS)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,a.Ym)(t.mutationKey)!==(0,a.Ym)(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(e){this.#n(),this.#i(e)}getCurrentResult(){return this.#t}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#n(),this.#i()}mutate(e,t){return this.#s=t,this.#r?.removeObserver(this),this.#r=this.#e.getMutationCache().build(this.#e,this.options),this.#r.addObserver(this),this.#r.execute(e)}#n(){let e=this.#r?.state??(0,n.R)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#i(e){i.V.batch(()=>{if(this.#s&&this.hasListeners()){let t=this.#t.variables,r=this.#t.context;e?.type==="success"?(this.#s.onSuccess?.(e.data,t,r),this.#s.onSettled?.(e.data,null,t,r)):e?.type==="error"&&(this.#s.onError?.(e.error,t,r),this.#s.onSettled?.(void 0,e.error,t,r))}this.listeners.forEach(e=>{e(this.#t)})})}},c=r(44976),d=r(78613);function u(e,t){let r=(0,c.NL)(t),[n]=s.useState(()=>new l(r,e));s.useEffect(()=>{n.setOptions(e)},[n,e]);let o=s.useSyncExternalStore(s.useCallback(e=>n.subscribe(i.V.batchCalls(e)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),a=s.useCallback((e,t)=>{n.mutate(e,t).catch(d.Z)},[n]);if(o.error&&(0,d.L)(n.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:a,mutateAsync:o.mutate}}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[571,315,434,667,60,14,18,33],()=>r(14385));module.exports=s})();