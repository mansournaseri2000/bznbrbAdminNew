exports.id=280,exports.ids=[280],exports.modules={55266:(e,t,r)=>{Promise.resolve().then(r.bind(r,40059))},42500:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(10326);r(17577);var i=r(98266),o=r(57457),n=r(95441),s=r(98555),d=r(58072),c=r(91629);let p=e=>{let{title:t,isNavigation:r}=e,o=(0,i.tv)();return a.jsx(l,{children:(0,a.jsxs)(h,{children:[a.jsx(n.xv,{...c.p.title1,style:{color:d.K.gray[11]},children:t}),r&&a.jsx(n.hU,{size:"3",variant:"surface",onClick:()=>o.back(),children:a.jsx(s.jb,{color:"#373737"})})]})})},l=o.ZP.header.withConfig({componentId:"sc-90fceb38-0"})(["padding:14.5px 100px 14.5px 24px;position:sticky;left:0;right:0;top:0;border-bottom:1px solid ",";background-color:",";box-shadow:",";z-index:10;"],d.K.gray[6],d.K.gray[1],d.i.shadow1),h=(0,o.ZP)(n.kC).withConfig({componentId:"sc-90fceb38-1"})(["max-width:1920px;width:100%;display:flex;align-items:center;justify-content:space-between;margin:auto;"])},40059:(e,t,r)=>{"use strict";r.d(t,{default:()=>C});var a=r(10326),i=r(57457),o=r(17577),n=r(90434),s=r(35047),d=r(32005),c=r(98555);let p=[{text:"مدیریت برنامه ها",Icon:c.Rw,path:"/plans",type:"collapse"},{text:"تور ها",Icon:c.Oj,type:"collapse",path:"/tours"},{text:"کاربران",Icon:c.Fc,path:"/user",type:"collapse"},{text:"مدیریت اطلاعات",Icon:c.Xy,type:"expand",items:[{text:"مدیریت نقاط",path:"/data-management/point-management"},{text:"مدیریت مقالات",path:"/data-management/article-management"}]},{text:"مدیریت اطلاعات تکمیلی",Icon:c.S9,type:"expand",items:[{text:"مدیریت دسته بندی ها ",path:"/additional-detail/categories"},{text:"مدیریت ویژگی ها",path:"/additional-detail/features"},{text:"مدیریت استان ها",path:"/additional-detail/province"}]},{text:"تاییدیه ها",Icon:c.VJ,type:"expand",items:[{text:"مدیریت نظرات",path:"/confirmations/comment"},{text:"مدیریت نظرات برتر",path:"/confirmations/top-comments"},{text:"مدیریت اصلاح اطلاعات ",path:"/confirmations/improve-data"},{text:"مدیریت راهنماهای مسیر",path:"/confirmations/path-guid"},{text:"مدیریت تصاویر ارسالی",path:"/confirmations/image-sent"}]},{text:"آگهی ها",Icon:c.fi,type:"collapse",path:"/advertizement"},{text:"پشتیبانی",Icon:c.Bt,type:"collapse",path:"/contact-us"}];var l=r(95441),h=r(61505),x=r(58072),u=r(91629),m=r(76812);let g={open:{opacity:1,height:"auto"},closed:{opacity:0,height:0}},y=e=>{let{isExpanded:t,text:r,Icon:i,type:s,items:c,path:p,activeSegment:h}=e,[y,j]=(0,o.useState)(!1),v="collapse"===s?h===p?.substring(1):c?.some(e=>h===e.path.split("/")[1]),k=()=>{j(!y)};return(0,a.jsxs)(l.W2,{children:[a.jsx(n.default,{href:p&&"collapse"===s?p:"","data-disable-nprogress":!0,children:(0,a.jsxs)(l.kC,{width:"100%",minWidth:"50px",gap:"2",px:"4",py:"11px",align:"center",style:{backgroundColor:v?x.K.blue[9]:"transparent",borderRadius:12},children:[a.jsx(w,{isActive:v,children:a.jsx(i,{})}),a.jsx(f,{animate:{maxWidth:t?"100%":"1px",opacity:t?1:0},initial:{maxWidth:"0px",opacity:0},transition:{maxWidth:{duration:.4,ease:[.16,1,.3,1]},opacity:{duration:.2,ease:"easeInOut"}},style:{width:t?"100%":"auto"},children:(0,a.jsxs)(l.kC,{width:"100%",align:"center",justify:"between",children:[a.jsx(l.xv,{...u.p.body3,style:{color:v?x.K.gray[1]:x.K.gray[11]},children:r}),"expand"===s&&a.jsx(b,{variant:"surface",size:"1",type:"button",onClick:()=>k(),children:y?a.jsx(m.V_R,{style:{color:v?x.K.gray[1]:x.K.gray[11]}}):a.jsx(m.pOD,{style:{color:v?x.K.gray[1]:x.K.gray[11]}})})]})})]})}),"expand"===s&&a.jsx(d.E.div,{variants:g,initial:"closed",animate:y?"open":"closed",transition:{duration:.3},style:{overflow:"hidden",paddingRight:24,paddingBlockStart:v?8:0},layout:!0,children:c?.map((e,t)=>a.jsx(n.default,{href:e.path,style:{padding:"12px 24px 12px 16px",borderRight:`1px solid ${x.K.gray[6]}`},children:a.jsx(l.xv,{...u.p.body3,style:{color:x.K.gray[11]},children:e.text})},t))})]})},f=(0,i.ZP)(d.E.div).withConfig({componentId:"sc-f41c874c-0"})(["overflow:hidden;display:flex;flex-direction:column;"]),w=(0,i.ZP)(l.xu).withConfig({componentId:"sc-f41c874c-1"})(["width:16px;height:16px;svg{width:16px;height:16px;path{fill:",";}}"],({isActive:e})=>e?x.K.gray[1]:x.K.gray[11]),b=(0,i.ZP)(l.hU).withConfig({componentId:"sc-f41c874c-2"})(["&:where(:hover){svg{path{fill:",";}}}"],x.K.gray[11]),j=()=>{let[e,t]=(0,o.useState)(!1),{dispatch:r}=(0,h.a)(),i=(0,s.useSelectedLayoutSegment)();return a.jsx(d.E.div,{onHoverStart:()=>t(!0),onHoverEnd:()=>t(!1),initial:{width:"80px"},animate:{width:e?"260px":"80px"},transition:{duration:.3},style:{position:"fixed",right:"0",top:"0",bottom:"0",backgroundColor:x.K.gray[2],border:`1px solid ${x.K.gray[6]}`,overflowY:"auto",borderRadius:"16px 0px 0px 16px",zIndex:100},children:(0,a.jsxs)(v,{mx:"auto",height:"100%",children:[a.jsx(l.rj,{width:"100%",children:(0,a.jsxs)(l.kC,{height:"100%",direction:"column",p:"4",gap:"4",children:[(0,a.jsxs)(n.default,{href:"",children:[a.jsx(c.xG,{width:"48px",height:"32px"}),a.jsx(k,{animate:{maxWidth:e?"100%":"1px",opacity:e?1:0},initial:{maxWidth:"0px",opacity:0},transition:{maxWidth:{duration:.4,ease:[.16,1,.3,1]},opacity:{duration:.2,ease:"easeInOut"}},children:a.jsx(c.wD,{width:"113px",height:"32px",cursor:"pointer"})})]}),p.map((t,r)=>a.jsx(y,{...t,isExpanded:e,activeSegment:i},r))]})}),a.jsx(l.rj,{width:"fit-content",children:a.jsx(l.kC,{height:"fit-content",gap:"2",p:"4",children:(0,a.jsxs)(l.kC,{px:"4",gap:"2",align:"center",onClick:()=>{r({type:"LOGOUT"})},style:{cursor:"pointer"},children:[a.jsx(c.n$,{width:"16px",height:"16px"}),a.jsx(k,{animate:{maxWidth:e?"100%":"1px",opacity:e?1:0},initial:{maxWidth:"0px",opacity:0},transition:{maxWidth:{duration:.4,ease:[.16,1,.3,1]},opacity:{duration:.2,ease:"easeInOut"}},children:a.jsx(l.xv,{...u.p.body3,style:{color:x.K.pink[11]},children:"خروج از حساب کاربری"})})]})})})]})})},v=(0,i.ZP)(l.rj).withConfig({componentId:"sc-b08f38d1-0"})(["overflow-x:hidden;overflow-y:auto;white-space:nowrap;align-content:space-between;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}"]),k=(0,i.ZP)(d.E.div).withConfig({componentId:"sc-b08f38d1-1"})(["overflow:hidden;display:flex;flex-direction:column;"]),C=({children:e})=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(j,{}),a.jsx(I,{children:e})]}),I=i.ZP.main.withConfig({componentId:"sc-e90daf32-0"})(["min-height:calc(100vh - 240px);"])},80635:(e,t,r)=>{"use strict";r.d(t,{x:()=>s,z:()=>d});var a=r(35047),i=r(44099),o=r(46611);let n=Buffer.from("bznpanelapi:VX+kPbS#@sdD5$").toString("base64"),s=i.Z.create({baseURL:"https://api-admin-dev.darkube.app/v1/",headers:{"up-auth":`Basic ${n}`}}),d=i.Z.create({baseURL:"https://uploader.bezanimbiroon.ir/admin/uploads/",headers:{"Content-Type":"application/json","up-auth":`Basic ${n}`}});d.interceptors.request.use(e=>{let t=new o.Z().get("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),s.interceptors.request.use(e=>{let t=new o.Z().get("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),s.interceptors.response.use(e=>e,e=>{if(e.response){let t=e.response.status;401===t?console.error("Unauthorized access - perhaps the token has expired"):403===t?console.error("Forbidden - You do not have permission to access this resource."):t>=500?(console.error("Server error - Please try again later."),(0,a.redirect)("/error")):console.error(`Error: ${e.response.statusText}`)}else e.request?(console.error("Network error - the request was made but no response was received"),(0,a.redirect)("/error")):((0,a.redirect)("/error"),console.error("Error:",e.message));return Promise.reject(e)})},13586:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(19510),i=r(68570);let o=(0,i.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/src/layout/RootLayout.tsx`),{__esModule:n,$$typeof:s}=o;o.default;let d=(0,i.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/src/layout/RootLayout.tsx#default`);function c({children:e}){return a.jsx(d,{children:e})}(0,i.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/src/layout/RootLayout.tsx#Main`)}};