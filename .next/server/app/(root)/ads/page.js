(()=>{var e={};e.id=773,e.ids=[773],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},86595:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>d}),r(69662),r(13586),r(35866),r(87799);var s=r(23191),a=r(88716),n=r(37922),o=r.n(n),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["(root)",{children:["ads",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,69662)),"/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/ads/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,13586)),"/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,87799)),"/media/benyamin/work/Bezanim Biroon/front-template/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],p=["/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/ads/page.tsx"],u="/(root)/ads/page",c={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(root)/ads/page",pathname:"/ads",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},60004:(e,t,r)=>{Promise.resolve().then(r.bind(r,95171))},95171:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(10326);r(17577);var a=r(39454),n=r(7369),o=r(25331),i=r(50307),l=r(42500),d=r(50049),p=r(92766);function u(){let{data:e,isLoading:t,isFetching:r,isError:u}=(0,n.useQuery)({queryKey:["ads-page"],queryFn:async()=>await (0,o.nj)()});return(console.log("DATA",e),t||r)?s.jsx(a.$j,{style:{margin:"50px auto",scale:2}}):!e||u?(0,p.ToastError)("مشکلی پیش آمده.لطفا مجددا تلاش نمایید"):(0,s.jsxs)(d.kC,{direction:"column",children:[s.jsx(l.default,{title:"مدیریت تبلیغات",isNavigation:!0}),s.jsx(d.xu,{p:"24px 110px 40px 40px ",children:s.jsx(d.rj,{width:"100%",columns:{initial:"1",sm:"2"},gap:"5",children:e.map((e,t)=>s.jsx(i.Z,{holdersCount:e.holdersCount,adKey:e.key,label:e.label,latestUpdatedAt:e.latestUpdatedAt,type:"banner",path:`/ads/${e.key}`},t))})})]})}},25331:(e,t,r)=>{"use strict";r.d(t,{nj:()=>a,vo:()=>o,wu:()=>n});var s=r(80635);let a=async()=>(await s.x.get("/ads/page")).data.data,n=async()=>(await s.x.get("/ads/banners")).data.data,o=async e=>(await s.x.get(`/ads/banners?provinceId=${e}`)).data.data},50307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(10326);r(17577);var a=r(35047),n=r(50049),o=r(85366),i=r(58072),l=r(91629);let d=({label:e,holdersCount:t,latestUpdatedAt:r,adKey:d,type:u,id:c,path:x})=>{let m=(0,a.useRouter)();return(0,s.jsxs)(n.kC,{width:"100%",align:"center",justify:"between",p:"4",style:{backgroundColor:i.K.gray[2],border:`1px solid ${i.K.gray[6]}`,borderRadius:8},children:[(0,s.jsxs)(n.kC,{direction:"column",gap:"12px",children:[s.jsx(n.xv,{...l.p.body1,style:{color:i.K.gray[12]},children:e}),s.jsx(p,{label:"تعداد تبلیغات",value:t}),s.jsx(p,{label:"آخرین ویرایش",value:(0,o.l)(r)})]}),(0,s.jsxs)(n.kC,{align:"center",gap:"2",children:[s.jsx(n.zx,{size:"3",onClick:()=>m.push(x),style:{padding:"7px 16px"},children:s.jsx(n.xv,{...l.p.body3,children:"مشاهده تبلیغات"})}),"province_list"===u&&s.jsx(n.zx,{size:"3",variant:"soft",onClick:()=>m.push(`/ads/province/${d}/${c}`),children:s.jsx(n.xv,{...l.p.body3,children:"لیست شهرستان ها"})})]})]})},p=({label:e,value:t})=>(0,s.jsxs)(n.kC,{align:"center",py:"1",gap:"2",children:[s.jsx(n.xv,{...l.p.description2,style:{color:i.K.gray[10]},children:e}),s.jsx(n.xv,{...l.p.description2,style:{color:i.K.gray[12]},children:t})]})},85366:(e,t,r)=>{"use strict";r.d(t,{l:()=>n});var s=r(4465),a=r.n(s);function n(e){return a()(e).locale("fa").format("jYYYY/jMM/jDD")}},69662:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var s=r(68570);let a=(0,s.createProxy)(String.raw`/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/ads/page.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,s.createProxy)(String.raw`/media/benyamin/work/Bezanim Biroon/front-template/app/(root)/ads/page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[242,315,434,369,465,558,547],()=>r(86595));module.exports=s})();