(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5524],{68324:function(e,t,r){Promise.resolve().then(r.bind(r,88141))},88141:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var n=r(57437),a=r(2265),l=r(39343),s=r(94963),i=r(43767),o=r(93191),d=r(25524),c=r(37969),u=r(27918),x=r(66648),p=r(51537),h=r(7507),g=r(52892),j=r(72549),y=r(31072),v=r(1845),b=e=>{let{onClose:t,userId:r,data:a}=e,{control:s,setValue:i,watch:c}=(0,l.cI)({defaultValues:{name:null==a?void 0:a.userInfo.name,last_name:null==a?void 0:a.userInfo.last_name,email:null==a?void 0:a.userInfo.email,birthday:null==a?void 0:a.userInfo.birthday,pic:null==a?void 0:a.userInfo.pic,gender:null==a?void 0:a.userInfo.gender,mobile:null==a?void 0:a.userInfo.mobile,status:null==a?void 0:a.userInfo.status}}),b=(0,o.NL)(),{mutate:m,isPending:f}=(0,d.D)({mutationFn:async e=>(0,u.uz)(r,e),onSuccess:async e=>{!0===e.status?(t(),(0,y.xO)("اطلاعات مورد نظر با موفقیت بروزرسانی شد"),b.invalidateQueries({queryKey:["user_info"]})):(0,y.bW)("لطفا دوباره امتحان نمایید")},onError:e=>{console.log(e),console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")}});return(0,n.jsxs)(h.rj,{width:"100%",gap:"5",style:{backgroundColor:v.K.gray[2]},children:[(0,n.jsx)(h.kC,{width:"100%",justify:"center",mt:"5",children:(0,n.jsx)(h.xu,{width:"120px",height:"120px",position:"relative",children:(0,n.jsx)(x.default,{src:c("pic")?"".concat("https://uploader.darkube.app/").concat(c("pic")):"",alt:"تصویر کاربر",fill:!0,style:{borderRadius:"100px",border:"1px solid ".concat(v.K.blue[9])}})})}),(0,n.jsxs)(h.rj,{columns:"2",gap:"5",px:"5",children:[(0,n.jsx)(l.Qr,{name:"name",control:s,render:e=>{let{field:t}=e;return(0,n.jsx)(h.nv,{...t,placeholder:"نام"})}}),(0,n.jsx)(l.Qr,{name:"last_name",control:s,render:e=>{let{field:t}=e;return(0,n.jsx)(h.nv,{...t,placeholder:"نام خانوادگی"})}}),(0,n.jsx)(l.Qr,{name:"gender",control:s,render:e=>{let{field:t}=e;return(0,n.jsx)(h.fp,{...t,placeholder:"جنسیت",size:"3",value:String(t.value),onValueChange:e=>{t.onChange(e)},children:p.Qd.map(e=>(0,n.jsx)(h.Ql,{value:e.value,children:e.name},e.id))})}}),(0,n.jsx)(l.Qr,{name:"birthday",control:s,render:e=>(0,n.jsx)(g.Z,{inputMode:"none",placeholder:"تاریخ تولد",value:e.field.value,onChangeValue:e=>{i("birthday",Number(new Date(e)))},style:{backgroundColor:v.K.gray[1]}})}),(0,n.jsx)(l.Qr,{name:"mobile",control:s,render:e=>{let{field:t}=e;return(0,n.jsx)(h.nv,{disabled:!0,...t,placeholder:"شماره تماس"})}}),(0,n.jsx)(l.Qr,{name:"email",control:s,render:e=>{let{field:t}=e;return(0,n.jsx)(h.nv,{...t,placeholder:"ایمیل"})}})]}),(0,n.jsx)(j.Z,{submitButtonText:"ثبت تغییرات",closeButtonText:"لغو و بازگشت",isLoading:f,onCloseButton:t,onSubmit:()=>m(c())})]})},m=r(16463),f=r(36721),C=r(47964),O=r(77855),I=r(27533),D=e=>{let{onSubmit:t,isOpen:r,setIsOpen:a,userId:s,isPending:o}=e,d=(0,m.useRouter)(),{control:c,reset:u,setValue:x}=(0,l.Gc)(),g=(0,m.useSearchParams)(),y=e=>g.get(e)||"",{data:v}=(0,i.a)({queryKey:["constant"],queryFn:async()=>(0,f.iV)()}),b=()=>{t()},D=()=>{u({page:1,limit:10,sortDate:"",targetDate:"",userId:s,originCityId:"",originProvinceId:"",destinationCityId:"",destinationProvinceId:"",departureDateStart:"",departureDateEnd:"",returnDateStart:"",returnDateEnd:"",sort:""}),d.replace("/user/".concat(s)),t(),a(!1)},k=e=>{switch(e){case 1:return x("sortDate","des"),x("targetDate","dep");case 2:return x("targetDate","dep"),x("sortDate","asc");case 3:return x("targetDate","ret"),x("sortDate","des");case 4:return x("targetDate","ret"),x("sortDate","asc")}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.kC,{width:"100%",align:"center",justify:"between",children:[(0,n.jsx)(h.hU,{colorVariant:"BLUE",variant:"soft",type:"button",size:"4",onClick:()=>a(!0),children:(0,n.jsx)(I.wn,{})}),(0,n.jsx)(h.kC,{width:"240px",children:(0,n.jsx)(l.Qr,{name:"sort",control:c,render:e=>{let{field:r}=e;return(0,n.jsx)(h.fp,{size:"3",...r,placeholder:"مرتب سازی بر اساس",value:String(r.value||y("sort")),onValueChange:e=>{let n=p.gy.find(t=>t.id===Number(e));k(null==n?void 0:n.id),r.onChange(e),x("page",1),t()},children:p.gy.map(e=>(0,n.jsx)(h.Ql,{value:String(e.id),children:e.name},e.id))})}})})]}),(0,n.jsxs)(h.u_,{isOpen:r,onClose:()=>a(!1),children:[(0,n.jsx)(O.Z,{title:"فیلتر",handleClose:()=>a(!1)}),(0,n.jsx)(C.Z,{province:(null==v?void 0:v.provinces)?v.provinces:[]}),(0,n.jsx)(j.Z,{submitButtonText:"اعمال فیلتر ها",closeButtonText:"حذف فیلتر ها",onCloseButton:()=>D(),onSubmit:()=>{b(),a(!1)},isLoading:o})]})]})},k=r(46302),w=r(10504),K=r(21949),z=e=>{let{data:t}=e,r=(0,m.useRouter)();return(0,n.jsx)(k.iA,{columns:[{accessorKey:"index",header:"ردیف",cell:e=>(0,n.jsx)(h.xv,{...K.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:v.K.gray[11]},children:e.row.index+1})},{accessorKey:"sourceCityName",header:"مبدا",cell:e=>{let t=e.getValue();return(0,n.jsx)(h.xv,{...K.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:v.K.gray[11]},children:t||"-"})}},{accessorKey:"destinationCity",header:"مقصد",cell:e=>{let t=e.getValue();return(0,n.jsx)(h.xv,{...K.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:v.K.gray[11]},children:t||"-"})}},{accessorKey:"createdAt",header:"تاریخ ساخت برنامه",cell:e=>{let t=e.getValue();return(0,n.jsx)(h.xv,{...K.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:v.K.gray[11]},children:t?(0,w.l)(t):"-"})}},{accessorKey:"departureDate",header:"تاریخ رفت",cell:e=>{let t=e.getValue();return(0,n.jsx)(h.xv,{...K.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:v.K.gray[11]},children:t?(0,w.l)(t):"-"})}},{accessorKey:"returnDate",header:"تاریخ بازگشت",cell:e=>{let t=e.getValue();return(0,n.jsx)(h.xv,{...K.p.body2,style:{display:"flex",height:"100%",alignItems:"center",color:v.K.gray[11]},children:t?(0,w.l)(t):"-"})}},{id:"details",cell:e=>{let{row:t}=e,a=t.original;return(0,n.jsx)(h.kC,{width:"100%",height:"100%",align:"center",justify:"center",children:(0,n.jsx)(h.zx,{variant:"surface",onClick:e=>{e.preventDefault(),r.push("/plans/user-plan/".concat(a.tripId))},children:"..."})})}}],data:t})},N=r(29962),S=r(72051),P=r(51360),E=r(94881),_=r(25231);function V(e){let{params:t,searchParams:r}=e,{data:x,isLoading:p,isFetching:g}=(0,i.a)({queryKey:["user_info"],queryFn:async()=>(0,u.bG)(w)}),[j,m]=(0,a.useState)(!1),[f,C]=(0,a.useState)(!1),[I,k]=(0,a.useState)(!1),w=Number(t.slug),V=(0,o.NL)(),Q=(0,l.cI)({defaultValues:{page:Number(r.page)||1,sortDate:r.sortDate?r.sortDate:"",targetDate:r.targetDate?r.targetDate:"",originCityId:r.originCityId?Number(r.originCityId):"",originProvinceId:r.originProvinceId?Number(r.originProvinceId):"",destinationCityId:r.destinationCityId?Number(r.destinationCityId):"",destinationProvinceId:r.destinationProvinceId?Number(r.destinationProvinceId):"",departureDateStart:r.departureDateStart?Number(r.departureDateStart):"",departureDateEnd:r.departureDateEnd?Number(r.departureDateEnd):"",returnDateStart:r.returnDateStart?Number(r.returnDateStart):"",returnDateEnd:r.returnDateEnd?Number(r.returnDateEnd):"",sort:r.sort||""}}),{watch:A,setValue:Z,handleSubmit:T}=Q,{data:q,isLoading:B,isFetching:F}=(0,i.a)({queryKey:["recent-trips-user",w],queryFn:async()=>await (0,u.mP)(A(),w)}),{mutate:L,isPending:R}=(0,d.D)({mutationFn:async e=>(0,u.uz)(w,e),onSuccess:async e=>{!0===e.status?(V.invalidateQueries({queryKey:["user_info"]}),(0,y.xO)(!0===f?"کاربر مورد نظر با موفقیت فعال شد":"کاربر مورد نظر با موفقیت غیر فعال شد")):(0,y.bW)("لطفا دوباره امتحان نمایید")},onError:e=>{console.log(e)}});console.log(A());let U=e=>{console.log("run");let t=(0,c.v7)(e,!0),r=(0,_.X)(t);V.invalidateQueries({queryKey:["recent-trips-user"]});let n="".concat(window.location.pathname,"?").concat(r);window.history.pushState(null,"",n)},W=e=>{let{name:t,last_name:r,email:n,birthday:a,gender:l}=e;return C(!1),{name:t,last_name:r,email:n,birthday:a,gender:l,status:!1}},X=e=>{let{name:t,last_name:r,email:n,birthday:a,gender:l}=e;return C(!0),{name:t,last_name:r,email:n,birthday:a,gender:l,status:!0}};return(0,n.jsxs)(h.kC,{direction:"column",children:[(0,n.jsx)(N.default,{title:"اطلاعات کاربر",isNavigation:!0}),(0,n.jsx)(h.xu,{p:"24px 110px 40px 40px ",children:(0,n.jsx)(h.rj,{width:"100%",maxWidth:"1920px",mx:"auto",children:(0,n.jsx)(l.RV,{...Q,children:(0,n.jsxs)("form",{onSubmit:T(U),children:[(0,n.jsxs)(h.rj,{width:"100%",gapY:"5",children:[p||g?(0,n.jsx)(s.$j,{style:{marginInline:"auto",scale:2,marginBlock:"20px"}}):(0,n.jsx)(E.Z,{...null==x?void 0:x.userInfo,type:"USER",onDeActive:()=>{(null==x?void 0:x.userInfo)&&L(W(x.userInfo))},onActive:()=>{(null==x?void 0:x.userInfo)&&L(X(x.userInfo))},isLoading:R,onEditInfo:()=>m(!0)}),(0,n.jsx)(h.xv,{...K.p.title2,style:{color:v.K.gray[12]},children:"برنامه های کاربر"}),(0,n.jsx)(D,{onSubmit:()=>U(A()),userId:w,isOpen:I,setIsOpen:k,isPending:B}),F||B?(0,n.jsx)(s.$j,{style:{marginInline:"auto",scale:2,marginBlock:"20px"}}):(0,n.jsx)(z,{data:(null==q?void 0:q.latestTrips)?q.latestTrips:[]}),(null==q?void 0:q.latestTrips)&&(0,n.jsxs)(h.kC,{width:"100%",align:"center",justify:"between",children:[(0,n.jsx)(S.Z,{current:A("page"),total:null==q?void 0:q.totalPages,onPageChange:e=>{Z("page",e),U(A())}}),(0,n.jsx)(P.Z,{data:null==q?void 0:q.latestTrips,currentPage:null==q?void 0:q.currentPage,totalCount:null==q?void 0:q.totalCount})]})]}),(0,n.jsxs)(h.u_,{isOpen:j,onClose:()=>m(!1),children:[(0,n.jsx)(O.Z,{title:"ویرایش کاربر",handleClose:()=>m(!1)}),(0,n.jsx)(b,{onClose:()=>m(!1),userId:w,data:x})]})]})})})})]})}},27918:function(e,t,r){"use strict";r.d(t,{AW:function(){return s},bG:function(){return d},mP:function(){return i},uz:function(){return o},v7:function(){return l}});var n=r(31067),a=r(37969);let l=e=>{let t={};return Object.keys(e).forEach(r=>{let n=e[r];null===n||""===n||Array.isArray(n)&&0===n.length||0===n||"null"===n||(t[r]=n)}),t},s=async e=>{let t=l(e),r=(0,a.X_)(t);return(await n.x.get("user?limit=10&".concat(r))).data.data},i=async(e,t)=>{let r=l(e);delete r.sort;let s=(0,a.X_)(r);return(await n.x.get("user/trips?userId=".concat(t,"&limit=10&").concat(s))).data.data},o=async(e,t)=>{let r=l({...t,mobile:null,pic:null});return(await n.x.patch("user/profile/partiallyEditUser/".concat(e),r)).data},d=async e=>(await n.x.get("user/userInfoForUserTrips/".concat(e))).data.data},94881:function(e,t,r){"use strict";var n=r(57437),a=r(2265),l=r(66648),s=r(94963),i=r(7507),o=r(40252),d=r(1845),c=r(21949),u=r(10504);t.Z=e=>{let{pic:t,name:r,last_name:p,birthday:h,gender:g,mobile:j,email:y,type:v,status:b,onShowProfile:m,onDeActive:f,onActive:C,onEditInfo:O,isLoading:I}=e,[D,k]=(0,a.useState)({isOpen:!1,key:"active"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{hero:"سازنده برنامه",children:(0,n.jsxs)(i.rj,{width:"100%",columns:"3",px:"4",gapX:"5",style:{gridTemplateColumns:"auto 3fr auto"},children:[(0,n.jsx)(i.xu,{width:"130px",height:"130px",position:"relative",children:(0,n.jsx)(l.default,{src:t?"".concat("https://uploader.darkube.app/").concat(t):"",alt:"تصویر کاربر",fill:!0,style:{borderRadius:"100px",border:"1px solid ".concat(d.K.blue[9])}})}),(0,n.jsxs)(i.rj,{width:"3",columns:"3",gapY:"5",children:[(0,n.jsx)(x,{label:"نام",value:r}),(0,n.jsx)(x,{label:"نام خانوادگی",value:p}),(0,n.jsx)(x,{label:"تاریخ تولد",value:(0,u.l)(h)}),(0,n.jsx)(x,{label:"جنسیت",value:"MALE"===g?"مرد":"زن"}),(0,n.jsx)(x,{label:"شماره تماس",value:j}),(0,n.jsx)(x,{label:"ایمیل",value:y})]}),(0,n.jsx)(i.kC,{align:"end",children:"PLAN"===v?(0,n.jsx)(i.zx,{size:"3",colorVariant:"PINK",onClick:m,children:(0,n.jsx)(i.xv,{...c.p.body1,children:"مشاهده پروفایل"})}):(0,n.jsxs)(i.kC,{direction:"column",gap:"2",children:[!0===b?(0,n.jsx)(i.zx,{size:"3",colorVariant:"PINK",type:"button",onClick:()=>k({isOpen:!0,key:"deActive"}),children:(0,n.jsx)(i.xv,{...c.p.body1,children:"غیرفعال کردن کاربر"})}):(0,n.jsx)(i.zx,{size:"3",type:"button",onClick:()=>k({isOpen:!0,key:"active"}),children:(0,n.jsx)(i.xv,{...c.p.body1,children:"فعال سازی کاربر"})}),(0,n.jsx)(i.zx,{size:"3",type:"button",onClick:O,children:(0,n.jsx)(i.xv,{...c.p.body1,children:"ویرایش اطلاعات"})})]})})]})}),(0,n.jsxs)(i.u_,{isOpen:D.isOpen,onClose:()=>k({...D,isOpen:!1}),children:["deActive"===D.key&&(0,n.jsxs)(i.rj,{gapY:"24px",p:"5",children:[(0,n.jsx)(i.xv,{children:"آیا از غیر فعال کردن این کاربر اظمینان دارید؟ "}),(0,n.jsxs)(i.rj,{gap:"10px",columns:"2",children:[(0,n.jsx)(i.zx,{onClick:()=>{f&&f(),k({...D,isOpen:!1})},variant:"soft",size:"4",children:(0,n.jsx)(i.xv,{...c.p.body3,children:I?(0,n.jsx)(s.$j,{}):"بله"})}),(0,n.jsx)(i.zx,{type:"button",onClick:()=>k({...D,isOpen:!1}),variant:"solid",size:"4",children:(0,n.jsx)(i.xv,{...c.p.body3,children:"خیر"})})]})]}),"active"===D.key&&(0,n.jsxs)(i.rj,{gapY:"24px",p:"5",children:[(0,n.jsx)(i.xv,{children:"آیا از فعال کردن این کاربر اظمینان دارید؟ "}),(0,n.jsxs)(i.rj,{gap:"10px",columns:"2",children:[(0,n.jsx)(i.zx,{onClick:()=>{C&&C(),k({...D,isOpen:!1})},variant:"soft",size:"4",children:(0,n.jsx)(i.xv,{...c.p.body3,children:I?(0,n.jsx)(s.$j,{}):"بله"})}),(0,n.jsx)(i.zx,{type:"button",onClick:()=>k({...D,isOpen:!1}),variant:"solid",size:"4",children:(0,n.jsx)(i.xv,{...c.p.body3,children:"خیر"})})]})]})]})]})};let x=e=>{let{label:t,value:r}=e;return(0,n.jsxs)(i.kC,{align:"center",gap:"2",children:[(0,n.jsx)(i.xv,{...c.p.body2,style:{color:d.K.gray[10]},children:t}),(0,n.jsx)(i.xv,{...c.p.body1,style:{color:d.K.gray[12]},children:r||"-"})]})}},40252:function(e,t,r){"use strict";var n=r(57437),a=r(2265),l=r(89183),s=r(7507),i=r(1845);let o=a.forwardRef((e,t)=>{let{hero:r,children:a,...l}=e;return(0,n.jsxs)(d,{ref:t,...l,children:[(0,n.jsx)(s.kC,{className:"style",p:"8px 16px",children:(0,n.jsx)(s.X6,{as:"h6",size:"6",style:{color:i.K.gray[1],fontWeight:700},children:r})}),(0,n.jsx)(s.rj,{gap:"16px",p:"24px 16px 16px 16px",children:a})]})});t.default=o;let d=(0,l.ZP)(s.rj).withConfig({componentId:"sc-3db28b84-0"})(["background-color:",";border-radius:8px;border:1px solid ",";min-height:100px;.style{border-top-right-radius:8px;border-top-left-radius:8px;height:fit-content;background-color:",";}"],i.K.gray[2],i.K.gray[6],i.K.blue[10])}},function(e){e.O(0,[1553,3048,3497,8334,5452,8310,6990,9212,1825,8702,9269,6648,783,7507,7533,978,6489,2971,7023,1744],function(){return e(e.s=68324)}),_N_E=e.O()}]);