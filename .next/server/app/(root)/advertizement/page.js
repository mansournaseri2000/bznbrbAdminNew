(()=>{var e={};e.id=605,e.ids=[605],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},1828:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>l}),r(85997),r(13586),r(35866),r(28928);var a=r(23191),s=r(88716),i=r(37922),n=r.n(i),o=r(95231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["(root)",{children:["advertizement",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,85997)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,13586)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,28928)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/page.tsx"],c="/(root)/advertizement/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(root)/advertizement/page",pathname:"/advertizement",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},88498:(e,t,r)=>{Promise.resolve().then(r.bind(r,37004))},37004:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var a=r(10326);r(17577);var s=r(98266),i=r(39454),n=r(76667),o=r(37419),d=r(7003),l=r(42500),p=r(95441),c=r(92766);function u(){let{data:e,isLoading:t,isFetching:r,isError:u}=(0,n.a)({queryKey:["ads-page"],queryFn:async()=>await (0,o.nj)()}),{push:x}=(0,s.tv)();if(t||r)return a.jsx(p.kC,{width:"100%",height:"90vh",justify:"center",align:"center",children:a.jsx(i.$j,{style:{scale:2.5}})});if(!e||u)return(0,c.bW)("مشکلی پیش آمده.لطفا مجددا تلاش نمایید");let m=e=>"main_page"===e||"planner"===e||"tourmaker"===e||"article_list"===e||"article"===e||"place"===e||"maps"===e?x(`/advertizement/${e}`):"tours"===e||"planner_trips"===e?x(`/advertizement/trip/${e}`):x(`/advertizement/other/${e}`);return(0,a.jsxs)(p.kC,{direction:"column",children:[a.jsx(l.Z,{title:"مدیریت تبلیغات",isNavigation:!0}),a.jsx(p.xu,{p:"24px 110px 40px 40px ",children:a.jsx(p.rj,{width:"100%",maxWidth:"1920px",mx:"auto",children:a.jsx(p.rj,{width:"100%",columns:{initial:"1",sm:"2"},gap:"5",children:e.map((e,t)=>a.jsx(d.Z,{lable:e.label,latestUpdatedAt:e.latestUpdatedAt,space:e.space,type:"main",holder:e.holder,handleRedirectAdsManagment:()=>{m(e.key)}},t))})})})]})}},37419:(e,t,r)=>{"use strict";r.d(t,{Di:()=>l,LP:()=>p,Vl:()=>o,_5:()=>n,mV:()=>c,nj:()=>i,qo:()=>d});var a=r(12099),s=r(80635);let i=async()=>(await s.x.get("/ads/page")).data.data,n=async(e,t,r)=>(await s.x.get(`/ads/holder?holder=${e}&id=${t}&type=${r}`)).data.data,o=async e=>{let t=new FormData;return Object.entries({type:e.type,description:e.description,page:e.page,holder:e.holder,alt:e.alt,summery:e.summery,website:e.website,socialMedia:e.socialMedia,sponsor:e.sponsor}).forEach(([e,r])=>{r&&t.append(e,r.toString())}),t.append("file",e.file),Object.entries({provinceId:e.provinceId,cityId:e.cityId,townId:e.townId,categoryId:e.categoryId}).forEach(([e,r])=>{null!=r&&t.append(e,r.toString())}),(await a.pN.post("admin/uploads/image",t,{headers:{"Content-Type":"multipart/form-data"}})).data},d=async e=>(await s.x.patch("/upload/edit",e)).data,l=async e=>(await s.x.delete("/upload/",{data:e})).data,p=async e=>(await s.x.get(`/ads/page?pageKey=${e}`)).data.data,c=async e=>(await s.x.get(`/ads/page?pageKey=province&id=${e}`)).data.data},7003:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(10326),s=r(95441),i=r(85366),n=r(58072),o=r(91629);let d=({lable:e,latestUpdatedAt:t,space:r,type:d,holder:l,handleRedirectAdsManagment:p,handleRedirectCities:c})=>(0,a.jsxs)(s.kC,{p:"16px",justify:"between",style:{border:`1px solid ${n.K.gray[6]}`,borderRadius:"8px",backgroundColor:n.K.gray[2]},children:[(0,a.jsxs)(s.rj,{gap:"12px",children:[a.jsx(s.xv,{...o.p.body1,style:{color:n.K.gray[12]},children:e}),(0,a.jsxs)(s.kC,{align:"center",gap:"8px",children:[a.jsx(s.xv,{...o.p.description2,style:{color:n.K.gray[10]},children:"main"===d?"تعداد تبلیغات":"بنر های خالی"}),(0,a.jsxs)(s.xv,{...o.p.description2,style:{color:n.K.gray[12]},children:[r," عدد"]})]}),(0,a.jsxs)(s.kC,{align:"center",gap:"8px",children:[a.jsx(s.xv,{...o.p.description2,style:{color:n.K.gray[10]},children:"آخرین ویرایش"}),a.jsx(s.xv,{...o.p.description2,style:{color:n.K.gray[12]},children:t?(0,i.l)(t):"_"})]})]}),(0,a.jsxs)(s.kC,{direction:"column",justify:"between",align:"end",children:["main"===d&&a.jsx(s.xv,{...o.p.body1,style:{color:n.K.pink[9],paddingLeft:"4px"},children:l}),"provinces"===d&&a.jsx(s.zx,{variant:"soft",size:"2",onClick:()=>{c&&c()},children:a.jsx(s.xv,{...o.p.body3,style:{color:n.K.gray[1]},children:"شهرستان ها"})}),a.jsx(s.zx,{variant:"solid",size:"2",style:{marginBlockStart:"auto"},onClick:()=>{p&&p()},children:a.jsx(s.xv,{...o.p.body3,style:{color:n.K.blue[12]},children:"مدیریت تبلیغات"})})]})]})},85366:(e,t,r)=>{"use strict";r.d(t,{l:()=>i});var a=r(4465),s=r.n(a);function i(e){return s()(e).locale("fa").format("jYYYY/jMM/jDD")}},85997:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var a=r(68570);let s=(0,a.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/page.tsx`),{__esModule:i,$$typeof:n}=s;s.default;let o=(0,a.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[571,315,434,667,465,14,217,280],()=>r(1828));module.exports=a})();