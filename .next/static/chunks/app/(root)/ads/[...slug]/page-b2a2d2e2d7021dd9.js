(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2401],{83934:function(e,r,t){Promise.resolve().then(t.bind(t,76669)),Promise.resolve().then(t.bind(t,13304)),Promise.resolve().then(t.bind(t,68602)),Promise.resolve().then(t.bind(t,7580)),Promise.resolve().then(t.bind(t,61485)),Promise.resolve().then(t.bind(t,56935)),Promise.resolve().then(t.bind(t,52431)),Promise.resolve().then(t.bind(t,99497)),Promise.resolve().then(t.bind(t,80023)),Promise.resolve().then(t.bind(t,67553)),Promise.resolve().then(t.bind(t,9646)),Promise.resolve().then(t.bind(t,62447)),Promise.resolve().then(t.bind(t,27071)),Promise.resolve().then(t.bind(t,76697)),Promise.resolve().then(t.bind(t,44581)),Promise.resolve().then(t.bind(t,36756)),Promise.resolve().then(t.bind(t,76895)),Promise.resolve().then(t.bind(t,2738)),Promise.resolve().then(t.bind(t,23195)),Promise.resolve().then(t.bind(t,62187)),Promise.resolve().then(t.bind(t,76484)),Promise.resolve().then(t.bind(t,62381)),Promise.resolve().then(t.bind(t,90393)),Promise.resolve().then(t.bind(t,26480)),Promise.resolve().then(t.bind(t,36982)),Promise.resolve().then(t.bind(t,90448)),Promise.resolve().then(t.bind(t,29340)),Promise.resolve().then(t.bind(t,66114)),Promise.resolve().then(t.bind(t,39752)),Promise.resolve().then(t.bind(t,75990)),Promise.resolve().then(t.bind(t,29962)),Promise.resolve().then(t.bind(t,20375)),Promise.resolve().then(t.bind(t,81365)),Promise.resolve().then(t.bind(t,3630)),Promise.resolve().then(t.bind(t,34402)),Promise.resolve().then(t.bind(t,27485)),Promise.resolve().then(t.bind(t,50581)),Promise.resolve().then(t.bind(t,55713)),Promise.resolve().then(t.bind(t,78393)),Promise.resolve().then(t.bind(t,19733)),Promise.resolve().then(t.bind(t,90269)),Promise.resolve().then(t.bind(t,82596)),Promise.resolve().then(t.bind(t,69242)),Promise.resolve().then(t.bind(t,24360)),Promise.resolve().then(t.bind(t,23759)),Promise.resolve().then(t.bind(t,45553)),Promise.resolve().then(t.bind(t,68457)),Promise.resolve().then(t.bind(t,50842))},927:function(e,r,t){"use strict";t.d(r,{nj:function(){return s},vo:function(){return o},wu:function(){return i}});var n=t(31067);let s=async()=>(await n.x.get("/ads/page")).data.data,i=async()=>(await n.x.get("/ads/banners")).data.data,o=async e=>(await n.x.get("/ads/banners?provinceId=".concat(e))).data.data},25985:function(e,r,t){"use strict";var n=t(57437);t(2265);var s=t(16463),i=t(96396),o=t(10504),l=t(1845),d=t(21949);r.Z=e=>{let{label:r,holdersCount:t,latestUpdatedAt:c,adKey:x,type:p,id:h,path:u}=e,b=(0,s.useRouter)();return(0,n.jsxs)(i.kC,{width:"100%",align:"center",justify:"between",p:"4",style:{backgroundColor:l.K.gray[2],border:"1px solid ".concat(l.K.gray[6]),borderRadius:8},children:[(0,n.jsxs)(i.kC,{direction:"column",gap:"12px",children:[(0,n.jsx)(i.xv,{...d.p.body1,style:{color:l.K.gray[12]},children:r}),(0,n.jsx)(a,{label:"تعداد تبلیغات",value:t}),(0,n.jsx)(a,{label:"آخرین ویرایش",value:(0,o.l)(c)})]}),(0,n.jsxs)(i.kC,{align:"center",gap:"2",children:[(0,n.jsx)(i.zx,{size:"3",onClick:()=>b.push(u),style:{padding:"7px 16px"},children:(0,n.jsx)(i.xv,{...d.p.body3,children:"مشاهده تبلیغات"})}),"province_list"===p&&(0,n.jsx)(i.zx,{size:"3",variant:"soft",onClick:()=>b.push("/ads/province/".concat(x,"/").concat(h)),children:(0,n.jsx)(i.xv,{...d.p.body3,children:"لیست شهرستان ها"})})]})]})};let a=e=>{let{label:r,value:t}=e;return(0,n.jsxs)(i.kC,{align:"center",py:"1",gap:"2",children:[(0,n.jsx)(i.xv,{...d.p.description2,style:{color:l.K.gray[10]},children:r}),(0,n.jsx)(i.xv,{...d.p.description2,style:{color:l.K.gray[12]},children:t})]})}},66114:function(e,r,t){"use strict";t.d(r,{default:function(){return y}});var n=t(57437),s=t(2265),i=t(39343),o=t(16463),l=t(96396),d=t(1845),a=t(21949),c=t(72549),x=t(77855),p=t(40722),h=e=>{let{isOpen:r,setIsOpen:t,type:s}=e,{control:o}=(0,i.Gc)();return(0,n.jsxs)(l.u_,{isOpen:r,onClose:()=>t(!1),children:[(0,n.jsx)(x.Z,{title:"edit"===s?"ویرایش آگهی":"افزودن آگهی",handleClose:()=>t(!1),icon:(0,n.jsx)(p.x8,{})}),(0,n.jsxs)(l.rj,{width:"100%",p:"4",style:{justifyItems:"center"},children:[(0,n.jsx)(l.kC,{width:"328px",height:"200px",align:"center",justify:"center",mb:"3",style:{borderRadius:8,border:"1px solid ".concat(d.K.gray[6])},children:"image picker"}),(0,n.jsx)(i.Qr,{name:"text",control:o,render:e=>{let{field:r}=e;return(0,n.jsx)(l.nv,{...r,placeholder:"Alt Text"})}}),(0,n.jsx)(i.Qr,{name:"description",control:o,render:e=>{let{field:r}=e;return(0,n.jsx)(l.Kx,{...r,placeholder:"توضیحات تصویر",rows:3})}})]}),(0,n.jsx)(c.Z,{submitButtonText:"edit"===s?"ثبت تغییرات":"ثبت آگهی",closeButtonText:"لغو",onCloseButton:()=>t(!1)})]})},u=e=>{let{id:r}=e,[t,i]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.kC,{width:"100%",align:"center",justify:"between",style:{backgroundColor:d.K.gray[2],border:"2px dashed ".concat(d.K.blue[8]),borderRadius:8},children:[(0,n.jsx)(l.kC,{p:"44px 32px",children:(0,n.jsx)(l.X6,{style:{fontSize:"96px",fontWeight:500,lineHeight:"122.5px",color:d.K.gray[8]},children:r})}),(0,n.jsx)(l.kC,{width:"55%",children:(0,n.jsx)(l.zx,{variant:"surface",onClick:()=>i(!0),children:(0,n.jsxs)(l.kC,{p:"13.5px 15px 13.5px 19px",align:"center",gap:"2",children:[(0,n.jsx)(l.xv,{...a.p.body1,children:"+"}),(0,n.jsx)(l.xv,{...a.p.body1,children:"افزودن آگهی"})]})})})]}),(0,n.jsx)(h,{type:"add",isOpen:t,setIsOpen:i})]})},b=t(66648),j=t(4867),v=e=>{let{id:r,pic:t,url:i,altText:o,description:u}=e,[v,y]=(0,s.useState)("edit"),[g,m]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.rj,{width:"100%",p:"4",gapY:"4",style:{border:"1px solid ".concat(d.K.gray[6]),borderRadius:8},children:[(0,n.jsxs)(l.kC,{width:"100%",align:"center",justify:"between",children:[(0,n.jsx)(l.X6,{style:{color:d.K.gray[11],fontSize:"32px",fontWeight:500,lineHeight:"37.5px"},children:r}),(0,n.jsxs)(l.kC,{align:"center",gap:"4",children:[(0,n.jsx)(l.hU,{size:"3",onClick:()=>{y("edit"),m(!0)},children:(0,n.jsx)(p.z,{})}),(0,n.jsx)(l.hU,{size:"3",variant:"surface",onClick:()=>{y("delete"),m(!0)},children:(0,n.jsx)(p.rF,{})})]})]}),(0,n.jsxs)(l.kC,{width:"100%",gap:"10px",children:[(0,n.jsx)(l.xu,{width:"328px",height:"200px",position:"relative",children:(0,n.jsx)(b.default,{src:t,alt:"تصویر تبلیغ",fill:!0,style:{borderRadius:8}})}),(0,n.jsxs)(l.kC,{width:"77.5%",direction:"column",mt:"2",style:{justifyContent:"space-between"},children:[(0,n.jsxs)(l.kC,{direction:"column",gap:"3",children:[(0,n.jsx)(l.xv,{...a.p.body1,style:{color:d.K.gray[11]},children:o}),(0,n.jsx)(l.xv,{...a.p.paragraph1,style:{color:d.K.gray[11]},children:u})]}),i&&(0,n.jsxs)(l.kC,{p:"12px 16px",gap:"2",align:"center",children:[(0,n.jsx)(l.hU,{variant:"surface",size:"1",children:(0,n.jsx)(j.TIy,{style:{color:d.K.blue[10]}})}),(0,n.jsx)(l.xv,{...a.p.body3,style:{color:d.K.blue[11]},children:i})]})]})]})]}),"delete"===v?(0,n.jsxs)(l.u_,{isOpen:g,onClose:()=>m(!1),children:[(0,n.jsx)(x.Z,{title:"حذف آگهی",handleClose:()=>m(!1),icon:(0,n.jsx)(p.x8,{})}),(0,n.jsx)(l.rj,{width:"100%",p:"4",children:(0,n.jsx)(l.X6,{as:"h2",size:"5",children:"آیا از حذف این آگهی اطمینان داید؟"})}),(0,n.jsx)(c.Z,{submitButtonText:"حذف آگهی",closeButtonText:"لغو",onCloseButton:()=>m(!1)})]}):"edit"===v&&(0,n.jsx)(h,{type:"edit",isOpen:g,setIsOpen:m})]})},y=e=>{let{data:r}=e,t=(0,i.cI)({defaultValues:{text:"",description:""}}),s=(0,o.useRouter)();return(0,n.jsx)(i.RV,{...t,children:(0,n.jsxs)(l.rj,{width:"100%",gapY:"5",children:[r.map(e=>e.pic&&e.url&&e.altText&&e.description?(0,n.jsx)(v,{...e},e.id):(0,n.jsx)(u,{id:e.id},e.id)),(0,n.jsxs)(l.kC,{p:"4",gap:"5",style:{border:"1px solid ".concat(d.K.gray[6]),borderRadius:8,backgroundColor:d.K.gray[2]},children:[(0,n.jsx)(l.zx,{size:"3",variant:"soft",style:{padding:"13.5px 48.5px"},children:(0,n.jsx)(l.xv,{...a.p.body1,children:"ثبت"})}),(0,n.jsx)(l.zx,{type:"button",size:"3",colorVariant:"PINK",onClick:()=>s.back(),style:{padding:"13.5px 48.5px"},children:(0,n.jsx)(l.xv,{...a.p.body1,children:"لغو"})})]})]})})}},39752:function(e,r,t){"use strict";var n=t(57437);t(2265);var s=t(16463),i=t(94963),o=t(76351),l=t(927),d=t(96396),a=t(31072),c=t(25985);r.default=()=>{let e=(0,s.useParams)().slug[2];console.log("\uD83D\uDE80 ~ CitiesListContainer ~ cityId:",e);let{data:r,isLoading:t,isFetching:x,isError:p}=(0,o.useQuery)({queryKey:["banner-provinces"],queryFn:async()=>await (0,l.vo)(Number(e))});return(console.log("CITY DATA",r),t||x)?(0,n.jsx)(i.$j,{style:{margin:"50px auto",scale:2}}):!r||p?(0,a.ToastError)("مشکلی پیش آمده.لطفا مجددا تلاش نمایید"):(0,n.jsx)(d.rj,{width:"100%",columns:"2",gap:"5",children:r.provinces.map((e,r)=>(0,n.jsx)(c.Z,{type:"banner",label:e.cityName,latestUpdatedAt:e.lastUpdated,holdersCount:e.bannerCount,adKey:"city",path:"/ads/province/city/cities-ad/".concat(e.cityId)},r))})}},75990:function(e,r,t){"use strict";var n=t(57437);t(2265);var s=t(94963),i=t(76351),o=t(927),l=t(96396),d=t(31072),a=t(25985);r.default=()=>{let{data:e,isLoading:r,isFetching:t,isError:c}=(0,i.useQuery)({queryKey:["banner-provinces"],queryFn:async()=>await (0,o.wu)()});return(console.log("DATA",e),r||t)?(0,n.jsx)(s.$j,{style:{margin:"50px auto",scale:2}}):!e||c?(0,d.ToastError)("مشکلی پیش آمده.لطفا مجددا تلاش نمایید"):(0,n.jsx)(l.rj,{width:"100%",columns:"2",gap:"5",children:e.provinces.map(e=>(0,n.jsx)(a.Z,{adKey:"city",type:"province_list",label:e.name,holdersCount:e.bannerCount,latestUpdatedAt:e.lastUpdated,id:e.id,path:"/ads/province/province-ad/".concat(e.id)},e.id))})}},29962:function(e,r,t){"use strict";var n=t(57437);t(2265);var s=t(16463),i=t(89183),o=t(96396),l=t(40722),d=t(1845),a=t(21949);r.default=e=>{let{title:r,isNavigation:t}=e,i=(0,s.useRouter)();return(0,n.jsx)(c,{children:(0,n.jsxs)(x,{children:[(0,n.jsx)(o.xv,{...a.p.title1,style:{color:d.K.gray[11]},children:r}),t&&(0,n.jsx)(o.hU,{size:"3",variant:"surface",onClick:()=>i.back(),children:(0,n.jsx)(l.jb,{color:"#373737"})})]})})};let c=i.ZP.header.withConfig({componentId:"sc-132ec2d4-0"})(["padding:14.5px 100px 14.5px 24px;position:sticky;left:0;right:0;top:0;border-bottom:1px solid ",";background-color:",";box-shadow:",";z-index:10;"],d.K.gray[6],d.K.gray[1],d.i.shadow1),x=(0,i.ZP)(o.kC).withConfig({componentId:"sc-132ec2d4-1"})(["max-width:1920px;width:100%;display:flex;align-items:center;justify-content:space-between;margin:auto;"])},72549:function(e,r,t){"use strict";var n=t(57437);t(2265);var s=t(94963),i=t(1845),o=t(21949),l=t(96396);r.Z=e=>{let{closeButtonText:r,submitButtonText:t,isLoading:d,onCloseButton:a,onSubmit:c,isFull:x}=e;return(0,n.jsx)(l.kC,{height:"max-content",gap:"16px",left:"0",p:"16px",right:"0",style:{backgroundColor:i.K.gray[2],marginBlockStart:"auto",borderTop:"1px solid ".concat(i.K.gray[3]),boxShadow:i.i.shadow1,borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"},position:"sticky",bottom:"0px",children:(0,n.jsxs)(l.rj,{gap:"16px",columns:"2",width:x?"100%":"max-content",children:[(0,n.jsx)(l.zx,{onClick:c,type:"submit",variant:"soft",size:"3",style:{width:x?"100%":"fit-content",padding:"9.5px 38px"},children:d?(0,n.jsx)(s.$j,{}):(0,n.jsx)(l.xv,{...o.p.body1,children:t})}),(0,n.jsx)(l.zx,{type:"button",variant:"solid",size:"3",onClick:a,style:{width:x?"100%":"fit-content",padding:"9.5px 38px"},children:(0,n.jsx)(l.xv,{...o.p.body1,children:r})})]})})}},77855:function(e,r,t){"use strict";var n=t(57437);t(2265);var s=t(89183),i=t(1845),o=t(21949),l=t(96396);r.Z=e=>{let{handleClose:r,title:t,icon:s}=e;return(0,n.jsxs)(d,{position:"sticky",top:"0",p:"8px 16px",justify:"between",style:{backgroundColor:i.K.blue[10],zIndex:"100"},align:"center",children:[(0,n.jsx)(l.xv,{...o.p.title2,style:{color:i.K.gray[1],fontWeight:700},children:t}),(0,n.jsx)(l.hU,{type:"button",onClick:r,variant:"soft",size:"2",style:{backgroundColor:i.K.blue[9],borderRadius:"12px"},children:(0,n.jsx)(l.kC,{justify:"center",align:"center",style:{backgroundColor:i.K.blue[9],borderRadius:12,padding:8},children:s})})]})};let d=(0,s.zo)(l.kC).withConfig({componentId:"sc-fed1f764-0"})(["border-top-right-radius:8px;border-top-left-radius:8px;"])},10504:function(e,r,t){"use strict";t.d(r,{l:function(){return i}});var n=t(64673),s=t.n(n);function i(e){return s()(e).locale("fa").format("jYYYY/jMM/jDD")}},31067:function(e,r,t){"use strict";t.d(r,{x:function(){return a}});var n=t(16463),s=t(38472),i=t(15263),o=t(86300).Buffer;let l="".concat("bznpanelapi",":").concat("VX+kPbS#@sdD5$"),d=o.from(l).toString("base64"),a=s.Z.create({baseURL:"https://api-admin-dev.darkube.app/v1/",headers:{"up-auth":"Basic ".concat(d),"Content-Type":"application/json"}});a.interceptors.request.use(e=>{let r=new i.Z().get("token");return r&&(e.headers.Authorization="Bearer ".concat(r)),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>{if(e.response){let r=e.response.status;401===r?console.error("Unauthorized access - perhaps the token has expired"):403===r?console.error("Forbidden - You do not have permission to access this resource."):r>=500?(console.error("Server error - Please try again later."),(0,n.redirect)("/error")):console.error("Error: ".concat(e.response.statusText))}else e.request?(console.error("Network error - the request was made but no response was received"),(0,n.redirect)("/error")):((0,n.redirect)("/error"),console.error("Error:",e.message));return Promise.reject(e)})}},function(e){e.O(0,[1553,3048,5452,8310,6990,9673,3348,4518,9269,6648,5639,6396,3913,722,2971,7023,1744],function(){return e(e.s=83934)}),_N_E=e.O()}]);