(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6273],{72431:function(){},43767:function(e,t,r){"use strict";r.d(t,{a:function(){return f}});var u=r(83667),n=r(2265),i=r(69948),s=r(53e3),l=r(93191),o=r(99038),a=r(88472),c=r(38261);function f(e,t){return function(e,t,r){var u,f,p,h;let _=(0,l.NL)(r),g=(0,o.S)(),d=(0,s._)(),y=_.defaultQueryOptions(e);null===(f=_.getDefaultOptions().queries)||void 0===f||null===(u=f._experimental_beforeQuery)||void 0===u||u.call(f,y),y._optimisticResults=g?"isRestoring":"optimistic",(0,c.A8)(y),(0,a.pf)(y,d),(0,a.JN)(d);let[C]=n.useState(()=>new t(_,y)),O=C.getOptimisticResult(y);if(n.useSyncExternalStore(n.useCallback(e=>{let t=g?()=>void 0:C.subscribe(i.V.batchCalls(e));return C.updateResult(),t},[C,g]),()=>C.getCurrentResult(),()=>C.getCurrentResult()),n.useEffect(()=>{C.setOptions(y,{listeners:!1})},[y,C]),(0,c.SB)(y,O))throw(0,c.j8)(y,C,d);if((0,a.KJ)({result:O,errorResetBoundary:d,throwOnError:y.throwOnError,query:_.getQueryCache().get(y.queryHash)}))throw O.error;return null===(h=_.getDefaultOptions().queries)||void 0===h||null===(p=h._experimental_afterQuery)||void 0===p||p.call(h,y,O),y.notifyOnChangeProps?O:C.trackResult(O)}(e,u.z,t)}}}]);