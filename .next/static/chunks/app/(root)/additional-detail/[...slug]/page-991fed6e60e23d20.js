(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4291],{50905:function(e,t,n){Promise.resolve().then(n.bind(n,76669)),Promise.resolve().then(n.bind(n,13304)),Promise.resolve().then(n.bind(n,68602)),Promise.resolve().then(n.bind(n,7580)),Promise.resolve().then(n.bind(n,61485)),Promise.resolve().then(n.bind(n,56935)),Promise.resolve().then(n.bind(n,52431)),Promise.resolve().then(n.bind(n,99497)),Promise.resolve().then(n.bind(n,80023)),Promise.resolve().then(n.bind(n,67553)),Promise.resolve().then(n.bind(n,9646)),Promise.resolve().then(n.bind(n,62447)),Promise.resolve().then(n.bind(n,27071)),Promise.resolve().then(n.bind(n,76697)),Promise.resolve().then(n.bind(n,44581)),Promise.resolve().then(n.bind(n,36756)),Promise.resolve().then(n.bind(n,76895)),Promise.resolve().then(n.bind(n,2738)),Promise.resolve().then(n.bind(n,23195)),Promise.resolve().then(n.bind(n,62187)),Promise.resolve().then(n.bind(n,76484)),Promise.resolve().then(n.bind(n,62381)),Promise.resolve().then(n.bind(n,90393)),Promise.resolve().then(n.bind(n,26480)),Promise.resolve().then(n.bind(n,36982)),Promise.resolve().then(n.bind(n,90448)),Promise.resolve().then(n.bind(n,29340)),Promise.resolve().then(n.bind(n,50807)),Promise.resolve().then(n.bind(n,40114)),Promise.resolve().then(n.bind(n,158)),Promise.resolve().then(n.bind(n,75858)),Promise.resolve().then(n.bind(n,29962)),Promise.resolve().then(n.bind(n,20375)),Promise.resolve().then(n.bind(n,81365)),Promise.resolve().then(n.bind(n,3630)),Promise.resolve().then(n.bind(n,34402)),Promise.resolve().then(n.bind(n,27485)),Promise.resolve().then(n.bind(n,50581)),Promise.resolve().then(n.bind(n,55713)),Promise.resolve().then(n.bind(n,78393)),Promise.resolve().then(n.bind(n,19733)),Promise.resolve().then(n.bind(n,90269)),Promise.resolve().then(n.bind(n,82596)),Promise.resolve().then(n.bind(n,69242)),Promise.resolve().then(n.bind(n,24360)),Promise.resolve().then(n.bind(n,23759)),Promise.resolve().then(n.bind(n,45553)),Promise.resolve().then(n.bind(n,68457)),Promise.resolve().then(n.bind(n,50842))},1365:function(e,t,n){"use strict";n.d(t,{CP:function(){return i},EI:function(){return b},HJ:function(){return o},HV:function(){return c},N$:function(){return a},V$:function(){return d},V8:function(){return f},Ve:function(){return u},aR:function(){return p},fQ:function(){return x},ht:function(){return m},k4:function(){return y},lv:function(){return h},p2:function(){return l},uu:function(){return v},wc:function(){return j},zZ:function(){return g}});var r=n(31067),s=n(27918);let i=async e=>(await r.x.get("/category?sort=".concat(e))).data.data,a=async()=>(await r.x.get("/features")).data.data,o=async e=>(await r.x.get("/features/getFeatureGroup/".concat(e))).data.data,l=async e=>(await r.x.post("/features/addFeatureGroup",e)).data,c=async e=>(await r.x.post("/features/addFeature",e)).data,d=async(e,t)=>(await r.x.patch("/features/editFeatureGroup/".concat(e),t)).data,u=async(e,t)=>(await r.x.patch("/features/editFeature/".concat(e),t)).data,x=async e=>(await r.x.delete("/features/deleteFeature/".concat(e))).data,p=async e=>(await r.x.delete("/features/deleteFeatureGroup/".concat(e))).data,h=async()=>(await r.x.post("/provinces/sorted/")).data.data,g=async e=>(await r.x.post("/provinces/sorted/",e)).data.data,y=async e=>(await r.x.post("/category/create",{parent_id:0,name:e.name})).data,j=async e=>{let t=(0,s.v7)(e);return(await r.x.post("category/createSubcategories",t)).data},m=async(e,t)=>(await r.x.patch("/category/editCategory/".concat(e),{name:t})).data,v=async e=>(await r.x.delete("/category/delete/".concat(e))).data,b=async e=>(await r.x.get("/category/id/".concat(e))).data.data[0],f=async e=>(await r.x.put("/category/editSubCategoriesArray",{subcategory:e})).data},27918:function(e,t,n){"use strict";n.d(t,{bG:function(){return l},gG:function(){return a},qD:function(){return i},uz:function(){return o},v7:function(){return s}});var r=n(31067);let s=e=>{let t={};return Object.keys(e).forEach(n=>{let r=e[n];null===r||""===r||Array.isArray(r)&&0===r.length||0===r||"null"===r||(t[n]=r)}),t},i=async e=>{let t=s({...e});return(await r.x.post("user",t)).data.data},a=async e=>{let t=s({...e,originCityId:Number(e.originCityId),originProvinceId:Number([e.originProvinceId]),destinationCityId:Number(e.destinationCityId),destinationProvinceId:Number(e.destinationProvinceId),departureDateStart:new Date(e.departureDateStart).getTime()?new Date(e.departureDateStart).getTime():null,departureDateEnd:new Date(e.departureDateEnd).getTime()?new Date(e.departureDateEnd).getTime():null,returnDateStart:new Date(e.returnDateStart).getTime()?new Date(e.returnDateStart).getTime():null,returnDateEnd:new Date(e.returnDateEnd).getTime()?new Date(e.returnDateEnd).getTime():null,sort:null,userId:null});return(await r.x.post("trips/recentTrips",t,{headers:{userId:e.userId}})).data.data},o=async(e,t)=>{let n=s({...t,mobile:null});return(await r.x.patch("user/profile/partiallyEditUser/".concat(e),n)).data},l=async e=>(await r.x.get("user/userInfoForUserTrips/".concat(e))).data.data},50807:function(e,t,n){"use strict";n.d(t,{default:function(){return S}});var r=n(57437),s=n(2265),i=n(39343),a=n(94963),o=n(76351),l=n(1365),c=n(64201),d=n(96396),u=n(77855),x=n(31072),p=n(40722),h=n(21949),g=n(93191),y=n(25524),j=n(30884),m=n(1845),v=n(4867),b=n(89183),f=n(72549),C=e=>{var t;let{setIsOpen:n,data:c}=e,{data:u}=(0,o.useQuery)({queryKey:["single-category"],queryFn:async()=>await (0,l.EI)(c.id),initialData:c}),{control:h,watch:j,setValue:b}=(0,i.cI)({defaultValues:{categoryName:u.name,parent_id:u.parent_id,subCategoryList:u.children,subCategoryItem:""}}),C=(0,g.useQueryClient)();(0,s.useEffect)(()=>{b("subCategoryList",u.children)},[u]),console.log("WATCH FOR NAME",j("categoryName"));let{mutate:w,isPending:P}=(0,y.useMutation)({mutationFn:async()=>await (0,l.ht)(c.id,j("categoryName")),onSuccess:e=>{!0===e.status?(0,x.ToastSuccess)("دسته بندی مورد نظر با موفقیت ویرایش شد"):(0,x.ToastError)("لطفا دوباره تلاش نمایید")}}),{mutate:T,isPending:S}=(0,y.useMutation)({mutationFn:async e=>await (0,l.wc)(e),onSuccess:e=>{!0===e.status?(C.invalidateQueries({queryKey:["single-category"]}),(0,x.ToastSuccess)("زیردسته بندی مورد نظر با موفقیت ایجاد شد"),b("subCategoryItem","")):(0,x.ToastError)("لطفا دوباره تلاش نمایید")}}),{mutate:z}=(0,y.useMutation)({mutationFn:async e=>(0,l.uu)(e),onSuccess:async e=>{!0===e.status?((0,x.ToastSuccess)("زیردسته بندی مورد نظر با موفقیت حذف شد"),C.invalidateQueries({queryKey:["single-category"]})):(0,x.ToastError)(e.message)}}),{mutate:K,isPending:E}=(0,y.useMutation)({mutationFn:async()=>await (0,l.V8)(j("subCategoryList")),onSuccess:e=>{!0===e.status?(C.invalidateQueries({queryKey:["categories"]}),(0,x.ToastSuccess)("دسته بندی مورد نظر با موفقیت ویرایش شد"),n({key:"edit",isOpen:!1})):(0,x.ToastError)("لطفا دوباره تلاش نمایید")}}),O=e=>{z(e)};return(0,r.jsxs)(d.kC,{maxHeight:"700px",direction:"column",p:"12px 16px",gap:"4",style:{overflow:"auto"},children:[(0,r.jsxs)(d.kC,{align:"center",gap:"3",children:[(0,r.jsx)(i.Qr,{name:"categoryName",control:h,render:e=>{let{field:t}=e;return(0,r.jsx)(d.nv,{...t,placeholder:"نام دسته بندی"})}}),(0,r.jsx)(d.hU,{size:"3",variant:"soft",onClick:()=>w(),children:P?(0,r.jsx)(a.$j,{}):(0,r.jsx)(p.z,{})})]}),(0,r.jsxs)(d.kC,{width:"50%",align:"center",gap:"3",children:[(0,r.jsx)(i.Qr,{name:"subCategoryItem",control:h,render:e=>{let{field:t}=e;return(0,r.jsx)(d.nv,{...t,placeholder:"افزودن زیر دسته بندی"})}}),(0,r.jsx)(d.hU,{size:"3",variant:"soft",onClick:()=>{T({parent_id:u.id,subCategoryNames:[j("subCategoryItem")]})},children:S?(0,r.jsx)(a.$j,{}):(0,r.jsx)(v.pOD,{})})]}),(0,r.jsx)(d.kC,{width:"100%",gap:"5",wrap:"wrap",p:"30.5px 16px",style:{border:"1px solid ".concat(m.K.gray[7]),borderRadius:8},children:null===(t=j("subCategoryList"))||void 0===t?void 0:t.map((e,t)=>(0,r.jsxs)(d.kC,{width:"fit-content",gap:"3",p:"9.5px 16px",align:"center",style:{backgroundColor:m.K.gray[3],borderRadius:16},children:[(0,r.jsx)(i.Qr,{name:"subCategoryList[".concat(t,"].name"),control:h,render:e=>{let{field:t}=e;return(0,r.jsx)(d.nv,{...t,placeholder:"",variant:"soft",style:{marginBottom:"-10px",backgroundColor:m.K.gray[3],border:"none",width:"fit-content"}})}}),(0,r.jsx)(d.hU,{size:"1",variant:"surface",onClick:()=>O(e.id),children:(0,r.jsx)(k,{})})]},t))}),(0,r.jsx)(f.Z,{submitButtonText:"ثبت ",closeButtonText:"لغو",onCloseButton:()=>n({key:"edit",isOpen:!1}),onSubmit:()=>K(),isLoading:E})]})};let k=(0,b.ZP)(p.x8).withConfig({componentId:"sc-8d553135-0"})(["path{fill:",";}"],m.K.pink[11]);var w=e=>{let{name:t,children:n,id:i,isEditable:o}=e,[c,v]=(0,s.useState)({isOpen:!1,key:"edit"}),b=(0,g.useQueryClient)(),{mutate:f,isPending:k}=(0,y.useMutation)({mutationFn:async()=>(0,l.uu)(i),onSuccess:async e=>{!0===e.status?(b.invalidateQueries({queryKey:["categories"]}),(0,x.ToastSuccess)("دسته بندی مورد نظر با موفقیت حذف شد"),v({...c,isOpen:!1})):(0,x.ToastError)("لطفا دوباره تلاش نمایید")}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.rj,{width:"100%",gapY:"5",children:(0,r.jsx)(j.default,{hero:t,withEdit:!0,withDelete:!0,isDisableDelete:!1===o,onEdit:e=>{e.stopPropagation(),v({key:"edit",isOpen:!0})},onDelete:e=>{e.stopPropagation(),v({key:"delete",isOpen:!0})},children:(0,r.jsx)(d.kC,{width:"100%",align:"center",gap:"5",wrap:"wrap",children:0===n.length?(0,r.jsx)(d.xv,{...h.p.body1,children:"در حال حاضر دیتایی برای این دسته بندی وجود ندارد"}):(0,r.jsx)(r.Fragment,{children:n.map(e=>(0,r.jsx)(d.xu,{p:"9.5px 16px",style:{backgroundColor:m.K.gray[3],borderRadius:16},children:(0,r.jsx)(d.xv,{...h.p.body1,style:{color:m.K.gray[11]},children:e.name})},e.id))})})})}),(0,r.jsxs)(d.u_,{isOpen:c.isOpen,onClose:()=>v({...c,isOpen:!1}),children:["edit"===c.key&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{title:"ویرایش دسته بندی",icon:(0,r.jsx)(p.x8,{}),handleClose:()=>v({...c,isOpen:!1})}),(0,r.jsx)(C,{setIsOpen:()=>v,data:e})]}),"delete"===c.key&&(0,r.jsxs)(d.rj,{gapY:"24px",p:"5",children:[(0,r.jsx)(d.xv,{children:"آیا از حذف این دسته بندی اطمینان دارید؟ "}),(0,r.jsxs)(d.rj,{gap:"10px",columns:"2",children:[(0,r.jsx)(d.zx,{variant:"soft",size:"4",onClick:()=>f(),children:(0,r.jsx)(d.xv,{...h.p.body3,children:k?(0,r.jsx)(a.$j,{}):"بله"})}),(0,r.jsx)(d.zx,{type:"button",onClick:()=>v({...c,isOpen:!1}),variant:"solid",size:"4",children:(0,r.jsx)(d.xv,{...h.p.body3,children:"خیر"})})]})]})]})]})},P=e=>{let{setIsOpen:t}=e,{control:n,watch:s,setValue:o,getValues:c}=(0,i.cI)({defaultValues:{categoryName:"",parent_id:null,subCategoryList:[],subCategoryItem:""}}),u=(0,g.useQueryClient)(),{mutate:p,isPending:j}=(0,y.useMutation)({mutationFn:async e=>await (0,l.k4)(e),onSuccess:e=>{!0===e.status?((0,x.ToastSuccess)("دسته بندی مورد نظر با موفقیت ایجاد شد"),o("parent_id",e.data.id)):(0,x.ToastError)("لطفا دوباره تلاش نمایید")}}),{mutate:b,isPending:C}=(0,y.useMutation)({mutationFn:async e=>await (0,l.wc)(e),onSuccess:e=>{!0===e.status?(u.invalidateQueries({queryKey:["categories"]}),(0,x.ToastSuccess)("دسته بندی مورد نظر با موفقیت ایجاد شد"),t(!1)):(0,x.ToastError)("لطفا دوباره تلاش نمایید")}}),k=e=>{o("subCategoryList",c("subCategoryList").filter((t,n)=>n!==e))};return console.log(s()),(0,r.jsxs)(d.kC,{direction:"column",p:"12px 16px",gap:"4",children:[(0,r.jsxs)(d.kC,{align:"center",gap:"3",children:[(0,r.jsx)(i.Qr,{name:"categoryName",control:n,render:e=>{let{field:t}=e;return(0,r.jsx)(d.nv,{...t,placeholder:"نام دسته بندی"})}}),(0,r.jsx)(d.hU,{size:"3",variant:"soft",onClick:()=>p({name:s("categoryName")}),children:j?(0,r.jsx)(a.$j,{}):(0,r.jsx)(v.pOD,{})})]}),(0,r.jsxs)(d.kC,{width:"50%",align:"center",gap:"3",children:[(0,r.jsx)(i.Qr,{name:"subCategoryItem",control:n,render:e=>{let{field:t}=e;return(0,r.jsx)(d.nv,{disabled:!s("parent_id"),...t,placeholder:"افزودن زیر دسته بندی"})}}),(0,r.jsx)(d.hU,{disabled:!s("parent_id"),size:"3",variant:"soft",onClick:()=>{let e=c("subCategoryItem"),t=c("subCategoryList");e&&!t.includes(e)&&(o("subCategoryList",[...t,e]),o("subCategoryItem",""))},children:(0,r.jsx)(v.pOD,{})})]}),(0,r.jsx)(d.kC,{width:"100%",gap:"5",wrap:"wrap",p:"30.5px 16px",style:{border:"1px solid ".concat(m.K.gray[7]),borderRadius:8},children:0===s("subCategoryList").length?(0,r.jsxs)(d.kC,{direction:"column",gap:"5",children:[(0,r.jsx)(d.xv,{...h.p.title1,style:{color:m.K.gray[11]},children:"هنوز زیردسته بندی اضافه نشده است."}),(0,r.jsx)(d.xv,{...h.p.paragraph2,style:{color:m.K.gray[11]},children:"از فیلد بالا استفاده کنید و زیردسته بندی را به لیست اضافه کنید."})]}):s("subCategoryList").map((e,t)=>(0,r.jsxs)(d.kC,{width:"fit-content",gap:"3",p:"9.5px 16px",align:"center",style:{backgroundColor:m.K.gray[3],borderRadius:16},children:[(0,r.jsx)(d.xv,{...h.p.body1,style:{color:m.K.gray[11]},children:e}),(0,r.jsx)(d.hU,{size:"1",variant:"surface",onClick:()=>k(t),children:(0,r.jsx)(T,{})})]},t))}),(0,r.jsx)(f.Z,{submitButtonText:"ثبت ",closeButtonText:"لغو",onCloseButton:()=>t(!1),onSubmit:()=>b({parent_id:s("parent_id"),subCategoryNames:s("subCategoryList")}),isLoading:C})]})};let T=(0,b.ZP)(p.x8).withConfig({componentId:"sc-33ba5765-0"})(["path{fill:",";}"],m.K.pink[11]);var S=()=>{let[e,t]=(0,s.useState)(!1),n=(0,i.cI)({defaultValues:{sort:""}}),{control:g,watch:y}=n,{data:j,isLoading:m,isFetching:v,isError:b}=(0,o.useQuery)({queryKey:["categories",y("sort")],queryFn:async()=>await (0,l.CP)(y("sort"))});return(console.log("Categories Data",j),m||v)?(0,r.jsx)(a.$j,{style:{margin:"100px auto",scale:2}}):!j||b?(0,x.ToastError)("مشکلی پیش آمده. لطفا مجددا تلاش نمایید"):(0,r.jsxs)(i.RV,{...n,children:[(0,r.jsxs)(d.kC,{width:"100%",direction:"column",gap:"5",children:[(0,r.jsxs)(d.kC,{width:"100%",align:"center",justify:"between",children:[(0,r.jsx)(d.zx,{size:"4",variant:"ghost",onClick:()=>t(!0),children:(0,r.jsxs)(d.kC,{align:"center",gap:"2",children:[(0,r.jsx)(d.xv,{...h.p.body1,children:"+"}),(0,r.jsx)(d.xv,{...h.p.body1,children:"افزودن دسته بندی"})]})}),(0,r.jsx)(d.kC,{width:"240px",children:(0,r.jsx)(i.Qr,{name:"sort",control:g,render:e=>{let{field:t}=e;return(0,r.jsx)(d.fp,{...t,placeholder:"مرتب سازی",value:String(t.value),onValueChange:e=>{t.onChange(e)},children:c.Ge.map(e=>(0,r.jsx)(d.Ql,{value:e.value,children:e.name},e.id))})}})})]}),null==j?void 0:j.map(e=>(0,r.jsx)(w,{...e},e.id))]}),(0,r.jsxs)(d.u_,{isOpen:e,onClose:()=>t(!1),children:[(0,r.jsx)(u.Z,{title:"افزودن دسته بندی",icon:(0,r.jsx)(p.x8,{}),handleClose:()=>t(!1)}),(0,r.jsx)(P,{setIsOpen:t})]})]})}},40114:function(e,t,n){"use strict";var r=n(57437),s=n(2265),i=n(39343),a=n(16463),o=n(94963),l=n(25524),c=n(89183),d=n(1365),u=n(64201),x=n(96396),p=n(72549),h=n(77855),g=n(30884),y=n(40722),j=n(1845),m=n(21949);t.default=()=>{var e,t;let n=(0,a.useParams)(),[c,b]=(0,s.useState)(!1),[f,C]=(0,s.useState)("create"),k=(0,i.cI)({defaultValues:{provinceId:Number(n.slug[2]),sortProvincesBy:""}}),{control:w,watch:P}=k,{data:T,mutate:S,isPending:z}=(0,l.useMutation)({mutationFn:async()=>await (0,d.zZ)(P()),onSuccess:async e=>{console.log("data",e)},onError:async e=>{console.log("DATA Error",e)}});return((0,s.useEffect)(()=>{S()},[]),console.log("CitiesData",T),z||!T)?(0,r.jsx)(o.$j,{style:{marginInline:"auto",scale:2,marginBlock:"100px"}}):(0,r.jsxs)(i.RV,{...k,children:[(0,r.jsxs)(x.kC,{width:"100%",direction:"column",gap:"5",p:"4",children:[(0,r.jsxs)(x.kC,{width:"100%",align:"center",justify:"between",children:[(0,r.jsx)(x.zx,{size:"4",variant:"ghost",onClick:()=>{b(!0),C("create")},children:(0,r.jsxs)(x.kC,{align:"center",gap:"2",children:[(0,r.jsx)(x.xv,{...m.p.body1,children:"+"}),(0,r.jsx)(x.xv,{...m.p.body1,children:"افزودن شهرستان"})]})}),(0,r.jsx)(x.kC,{width:"240px",children:(0,r.jsx)(i.Qr,{name:"sortProvincesBy",control:w,render:e=>{let{field:t}=e;return(0,r.jsx)(x.fp,{...t,placeholder:"مرتب سازی",value:String(t.value),onValueChange:e=>{t.onChange(e)},children:u.Ge.map(e=>(0,r.jsx)(x.Ql,{value:String(e.id),children:e.name},e.id))})}})})]}),null==T?void 0:T.Cities.map(e=>(0,r.jsx)(g.default,{hero:e.name,withEdit:!0,onEdit:e=>{e.stopPropagation(),b(!0),C("edit")},children:"دیتای این قسمت نیست"},e.id))]}),(0,r.jsxs)(x.u_,{isOpen:c,onClose:()=>b(!1),children:[(0,r.jsx)(h.Z,{icon:(0,r.jsx)(y.x8,{}),title:"create"===f?"افزودن شهرستان":"ویرایش شهرستان",handleClose:()=>b(!1)}),(0,r.jsxs)(x.rj,{gapY:"4",p:"12px 16px",children:[(0,r.jsx)(i.Qr,{name:"provinceId",control:w,render:e=>{let{field:t}=e;return(0,r.jsx)(x.nv,{...t,placeholder:"نام شهرستان"})}}),(0,r.jsx)(x.kC,{p:"13.5px 16px",width:"50%",style:{border:"2px solid red"},children:"افزودن شهر"}),(null==T?void 0:null===(e=T.Cities)||void 0===e?void 0:e.length)===0?(0,r.jsxs)(x.kC,{direction:"column",p:"30.5px 16px",style:{border:"1px solid ".concat(j.K.gray[7]),borderRadius:8},children:[(0,r.jsx)(x.xv,{...m.p.title1,style:{color:j.K.gray[11]},children:"هنوز شهری اضافه نشده است."}),(0,r.jsx)(x.xv,{...m.p.paragraph2,style:{color:j.K.gray[11]},children:"از فیلد بالا استفاده کنید و شهر را به لیست اضافه کنید."})]}):(null==T?void 0:null===(t=T.Cities)||void 0===t?void 0:t.length)!==0&&(0,r.jsx)(x.kC,{align:"center",gap:"5",p:"4",wrap:"wrap",style:{border:"1px solid ".concat(j.K.gray[7]),borderRadius:8},children:(0,r.jsxs)(x.kC,{width:"fit-content",p:"9.5px 16px",align:"center",gap:"4",style:{backgroundColor:j.K.gray[3],borderRadius:16},children:[(0,r.jsx)(x.xv,{...m.p.body1,style:{color:j.K.gray[11]},children:"تبریز"}),(0,r.jsx)(x.hU,{variant:"surface",size:"1",children:(0,r.jsx)(y.z,{})}),(0,r.jsx)(x.hU,{variant:"surface",size:"1",children:(0,r.jsx)(v,{})})]})})]}),(0,r.jsx)(p.Z,{submitButtonText:"ثبت",closeButtonText:"لغو",onCloseButton:()=>b(!1)})]})]})};let v=(0,c.ZP)(y.x8).withConfig({componentId:"sc-56976de2-0"})(["path{fill:",";}"],j.K.pink[11])},158:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var r=n(57437),s=n(2265),i=n(39343),a=n(94963),o=n(93191),l=n(76351),c=n(25524),d=n(1365),u=n(96396),x=n(72549),p=n(77855),h=n(31072),g=n(40722),y=n(21949),j=n(30884),m=n(1845),v=e=>{let{title:t,id:n}=e,[l,j]=(0,s.useState)({isOpen:!1,key:"edit"}),{control:v,watch:b}=(0,i.cI)({defaultValues:{name:t}}),f=(0,o.useQueryClient)(),{mutate:C,isPending:k}=(0,c.useMutation)({mutationFn:async()=>await (0,d.Ve)(n,b()),onSuccess:e=>{!0===e.status?(f.invalidateQueries({queryKey:["feature-group"]}),(0,h.ToastSuccess)("آیتم مورد نظر با موفقیت ویرایش شد"),j({...l,isOpen:!1})):(0,h.ToastError)("لطفا دوباره تلاش نمایید")}}),{mutate:w,isPending:P}=(0,c.useMutation)({mutationFn:async()=>await (0,d.fQ)(n),onSuccess:e=>{!0===e.status?(f.invalidateQueries({queryKey:["feature-group"]}),(0,h.ToastSuccess)("آیتم مورد نظر با موفقیت حذف شد"),j({...l,isOpen:!1})):(0,h.ToastError)("لطفا دوباره تلاش نمایید")}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.rj,{width:"100%",maxWidth:"120px",p:"12px 20px",gapY:"4",justify:"center",style:{backgroundColor:m.K.gray[3],borderRadius:16},children:[(0,r.jsx)(u.xv,{...y.p.description1,style:{color:m.K.gray[11],textAlign:"center"},children:t}),(0,r.jsxs)(u.kC,{align:"center",gap:"4",children:[(0,r.jsx)(u.hU,{variant:"surface",onClick:()=>{j({key:"edit",isOpen:!0})},children:(0,r.jsx)(g.z,{})}),(0,r.jsx)(u.hU,{variant:"surface",onClick:()=>j({key:"delete",isOpen:!0}),children:(0,r.jsx)(g.rF,{})})]})]}),(0,r.jsxs)(u.u_,{isOpen:l.isOpen,onClose:()=>j({...l,isOpen:!1}),children:["edit"===l.key&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{title:"ویرایش ویژگی",icon:(0,r.jsx)(g.x8,{}),handleClose:()=>j({...l,isOpen:!1})}),(0,r.jsx)(u.kC,{width:"100%",p:"4",align:"center",justify:"center",children:(0,r.jsx)(i.Qr,{name:"name",control:v,render:e=>{let{field:t}=e;return(0,r.jsx)(u.nv,{...t,placeholder:"عنوان دسته ویژگی",style:{width:"50%",margin:"0 auto"}})}})}),(0,r.jsx)(x.Z,{submitButtonText:"ثبت ",closeButtonText:"لغو",onCloseButton:()=>j({...l,isOpen:!1}),onSubmit:()=>C(),isLoading:k})]}),"delete"===l.key&&(0,r.jsxs)(u.rj,{gapY:"24px",p:"5",children:[(0,r.jsx)(u.xv,{children:"آیا از حذف این ویژگی اطمینان دارید؟ "}),(0,r.jsxs)(u.rj,{gap:"10px",columns:"2",children:[(0,r.jsx)(u.zx,{variant:"soft",size:"4",onClick:()=>w(),children:(0,r.jsx)(u.xv,{...y.p.body3,children:P?(0,r.jsx)(a.$j,{}):"بله"})}),(0,r.jsx)(u.zx,{type:"button",onClick:()=>j({...l,isOpen:!1}),variant:"solid",size:"4",children:(0,r.jsx)(u.xv,{...y.p.body3,children:"خیر"})})]})]})]})]})},b=e=>{var t;let{id:n}=e,[m,b]=(0,s.useState)({isOpen:!1,key:"edit"}),{control:f,watch:C,reset:k,setValue:w}=(0,i.cI)({defaultValues:{name:""}}),P=(0,o.useQueryClient)();console.log("NAME",C());let{data:T}=(0,l.useQuery)({queryKey:["feature-group",n],queryFn:async()=>await (0,d.HJ)(n),initialData:e}),{mutate:S,isPending:z}=(0,c.useMutation)({mutationFn:async e=>await (0,d.HV)(e),onSuccess:e=>{!0===e.status?(P.invalidateQueries({queryKey:["feature-group"]}),(0,h.ToastSuccess)("ویژگی مورد نظر با موفقیت ایجاد شد"),b({...m,isOpen:!1})):(0,h.ToastError)("لطفا دوباره تلاش نمایید")}}),{mutate:K,isPending:E}=(0,c.useMutation)({mutationFn:async()=>await (0,d.V$)(n,C()),onSuccess:e=>{!0===e.status?(P.invalidateQueries({queryKey:["feature-group"]}),(0,h.ToastSuccess)("ویژگی مورد نظر با موفقیت ویرایش شد"),b({...m,isOpen:!1})):(0,h.ToastError)("لطفا دوباره تلاش نمایید")}}),{mutate:O,isPending:I}=(0,c.useMutation)({mutationFn:async()=>await (0,d.aR)(n),onSuccess:e=>{!0===e.status?(P.invalidateQueries({queryKey:["features"]}),(0,h.ToastSuccess)("ویژگی مورد نظر با موفقیت حذف شد")):(0,h.ToastError)("لطفا دوباره تلاش نمایید")}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.rj,{width:"100%",gapY:"5",children:(0,r.jsx)(j.default,{hero:null==T?void 0:T.name,withButton:!0,withDelete:!0,onEdit:e=>{e.stopPropagation(),w("name",T.name),b({key:"edit",isOpen:!0}),console.log("FeatureGroupData",T)},onButtonSubmit:e=>{e.stopPropagation(),k({name:""}),b({key:"add",isOpen:!0})},onDelete:e=>{e.stopPropagation(),b({key:"delete",isOpen:!0})},children:(0,r.jsx)(u.kC,{width:"100%",gap:"5",align:"center",wrap:"wrap",children:(null==T?void 0:null===(t=T.features)||void 0===t?void 0:t.length)===0?(0,r.jsx)(u.xv,{...y.p.body1,children:"در حال حاضر دیتایی برای این ویژگی وجود ندارد"}):(0,r.jsx)(r.Fragment,{children:null==T?void 0:T.features.map(e=>(0,r.jsx)(v,{title:e.name,id:e.id},e.id))})})})}),(0,r.jsxs)(u.u_,{isOpen:m.isOpen,onClose:()=>b({...m,isOpen:!1}),children:["delete"!==m.key&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{title:"edit"===m.key?"ویرایش دسته ویژگی":"افزودن دسته ویژگی",icon:(0,r.jsx)(g.x8,{}),handleClose:()=>b({...m,isOpen:!1})}),(0,r.jsx)(u.kC,{width:"100%",p:"4",align:"center",justify:"center",children:(0,r.jsx)(i.Qr,{name:"name",control:f,render:e=>{let{field:t}=e;return(0,r.jsx)(u.nv,{...t,placeholder:"عنوان دسته ویژگی",style:{width:"50%",margin:"0 auto"}})}})}),(0,r.jsx)(x.Z,{submitButtonText:"ثبت",closeButtonText:"لغو",onCloseButton:()=>b({...m,isOpen:!1}),onSubmit:()=>"add"===m.key?S({name:C("name"),featureGroupid:n}):K(),isLoading:"add"===m.key?z:E})]}),"delete"===m.key&&(0,r.jsxs)(u.rj,{gapY:"24px",p:"5",children:[(0,r.jsx)(u.xv,{children:"آیا از حذف این ویژگی اطمینان دارید؟ "}),(0,r.jsxs)(u.rj,{gap:"10px",columns:"2",children:[(0,r.jsx)(u.zx,{variant:"soft",size:"4",onClick:()=>O(),children:(0,r.jsx)(u.xv,{...y.p.body3,children:I?(0,r.jsx)(a.$j,{}):"بله"})}),(0,r.jsx)(u.zx,{type:"button",onClick:()=>b({...m,isOpen:!1}),variant:"solid",size:"4",children:(0,r.jsx)(u.xv,{...y.p.body3,children:"خیر"})})]})]})]})]})},f=()=>{let[e,t]=(0,s.useState)(!1),n=(0,i.cI)({defaultValues:{name:""}}),{control:j,watch:m}=n,v=(0,o.useQueryClient)();console.log("WATCH",m());let{data:f,isLoading:C,isFetching:k,isError:w}=(0,l.useQuery)({queryKey:["features"],queryFn:async()=>await (0,d.N$)()});console.log("features data",f);let{mutate:P,isPending:T}=(0,c.useMutation)({mutationFn:async()=>await (0,d.p2)(m()),onSuccess:e=>{!0===e.status?((0,h.ToastSuccess)("ویژگی مورد نظر با موفقیت ایجاد شد"),v.invalidateQueries({queryKey:["features"]})):(0,h.ToastError)("لطفا دوباره تلاش نمایید")}});return C||k?(0,r.jsx)(a.$j,{style:{margin:"100px auto",scale:2}}):!f||w?(0,h.ToastError)("مشکلی پیش آمده. لطفا مجددا تلاش نمایید"):(0,r.jsxs)(i.RV,{...n,children:[(0,r.jsxs)(u.kC,{width:"100%",direction:"column",gap:"5",children:[(0,r.jsx)(u.zx,{size:"4",variant:"ghost",style:{width:"fit-content"},onClick:()=>t(!0),children:(0,r.jsxs)(u.kC,{align:"center",gap:"2",children:[(0,r.jsx)(u.xv,{...y.p.body1,children:"+"}),(0,r.jsx)(u.xv,{...y.p.body1,children:"افزودن دسته ویژگی"})]})}),null==f?void 0:f.map(e=>(0,r.jsx)(b,{...e},e.id))]}),(0,r.jsxs)(u.u_,{isOpen:e,onClose:()=>t(!1),children:[(0,r.jsx)(p.Z,{title:"افزودن دسته ویژگی",icon:(0,r.jsx)(g.x8,{}),handleClose:()=>t(!1)}),(0,r.jsx)(u.kC,{width:"100%",p:"4",align:"center",justify:"center",children:(0,r.jsx)(i.Qr,{name:"name",control:j,render:e=>{let{field:t}=e;return(0,r.jsx)(u.nv,{...t,placeholder:"عنوان دسته ویژگی",style:{width:"50%",margin:"0 auto"}})}})}),(0,r.jsx)(x.Z,{submitButtonText:"ثبت ",closeButtonText:"لغو",onCloseButton:()=>t(!1),onSubmit:()=>{P(),t(!1)},isLoading:T})]})]})}},75858:function(e,t,n){"use strict";var r=n(57437),s=n(2265),i=n(94963),a=n(25524),o=n(1365),l=n(2596),c=n(96396),d=n(10504);t.default=()=>{let{data:e,mutate:t,isPending:n}=(0,a.useMutation)({mutationFn:async()=>(0,o.lv)(),onSuccess:async e=>{console.log("data",e)},onError:async e=>{console.log("DATA Error",e)}});return((0,s.useEffect)(()=>{t()},[]),console.log("DATA",e),n||!e)?(0,r.jsx)(i.$j,{style:{marginInline:"auto",scale:2,marginBlock:"100px"}}):(0,r.jsx)(c.rj,{width:"100%",columns:"2",gap:"5",children:null==e?void 0:e.map(e=>(0,r.jsx)(l.Z,{type:"comments",buttonText:"مدیریت شهرستان",firstLabel:"تعداد شهرستان",secondLabel:"آخرین ویرایش",title:e.name,firstValue:e.citiesCount,secondValue:(0,d.l)(e.lastUpdated),path:"/additional-detail/province/cities/".concat(e.id)},e.id))})}},2596:function(e,t,n){"use strict";var r=n(57437);n(2265);var s=n(16463),i=n(96396),a=n(1845),o=n(21949);t.Z=e=>{let{title:t,firstValue:n,type:c,secondValue:d,path:u,buttonText:x,firstLabel:p,secondLabel:h}=e,g=(0,s.useRouter)();return(0,r.jsxs)(i.kC,{width:"100%",align:"center",justify:"between",p:"4",style:{backgroundColor:a.K.gray[2],border:"1px solid ".concat(a.K.gray[6]),borderRadius:8},children:[(0,r.jsxs)(i.kC,{direction:"column",gap:"12px",children:[(0,r.jsx)(i.xv,{...o.p.body1,style:{color:a.K.gray[12]},children:t}),(0,r.jsx)(l,{label:p,value:n}),(0,r.jsx)(l,{label:h,value:d})]}),(0,r.jsxs)(i.kC,{align:"center",gap:"2",children:[(0,r.jsx)(i.zx,{size:"3",onClick:()=>g.push(u),style:{padding:"7px 16px"},children:(0,r.jsx)(i.xv,{...o.p.body3,children:x})}),"provinceAds"===c&&(0,r.jsx)(i.zx,{size:"3",variant:"soft",onClick:()=>g.push("/ads/province-list/cities"),children:(0,r.jsx)(i.xv,{...o.p.body3,children:"لیست شهرستان ها"})})]})]})};let l=e=>{let{label:t,value:n}=e;return(0,r.jsxs)(i.kC,{align:"center",py:"1",gap:"2",children:[(0,r.jsx)(i.xv,{...o.p.description2,style:{color:a.K.gray[10]},children:t}),(0,r.jsx)(i.xv,{...o.p.description2,style:{color:a.K.gray[12]},children:n})]})}},64201:function(e,t,n){"use strict";n.d(t,{Ge:function(){return r}});let r=[{id:1,name:"الف - ی",value:"asc"},{id:1,name:"ی - الف",value:"des"}]},72549:function(e,t,n){"use strict";var r=n(57437);n(2265);var s=n(94963),i=n(1845),a=n(21949),o=n(96396);t.Z=e=>{let{closeButtonText:t,submitButtonText:n,isLoading:l,onCloseButton:c,onSubmit:d,isFull:u}=e;return(0,r.jsx)(o.kC,{height:"max-content",gap:"16px",left:"0",p:"16px",right:"0",style:{backgroundColor:i.K.gray[2],marginBlockStart:"auto",borderTop:"1px solid ".concat(i.K.gray[3]),boxShadow:i.i.shadow1,borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"},position:"sticky",bottom:"0px",children:(0,r.jsxs)(o.rj,{gap:"16px",columns:"2",width:u?"100%":"max-content",children:[(0,r.jsx)(o.zx,{onClick:d,type:"submit",variant:"soft",size:"3",style:{width:u?"100%":"fit-content",padding:"9.5px 38px"},children:l?(0,r.jsx)(s.$j,{}):(0,r.jsx)(o.xv,{...a.p.body1,children:n})}),(0,r.jsx)(o.zx,{type:"button",variant:"solid",size:"3",onClick:c,style:{width:u?"100%":"fit-content",padding:"9.5px 38px"},children:(0,r.jsx)(o.xv,{...a.p.body1,children:t})})]})})}},77855:function(e,t,n){"use strict";var r=n(57437);n(2265);var s=n(89183),i=n(1845),a=n(21949),o=n(96396);t.Z=e=>{let{handleClose:t,title:n,icon:s}=e;return(0,r.jsxs)(l,{position:"sticky",top:"0",p:"8px 16px",justify:"between",style:{backgroundColor:i.K.blue[10],zIndex:"100"},align:"center",children:[(0,r.jsx)(o.xv,{...a.p.title2,style:{color:i.K.gray[1],fontWeight:700},children:n}),(0,r.jsx)(o.hU,{type:"button",onClick:t,variant:"soft",size:"2",style:{backgroundColor:i.K.blue[9],borderRadius:"12px"},children:(0,r.jsx)(o.kC,{justify:"center",align:"center",style:{backgroundColor:i.K.blue[9],borderRadius:12,padding:8},children:s})})]})};let l=(0,s.zo)(o.kC).withConfig({componentId:"sc-fed1f764-0"})(["border-top-right-radius:8px;border-top-left-radius:8px;"])},30884:function(e,t,n){"use strict";var r=n(57437),s=n(2265),i=n(58606),a=n(89183),o=n(96396),l=n(40722),c=n(1845),d=n(21949);let u={open:{opacity:1,height:"auto"},closed:{opacity:0,height:0}};t.default=e=>{let{hero:t,children:n,withEdit:a=!1,withButton:g=!1,withDelete:y=!1,isDisableDelete:j=!1,onEdit:m,onButtonSubmit:v,onDelete:b}=e,[f,C]=(0,s.useState)(!1);return(0,r.jsxs)(x,{isOpen:f,children:[(0,r.jsxs)(o.kC,{className:"style",width:"100%",justify:"between",align:"center",p:"8px 16px",onClick:()=>{C(!f)},children:[(0,r.jsxs)(o.kC,{gap:"2",align:"center",children:[(0,r.jsx)(o.xv,{...d.p.title2,style:{color:c.K.gray[11]},children:t}),g&&(0,r.jsx)(o.hU,{variant:"surface",onClick:m,children:(0,r.jsx)(l.z,{})})]}),(0,r.jsxs)(o.kC,{align:"center",gap:"4",children:[g&&(0,r.jsx)(o.zx,{size:"3",variant:"soft",onClick:v,children:(0,r.jsx)(o.xv,{...d.p.body1,children:"افزودن ویژگی"})}),y&&(0,r.jsx)(o.hU,{variant:"surface",size:"3",onClick:b,disabled:j,children:(0,r.jsx)(h,{})}),a&&(0,r.jsx)(o.hU,{variant:"surface",size:"3",onClick:m,children:(0,r.jsx)(l.z,{})}),(0,r.jsx)(i.E.div,{animate:{rotate:f?180:0},transition:{duration:.3},style:{width:32,height:32,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(p,{})})]})]}),(0,r.jsx)(i.E.div,{variants:u,initial:"closed",animate:f?"open":"closed",transition:{duration:.3},style:{overflow:"hidden"},layout:!0,children:(0,r.jsx)(o.rj,{gap:"16px",p:"24px 16px 16px 16px",children:n})})]})};let x=(0,a.ZP)(o.rj).withConfig({componentId:"sc-a27307f4-0"})(["border-radius:8px;border:1px solid ",";.style{border-radius:",";height:fit-content;background-color:",";cursor:pointer;}"],c.K.gray[6],e=>{let{isOpen:t}=e;return t?"8px 8px 0px 0px":"8px"},c.K.blue[4]),p=(0,a.ZP)(l.CH).withConfig({componentId:"sc-a27307f4-1"})(["path{fill:",";}"],c.K.blue[10]),h=(0,a.ZP)(l.rF).withConfig({componentId:"sc-a27307f4-2"})(["path{fill:",";}"],c.K.blue[10])},10504:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});var r=n(64673),s=n.n(r);function i(e){return s()(e).locale("fa").format("jYYYY/jMM/jDD")}},31067:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var r=n(16463),s=n(38472),i=n(15263);let a=s.Z.create({baseURL:"https://apibznpaneldev.darkube.app/v1/",headers:{"Content-Type":"application/json"}});a.interceptors.request.use(e=>{let t=new i.Z().get("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>{if(e.response){let t=e.response.status;401===t?console.error("Unauthorized access - perhaps the token has expired"):403===t?console.error("Forbidden - You do not have permission to access this resource."):t>=500?(console.error("Server error - Please try again later."),(0,r.redirect)("/error")):console.error("Error: ".concat(e.response.statusText))}else e.request?(console.error("Network error - the request was made but no response was received"),(0,r.redirect)("/error")):((0,r.redirect)("/error"),console.error("Error:",e.message));return Promise.reject(e)})}},function(e){e.O(0,[1553,3048,5452,8310,6990,9673,3348,4518,9269,5639,6396,722,4011,2971,7023,1744],function(){return e(e.s=50905)}),_N_E=e.O()}]);