"use strict";exports.id=202,exports.ids=[202],exports.modules={37419:(e,t,i)=>{i.d(t,{Di:()=>d,LP:()=>c,Vl:()=>o,_5:()=>l,mV:()=>p,nj:()=>s,qo:()=>n});var r=i(12099),a=i(80635);let s=async()=>(await a.x.get("/ads/page")).data.data,l=async(e,t,i)=>(await a.x.get(`/ads/holder?holder=${e}&id=${t}&type=${i}`)).data.data,o=async e=>{let t=new FormData;return Object.entries({type:e.type,description:e.description,page:e.page,holder:e.holder,alt:e.alt,summery:e.summery,website:e.website,socialMedia:e.socialMedia,sponsor:e.sponsor}).forEach(([e,i])=>{i&&t.append(e,i.toString())}),t.append("file",e.file),Object.entries({provinceId:e.provinceId,cityId:e.cityId,townId:e.townId,categoryId:e.categoryId}).forEach(([e,i])=>{null!=i&&t.append(e,i.toString())}),(await r.pN.post("admin/uploads/image",t,{headers:{"Content-Type":"multipart/form-data"}})).data},n=async e=>(await a.x.patch("/upload/edit",e)).data,d=async e=>(await a.x.delete("/upload/",{data:e})).data,c=async e=>(await a.x.get(`/ads/page?pageKey=${e}`)).data.data,p=async e=>(await a.x.get(`/ads/page?pageKey=province&id=${e}`)).data.data},26566:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(10326),a=i(46226),s=i(76812),l=i(95441),o=i(98555),n=i(58072),d=i(91629);let c=({data:e,onCreateOrEdit:t,onDelete:i,onClick:c})=>(0,r.jsxs)(r.Fragment,{children:[!e?.path&&(0,r.jsxs)(l.kC,{align:"center",position:"relative",minHeight:"200px",p:"16px",justify:"center",style:{borderRadius:"8px",border:`1px dashed ${n.K.blue[9]}`},children:[r.jsx(l.xv,{style:{position:"absolute",color:n.K.gray[8],right:"20px",fontSize:"90px"},children:e?.position}),(0,r.jsxs)(l.kC,{gap:"4px",align:"center",onClick:()=>{t("create"),c()},style:{cursor:"pointer"},children:[r.jsx(s.pOD,{stroke:n.K.blue[7]}),r.jsx(l.xv,{...d.p.body1,style:{color:n.K.blue[11]},children:"افزودن آگهی"})]})]}),!!e?.path&&(0,r.jsxs)(l.rj,{onClick:c,p:"16px",style:{borderRadius:"8px",border:`1px solid ${n.K.gray[6]}`},children:[(0,r.jsxs)(l.kC,{width:"100%",align:"center",justify:"between",children:[r.jsx(l.X6,{style:{color:n.K.gray[11],fontSize:"32px",fontWeight:500,lineHeight:"37.5px"},children:e.position}),(0,r.jsxs)(l.kC,{align:"center",gap:"4",children:[r.jsx(l.hU,{size:"3",onClick:()=>{t("edit")},children:r.jsx(o.z,{})}),r.jsx(l.hU,{size:"3",variant:"surface",onClick:i,children:r.jsx(o.rF,{})})]})]}),(0,r.jsxs)(l.kC,{width:"100%",gap:"10px",children:[r.jsx(l.xu,{width:"400px",height:"200px",position:"relative",children:r.jsx(a.default,{src:`https://uploader.bezanimbiroon.ir/${e.path}`,alt:String(e?.alt),fill:!0,style:{borderRadius:8,objectFit:"cover",objectPosition:"center"}})}),(0,r.jsxs)(l.kC,{width:"77.5%",direction:"column",mt:"2",style:{justifyContent:"space-between"},children:[(0,r.jsxs)(l.kC,{direction:"column",gap:"3",children:[r.jsx(l.nv,{placeholder:"متن چایگزین",readOnly:!0,value:e.alt??"",style:{borderRadius:12}}),r.jsx(l.Kx,{placeholder:"توضیحات تصویر",readOnly:!0,value:e.description??"",style:{borderRadius:12}})]}),e.path&&(0,r.jsxs)(l.kC,{p:"12px 16px",gap:"2",align:"center",children:[r.jsx(l.hU,{variant:"surface",size:"1",children:r.jsx(s.TIy,{style:{color:n.K.blue[10]}})}),r.jsx(l.xv,{...d.p.body3,style:{color:n.K.blue[11]},children:e.path})]})]})]})]})]})},26967:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(10326),a=i(17577),s=i(23920),l=i(74723),o=i(46226),n=i(8806),d=i(95441),c=i(71284),p=i(98555),x=i(58072),u=i(91629);let h=({type:e,data:t,onClose:i,onSubmit:h,isLoading:g})=>{let{setValue:j,watch:y,control:b}=(0,l.cI)({defaultValues:{alt:"edit"===e?t.alt:"",description:"edit"===e?t.description:"",imageFile:"edit"===e?t.path:null,isReset:!0,localPic:"",summery:"edit"===e?t.summery:"",website:"edit"===e?t.website:"",socialMedia:"edit"===e?t.socialMedia:"",sponsor:"edit"===e?t.sponsor:"",page:t.page,holder:t.position,townId:t.townId,provinceId:t.provincesId,cityId:t.cityId,categoryId:t.categoryId}});(0,a.useEffect)(()=>{j("imageFile","edit"===e?t.path:null),j("description","edit"===e?t.description:""),j("alt","edit"===e?t.alt:""),j("summery","edit"===e?t.summery:""),j("website","edit"===e?t.website:""),j("socialMedia","edit"===e?t.socialMedia:""),j("sponsor","edit"===e?t.sponsor:""),j("isReset",!0)},[e]);let m=async e=>{if("image/svg+xml"===e.type)return e;try{return await (0,n.Z)(e,{maxSizeMB:1,maxWidthOrHeight:800,useWebWorker:!0})}catch(t){return console.error("Image compression error:",t),e}},v=async(e,t)=>{if(e&&e[0]){let i=e[0],r=await m(i);t(URL.createObjectURL(r)),j("localPic",URL.createObjectURL(r)),j("isReset",!1),j("imageFile",r)}};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(d.rj,{minHeight:"286px",p:"4",gapY:"5",children:!1==!!t?.path&&!1==!!y("localPic")?r.jsx(l.Qr,{name:"imageFile",control:b,render:({field:e})=>r.jsx(d.kC,{width:"max-content",position:"relative",direction:"column",children:r.jsx(s.ZP,{onDrop:t=>{v(t,e.onChange)},accept:{"image/jpeg":[".jpeg",".jpg"],"image/png":[".png"],"image/svg+xml":[".svg"]},children:({getRootProps:e,getInputProps:t})=>(0,r.jsxs)("div",{...e(),children:[r.jsx("input",{type:"file",...t()}),r.jsx(d.kC,{gap:"2",justify:"center",direction:"column",align:"center",children:r.jsx(d.zx,{size:"3",type:"button",style:{width:"fit-content"},children:(0,r.jsxs)(d.kC,{align:"center",gap:"2",children:[r.jsx(p.V1,{}),r.jsx(d.xv,{...u.p.body1,children:"ارسال تصویر"})]})})})]})})})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.xu,{width:"538px",height:"350px",position:"relative",style:{borderRadius:8,border:`1px solid ${x.K.gray[3]}`},children:["create"===e&&r.jsx(d.kC,{width:"30px",height:"30px",justify:"center",align:"center",style:{cursor:"pointer",position:"absolute",backgroundColor:x.K.gray[3],borderRadius:"4px",border:`1px solid ${x.K.pink[9]}`,zIndex:"10"},left:"0",top:"0",children:r.jsx(l.Qr,{name:"localPic",control:b,render:({field:e})=>r.jsx(d.kC,{width:"max-content",position:"relative",direction:"column",children:r.jsx(s.ZP,{onDrop:t=>{v(t,e.onChange)},accept:{"image/jpeg":[".jpeg",".jpg"],"image/png":[".png"],"image/svg+xml":[".svg"]},children:({getRootProps:e,getInputProps:t})=>(0,r.jsxs)("div",{...e(),children:[r.jsx("input",{type:"file",...t()}),r.jsx(d.kC,{gap:"2",justify:"center",direction:"column",align:"center",children:r.jsx(p.rF,{})})]})})})})}),r.jsx(o.default,{src:y("isReset")?`https://uploader.bezanimbiroon.ir/${t?.path}`:y("localPic"),alt:"ugliglhglk",fill:!0,style:{borderRadius:8,objectFit:"fill"}})]}),(0,r.jsxs)(d.rj,{width:"100%",gap:"5",columns:"3",children:[r.jsx(l.Qr,{name:"sponsor",control:b,render:({field:e})=>r.jsx(d.nv,{...e,label:"نام اسپانسر",placeholder:"نام اسپانسر",selectedValue:!!e.value,value:e.value??""})}),r.jsx(l.Qr,{name:"website",control:b,render:({field:e})=>r.jsx(d.nv,{...e,label:"سایت",placeholder:"سایت",selectedValue:!!e.value,value:e.value??""})}),r.jsx(l.Qr,{name:"socialMedia",control:b,render:({field:e})=>r.jsx(d.nv,{...e,label:"شبکه اجتماعی",placeholder:"شبکه اجتماعی",selectedValue:!!e.value,value:e.value??""})})]}),r.jsx(l.Qr,{name:"alt",control:b,render:({field:e})=>r.jsx(d.nv,{...e,label:"متن جایگزین",placeholder:"متن جایگزین",selectedValue:!!e.value,value:e.value??""})}),r.jsx(l.Qr,{name:"description",control:b,render:({field:e})=>r.jsx(d.Kx,{...e,label:"توضیحات تصویر",placeholder:"توضیحات تصویر",selectedValue:!!e.value,rows:6,value:e.value??""})}),r.jsx(l.Qr,{name:"summery",control:b,render:({field:e})=>r.jsx(d.Kx,{...e,label:"شرح مختصر",placeholder:"شزح مختصر",selectedValue:!!e.value,rows:6,value:e.value??""})})]})}),r.jsx(c.Z,{submitButtonText:"ثبت و ارسال",closeButtonText:"لفو و بازگشت",isDisableSubmitBtn:!1,isSubmit:!1,onSubmit:()=>{h(y())},onCloseButton:i,isLoading:g})]})}},71284:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(10326);i(17577);var a=i(39454),s=i(58072),l=i(91629),o=i(95441);let n=({isSubmit:e=!0,closeButtonText:t,submitButtonText:i,isLoading:n,onCloseButton:d,onSubmit:c,isDisableSubmitBtn:p=!1,disabled:x=!1})=>r.jsx(o.kC,{height:"max-content",gap:"16px",left:"0",p:"16px",right:"0",style:{backgroundColor:s.K.gray[2],marginBlockStart:"auto",borderTop:`1px solid ${s.K.gray[3]}`,boxShadow:s.i.shadow1,borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"},position:"sticky",bottom:"0px",children:(0,r.jsxs)(o.rj,{gap:"16px",columns:"2",children:[r.jsx(o.zx,{disabled:p||x,onClick:c,type:e?"submit":"button",variant:"soft",size:"3",style:{width:"fit-content",padding:"9.5px 38px"},children:n?r.jsx(a.$j,{}):r.jsx(o.xv,{...l.p.body1,children:i})}),r.jsx(o.zx,{type:"button",colorVariant:"PINK",size:"3",onClick:d,style:{width:"fit-content",padding:"9.5px 38px"},children:r.jsx(o.xv,{...l.p.body1,children:t})})]})})},45313:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(10326);i(17577);var a=i(57457),s=i(98555),l=i(58072),o=i(91629),n=i(95441);let d=({handleClose:e,title:t})=>(0,r.jsxs)(c,{position:"sticky",top:"0",p:"8px 16px",justify:"between",style:{backgroundColor:l.K.blue[10],zIndex:"100"},align:"center",children:[r.jsx(n.xv,{...o.p.title2,style:{color:l.K.gray[1],fontWeight:700},children:t}),r.jsx(n.hU,{type:"button",onClick:e,variant:"soft",size:"2",style:{backgroundColor:l.K.blue[9],borderRadius:"12px"},children:r.jsx(s.x8,{})})]}),c=(0,a.zo)(n.kC).withConfig({componentId:"sc-38bd6e22-0"})(["border-top-right-radius:8px;border-top-left-radius:8px;"])}};