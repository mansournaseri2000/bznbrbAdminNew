(()=>{var e={};e.id=251,e.ids=[251],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},84769:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(98145),r(13586),r(35866),r(28928);var s=r(23191),i=r(88716),n=r(37922),a=r.n(n),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["(root)",{children:["advertizement",{children:["other",{children:["[...slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,98145)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/other/[...slug]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,13586)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,28928)),"/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/other/[...slug]/page.tsx"],p="/(root)/advertizement/other/[...slug]/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(root)/advertizement/other/[...slug]/page",pathname:"/advertizement/other/[...slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},39507:(e,t,r)=>{Promise.resolve().then(r.bind(r,38059))},38059:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var s=r(10326),i=r(17577),n=r(76667),a=r(88538),o=r(35047),l=r(39454),c=r(44976),d=r(10119),p=r(37419),u=r(95441),x=r(45313),y=r(92766),g=r(58072),h=r(91629),m=r(26566),j=r(26967);let v=()=>{let e=(0,o.useParams)(),t=e.slug[0],r=Number(e.slug[1]),a="province_places"===e.slug[0]||"province"===e.slug[0]?"parent":void 0,v=(0,c.NL)(),[b,k]=(0,i.useState)(null),[q,f]=(0,i.useState)({isOpen:!1,key:"create"}),{data:w,isLoading:P,isError:z,isFetching:_}=(0,n.a)({queryKey:["ads-page-type"],queryFn:async()=>await (0,p._5)(t,r,a)}),{mutate:C,isPending:O}=(0,d.D)({mutationFn:async e=>await (0,p.Vl)(e),onSuccess:e=>{e.status?(v.invalidateQueries({queryKey:["ads-page-type"]}),(0,y.xO)("آگهی مورد نظر با موفقیت ایجاد شد"),f({...q,isOpen:!1})):(0,y.bW)("مشکلی پیش آمده است. لطفا مجددا تلاش کنید")}}),{mutate:K,isPending:A}=(0,d.D)({mutationFn:async e=>await (0,p.qo)(e),onSuccess:e=>{e.status?(v.invalidateQueries({queryKey:["ads-page-type"]}),(0,y.xO)("آگهی مورد نظر با موفقیت ویرایش شد"),f({...q,isOpen:!1})):(0,y.bW)("مشکلی پیش آمده است. لطفا مجددا تلاش کنید")}}),{mutate:S,isPending:W}=(0,d.D)({mutationFn:async()=>await (0,p.Di)({id:b?.id,type:"ADS"}),onSuccess:e=>{e.status?(v.invalidateQueries({queryKey:["ads-page-type"]}),(0,y.xO)("آگهی مورد نظر با موفقیت حذف شد"),f({...q,isOpen:!1})):(0,y.bW)("مشکلی پیش آمده است. لطفا مجددا تلاش کنید")}}),M=e=>{f({key:e,isOpen:!0})},N=()=>{f({isOpen:!0,key:"delete"})};return P||_?s.jsx(u.kC,{width:"100%",height:"90vh",justify:"center",align:"center",children:s.jsx(l.$j,{style:{scale:2.5}})}):!w||z?(0,y.bW)("مشکلی پیش آمده . لطفا دوباره تلاش نمایید"):(0,s.jsxs)(s.Fragment,{children:[s.jsx(u.rj,{gapY:"5",children:0===w.length?s.jsx(u.kC,{width:"100%",mt:"4",children:s.jsx(u.X6,{as:"h4",size:"4",style:{color:g.K.gray[11]},children:"در حال حاضر آگهی برای نمایش وجود ندارد."})}):w.map((e,t)=>e&&s.jsx(m.Z,{onClick:()=>k(e),onDelete:()=>N(),onCreateOrEdit:M,data:e},t))}),(0,s.jsxs)(u.u_,{isOpen:q.isOpen,onClose:()=>f({...q,isOpen:!1}),children:["delete"!==q.key&&(0,s.jsxs)(s.Fragment,{children:[s.jsx(x.Z,{title:"create"===q.key?"ثبت آگهی":"ویرایش آگهی",handleClose:()=>f({...q,isOpen:!1})}),s.jsx(j.Z,{data:b,type:q.key,isOpen:q.isOpen,onClose:()=>f({...q,isOpen:!1}),onSubmit:e=>{let t={alt:e.alt,description:e.description,file:e.imageFile,type:"ADS",sponsor:e.sponsor,website:e.website,socialMedia:e.socialMedia,summery:e.summery,page:e.page,holder:e.holder,..."category"===e.page?{categoryId:e.categoryId}:{provinceId:e.provinceId}};"edit"===q.key&&b?K({id:b?.id,type:"ADS",alt:t.alt,description:t.description,summery:t.summery,socialMedia:t.socialMedia,sponsor:t.sponsor,website:t.website}):"create"===q.key&&C(t)},isLoading:"create"===q.key?O:A})]}),"delete"===q.key&&(0,s.jsxs)(u.rj,{gapY:"24px",p:"5",children:[(0,s.jsxs)(u.xv,{...h.p.body1,style:{color:g.K.gray[11]},children:["آیا از حذف آگهی ",s.jsx("span",{style:{fontWeight:"bold",color:"red"},children:b?.position})," اطمینان دارید؟"]}),(0,s.jsxs)(u.rj,{gap:"10px",columns:"2",children:[s.jsx(u.zx,{variant:"soft",size:"4",onClick:()=>S(),children:s.jsx(u.xv,{...h.p.body3,children:W?s.jsx(l.$j,{}):"بله"})}),s.jsx(u.zx,{type:"button",onClick:()=>f({...q,isOpen:!1}),variant:"solid",size:"4",children:s.jsx(u.xv,{...h.p.body3,children:"خیر"})})]})]})]})]})};var b=r(98266),k=r(7003);let q=()=>{let e=(0,b.tv)(),t=(0,o.useParams)().slug[0],{data:r,isLoading:i,isFetching:a,isError:c}=(0,n.a)({queryKey:["ads-list"],queryFn:async()=>await (0,p.LP)(t)});console.log("ProvinceList",r);let d=e=>"province"===t?`province/${e}`:"province_places"===t?`province_places/${e}`:"category"===t?`category/${e}`:"";return i||a?s.jsx(u.kC,{width:"100%",height:"90vh",justify:"center",align:"center",children:s.jsx(l.$j,{style:{scale:2}})}):!r||c?(0,y.bW)("مشکلی پیش آمده است . لطفا مجددا تلاش کنید"):s.jsx(u.rj,{width:"100%",columns:{initial:"1",sm:"2"},gap:"5",children:r.map((t,r)=>s.jsx(k.Z,{type:"other",lable:t.label,latestUpdatedAt:t.latestUpdatedAt,space:t.freeSpace,handleRedirectAdsManagment:()=>e.push(d(Number(t.key)))},r))})};var f=r(42500),w=r(71941);function P({params:e}){let t=!0==!!e.slug[1],{data:r}=(0,n.a)({queryKey:["constant"],queryFn:async()=>await (0,a.iV)()}),i=(0,w.L)(Number(e.slug[1]),r?.provinces??[]),o=(0,w.L)(Number(e.slug[1]),r?.categories??[]);return(0,s.jsxs)(u.kC,{direction:"column",children:[s.jsx(f.Z,{title:"province"===e.slug[0]?t?` تبلیغات استان ها - استان ${i}`:"تبلیغات صحفه استان ها - لیست استان ها":"province_places"===e.slug[0]?t?`تبلیغات صحفه نقاط استان ها  - استان ${i}`:"تبلیغات صحفه نقاط استان ها - لیست استان ها":"category"===e.slug[0]?t?`تبلیغات صفحه دسته بندی - ${o}`:"تبلیغات صفحه دسته بندی":"",isNavigation:!0}),s.jsx(u.xu,{p:"24px 110px 40px 40px ",children:s.jsx(u.rj,{width:"100%",maxWidth:"1920px",mx:"auto",children:t?t?s.jsx(v,{}):"":s.jsx(q,{})})})]})}},7003:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(10326),i=r(95441),n=r(85366),a=r(58072),o=r(91629);let l=({lable:e,latestUpdatedAt:t,space:r,type:l,holder:c,handleRedirectAdsManagment:d,handleRedirectCities:p})=>(0,s.jsxs)(i.kC,{p:"16px",justify:"between",style:{border:`1px solid ${a.K.gray[6]}`,borderRadius:"8px",backgroundColor:a.K.gray[2]},children:[(0,s.jsxs)(i.rj,{gap:"12px",children:[s.jsx(i.xv,{...o.p.body1,style:{color:a.K.gray[12]},children:e}),(0,s.jsxs)(i.kC,{align:"center",gap:"8px",children:[s.jsx(i.xv,{...o.p.description2,style:{color:a.K.gray[10]},children:"main"===l?"تعداد تبلیغات":"بنر های خالی"}),(0,s.jsxs)(i.xv,{...o.p.description2,style:{color:a.K.gray[12]},children:[r," عدد"]})]}),(0,s.jsxs)(i.kC,{align:"center",gap:"8px",children:[s.jsx(i.xv,{...o.p.description2,style:{color:a.K.gray[10]},children:"آخرین ویرایش"}),s.jsx(i.xv,{...o.p.description2,style:{color:a.K.gray[12]},children:t?(0,n.l)(t):"_"})]})]}),(0,s.jsxs)(i.kC,{direction:"column",justify:"between",align:"end",children:["main"===l&&s.jsx(i.xv,{...o.p.body1,style:{color:a.K.pink[9],paddingLeft:"4px"},children:c}),"provinces"===l&&s.jsx(i.zx,{variant:"soft",size:"2",onClick:()=>{p&&p()},children:s.jsx(i.xv,{...o.p.body3,style:{color:a.K.gray[1]},children:"شهرستان ها"})}),s.jsx(i.zx,{variant:"solid",size:"2",style:{marginBlockStart:"auto"},onClick:()=>{d&&d()},children:s.jsx(i.xv,{...o.p.body3,style:{color:a.K.blue[12]},children:"مدیریت تبلیغات"})})]})]})},71941:(e,t,r)=>{"use strict";r.d(t,{L:()=>i});var s=r(17577);function i(e,t){return(0,s.useMemo)(()=>{if(!e||!t?.length)return"";let r=t.find(t=>t.id===e);return r?r.name:""},[e,t])}},85366:(e,t,r)=>{"use strict";r.d(t,{l:()=>n});var s=r(4465),i=r.n(s);function n(e){return i()(e).locale("fa").format("jYYYY/jMM/jDD")}},98145:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>o});var s=r(68570);let i=(0,s.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/other/[...slug]/page.tsx`),{__esModule:n,$$typeof:a}=i;i.default;let o=(0,s.createProxy)(String.raw`/Users/alihasani/Workspace/mansoor/bznbrbAdminNew/app/(root)/advertizement/other/[...slug]/page.tsx#default`)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[571,315,434,667,226,465,886,14,217,280,202],()=>r(84769));module.exports=s})();