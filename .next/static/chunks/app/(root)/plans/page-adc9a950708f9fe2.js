(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{31250:function(e,t,r){Promise.resolve().then(r.bind(r,23315))},23315:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(57437),a=r(2265),l=r(39343),s=r(94963),i=r(25524),o=r(27918),c=r(16463),u=r(76351),d=r(19156),h=r(51537),g=r(96396),x=r(72549),p=r(77855),y=r(60376),j=r(83882),m=r(21949),v=r(47964),f=e=>{let[t,r]=(0,a.useState)(!1),s=(0,c.useSearchParams)(),i=(0,c.useRouter)(),{control:o,watch:f,reset:C,setValue:b}=(0,l.Gc)();console.log("Watch",f());let{data:D}=(0,u.useQuery)({queryKey:["constant"],queryFn:async()=>(0,d.iV)()}),I=()=>{let e=f();(0,y.L)(i,s,e),r(!1)},K=()=>{C(),(0,y.L)(i,s,{}),r(!1)},S=e=>{switch(e){case 1:return b("sortDate","des"),b("targetDate","dep");case 2:return b("targetDate","dep"),b("sortDate","asc");case 3:return b("targetDate","ret"),b("sortDate","des");case 4:return b("targetDate","ret"),b("sortDate","asc")}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g.rj,{width:"100%",columns:"5",gapX:"5",style:{gridTemplateColumns:"auto auto 2fr auto 1fr"},children:[(0,n.jsx)(g.hU,{type:"button",colorVariant:"BLUE",variant:"soft",size:"3",onClick:()=>r(!0),children:(0,n.jsx)(j.wn,{})}),(0,n.jsx)(g.zx,{colorVariant:"BLUE",variant:"ghost",size:"3",onClick:()=>i.push("/plans/create-plan"),children:(0,n.jsxs)(g.kC,{gap:"2",align:"center",children:[(0,n.jsx)(g.xv,{...m.p.body1,children:"+"}),(0,n.jsx)(g.xv,{...m.p.body1,children:" افزودن نقطه"})]})}),(0,n.jsx)(l.Qr,{name:"searchQuery",control:o,render:e=>{let{field:t}=e;return(0,n.jsx)(g.nv,{...t,placeholder:"جستجوی نام کاربر"})}}),(0,n.jsx)(g.hU,{size:"3",variant:"soft",onClick:e.onSubmit,children:(0,n.jsx)(j.HN,{})}),(0,n.jsx)(l.Qr,{name:"sort",control:o,render:t=>{let{field:r}=t;return(0,n.jsx)(g.fp,{...r,placeholder:"مرتب سازی بر اساس",size:"3",value:String(r.value),onValueChange:t=>{let n=h.gy.find(e=>e.id===Number(t));S(null==n?void 0:n.id),r.onChange(t),e.onSubmit()},children:h.gy.map(e=>(0,n.jsx)(g.Ql,{value:String(e.id),style:{padding:"13.5px 12px"},children:e.name},e.id))})}})]}),(0,n.jsxs)(g.u_,{isOpen:t,onClose:()=>r(!1),children:[(0,n.jsx)(p.Z,{title:"فیلتر",icon:(0,n.jsx)(j.ol,{}),handleClose:()=>r(!1)}),(0,n.jsx)(v.Z,{province:(null==D?void 0:D.provinces)?D.provinces:[]}),(0,n.jsx)(x.Z,{submitButtonText:"اعمال فیلتر ها",closeButtonText:"حذف فیلتر ها",onCloseButton:()=>K(),onSubmit:()=>I()})]})]})},C=r(12767),b=r(10504),D=r(1845),I=e=>{let t=(0,c.useRouter)();return(0,n.jsx)(C.iA,{columns:[{accessorKey:"index",header:"ردیف",cell:e=>(0,n.jsx)(g.xv,{...m.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:D.K.gray[11]},children:e.row.index+1})},{accessorKey:"fullName",header:"نام کاربر سازنده",cell:e=>{let t=e.getValue();return(0,n.jsx)(g.xv,{...m.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:D.K.gray[11]},children:t||"-"})}},{accessorKey:"sourceCityName",header:"مبدا",cell:e=>{let t=e.getValue();return(0,n.jsx)(g.xv,{...m.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:D.K.gray[11]},children:t||"-"})}},{accessorKey:"destinationCity",header:"مقصد",cell:e=>{let t=e.getValue();return(0,n.jsx)(g.xv,{...m.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:D.K.gray[11]},children:t||"-"})}},{accessorKey:"departureDate",header:"تاریخ رفت",cell:e=>{let t=e.getValue();return(0,n.jsx)(g.xv,{...m.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:D.K.gray[11]},children:t?(0,b.l)(t):"-"})}},{accessorKey:"returnDate",header:"تاریخ بازگشت",cell:e=>{let t=e.getValue();return(0,n.jsx)(g.xv,{...m.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:D.K.gray[11]},children:t?(0,b.l)(t):"-"})}},{id:"details",cell:e=>{let{row:r}=e,a=r.original;return(0,n.jsx)(g.kC,{width:"100%",height:"100%",align:"center",justify:"center",children:(0,n.jsx)(g.zx,{variant:"surface",onClick:()=>{console.log("item",a),t.push("/plans/user-plan/".concat(a.userId,"/").concat(a.tripId))},children:"..."})})}}],data:e.data})},K=r(72051),S=r(51360),k=r(86555);function E(e){let{searchParams:t}=e,[r,c]=(0,a.useState)(t.page?Number(t.page):1),u=(0,l.cI)({defaultValues:{page:1,limit:10,searchQuery:"",sortDate:"",targetDate:"",userId:"",originCityId:"",originProvinceId:"",destinationCityId:"",destinationProvinceId:"",departureDateStart:"",departureDateEnd:"",returnDateStart:"",returnDateEnd:"",sort:""}}),{watch:d,handleSubmit:h,setValue:x}=u,{data:p,mutate:y,isError:j,isPending:m}=(0,i.useMutation)({mutationKey:["trips-data"],mutationFn:async e=>(0,o.gG)(e),onSuccess:async e=>{console.log("data",e)},onError:async e=>{console.log("DATA Error",e)}});(0,a.useEffect)(()=>{y(d())},[]),console.log("TripsData",p);let v=()=>{y(d())};return(0,n.jsx)(l.RV,{...u,children:(0,n.jsx)("form",{onSubmit:h(v),children:(0,n.jsxs)(g.rj,{width:"100%",gap:"4",p:"5",children:[(0,n.jsx)(f,{onSubmit:()=>y(d())}),j?(0,n.jsx)(g.xv,{children:"مشکلی پیش آمده لطفا مجدد تلاش نمایید"}):m?(0,n.jsx)(s.$j,{style:{marginInline:"auto",scale:3,marginBlock:"20px"}}):(0,n.jsx)(I,{data:null==p?void 0:p.latestTrips}),(null==p?void 0:p.latestTrips)&&(0,n.jsxs)(g.kC,{width:"100%",align:"center",justify:"between",children:[(0,n.jsx)(K.Z,{current:r,total:p.totalPages,onPageChange:e=>{c(e),x("page",e),(0,k.Z)(e),v()}}),(0,n.jsx)(S.Z,{data:null==p?void 0:p.latestTrips,currentPage:null==p?void 0:p.currentPage,totalCount:null==p?void 0:p.totalCount})]})]})})})}}},function(e){e.O(0,[1553,3048,3497,8334,5452,8310,6990,9212,9673,3348,4518,9269,5639,6396,3882,6412,9491,2971,7023,1744],function(){return e(e.s=31250)}),_N_E=e.O()}]);