(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9773],{34476:function(e,r,t){Promise.resolve().then(t.bind(t,72836))},72836:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(57437);t(2265);var s=t(94963),a=t(76351),o=t(927),c=t(25985),i=t(29962),l=t(96396),d=t(31072);function u(){let{data:e,isLoading:r,isFetching:t,isError:u}=(0,a.useQuery)({queryKey:["ads-page"],queryFn:async()=>await (0,o.nj)()});return(console.log("DATA",e),r||t)?(0,n.jsx)(s.$j,{style:{margin:"50px auto",scale:2}}):!e||u?(0,d.ToastError)("مشکلی پیش آمده.لطفا مجددا تلاش نمایید"):(0,n.jsxs)(l.kC,{direction:"column",children:[(0,n.jsx)(i.default,{title:"مدیریت تبلیغات",isNavigation:!0}),(0,n.jsx)(l.xu,{p:"24px 110px 40px 40px ",children:(0,n.jsx)(l.rj,{width:"100%",maxWidth:"1920px",mx:"auto",children:(0,n.jsx)(l.rj,{width:"100%",columns:{initial:"1",sm:"2"},gap:"5",children:e.map((e,r)=>(0,n.jsx)(c.Z,{holdersCount:e.holdersCount,adKey:e.key,label:e.label,latestUpdatedAt:e.latestUpdatedAt,type:"banner",path:"/ads/".concat(e.key)},r))})})})]})}},927:function(e,r,t){"use strict";t.d(r,{nj:function(){return s},vo:function(){return o},wu:function(){return a}});var n=t(31067);let s=async()=>(await n.x.get("/ads/page")).data.data,a=async()=>(await n.x.get("/ads/banners")).data.data,o=async e=>(await n.x.get("/ads/banners?provinceId=".concat(e))).data.data},25985:function(e,r,t){"use strict";var n=t(57437);t(2265);var s=t(16463),a=t(96396),o=t(10504),c=t(1845),i=t(21949);r.Z=e=>{let{label:r,holdersCount:t,latestUpdatedAt:d,adKey:u,type:p,id:x,path:h}=e,j=(0,s.useRouter)();return(0,n.jsxs)(a.kC,{width:"100%",align:"center",justify:"between",p:"4",style:{backgroundColor:c.K.gray[2],border:"1px solid ".concat(c.K.gray[6]),borderRadius:8},children:[(0,n.jsxs)(a.kC,{direction:"column",gap:"12px",children:[(0,n.jsx)(a.xv,{...i.p.body1,style:{color:c.K.gray[12]},children:r}),(0,n.jsx)(l,{label:"تعداد تبلیغات",value:t}),(0,n.jsx)(l,{label:"آخرین ویرایش",value:(0,o.l)(d)})]}),(0,n.jsxs)(a.kC,{align:"center",gap:"2",children:[(0,n.jsx)(a.zx,{size:"3",onClick:()=>j.push(h),style:{padding:"7px 16px"},children:(0,n.jsx)(a.xv,{...i.p.body3,children:"مشاهده تبلیغات"})}),"province_list"===p&&(0,n.jsx)(a.zx,{size:"3",variant:"soft",onClick:()=>j.push("/ads/province/".concat(u,"/").concat(x)),children:(0,n.jsx)(a.xv,{...i.p.body3,children:"لیست شهرستان ها"})})]})]})};let l=e=>{let{label:r,value:t}=e;return(0,n.jsxs)(a.kC,{align:"center",py:"1",gap:"2",children:[(0,n.jsx)(a.xv,{...i.p.description2,style:{color:c.K.gray[10]},children:r}),(0,n.jsx)(a.xv,{...i.p.description2,style:{color:c.K.gray[12]},children:t})]})}},10504:function(e,r,t){"use strict";t.d(r,{l:function(){return a}});var n=t(64673),s=t.n(n);function a(e){return s()(e).locale("fa").format("jYYYY/jMM/jDD")}},31067:function(e,r,t){"use strict";t.d(r,{x:function(){return o}});var n=t(16463),s=t(38472),a=t(15263);let o=s.Z.create({baseURL:"https://apibznpaneldev.darkube.app/v1/",headers:{"Content-Type":"application/json"}});o.interceptors.request.use(e=>{let r=new a.Z().get("token");return r&&(e.headers.Authorization="Bearer ".concat(r)),e},e=>Promise.reject(e)),o.interceptors.response.use(e=>e,e=>{if(e.response){let r=e.response.status;401===r?console.error("Unauthorized access - perhaps the token has expired"):403===r?console.error("Forbidden - You do not have permission to access this resource."):r>=500?(console.error("Server error - Please try again later."),(0,n.redirect)("/error")):console.error("Error: ".concat(e.response.statusText))}else e.request?(console.error("Network error - the request was made but no response was received"),(0,n.redirect)("/error")):((0,n.redirect)("/error"),console.error("Error:",e.message));return Promise.reject(e)})}},function(e){e.O(0,[1553,3048,5452,8310,6990,9673,3348,4518,9269,5639,6396,722,4011,2971,7023,1744],function(){return e(e.s=34476)}),_N_E=e.O()}]);