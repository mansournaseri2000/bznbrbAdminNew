(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{18333:function(e,t,r){Promise.resolve().then(r.bind(r,65430))},65430:function(e,t,r){"use strict";r.r(t);var s=r(57437),i=r(57818),n=r(94963),a=r(69907),o=r(33913);let u=(0,i.default)(()=>Promise.all([r.e(3048),r.e(2295),r.e(5452),r.e(8310),r.e(3348),r.e(6648),r.e(7138),r.e(4684),r.e(6396),r.e(722),r.e(341)]).then(r.bind(r,19429)),{loadableGenerated:{webpack:()=>[19429]},ssr:!1});t.default=e=>{let{params:t}=e,r=t.slug[0],i=t.slug[1],[l,c]=(0,a.useQueries)({queries:[{queryKey:["constant"],queryFn:async()=>await (0,o.iV)()},{queryKey:["place"],queryFn:async()=>await (0,o._7)(Number(i)),enabled:"edit"===r,staleTime:0,gcTime:0}]}),{data:d}=l,{data:p,isLoading:f}=c;return(console.log("PlaceData",p),!d||f)?(0,s.jsx)(n.$j,{style:{marginInline:"auto",scale:3,marginBlock:"20px"}}):(0,s.jsx)(u,{placeConstant:d,status:r,placeID:Number(i),placeData:p})}},57818:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var s=r(50551),i=r.n(s)},50551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let s=r(99920);r(57437),r(2265);let i=s._(r(40148));function n(e,t){var r;let s={loading:e=>{let{error:t,isLoading:r,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let n={...s,...t};return(0,i.default)({...n,modules:null==(r=n.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let s=r(55592);function i(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return r}},40148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let s=r(57437),i=r(2265),n=r(10912),a=r(61481);function o(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},l=function(e){let t={...u,...e},r=(0,i.lazy)(()=>t.loader().then(o)),l=t.loading;function c(e){let o=l?(0,s.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,u=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,s.jsx)(r,{...e})]}):(0,s.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(r,{...e})});return(0,s.jsx)(i.Suspense,{fallback:o,children:u})}return c.displayName="LoadableComponent",c}},61481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return n}});let s=r(57437),i=r(58512);function n(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,i.getExpectedRequestStore)("next/dynamic css"),n=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));n.push(...t)}}return 0===n.length?null:(0,s.jsx)(s.Fragment,{children:n.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},33913:function(e,t,r){"use strict";r.d(t,{zv:function(){return u},u1:function(){return f},Nc:function(){return c},x1:function(){return p},iV:function(){return o},_7:function(){return l},CM:function(){return d}}),r(16463),r(31072);let s=e=>e.map(e=>({tripTypeId:e.id,score:e.score}));var i=r(10008);let n=r(38472).Z.create({baseURL:"https://api-client.darkube.app/v1/",headers:{"Content-Type":"application/json"}});var a=r(75312);let o=async()=>(await i.S.get("places/create-data")).data.data,u=async e=>{let t=new FormData;return t.append("type",e.type),t.append("placeId",e.placeId.toString()),t.append("files",e.files),(await i.S.post("upload",t,{headers:{"Content-Type":"multipart/form-data"}})).data},l=async e=>(await i.S.get("places/id/".concat(e))).data.data,c=async e=>{let{name:t,basicInfoDescription:r,sub_category_id:n,cityID:o,lat:u,airplane:l,car:c,bus:d,subway:p,ship:f,taxi:m,train:h,pictures:y,lng:b,address:g,tell:v,website:w,email:_,basicInfosummary:T,meta_description:O,meta_title:x,metakeywords:C,keywords:k,features:P,hike:j,PlaceDetails:S,TripTypes:R,PlaceTripSeasons:Q,PlaceCategories:E,tripLimitations:q,category_id:N,cost:M,renown:z,PlaceWorkTimes:I,area:L,trip_value:B,rating:D,suggested_time:F}=e;return(await i.S.post("places/create",{name:t,city_id:0==o?void 0:Number(o),description:r,category_id:0==n?void 0:Number(n),parentCategory_id:0==N?void 0:Number(N),lat:u,lng:b,address:g,tell:v,website:w,email:_,summary:T,tags:C,keywords:k,meta_description:O,meta_title:x,airplane:l,bus:d,car:c,hike:j,ship:f,subway:p,taxi:m,train:h,PlaceFeatures:P,PlaceDetails:S,TripTypes:s(R),PlaceWorkTimes:(0,a.b4)(I),PlaceCategories:E,PlaceTripLimitations:q,PlaceTripSeasons:Q,pictures:y,cost:M,renown:z,area:L,rating:Number(D),trip_value:Number(B),suggested_time:String(F)})).data},d=async e=>(await i.S.delete("upload/".concat(e))).data,p=async(e,t)=>{let{name:r,basicInfoDescription:s,sub_category_id:n,cityID:o,lat:u,airplane:l,car:c,bus:d,subway:p,ship:f,taxi:m,train:h,pictures:y,lng:b,address:g,tell:v,website:w,email:_,basicInfosummary:T,meta_description:O,meta_title:x,metakeywords:C,keywords:k,features:P,hike:j,PlaceDetails:S,PlaceTripSeasons:R,PlaceCategories:Q,category_id:E,TripTypes:q,PlaceWorkTimes:N,tripLimitations:M,renown:z,cost:I,area:L,rating:B,trip_value:D,suggested_time:F}=e;return(await i.S.put("places/update/".concat(t),{name:r,description:s,category_id:0!==String(n).length?Number(n):void 0,city_id:0!==String(o).length?Number(o):void 0,parentCategory_id:0!==String(E).length?Number(E):void 0,lat:u,lng:b,address:g,tell:v,website:w,email:_,summary:T,tags:C,keywords:k,meta_description:O,meta_title:x,airplane:l,bus:d,car:c,hike:j,ship:f,subway:p,taxi:m,train:h,PlaceFeatures:P,PlaceDetails:(0,a.QB)(S),TripTypes:q,PlaceWorkTimes:(0,a.b4)(N),PlaceCategories:Q,PlaceTripLimitations:M,PlaceTripSeasons:R,pictures:y,cost:I,renown:z,area:L,rating:Number(B),trip_value:Number(D),suggested_time:F})).data},f=async e=>(await n.post("places/user-edit",e)).data},31072:function(e,t,r){"use strict";r.r(t),r.d(t,{ToastError:function(){return u},ToastSuccess:function(){return o},ToastWarning:function(){return l},default:function(){return a}});var s=r(57437),i=r(23580);r(44193);let n=(0,r(89183).zo)(i.Ix).withConfig({componentId:"sc-83203d06-0"})(["& .Toastify__toast-body{font-family:var(--yekan-font) !important;padding:unset;gap:1rem;}& .Toastify__close-button{margin:-5px 0 0 -15px;}& .Toastify__toast-body > div:last-child{line-height:28px;padding-left:1rem;font-family:var(--dana-font) !important;font-size:1rem;font-weight:400;line-height:'28px';@media (min-width:","){&{line-height:normal;}}}& .Toastify__toast{min-height:fit-content;border-radius:4px;margin-bottom:1rem;padding:12px 24px 18px 24px;width:100%;@media (min-width:","){min-width:400px;width:max-content;}}& .Toastify__progress-bar--success{}& .Toastify__progress-bar--error{}& .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning{}& .Toastify__toast-icon{width:26px;height:24px;}"],"328px","768px");var a=()=>(0,s.jsx)(n,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!0,draggable:!0,theme:"colored",limit:3,transition:i.Mi});let o=e=>i.Am.success(e,{}),u=e=>i.Am.error(e,{}),l=e=>i.Am.warning(e,{})},10008:function(e,t,r){"use strict";r.d(t,{S:function(){return a}});var s=r(16463),i=r(38472),n=r(15263);let a=i.Z.create({baseURL:"https://apibznpaneldev.darkube.app/v1/",headers:{"Content-Type":"application/json"}}),o=i.Z.create({baseURL:"https://apibznpaneldev.darkube.app/v1/",headers:{"Content-Type":"application/json"}});a.interceptors.request.use(e=>{let t=new n.Z().get("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),o.interceptors.request.use(e=>{let t=new n.Z().get("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>{if(e.response){let t=e.response.status;401===t?console.error("Unauthorized access - perhaps the token has expired"):403===t?console.error("Forbidden - You do not have permission to access this resource."):t>=500?(console.error("Server error - Please try again later."),(0,s.redirect)("/error")):console.error("Error: ".concat(e.response.statusText))}else e.request?(console.error("Network error - the request was made but no response was received"),(0,s.redirect)("/error")):((0,s.redirect)("/error"),console.error("Error:",e.message));return Promise.reject(e)})},75312:function(e,t,r){"use strict";r.d(t,{Ai:function(){return s},QB:function(){return o},b4:function(){return u},hn:function(){return a},iF:function(){return n},zW:function(){return i}});let s=e=>null==e?void 0:e.map(e=>({categoryId:e.id,score:e.score})),i=e=>null==e?void 0:e.map(e=>({tripSeasonId:e.id,score:e.score,timing:e.timing})),n=e=>null==e?void 0:e.map(e=>({tripLimitationId:e.id,score:e.score})),a=e=>e.map(e=>{var t;return{dayOfWeek:e.dayOfWeek,type:(null===(t=e.type.find(t=>t.key===(e.isTimed?"timed":e.type.some(e=>"open"===e.key)?"open":"closed")))||void 0===t?void 0:t.key)||"",isTimed:e.isTimed,timing:e.timing.map(e=>({time:e.time,key:e.key,faKey:e.faKey}))}}),o=e=>e.map(e=>({detailId:e.id,descriptions:e.description}));function u(e){return e.map(e=>{let t={firstOpenTime:null,secondOpenTime:null,firstCloseTime:null,secondCloseTime:null};return e.timing.forEach(e=>{t[e.key]=e.time}),{dayOfWeek:e.dayOfWeek,faDay:e.faDay,isTimed:e.isTimed,firstOpenTime:t.firstOpenTime,secondOpenTime:t.secondOpenTime,firstCloseTime:t.firstCloseTime,secondCloseTime:t.secondCloseTime,type:e.type.toLowerCase()}})}},69907:function(e,t,r){"use strict";r.d(t,{useQueries:function(){return h}});var s=r(2265),i=r(69948),n=r(83667),a=r(49010),o=r(56298);function u(e,t){return e.filter(e=>!t.includes(e))}var l=class extends a.l{#e;#t;#r;#s;#i;#n;#a;constructor(e,t,r){super(),this.#e=e,this.#r=[],this.#s=[],this.#t=[],this.setQueries(t)}onSubscribe(){1===this.listeners.size&&this.#s.forEach(e=>{e.subscribe(t=>{this.#o(e,t)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#s.forEach(e=>{e.destroy()})}setQueries(e,t,r){this.#r=e,i.V.batch(()=>{let e=this.#s,t=this.#u(this.#r);t.forEach(e=>e.observer.setOptions(e.defaultedQueryOptions,r));let s=t.map(e=>e.observer),i=s.map(e=>e.getCurrentResult()),n=s.some((t,r)=>t!==e[r]);(e.length!==s.length||n)&&(this.#s=s,this.#t=i,this.hasListeners()&&(u(e,s).forEach(e=>{e.destroy()}),u(s,e).forEach(e=>{e.subscribe(t=>{this.#o(e,t)})}),this.#l()))})}getCurrentResult(){return this.#t}getQueries(){return this.#s.map(e=>e.getCurrentQuery())}getObservers(){return this.#s}getOptimisticResult(e,t){let r=this.#u(e),s=r.map(e=>e.observer.getOptimisticResult(e.defaultedQueryOptions));return[s,e=>this.#c(e??s,t),()=>r.map((e,t)=>{let i=s[t];return e.defaultedQueryOptions.notifyOnChangeProps?i:e.observer.trackResult(i,e=>{r.forEach(t=>{t.observer.trackProp(e)})})})]}#c(e,t){return t?(this.#i&&this.#t===this.#a&&t===this.#n||(this.#n=t,this.#a=this.#t,this.#i=(0,o.Q$)(this.#i,t(e))),this.#i):e}#u(e){let t=new Map(this.#s.map(e=>[e.options.queryHash,e])),r=e.map(e=>this.#e.defaultQueryOptions(e)),s=r.flatMap(e=>{let r=t.get(e.queryHash);return null!=r?[{defaultedQueryOptions:e,observer:r}]:[]}),i=new Set(s.map(e=>e.defaultedQueryOptions.queryHash)),a=r.filter(e=>!i.has(e.queryHash)),o=e=>{let t=this.#e.defaultQueryOptions(e);return this.#s.find(e=>e.options.queryHash===t.queryHash)??new n.z(this.#e,t)},u=a.map(e=>({defaultedQueryOptions:e,observer:o(e)}));return s.concat(u).sort((e,t)=>r.indexOf(e.defaultedQueryOptions)-r.indexOf(t.defaultedQueryOptions))}#o(e,t){let r=this.#s.indexOf(e);-1!==r&&(this.#t=function(e,t,r){let s=e.slice(0);return s[t]=r,s}(this.#t,r,t),this.#l())}#l(){i.V.batch(()=>{this.listeners.forEach(e=>{e(this.#t)})})}},c=r(93191),d=r(99038),p=r(53e3),f=r(88472),m=r(38261);function h(e,t){let{queries:r,...a}=e,o=(0,c.useQueryClient)(t),u=(0,d.useIsRestoring)(),h=(0,p.useQueryErrorResetBoundary)(),y=s.useMemo(()=>r.map(e=>{let t=o.defaultQueryOptions(e);return t._optimisticResults=u?"isRestoring":"optimistic",t}),[r,o,u]);y.forEach(e=>{(0,m.A8)(e),(0,f.pf)(e,h)}),(0,f.JN)(h);let[b]=s.useState(()=>new l(o,y,a)),[g,v,w]=b.getOptimisticResult(y,a.combine);s.useSyncExternalStore(s.useCallback(e=>u?()=>void 0:b.subscribe(i.V.batchCalls(e)),[b,u]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),s.useEffect(()=>{b.setQueries(y,a,{listeners:!1})},[y,a,b]);let _=g.some((e,t)=>(0,m.SB)(y[t],e))?g.flatMap((e,t)=>{let r=y[t];if(r){let t=new n.z(o,r);if((0,m.SB)(r,e))return(0,m.j8)(r,t,h);(0,m.Z$)(e,u)&&(0,m.j8)(r,t,h)}return[]}):[];if(_.length>0)throw Promise.all(_);let T=g.find((e,t)=>{let r=y[t];return r&&(0,f.KJ)({result:e,errorResetBoundary:h,throwOnError:r.throwOnError,query:o.getQueryCache().get(r.queryHash)})});if(null==T?void 0:T.error)throw T.error;return v(w())}}},function(e){e.O(0,[1553,9673,4518,9269,2971,7023,1744],function(){return e(e.s=18333)}),_N_E=e.O()}]);