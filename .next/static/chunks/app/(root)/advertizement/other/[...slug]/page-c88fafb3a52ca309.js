(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9251],{50819:function(e,n,r){Promise.resolve().then(r.bind(r,53559))},53559:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(57437);r(2265);var s=r(43767),i=r(36721),l=r(16463),c=r(94963),a=r(89216),o=r(7507),u=r(31072),d=r(1845),p=r(85977),x=()=>{let e=(0,l.useParams)();console.log("\uD83D\uDE80 ~ AdsListRoot ~ params:",e);let n=e.slug[0],r=Number(e.slug[1]),i="province_places"===e.slug[0]||"province"===e.slug[0]?"parent":void 0,{data:x,isLoading:y,isError:g,isFetching:h}=(0,s.a)({queryKey:["ads-page-type"],queryFn:async()=>await (0,a._5)(n,r,i)});return y||h?(0,t.jsx)(o.kC,{width:"100%",height:"90vh",justify:"center",align:"center",children:(0,t.jsx)(c.$j,{style:{scale:2.5}})}):!x||g?(0,u.bW)("مشکلی پیش آمده . لطفا دوباره تلاش نمایید"):(0,t.jsx)(o.rj,{gapY:"5",children:0===x.length?(0,t.jsx)(o.kC,{width:"100%",mt:"4",children:(0,t.jsx)(o.X6,{as:"h4",size:"4",style:{color:d.K.gray[11]},children:"در حال حاضر آگهی برای نمایش وجود ندارد."})}):x.map((e,n)=>e&&(0,t.jsx)(p.Z,{data:e},n))})},y=r(33879),g=()=>{let e=(0,l.useRouter)(),n=(0,l.useParams)().slug[0],{data:r,isLoading:i,isFetching:d,isError:p}=(0,s.a)({queryKey:["ads-list"],queryFn:async()=>await (0,a.LP)(n)});console.log("ProvinceList",r);let x=e=>"province"===n?"province/".concat(e):"province_places"===n?"province_places/".concat(e):"category"===n?"category/".concat(e):"";return i||d?(0,t.jsx)(o.kC,{width:"100%",height:"90vh",justify:"center",align:"center",children:(0,t.jsx)(c.$j,{style:{scale:2}})}):!r||p?(0,u.bW)("مشکلی پیش آمده است . لطفا مجددا تلاش کنید"):(0,t.jsx)(o.rj,{width:"100%",columns:{initial:"1",sm:"2"},gap:"5",children:r.map((n,r)=>(0,t.jsx)(y.Z,{type:"other",lable:n.label,latestUpdatedAt:n.latestUpdatedAt,space:n.space,handleRedirectAdsManagment:()=>e.push(x(Number(n.key)))},r))})},h=r(29962),j=r(28232);function v(e){var n,r;let{params:l}=e,c=!0==!!l.slug[1],{data:a}=(0,s.a)({queryKey:["constant"],queryFn:async()=>await (0,i.iV)()}),u=(0,j.L)(Number(l.slug[1]),null!==(n=null==a?void 0:a.provinces)&&void 0!==n?n:[]),d=(0,j.L)(Number(l.slug[1]),null!==(r=null==a?void 0:a.categories)&&void 0!==r?r:[]);return(0,t.jsxs)(o.kC,{direction:"column",children:[(0,t.jsx)(h.Z,{title:"province"===l.slug[0]?c?" تبلیغات استان ها - استان ".concat(u):"تبلیغات صحفه استان ها - لیست استان ها":"province_places"===l.slug[0]?c?"تبلیغات صحفه نقاط استان ها  - استان ".concat(u):"تبلیغات صحفه نقاط استان ها - لیست استان ها":"category"===l.slug[0]?c?"تبلیغات صفحه دسته بندی - ".concat(d):"تبلیغات صفحه دسته بندی":"",isNavigation:!0}),(0,t.jsx)(o.xu,{p:"24px 110px 40px 40px ",children:(0,t.jsx)(o.rj,{width:"100%",maxWidth:"1920px",mx:"auto",children:c?c?(0,t.jsx)(x,{}):"":(0,t.jsx)(g,{})})})]})}},33879:function(e,n,r){"use strict";var t=r(57437),s=r(7507),i=r(10504),l=r(1845),c=r(21949);n.Z=e=>{let{lable:n,latestUpdatedAt:r,space:a,type:o,holder:u,handleRedirectAdsManagment:d,handleRedirectCities:p}=e;return(0,t.jsxs)(s.kC,{p:"16px",justify:"between",style:{border:"1px solid ".concat(l.K.gray[6]),borderRadius:"8px",backgroundColor:l.K.gray[2]},children:[(0,t.jsxs)(s.rj,{gap:"12px",children:[(0,t.jsx)(s.xv,{...c.p.body1,style:{color:l.K.gray[12]},children:n}),(0,t.jsxs)(s.kC,{align:"center",gap:"8px",children:[(0,t.jsx)(s.xv,{...c.p.description2,style:{color:l.K.gray[10]},children:"main"===o?"تعداد تبلیغات":"بنر های خالی"}),(0,t.jsxs)(s.xv,{...c.p.description2,style:{color:l.K.gray[12]},children:[a," عدد"]})]}),(0,t.jsxs)(s.kC,{align:"center",gap:"8px",children:[(0,t.jsx)(s.xv,{...c.p.description2,style:{color:l.K.gray[10]},children:"آخرین ویرایش"}),(0,t.jsx)(s.xv,{...c.p.description2,style:{color:l.K.gray[12]},children:r?(0,i.l)(r):"_"})]})]}),(0,t.jsxs)(s.kC,{direction:"column",justify:"between",align:"end",children:["main"===o&&(0,t.jsx)(s.xv,{...c.p.body1,style:{color:l.K.pink[9],paddingLeft:"4px"},children:u}),"provinces"===o&&(0,t.jsx)(s.zx,{variant:"soft",size:"2",onClick:()=>{p&&p()},children:(0,t.jsx)(s.xv,{...c.p.body3,style:{color:l.K.gray[1]},children:"شهرستان ها"})}),(0,t.jsx)(s.zx,{variant:"solid",size:"2",style:{marginBlockStart:"auto"},onClick:()=>{d&&d()},children:(0,t.jsx)(s.xv,{...c.p.body3,style:{color:l.K.blue[12]},children:"مدیریت تبلیغات"})})]})]})}},28232:function(e,n,r){"use strict";r.d(n,{L:function(){return s}});var t=r(2265);function s(e,n){return(0,t.useMemo)(()=>{if(!e||!(null==n?void 0:n.length))return"";let r=n.find(n=>n.id===e);return r?r.name:""},[e,n])}},10504:function(e,n,r){"use strict";r.d(n,{l:function(){return i}});var t=r(64673),s=r.n(t);function i(e){return s()(e).locale("fa").format("jYYYY/jMM/jDD")}}},function(e){e.O(0,[1553,3048,5452,8310,6990,1825,8702,9269,6648,783,2107,7507,2336,8009,2971,7023,1744],function(){return e(e.s=50819)}),_N_E=e.O()}]);