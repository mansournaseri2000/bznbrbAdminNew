(()=>{var e={};e.id=727,e.ids=[727],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},17177:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),i(28890),i(13586),i(35866),i(87799);var r=i(23191),s=i(88716),n=i(37922),a=i.n(n),o=i(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);i.d(t,l);let d=["",{children:["(root)",{children:["comments",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,28890)),"/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/comments/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,13586)),"/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,87799)),"/media/benyamin/work/Bezanim Biroon/front-template/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,35866,23)),"next/dist/client/components/not-found-error"]}],c=["/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/comments/page.tsx"],u="/(root)/comments/page",p={require:i,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(root)/comments/page",pathname:"/comments",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},12077:(e,t,i)=>{Promise.resolve().then(i.bind(i,32266))},13320:(e,t,i)=>{Promise.resolve().then(i.bind(i,40059))},32266:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>v});var r=i(10326),s=i(17577);i(71222);var n=i(33265),a=i(7369),o=i(17496),l=i(46226),d=i(39454),c=i(44976),u=i(10119),p=i(50049),x=i(76909),h=i(58072),m=i(91629);let y=e=>{let{places:t,users:i,createdAt:s,content:n,onUpdate:a,onRemove:o,updatePending:c,removePending:u,onShowDetail:y}=e;return(0,r.jsxs)(p.kC,{width:"100%",direction:"column",gap:"4",children:[(0,r.jsxs)(p.kC,{direction:"column",p:"4",pt:"0",gap:"5",children:[(0,r.jsxs)(p.kC,{width:"100%",justify:"between",children:[(0,r.jsxs)(p.kC,{direction:"column",gap:"2",children:[r.jsx(p.xv,{...m.p.body1,style:{color:h.K.gray[12]},children:t?.name}),r.jsx(p.xv,{...m.p.body1,style:{color:h.K.gray[12]},children:`${t?.Cities.name} / ${t?.Cities.Provinces.name}`})]}),r.jsx(p.zx,{size:"3",colorVariant:"BLUE",variant:"outline",onClick:y,style:{borderRadius:12},children:r.jsx(p.xv,{...m.p.body3,children:"مشاهده نقطه"})})]}),(0,r.jsxs)(p.kC,{width:"100%",justify:"between",children:[(0,r.jsxs)(p.kC,{align:"center",gap:"2",children:[r.jsx(p.xu,{style:{width:40,height:40,position:"relative",borderRadius:"50%"},children:r.jsx(l.default,{src:i.pic?i.pic:"",alt:"",fill:!0,style:{borderRadius:"50%"}})}),(0,r.jsxs)(p.kC,{direction:"column",gap:"1",children:[r.jsx(p.xv,{style:{color:h.K.gray[12]},children:`${i.name} ${i.last_name}`}),r.jsx(p.xv,{style:{color:h.K.gray[11]},children:s})]})]}),r.jsx(p.zx,{size:"3",colorVariant:"PINK",onClick:y,style:{borderRadius:12},children:r.jsx(p.xv,{...m.p.body3,children:"مشاهده پروفایل"})})]}),r.jsx(p.xv,{...m.p.paragraph1,style:{color:h.K.gray[11]},children:n})]}),(0,r.jsxs)(p.kC,{width:"100%",gap:"4",p:"4",children:[r.jsx(p.zx,{size:"3",colorVariant:"BLUE",variant:"soft",onClick:a,children:c?r.jsx(d.$j,{}):(0,r.jsxs)(p.kC,{align:"center",gap:"2",children:[r.jsx(x.Jr,{}),r.jsx(p.xv,{...m.p.body1,children:"تایید و انتشار"})]})}),r.jsx(p.zx,{size:"3",colorVariant:"PINK",onClick:o,children:u?r.jsx(d.$j,{}):(0,r.jsxs)(p.kC,{align:"center",gap:"2",children:[r.jsx(p.xv,{...m.p.body1,children:"x"}),r.jsx(p.xv,{...m.p.body1,children:"حذف دیدگاه"})]})})]})]})};var j=i(92766);let g=e=>{let{content:t,createdAt:i,users:n,id:a,places:g,index:f}=e,[v,b]=(0,s.useState)({isOpen:!1,key:"remove"});console.log("place",g);let C=(0,c.useQueryClient)(),{mutate:w,isPending:k}=(0,u.useMutation)({mutationFn:async()=>(0,o.uA)(a),onSuccess:async e=>{!0===e.status?(C.invalidateQueries({queryKey:["all-comments"]}),(0,j.ToastSuccess)("نظر مورد نظر با موفقیت منتشر شد"),b({...v,isOpen:!1})):(0,j.ToastError)("لطفا دوباره تلاش نمایید")},onError:e=>{console.log(e,"Err")}}),{mutate:P,isPending:O}=(0,u.useMutation)({mutationFn:async()=>(0,o.PN)(a),onSuccess:async e=>{!0===e.status?(C.invalidateQueries({queryKey:["all-comments"]}),(0,j.ToastSuccess)("نظر مورد نظر با موفقیت حذف شد"),b({...v,isOpen:!1})):(0,j.ToastError)("لطفا دوباره تلاش نمایید")},onError:e=>{console.log(e,"Err")}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.rj,{width:"100%",p:"4",gap:"4",style:{borderRadius:8,backgroundColor:f%2==0?h.K.blue[2]:h.K.pink[2],border:f%2==0?`1px solid ${h.K.blue[6]}`:`1px solid ${h.K.pink[6]}`},children:[(0,r.jsxs)(d.kC,{width:"100%",justify:"between",align:"center",children:[(0,r.jsxs)(d.kC,{direction:"column",gap:"2",children:[r.jsx(p.xv,{...m.p.body1,style:{color:h.K.gray[12]},children:g?.name}),r.jsx(p.xv,{...m.p.description2,style:{color:h.K.gray[11],opacity:"50%"},children:`${g?.Cities.Provinces.name} / ${g?.Cities.name}`})]}),r.jsx(p.zx,{size:"3",colorVariant:f%2==0?"BLUE":"PINK",children:r.jsx(p.xv,{...m.p.body3,children:"مشاهده نقطه"})})]}),r.jsx(d.kC,{width:"100%",justify:"between",align:"center",children:(0,r.jsxs)(d.kC,{align:"center",gap:"2",children:[r.jsx(d.xu,{style:{width:40,height:40,position:"relative",borderRadius:"50%"},children:r.jsx(l.default,{src:n.pic?n.pic:"",alt:"",fill:!0,style:{borderRadius:"50%"}})}),(0,r.jsxs)(d.kC,{direction:"column",gap:"1",children:[r.jsx(p.xv,{style:{color:h.K.gray[11]},children:`${n.name} ${n.last_name}`}),r.jsx(p.xv,{style:{color:h.K.gray[9]},children:i})]})]})}),r.jsx(p.xv,{...m.p.paragraph1,style:{color:h.K.gray[11]},children:t}),(0,r.jsxs)(d.kC,{gap:"4",justify:"end",children:[(0,r.jsxs)(p.zx,{size:"3",colorVariant:"BLUE",variant:"soft",onClick:()=>b({isOpen:!0,key:"update"}),children:[r.jsx(x.Jr,{}),r.jsx(p.xv,{...m.p.body3,children:"تایید و انتشار"})]}),r.jsx(p.hU,{size:"3",radius:"full",colorVariant:"PINK",onClick:()=>b({isOpen:!0,key:"remove"}),children:r.jsx(x.rF,{})})]})]}),(0,r.jsxs)(p.u_,{isOpen:v.isOpen,onClose:()=>b({...v,isOpen:!1}),children:["update"===v.key&&(0,r.jsxs)(p.rj,{gapY:"24px",children:[r.jsx(p.xv,{children:"آیا از انتشار این نظر اظمینان دارید؟ "}),(0,r.jsxs)(p.rj,{gap:"10px",columns:"2",children:[r.jsx(p.zx,{onClick:()=>w(),variant:"soft",size:"4",children:r.jsx(p.xv,{children:k?r.jsx(d.$j,{}):"بله"})}),r.jsx(p.zx,{type:"button",onClick:()=>b({...v,isOpen:!1}),variant:"solid",size:"4",children:"خیر"})]})]}),"remove"===v.key&&(0,r.jsxs)(p.rj,{gapY:"24px",children:[r.jsx(p.xv,{children:"آیا از حذف این نظر اظمینان دارید؟ "}),(0,r.jsxs)(p.rj,{gap:"10px",columns:"2",children:[r.jsx(p.zx,{onClick:()=>P(),variant:"soft",size:"4",children:r.jsx(p.xv,{children:O?r.jsx(d.$j,{}):"بله"})}),r.jsx(p.zx,{type:"button",onClick:()=>b({...v,isOpen:!1}),variant:"solid",size:"4",children:"خیر"})]})]}),"info"===v.key&&r.jsx(y,{...e,onUpdate:()=>w(),onRemove:()=>P(),updatePending:k,removePending:O})]})]})},f=(0,n.default)(async()=>{},{loadableGenerated:{modules:["app/(root)/comments/page.tsx -> react-responsive-pagination"]},ssr:!1});function v({searchParams:e}){let[t,i]=(0,s.useState)(e.page?Number(e.page):1),{data:n}=(0,a.useQuery)({queryKey:["all-comments",t],queryFn:async()=>(0,o.h_)(t)});return console.log("data",n),(0,r.jsxs)(p.kC,{width:"100%",direction:"column",p:"5",gap:"4",children:[r.jsx(p.kC,{justify:"end",children:r.jsx(p.kC,{width:"240px",justify:"center",align:"center",p:"4",style:{border:"1px solid #D4D4D4",borderRadius:12},children:"مرتب سازی"})}),n?.allComments.map((e,t)=>r.jsx(g,{index:t,content:e.content,createdAt:e.createdAt,users:e.users,id:e.id,places:e.places},t)),r.jsx(f,{current:t,total:n?.totalPages,onPageChange:e=>{i(e)}})]})}},33265:(e,t,i)=>{"use strict";i.d(t,{default:()=>s.a});var r=i(43353),s=i.n(r)},43353:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let r=i(91174);i(10326),i(17577);let s=r._(i(77028));function n(e,t){var i;let r={loading:e=>{let{error:t,isLoading:i,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let n={...r,...t};return(0,s.default)({...n,modules:null==(i=n.loadableGenerated)?void 0:i.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let r=i(94129);function s(e){let{reason:t,children:i}=e;throw new r.BailoutToCSRError(t)}},77028:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=i(10326),s=i(17577),n=i(933),a=i(46618);function o(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},d=function(e){let t={...l,...e},i=(0,s.lazy)(()=>t.loader().then(o)),d=t.loading;function c(e){let o=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PreloadCss,{moduleIds:t.modules}),(0,r.jsx)(i,{...e})]}):(0,r.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(i,{...e})});return(0,r.jsx)(s.Suspense,{fallback:o,children:l})}return c.displayName="LoadableComponent",c}},46618:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return n}});let r=i(10326),s=i(55403);function n(e){let{moduleIds:t}=e,i=(0,s.getExpectedRequestStore)("next/dynamic css"),n=[];if(i.reactLoadableManifest&&t){let e=i.reactLoadableManifest;for(let i of t){if(!e[i])continue;let t=e[i].files.filter(e=>e.endsWith(".css"));n.push(...t)}}return 0===n.length?null:(0,r.jsx)(r.Fragment,{children:n.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:i.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},17496:(e,t,i)=>{"use strict";i.d(t,{PN:()=>n,h_:()=>s,uA:()=>a});var r=i(12099);let s=async e=>(await r.S.get(`comment?page=${e}`)).data.data,n=async e=>(await r.S.delete(`comment/${e}`)).data,a=async e=>(await r.S.put(`comment/${e}`)).data},40059:(e,t,i)=>{"use strict";i.d(t,{default:()=>f});var r=i(10326),s=i(57457),n=i(17577),a=i(90434),o=i(32005),l=i(76909);let d=[{text:"مدیریت برنامه ها",Icon:l.Rw,path:"/plans",type:"collapse"},{text:"کاربران",Icon:l.Fc,path:"/user",type:"collapse"},{text:"مدیریت اطلاعات",Icon:l.Xy,type:"expand",items:[{text:"مدیریت نقاط",path:"/data-management/point-management"},{text:"مدیریت مقالات",path:"/data-management/article-management"}]},{text:"مدیریت اطلاعات تکمیلی",Icon:l.S9,type:"expand",items:[{text:"مدیریت دسته بندی ها ",path:"/additional-detail/categories"},{text:"مدیریت ویژگی ها",path:"/additional-detail/features"},{text:"مدیریت استان ها",path:"/additional-detail/province"}]},{text:"تاییدیه ها",Icon:l.VJ,type:"expand",items:[{text:"مدیریت نظرات",path:"/confirmations/comment"},{text:"مدیریت نظرات برتر",path:"/confirmations/top-comments"},{text:"مدیریت اصلاح اطلاعات ",path:"/confirmations/improve-data"},{text:"مدیریت راهنماهای مسیر",path:"/confirmations/path-guid"},{text:"مدیریت تصاویر ارسالی",path:"/confirmations/image-sent"}]},{text:"آگهی ها",Icon:l.fi,type:"collapse",path:"/ads"},{text:"پشتیبانی",Icon:l.Bt,type:"collapse",path:"/support"}];var c=i(50049),u=i(58072),p=i(91629),x=i(76812);let h={open:{opacity:1,height:"auto"},closed:{opacity:0,height:0}},m=e=>{let{isExpanded:t,text:i,Icon:s,type:l,items:d,path:m}=e,[j,g]=(0,n.useState)(!1),f=()=>{g(!j)};return(0,r.jsxs)(c.W2,{children:[r.jsx(a.default,{href:m&&"collapse"===l?m:"",children:(0,r.jsxs)(c.kC,{width:"100%",gap:"2",px:"4",py:"11px",align:"center",children:[r.jsx(c.xu,{width:"16px",height:"16px",children:r.jsx(s,{})}),r.jsx(y,{animate:{maxWidth:t?"100%":"1px",opacity:t?1:0},initial:{maxWidth:"0px",opacity:0},transition:{maxWidth:{duration:.4,ease:[.16,1,.3,1]},opacity:{duration:.2,ease:"easeInOut"}},style:{width:t?"100%":"auto"},children:(0,r.jsxs)(c.kC,{width:"100%",align:"center",justify:"between",children:[r.jsx(c.xv,{...p.p.body3,style:{color:u.K.gray[11]},children:i}),"expand"===l&&r.jsx(c.hU,{variant:"surface",size:"1",type:"button",onClick:()=>f(),children:j?r.jsx(x.V_R,{style:{color:u.K.gray[11]}}):r.jsx(x.pOD,{style:{color:u.K.gray[11]}})})]})})]})}),"expand"===l&&r.jsx(o.E.div,{variants:h,initial:"closed",animate:j?"open":"closed",transition:{duration:.3},style:{overflow:"hidden",paddingRight:24},layout:!0,children:d?.map((e,t)=>r.jsx(a.default,{href:e.path,style:{padding:"12px 24px 12px 16px",borderRight:`1px solid ${u.K.gray[6]}`},children:r.jsx(c.xv,{...p.p.body3,style:{color:u.K.gray[11]},children:e.text})},t))})]})},y=(0,s.ZP)(o.E.div).withConfig({componentId:"sc-d5b387a8-0"})(["overflow:hidden;display:flex;flex-direction:column;"]),j=()=>{let[e,t]=(0,n.useState)(!1);return r.jsx(o.E.div,{onHoverStart:()=>t(!0),onHoverEnd:()=>t(!1),initial:{width:"80px"},animate:{width:e?"260px":"80px"},transition:{duration:.3},style:{position:"fixed",right:"0",top:"0",bottom:"0",backgroundColor:u.K.gray[2],border:`1px solid ${u.K.gray[6]}`,overflowY:"auto",borderRadius:"16px 0px 0px 16px",zIndex:100},children:(0,r.jsxs)(c.rj,{mx:"auto",height:"100%",style:{overflowX:"hidden",whiteSpace:"nowrap",alignContent:"space-between",overflowY:"auto"},children:[r.jsx(c.rj,{width:"100%",children:(0,r.jsxs)(c.kC,{height:"100%",direction:"column",p:"4",gap:"4",children:[(0,r.jsxs)(a.default,{href:"",children:[r.jsx(l.xG,{width:"48px",height:"32px"}),r.jsx(g,{animate:{maxWidth:e?"100%":"1px",opacity:e?1:0},initial:{maxWidth:"0px",opacity:0},transition:{maxWidth:{duration:.4,ease:[.16,1,.3,1]},opacity:{duration:.2,ease:"easeInOut"}},children:r.jsx(l.wD,{width:"113px",height:"32px",cursor:"pointer"})})]}),d.map((t,i)=>r.jsx(m,{...t,isExpanded:e},i))]})}),r.jsx(c.rj,{width:"fit-content",children:r.jsx(c.kC,{height:"fit-content",gap:"2",p:"4",children:r.jsx(a.default,{href:"",children:(0,r.jsxs)(c.kC,{px:"4",gap:"2",align:"center",children:[r.jsx(l.n$,{width:"16px",height:"16px"}),r.jsx(g,{animate:{maxWidth:e?"100%":"1px",opacity:e?1:0},initial:{maxWidth:"0px",opacity:0},transition:{maxWidth:{duration:.4,ease:[.16,1,.3,1]},opacity:{duration:.2,ease:"easeInOut"}},children:r.jsx(c.xv,{...p.p.body3,style:{color:u.K.pink[11]},children:"خروج از حساب کاربری"})})]})})})})]})})},g=(0,s.ZP)(o.E.div).withConfig({componentId:"sc-ae417bd5-0"})(["overflow:hidden;display:flex;flex-direction:column;"]),f=({children:e})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(j,{}),r.jsx(v,{children:e})]}),v=s.ZP.main.withConfig({componentId:"sc-e90daf32-0"})(["min-height:calc(100vh - 240px);"])},28890:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>o});var r=i(68570);let s=(0,r.createProxy)(String.raw`/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/comments/page.tsx`),{__esModule:n,$$typeof:a}=s;s.default;let o=(0,r.createProxy)(String.raw`/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/comments/page.tsx#default`)},13586:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var r=i(19510),s=i(68570);let n=(0,s.createProxy)(String.raw`/media/benyamin/work/Bezanim Biroon/front-template/src/layout/RootLayout.tsx`),{__esModule:a,$$typeof:o}=n;n.default;let l=(0,s.createProxy)(String.raw`/media/benyamin/work/Bezanim Biroon/front-template/src/layout/RootLayout.tsx#default`);function d({children:e}){return r.jsx(l,{children:e})}(0,s.createProxy)(String.raw`/media/benyamin/work/Bezanim Biroon/front-template/src/layout/RootLayout.tsx#Main`)},71222:()=>{},10119:(e,t,i)=>{"use strict";i.d(t,{useMutation:()=>u});var r=i(17577),s=i(71180),n=i(12113),a=i(64351),o=i(3341),l=class extends a.l{#e;#t=void 0;#i;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#s()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,o.VS)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,o.Ym)(t.mutationKey)!==(0,o.Ym)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(e){this.#s(),this.#n(e)}getCurrentResult(){return this.#t}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#s(),this.#n()}mutate(e,t){return this.#r=t,this.#i?.removeObserver(this),this.#i=this.#e.getMutationCache().build(this.#e,this.options),this.#i.addObserver(this),this.#i.execute(e)}#s(){let e=this.#i?.state??(0,s.R)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#n(e){n.V.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,i=this.#t.context;e?.type==="success"?(this.#r.onSuccess?.(e.data,t,i),this.#r.onSettled?.(e.data,null,t,i)):e?.type==="error"&&(this.#r.onError?.(e.error,t,i),this.#r.onSettled?.(void 0,e.error,t,i))}this.listeners.forEach(e=>{e(this.#t)})})}},d=i(44976),c=i(78613);function u(e,t){let i=(0,d.useQueryClient)(t),[s]=r.useState(()=>new l(i,e));r.useEffect(()=>{s.setOptions(e)},[s,e]);let a=r.useSyncExternalStore(r.useCallback(e=>s.subscribe(n.V.batchCalls(e)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),o=r.useCallback((e,t)=>{s.mutate(e,t).catch(c.Z)},[s]);if(a.error&&(0,c.L)(s.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:o,mutateAsync:a.mutate}}}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[242,315,434,369,226,571],()=>i(17177));module.exports=r})();