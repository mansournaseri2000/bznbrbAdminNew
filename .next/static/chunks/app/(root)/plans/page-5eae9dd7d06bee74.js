(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{31250:function(e,t,r){Promise.resolve().then(r.bind(r,13154))},13154:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(57437),a=r(2265),l=r(39343),s=r(94963),o=r(25524),i=r(27918),c=r(16463),d=r(76351),u=r(19156),h=r(51537),x=r(96396),g=r(89183),p=r(83882),y=r(1845),j=e=>{let{placeholder:t,onClick:r}=e;return(0,n.jsxs)(m,{children:[(0,n.jsx)(f,{placeholder:t,variant:"surface"}),(0,n.jsx)(x.hU,{size:"4",variant:"soft",onClick:r,children:(0,n.jsx)(p.HN,{})})]})};let m=(0,g.ZP)(x.kC).withConfig({componentId:"sc-81dfaeb-0"})(["border:1px solid ",";border-radius:12px;padding-inline-start:1rem;&:focus-within{background-color:",";box-shadow:",";border:1px solid ",";}"],y.K.gray[7],y.K.blue[2],y.i.shadow1,y.K.gray[3]),f=(0,g.ZP)(x.nv).withConfig({componentId:"sc-81dfaeb-1"})(["&.rt-TextFieldRoot:where(.rt-variant-surface){border:none;outline:none;box-shadow:none;margin-block-end:-10px;}&:focus-within{outline:none !important;border:none !important;background-color:transparent !important;box-shadow:none !important;}@media (hover:hover){background-color:transparent !important;}"]);var v=r(72549),b=r(77855),C=r(60376),k=r(21949),w=r(47964),D=e=>{let[t,r]=(0,a.useState)(!1),s=(0,c.useSearchParams)(),o=(0,c.useRouter)(),{control:i,watch:g,reset:y,setValue:m}=(0,l.Gc)();console.log("Watch",g());let{data:f}=(0,d.useQuery)({queryKey:["constant"],queryFn:async()=>(0,u.iV)()}),D=()=>{let e=g();(0,C.L)(o,s,e),r(!1)},I=()=>{y(),(0,C.L)(o,s,{}),r(!1)},K=e=>{switch(e){case 1:return m("sortDate","des"),m("targetDate","dep");case 2:return m("targetDate","dep"),m("sortDate","asc");case 3:return m("targetDate","ret"),m("sortDate","des");case 4:return m("targetDate","ret"),m("sortDate","asc")}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.rj,{width:"100%",columns:"5",gapX:"5",style:{gridTemplateColumns:"auto auto 2fr  1fr"},children:[(0,n.jsx)(x.hU,{type:"button",colorVariant:"BLUE",variant:"soft",size:"3",onClick:()=>r(!0),children:(0,n.jsx)(p.wn,{})}),(0,n.jsx)(x.zx,{colorVariant:"BLUE",variant:"ghost",size:"3",onClick:()=>o.push("/plans/create-plan"),children:(0,n.jsxs)(x.kC,{gap:"2",align:"center",children:[(0,n.jsx)(x.xv,{...k.p.body1,children:"+"}),(0,n.jsx)(x.xv,{...k.p.body1,children:" افزودن نقطه"})]})}),(0,n.jsx)(l.Qr,{name:"searchQuery",control:i,render:t=>{let{field:r}=t;return(0,n.jsx)(j,{...r,placeholder:"جستجو",onClick:e.onSubmit})}}),(0,n.jsx)(l.Qr,{name:"sort",control:i,render:t=>{let{field:r}=t;return(0,n.jsx)(x.fp,{...r,placeholder:"مرتب سازی بر اساس",size:"3",value:String(r.value),onValueChange:t=>{let n=h.gy.find(e=>e.id===Number(t));K(null==n?void 0:n.id),r.onChange(t),e.onSubmit()},children:h.gy.map(e=>(0,n.jsx)(x.Ql,{value:String(e.id),style:{padding:"13.5px 12px"},children:e.name},e.id))})}})]}),(0,n.jsxs)(x.u_,{isOpen:t,onClose:()=>r(!1),children:[(0,n.jsx)(b.Z,{title:"فیلتر",icon:(0,n.jsx)(p.ol,{}),handleClose:()=>r(!1)}),(0,n.jsx)(w.Z,{province:(null==f?void 0:f.provinces)?f.provinces:[]}),(0,n.jsx)(v.Z,{submitButtonText:"اعمال فیلتر ها",closeButtonText:"حذف فیلتر ها",onCloseButton:()=>I(),onSubmit:()=>D()})]})]})},I=r(12767),K=r(10504),S=e=>{let t=(0,c.useRouter)();return(0,n.jsx)(I.iA,{columns:[{accessorKey:"index",header:"ردیف",cell:e=>(0,n.jsx)(x.xv,{...k.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:y.K.gray[11]},children:e.row.index+1})},{accessorKey:"fullName",header:"نام کاربر سازنده",cell:e=>{let t=e.getValue();return(0,n.jsx)(x.xv,{...k.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:y.K.gray[11]},children:t||"-"})}},{accessorKey:"sourceCityName",header:"مبدا",cell:e=>{let t=e.getValue();return(0,n.jsx)(x.xv,{...k.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:y.K.gray[11]},children:t||"-"})}},{accessorKey:"destinationCity",header:"مقصد",cell:e=>{let t=e.getValue();return(0,n.jsx)(x.xv,{...k.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:y.K.gray[11]},children:t||"-"})}},{accessorKey:"departureDate",header:"تاریخ رفت",cell:e=>{let t=e.getValue();return(0,n.jsx)(x.xv,{...k.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:y.K.gray[11]},children:t?(0,K.l)(t):"-"})}},{accessorKey:"returnDate",header:"تاریخ بازگشت",cell:e=>{let t=e.getValue();return(0,n.jsx)(x.xv,{...k.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:y.K.gray[11]},children:t?(0,K.l)(t):"-"})}},{id:"details",cell:e=>{let{row:r}=e,a=r.original;return(0,n.jsx)(x.kC,{width:"100%",height:"100%",align:"center",justify:"center",children:(0,n.jsx)(x.zx,{variant:"surface",onClick:()=>{console.log("item",a),t.push("/plans/user-plan/".concat(a.userId,"/").concat(a.tripId))},children:"..."})})}}],data:e.data})},E=r(29962),P=r(72051),V=r(51360),N=r(86555);function T(e){let{searchParams:t}=e,[r,c]=(0,a.useState)(t.page?Number(t.page):1),d=(0,l.cI)({defaultValues:{page:1,limit:10,searchQuery:"",sortDate:"",targetDate:"",userId:"",originCityId:"",originProvinceId:"",destinationCityId:"",destinationProvinceId:"",departureDateStart:"",departureDateEnd:"",returnDateStart:"",returnDateEnd:"",sort:""}}),{watch:u,handleSubmit:h,setValue:g}=d,{data:p,mutate:y,isError:j,isPending:m}=(0,o.useMutation)({mutationKey:["trips-data"],mutationFn:async e=>(0,i.gG)(e),onSuccess:async e=>{console.log("data",e)},onError:async e=>{console.log("DATA Error",e)}});(0,a.useEffect)(()=>{y(u())},[]),console.log("TripsData",p);let f=()=>{y(u())};return(0,n.jsxs)(x.kC,{direction:"column",children:[(0,n.jsx)(E.default,{title:"لیست برنامه ها",isNavigation:!0}),(0,n.jsx)(x.xu,{pr:"90px",children:(0,n.jsx)(l.RV,{...d,children:(0,n.jsx)("form",{onSubmit:h(f),children:(0,n.jsxs)(x.rj,{width:"100%",gap:"4",p:"5",children:[(0,n.jsx)(D,{onSubmit:()=>y(u())}),j?(0,n.jsx)(x.xv,{children:"مشکلی پیش آمده لطفا مجدد تلاش نمایید"}):m?(0,n.jsx)(s.$j,{style:{marginInline:"auto",scale:3,marginBlock:"20px"}}):(0,n.jsx)(S,{data:null==p?void 0:p.latestTrips}),(null==p?void 0:p.latestTrips)&&(0,n.jsxs)(x.kC,{width:"100%",align:"center",justify:"between",children:[(0,n.jsx)(P.Z,{current:r,total:p.totalPages,onPageChange:e=>{c(e),g("page",e),(0,N.Z)(e),f()}}),(0,n.jsx)(V.Z,{data:null==p?void 0:p.latestTrips,currentPage:null==p?void 0:p.currentPage,totalCount:null==p?void 0:p.totalCount})]})]})})})})]})}}},function(e){e.O(0,[1553,3048,3497,8334,5452,8310,6990,9212,9673,3348,4518,9269,5639,6396,3882,6412,7801,2971,7023,1744],function(){return e(e.s=31250)}),_N_E=e.O()}]);