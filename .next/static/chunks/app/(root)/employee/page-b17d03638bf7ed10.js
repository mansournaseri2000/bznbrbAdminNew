(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6178],{93465:function(e,n,l){Promise.resolve().then(l.bind(l,76669)),Promise.resolve().then(l.bind(l,13304)),Promise.resolve().then(l.bind(l,68602)),Promise.resolve().then(l.bind(l,7580)),Promise.resolve().then(l.bind(l,61485)),Promise.resolve().then(l.bind(l,56935)),Promise.resolve().then(l.bind(l,52431)),Promise.resolve().then(l.bind(l,99497)),Promise.resolve().then(l.bind(l,80023)),Promise.resolve().then(l.bind(l,67553)),Promise.resolve().then(l.bind(l,9646)),Promise.resolve().then(l.bind(l,62447)),Promise.resolve().then(l.bind(l,27071)),Promise.resolve().then(l.bind(l,76697)),Promise.resolve().then(l.bind(l,44581)),Promise.resolve().then(l.bind(l,36756)),Promise.resolve().then(l.bind(l,76895)),Promise.resolve().then(l.bind(l,2738)),Promise.resolve().then(l.bind(l,23195)),Promise.resolve().then(l.bind(l,62187)),Promise.resolve().then(l.bind(l,76484)),Promise.resolve().then(l.bind(l,62381)),Promise.resolve().then(l.bind(l,90393)),Promise.resolve().then(l.bind(l,26480)),Promise.resolve().then(l.bind(l,36982)),Promise.resolve().then(l.bind(l,90448)),Promise.resolve().then(l.bind(l,29340)),Promise.resolve().then(l.bind(l,82905)),Promise.resolve().then(l.bind(l,98250)),Promise.resolve().then(l.bind(l,53214)),Promise.resolve().then(l.bind(l,20375)),Promise.resolve().then(l.bind(l,81365)),Promise.resolve().then(l.bind(l,3630)),Promise.resolve().then(l.bind(l,34402)),Promise.resolve().then(l.bind(l,27485)),Promise.resolve().then(l.bind(l,50581)),Promise.resolve().then(l.bind(l,55713)),Promise.resolve().then(l.bind(l,78393)),Promise.resolve().then(l.bind(l,19733)),Promise.resolve().then(l.bind(l,90269)),Promise.resolve().then(l.bind(l,82596)),Promise.resolve().then(l.bind(l,69242)),Promise.resolve().then(l.bind(l,24360)),Promise.resolve().then(l.bind(l,23759)),Promise.resolve().then(l.bind(l,45553)),Promise.resolve().then(l.bind(l,68457)),Promise.resolve().then(l.bind(l,50842))},57818:function(e,n,l){"use strict";l.d(n,{default:function(){return t.a}});var r=l(50551),t=l.n(r)},50551:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let r=l(99920);l(57437),l(2265);let t=r._(l(40148));function o(e,n){var l;let r={loading:e=>{let{error:n,isLoading:l,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let o={...r,...n};return(0,t.default)({...o,modules:null==(l=o.loadableGenerated)?void 0:l.modules})}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},10912:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"BailoutToCSR",{enumerable:!0,get:function(){return t}});let r=l(55592);function t(e){let{reason:n,children:l}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(n);return l}},40148:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});let r=l(57437),t=l(2265),o=l(10912),s=l(61481);function i(e){return{default:e&&"default"in e?e.default:e}}let a={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},d=function(e){let n={...a,...e},l=(0,t.lazy)(()=>n.loader().then(i)),d=n.loading;function u(e){let i=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,a=n.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(s.PreloadCss,{moduleIds:n.modules}):null,(0,r.jsx)(l,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(l,{...e})});return(0,r.jsx)(t.Suspense,{fallback:i,children:a})}return u.displayName="LoadableComponent",u}},61481:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"PreloadCss",{enumerable:!0,get:function(){return o}});let r=l(57437),t=l(58512);function o(e){let{moduleIds:n}=e;if("undefined"!=typeof window)return null;let l=(0,t.getExpectedRequestStore)("next/dynamic css"),o=[];if(l.reactLoadableManifest&&n){let e=l.reactLoadableManifest;for(let l of n){if(!e[l])continue;let n=e[l].files.filter(e=>e.endsWith(".css"));o.push(...n)}}return 0===o.length?null:(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:l.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},82905:function(e,n,l){"use strict";l.d(n,{default:function(){return a}});var r=l(57437),t=l(2265),o=l(39343),s=l(7507),i=e=>{let{control:n,watch:l}=(0,o.cI)({defaultValues:{name:"",last_name:"",nationalId:"",birthday:"",father_name:"",mobile:"",shaba_number:"",address:""}});return console.log("Watch",l()),(0,r.jsxs)(s.kC,{width:"100%",direction:"column",gap:"4",align:"center",children:[(0,r.jsx)(s.xu,{width:"120px",height:"120px",style:{border:"1px solid",borderRadius:"50%"},children:"photo"}),(0,r.jsxs)(s.rj,{width:"100%",columns:"2",gapX:"5",gapY:"4",children:[(0,r.jsx)(o.Qr,{name:"name",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"نام"})}}),(0,r.jsx)(o.Qr,{name:"last_name",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"نام خانوادگی"})}}),(0,r.jsx)(o.Qr,{name:"nationalId",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"کد ملی"})}}),(0,r.jsx)(o.Qr,{name:"birthday",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"تاریخ تولد"})}}),(0,r.jsx)(o.Qr,{name:"father_name",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"نام پدر"})}}),(0,r.jsx)(o.Qr,{name:"mobile",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"شماره تماس"})}})]}),(0,r.jsx)(o.Qr,{name:"shaba_number",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"شماره شبا"})}}),(0,r.jsx)(o.Qr,{name:"address",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"آدرس منزل"})}}),(0,r.jsxs)(s.kC,{width:"100%",gap:"4",children:[(0,r.jsx)(s.zx,{size:"3",children:"ثبت"}),(0,r.jsx)(s.zx,{size:"3",onClick:e.onClose,children:"لغو"})]})]})},a=()=>{let[e,n]=(0,t.useState)(!1),{control:l,watch:a}=(0,o.cI)({defaultValues:{search:""}});return console.log("watch",a()),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.kC,{width:"100%",gap:"4",align:"center",children:[(0,r.jsx)(s.zx,{size:"3",onClick:()=>n(!0),children:"افزودن پرسنل"}),(0,r.jsx)(o.Qr,{name:"search",control:l,render:e=>{let{field:n}=e;return(0,r.jsx)(s.nv,{...n,placeholder:"جستجوی نام پرسنل، شماره تماس، ایمیل"})}})]}),(0,r.jsx)(s.u_,{isOpen:e,onClose:()=>n(!1),children:(0,r.jsx)(i,{onClose:()=>n(!1)})})]})}},98250:function(e,n,l){"use strict";l.d(n,{default:function(){return a}});var r=l(57437);l(2265);var t=l(16463),o=l(7507),s=l(46302),i=JSON.parse('[{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"},{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"},{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"},{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"},{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"},{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"},{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"},{"fullName":"حامد احمدی","email":"long.example.۱۳۳@gmail.com","mobile":"09121345678","lastSeen":"۱۴۰۳/فروردین/۰۱ - ۱۵:۳۵"}]'),a=()=>{let e=(0,t.useRouter)();return(0,r.jsx)(s.iA,{columns:[{accessorKey:"fullName",header:"نام و نام خانوادگی",cell:e=>{let n=e.getValue();return(0,r.jsx)(o.xv,{style:{display:"flex",height:"100%",alignItems:"center"},children:n||"-"})}},{accessorKey:"email",header:"ایمیل",cell:e=>{let n=e.getValue();return(0,r.jsx)(o.xv,{style:{display:"flex",height:"100%",alignItems:"center"},children:n||"-"})}},{accessorKey:"mobile",header:"شماره تماس",cell:e=>{let n=e.getValue();return(0,r.jsx)(o.xv,{style:{display:"flex",height:"100%",alignItems:"center"},children:n||"-"})}},{accessorKey:"lastSeen",header:"آخرین بازدید",cell:e=>{let n=e.getValue();return(0,r.jsx)(o.xv,{style:{display:"flex",height:"100%",alignItems:"center"},children:n||"-"})}},{id:"details",cell:n=>{let{row:l}=n,t=l.original;return(0,r.jsx)(o.kC,{width:"100%",height:"100%",align:"center",justify:"center",children:(0,r.jsx)(o.zx,{variant:"ghost",onClick:()=>{console.log("item",t),e.push("/employee/employee-info")},children:"..."})})}}],data:i})}},53214:function(e,n,l){"use strict";var r=l(57437);l(2265),l(61170);let t=(0,l(57818).default)(()=>l.e(8372).then(l.bind(l,94212)).then(e=>e.default),{loadableGenerated:{webpack:()=>[94212]},ssr:!1});n.default=()=>(0,r.jsx)(t,{current:1,total:4,onPageChange:()=>0})},61170:function(){}},function(e){e.O(0,[1553,3048,3497,5452,8310,1825,8702,7507,2971,7023,1744],function(){return e(e.s=93465)}),_N_E=e.O()}]);