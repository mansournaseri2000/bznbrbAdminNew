(()=>{var e={};e.id=773,e.ids=[773],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},74323:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>d}),t(69662),t(13586),t(35866),t(87799);var s=t(23191),a=t(88716),n=t(37922),i=t.n(n),o=t(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["(root)",{children:["ads",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,69662)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/ads/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,13586)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,87799)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/ads/page.tsx"],c="/(root)/ads/page",u={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(root)/ads/page",pathname:"/ads",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},91901:(e,r,t)=>{Promise.resolve().then(t.bind(t,95171))},95171:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(10326);t(17577);var a=t(39454),n=t(7369),i=t(25331),o=t(50307),l=t(42500),d=t(50049),p=t(92766);function c(){let{data:e,isLoading:r,isFetching:t,isError:c}=(0,n.useQuery)({queryKey:["ads-page"],queryFn:async()=>await (0,i.nj)()});return(console.log("DATA",e),r||t)?s.jsx(a.$j,{style:{margin:"50px auto",scale:2}}):!e||c?(0,p.ToastError)("مشکلی پیش آمده.لطفا مجددا تلاش نمایید"):(0,s.jsxs)(d.kC,{direction:"column",children:[s.jsx(l.default,{title:"مدیریت تبلیغات",isNavigation:!0}),s.jsx(d.xu,{p:"24px 110px 40px 40px ",children:s.jsx(d.rj,{width:"100%",maxWidth:"1920px",mx:"auto",children:s.jsx(d.rj,{width:"100%",columns:{initial:"1",sm:"2"},gap:"5",children:e.map((e,r)=>s.jsx(o.Z,{holdersCount:e.holdersCount,adKey:e.key,label:e.label,latestUpdatedAt:e.latestUpdatedAt,type:"banner",path:`/ads/${e.key}`},r))})})})]})}},25331:(e,r,t)=>{"use strict";t.d(r,{nj:()=>a,vo:()=>i,wu:()=>n});var s=t(80635);let a=async()=>(await s.x.get("/ads/page")).data.data,n=async()=>(await s.x.get("/ads/banners")).data.data,i=async e=>(await s.x.get(`/ads/banners?provinceId=${e}`)).data.data},50307:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var s=t(10326);t(17577);var a=t(35047),n=t(50049),i=t(85366),o=t(58072),l=t(91629);let d=({label:e,holdersCount:r,latestUpdatedAt:t,adKey:d,type:c,id:u,path:x})=>{let h=(0,a.useRouter)();return(0,s.jsxs)(n.kC,{width:"100%",align:"center",justify:"between",p:"4",style:{backgroundColor:o.K.gray[2],border:`1px solid ${o.K.gray[6]}`,borderRadius:8},children:[(0,s.jsxs)(n.kC,{direction:"column",gap:"12px",children:[s.jsx(n.xv,{...l.p.body1,style:{color:o.K.gray[12]},children:e}),s.jsx(p,{label:"تعداد تبلیغات",value:r}),s.jsx(p,{label:"آخرین ویرایش",value:(0,i.l)(t)})]}),(0,s.jsxs)(n.kC,{align:"center",gap:"2",children:[s.jsx(n.zx,{size:"3",onClick:()=>h.push(x),style:{padding:"7px 16px"},children:s.jsx(n.xv,{...l.p.body3,children:"مشاهده تبلیغات"})}),"province_list"===c&&s.jsx(n.zx,{size:"3",variant:"soft",onClick:()=>h.push(`/ads/province/${d}/${u}`),children:s.jsx(n.xv,{...l.p.body3,children:"لیست شهرستان ها"})})]})]})},p=({label:e,value:r})=>(0,s.jsxs)(n.kC,{align:"center",py:"1",gap:"2",children:[s.jsx(n.xv,{...l.p.description2,style:{color:o.K.gray[10]},children:e}),s.jsx(n.xv,{...l.p.description2,style:{color:o.K.gray[12]},children:r})]})},85366:(e,r,t)=>{"use strict";t.d(r,{l:()=>n});var s=t(4465),a=t.n(s);function n(e){return a()(e).locale("fa").format("jYYYY/jMM/jDD")}},69662:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=t(68570);let a=(0,s.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/ads/page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/ads/page.tsx#default`)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[242,315,434,369,465,519,280],()=>t(74323));module.exports=s})();