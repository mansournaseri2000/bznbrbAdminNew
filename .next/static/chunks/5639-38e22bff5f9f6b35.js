(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5639],{76839:function(t){t.exports={toJalaali:function(t,e,n){return"[object Date]"===Object.prototype.toString.call(t)&&(n=t.getDate(),e=t.getMonth()+1,t=t.getFullYear()),_(o(t,e,n))},toGregorian:n,isValidJalaaliDate:function(t,e,n){return t>=-61&&t<=3177&&e>=1&&e<=12&&n>=1&&n<=a(t,e)},isLeapJalaaliYear:r,jalaaliMonthLength:a,jalCal:s,j2d:i,d2j:_,g2d:o,d2g:u,jalaaliToDateObject:l,jalaaliWeek:function(t,e,n){var r=l(t,e,n).getDay(),a=6==r?0:-(r+1);return{saturday:_(i(t,e,n+a)),friday:_(i(t,e,n+(6+a)))}}};var e=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function n(t,e,n){return u(i(t,e,n))}function r(t){return 0===function(t){var n,r,a,s,i,_=e.length,o=e[0];if(t<o||t>=e[_-1])throw Error("Invalid Jalaali year "+t);for(i=1;i<_&&(r=(n=e[i])-o,!(t<n));i+=1)o=n;return r-(s=t-o)<6&&(s=s-r+33*~~((r+4)/33)),-1===(a=c(c(s+1,33)-1,4))&&(a=4),a}(t)}function a(t,e){return e<=6?31:e<=11||r(t)?30:29}function s(t,n){var r,a,s,i,_,o,u=e.length,l=t+621,d=-14,h=e[0];if(t<h||t>=e[u-1])throw Error("Invalid Jalaali year "+t);for(o=1;o<u&&(a=(r=e[o])-h,!(t<r));o+=1)d=d+8*~~(a/33)+~~(c(a,33)/4),h=r;return(d=d+8*~~((_=t-h)/33)+~~((c(_,33)+3)/4),4===c(a,33)&&a-_==4&&(d+=1),i=20+d-(~~(l/4)-~~((~~(l/100)+1)*3/4)-150),n)?{gy:l,march:i}:(a-_<6&&(_=_-a+33*~~((a+4)/33)),-1===(s=c(c(_+1,33)-1,4))&&(s=4),{leap:s,gy:l,march:i})}function i(t,e,n){var r=s(t,!0);return o(r.gy,3,r.march)+(e-1)*31-~~(e/7)*(e-7)+n-1}function _(t){var e,n,r=u(t).gy,a=r-621,i=s(a,!1);if((n=t-o(r,3,i.march))>=0){if(n<=185)return{jy:a,jm:1+~~(n/31),jd:c(n,31)+1};n-=186}else a-=1,n+=179,1===i.leap&&(n+=1);return{jy:a,jm:7+~~(n/30),jd:c(n,30)+1}}function o(t,e,n){return~~((t+~~((e-8)/6)+100100)*1461/4)+~~((153*c(e+9,12)+2)/5)+n-34840408-~~(3*~~((t+100100+~~((e-8)/6))/100)/4)+752}function u(t){var e,n,r,a;return n=5*~~(c(e=(e=4*t+139361631)+4*~~(3*~~((4*t+183187720)/146097)/4)-3908,1461)/4)+308,r=~~(c(n,153)/5)+1,{gy:~~(e/1461)-100100+~~((8-(a=c(~~(n/153),12)+1))/6),gm:a,gd:r}}function l(t,e,r,a,s,i,_){var o=n(t,e,r);return new Date(o.gy,o.gm-1,o.gd,a||0,s||0,i||0,_||0)}function c(t,e){return t-~~(t/e)*e}},64673:function(t,e,n){t.exports=F;var r,a=n(19212),s=n(76839),i=/(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,_=/(\[[^\[]*\])|(\\)?(LTS?|LL?L?L?|l{1,4})/g,o=/\d\d?/,u=/\d{1,3}/,l=/\d{3}/,c=/\d{1,4}/,d=/[+\-]?\d{1,6}/,h=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,f=/Z|[\+\-]\d\d:?\d\d/i,j=/T/i,p=/[\+\-]?\d+(\.\d{1,3})?/,M={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},Y={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"},D={jm:"jmonth",jmonths:"jmonth",jy:"jyear",jyears:"jyear"},m={},g="DDD w M D".split(" "),y="M D w".split(" "),L={jM:function(){return this.jMonth()+1},jMMM:function(t){return this.localeData().jMonthsShort(this,t)},jMMMM:function(t){return this.localeData().jMonths(this,t)},jD:function(){return this.jDate()},jDDD:function(){return this.jDayOfYear()},jw:function(){return this.jWeek()},jYY:function(){return k(this.jYear()%100,2)},jYYYY:function(){return k(this.jYear(),4)},jYYYYY:function(){return k(this.jYear(),5)},jgg:function(){return k(this.jWeekYear()%100,2)},jgggg:function(){return this.jWeekYear()},jggggg:function(){return k(this.jWeekYear(),5)}};function v(t,e){return function(n){return k(t.call(this,n),e)}}function w(t,e){var n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function k(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function T(t){if(t){var e=t.toLowerCase();t=D[e]||e}return t}function O(t,e,n,r){var a=t._d;isNaN(e)&&(t._isValid=!1),t._isUTC?t._d=new Date(Date.UTC(e,n,r,a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())):t._d=new Date(e,n,r,a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())}function S(t){function e(){}return e.prototype=t,new e}function b(t,e){switch(t){case"jDDDD":case"DDDD":return l;case"jYYYY":case"YYYY":return c;case"jYYYYY":case"YYYYY":return d;case"jDDD":case"S":case"SS":case"SSS":case"DDD":return u;case"jMMM":case"jMMMM":case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return h;case"jMM":case"jDD":case"jYY":case"jM":case"jD":case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return o;case"a":case"A":return a.localeData(e._l)._meridiemParse;case"X":return p;case"Z":case"ZZ":return f;case"T":return j;default:return new RegExp(t.replace("\\",""))}}function P(t,e,n){var r,a=n-e,s=n-t.day();return s>a&&(s-=7),s<a-7&&(s+=7),{week:Math.ceil((r=F(t).add(s,"d")).jDayOfYear()/7),year:r.jYear()}}function N(t,e,n,r,s){"boolean"==typeof n&&(r=n,n=void 0),e&&"string"==typeof e&&(e=C(e,a));var _,o,u,l,c={_i:t,_f:e,_l:n,_strict:r,_isUTC:s},d=t,h=e;if(e){if(_=e,"[object Array]"===Object.prototype.toString.call(_))return function(t,e){var n,r,a,s,i,_,o=t._f.length;if(0===o)return N(new Date(NaN));for(n=0;n<o;n+=1)r=t._f[n],i=0,(a=N(t._i,r,t._l,t._strict,e)).isValid()&&(i+=a._jDiff,a._il&&(i+=a._il.length),(null==_||i<_)&&(_=i,s=a));return s}(c,s);o=function(t){var e,n,r,s,_,o,u,l,c=t._f.match(i),d=t._i+"",h=c.length;for(o=0,t._a=[];o<h;o+=1)(l=(b(u=c[o],t).exec(d)||[])[0])&&(d=d.slice(d.indexOf(l)+l.length)),L[u]&&function(t,e,n){var r,s=n._a;switch(t){case"jM":case"jMM":s[1]=null==e?0:~~e-1;break;case"jMMM":case"jMMMM":null!=(r=a.localeData(n._l).jMonthsParse(e))?s[1]=r:n._isValid=!1;break;case"jD":case"jDD":case"jDDD":case"jDDDD":null!=e&&(s[2]=~~e);break;case"jYY":s[0]=~~e+(~~e>47?1300:1400);break;case"jYYYY":case"jYYYYY":s[0]=~~e}null==e&&(n._isValid=!1)}(u,l,t);return d&&(t._il=d),r=t._a[0],s=t._a[1],_=t._a[2],null==r&&null==s&&null==_?[0,0,1]:(r=null!=r?r:0,s=null!=s?s:0,((_=null!=_?_:1)<1||_>F.jDaysInMonth(r,s)||s<0||s>11)&&(t._isValid=!1),n=x((e=E(r,s,_)).gy,e.gm,e.gd),isNaN(e.gy)&&(t._isValid=!1),t._jDiff=0,~~n.jy!==r&&(t._jDiff+=1),~~n.jm!==s&&(t._jDiff+=1),~~n.jd!==_&&(t._jDiff+=1),[e.gy,e.gm,e.gd])}(c),function(t){var e,n,r,a=t._i+"",s="",_="",o=t._f.match(i),u=o.length;for(e=0;e<u;e+=1)(r=(b(n=o[e],t).exec(a)||[])[0])&&(a=a.slice(a.indexOf(r)+r.length)),L[n]instanceof Function||(_+=n,r&&(s+=r));t._i=s,t._f=_}(c),e="YYYY-MM-DD-"+c._f,t=k(o[0],4)+"-"+k(o[1]+1,2)+"-"+k(o[2],2)+"-"+c._i}return u=s?a.utc(t,e,n,r):a(t,e,n,r),!1===c._isValid&&(u._isValid=!1),u._jDiff=c._jDiff||0,w(l=S(F.fn),u),r&&e&&l.isValid()&&(l._isValid=l.format(h)===d),u._d.getTime()>57724432199999&&(l._isValid=!1),l}function F(t,e,n,r){return N(t,e,n,r,!1)}function C(t,e){for(var n=5,r=function(t){return e.localeData().longDateFormat(t)||t};n>0&&_.test(t);)n-=1,t=t.replace(_,r);return t}function x(t,e,n){try{var r=s.toJalaali(t,e+1,n);return r.jm-=1,r}catch(t){return{jy:NaN,jm:NaN,jd:NaN}}}function E(t,e,n){try{var r=s.toGregorian(t,e+1,n);return r.gm-=1,r}catch(t){return{gy:NaN,gm:NaN,gd:NaN}}}!function(){for(var t;g.length;)L["j"+(t=g.pop())+"o"]=function(t,e){return function(n){return this.localeData().ordinal(t.call(this,n),e)}}(L["j"+t],t);for(;y.length;)L["j"+(t=y.pop())+t]=v(L["j"+t],2);L.jDDDD=v(L.jDDD,3)}(),w((r=a.localeData(),Object.getPrototypeOf?Object.getPrototypeOf(r):"".__proto__?r.__proto__:r.constructor.prototype),{_jMonths:["Farvardin","Ordibehesht","Khordaad","Tir","Amordaad","Shahrivar","Mehr","Aabaan","Aazar","Dey","Bahman","Esfand"],jMonths:function(t){return this._jMonths[t.jMonth()]},_jMonthsShort:["Far","Ord","Kho","Tir","Amo","Sha","Meh","Aab","Aaz","Dey","Bah","Esf"],jMonthsShort:function(t){return this._jMonthsShort[t.jMonth()]},jMonthsParse:function(t){var e,n,r;for(this._jMonthsParse||(this._jMonthsParse=[]),e=0;e<12;e+=1)if(this._jMonthsParse[e]||(n=F([2e3,(2+e)%12,25]),r="^"+this.jMonths(n,"")+"|^"+this.jMonthsShort(n,""),this._jMonthsParse[e]=RegExp(r.replace(".",""),"i")),this._jMonthsParse[e].test(t))return e}}),w(F,a),F.fn=S(a.fn),F.utc=function(t,e,n,r){return N(t,e,n,r,!0)},F.unix=function(t){return N(1e3*t)},F.fn.format=function(t){return t&&(m[t=C(t,this)]||(m[t]=function(t){var e,n=t.match(i),r=n.length;for(e=0;e<r;e+=1)L[n[e]]&&(n[e]=L[n[e]]);return function(a){var s="";for(e=0;e<r;e+=1)s+=n[e]instanceof Function?"["+n[e].call(a,t)+"]":n[e];return s}}(t)),t=m[t](this)),a.fn.format.call(this,t)},F.fn.jYear=function(t){var e,n,r;return"number"==typeof t?(e=Math.min((n=x(this.year(),this.month(),this.date())).jd,F.jDaysInMonth(t,n.jm)),O(this,(r=E(t,n.jm,e)).gy,r.gm,r.gd),a.updateOffset(this),this):x(this.year(),this.month(),this.date()).jy},F.fn.jMonth=function(t){var e,n,r,s;return null==t?x(this.year(),this.month(),this.date()).jm:("string"==typeof t&&"number"!=typeof(t=this.localeData().jMonthsParse(t))||(e=Math.min((n=x(this.year(),this.month(),this.date())).jd,F.jDaysInMonth(n.jy,t)),this.jYear(n.jy+~~(t/12)),(t=(s=t)-12*~~(s/12))<0&&(t+=12,this.jYear(this.jYear()-1)),O(this,(r=E(this.jYear(),t,e)).gy,r.gm,r.gd),a.updateOffset(this)),this)},F.fn.jDate=function(t){var e,n;return"number"==typeof t?(O(this,(n=E((e=x(this.year(),this.month(),this.date())).jy,e.jm,t)).gy,n.gm,n.gd),a.updateOffset(this),this):x(this.year(),this.month(),this.date()).jd},F.fn.jDayOfYear=function(t){var e=Math.round((F(this).startOf("day")-F(this).startOf("jYear"))/864e5)+1;return null==t?e:this.add(t-e,"d")},F.fn.jWeek=function(t){var e=P(this,this.localeData()._week.dow,this.localeData()._week.doy).week;return null==t?e:this.add((t-e)*7,"d")},F.fn.jWeekYear=function(t){var e=P(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==t?e:this.add(t-e,"y")},F.fn.add=function(t,e){var n;return null===e||isNaN(+e)||(n=t,t=e,e=n),"jyear"===(e=T(e))?this.jYear(this.jYear()+t):"jmonth"===e?this.jMonth(this.jMonth()+t):(a.fn.add.call(this,t,e),isNaN(this.jYear())&&(this._isValid=!1)),this},F.fn.subtract=function(t,e){var n;return null===e||isNaN(+e)||(n=t,t=e,e=n),"jyear"===(e=T(e))?this.jYear(this.jYear()-t):"jmonth"===e?this.jMonth(this.jMonth()-t):a.fn.subtract.call(this,t,e),this},F.fn.startOf=function(t){return"jyear"===(t=T(t))||"jmonth"===t?("jyear"===t&&this.jMonth(0),this.jDate(1),this.hours(0),this.minutes(0),this.seconds(0),this.milliseconds(0),this):a.fn.startOf.call(this,t)},F.fn.endOf=function(t){return void 0===(t=T(t))||"milisecond"===t?this:this.startOf(t).add(1,"isoweek"===t?"week":t).subtract(1,"ms")},F.fn.isSame=function(t,e){return"jyear"===(e=T(e))||"jmonth"===e?a.fn.isSame.call(this.startOf(e),t.startOf(e)):a.fn.isSame.call(this,t,e)},F.fn.clone=function(){return F(this)},F.fn.jYears=F.fn.jYear,F.fn.jMonths=F.fn.jMonth,F.fn.jDates=F.fn.jDate,F.fn.jWeeks=F.fn.jWeek,F.jDaysInMonth=function(t,e){var n;return(t+=~~(e/12),(e=(n=e)-12*~~(n/12))<0&&(e+=12,t-=1),e<6)?31:e<11?30:F.jIsLeapYear(t)?30:29},F.jIsLeapYear=s.isLeapJalaaliYear,F.loadPersian=function(t){var e=!!(void 0!==t&&t.hasOwnProperty("usePersianDigits"))&&t.usePersianDigits,n=void 0!==t&&t.hasOwnProperty("dialect")?t.dialect:"persian";a.locale("fa"),a.updateLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:{persian:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),"persian-modern":"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")}[n],weekdaysShort:{persian:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),"persian-modern":"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")}[n],weekdaysMin:{persian:"ی_د_س_چ_پ_آ_ش".split("_"),"persian-modern":"ی_د_س_چ_پ_ج_ش".split("_")}[n],longDateFormat:{LT:"HH:mm",L:"jYYYY/jMM/jDD",LL:"jD jMMMM jYYYY",LLL:"jD jMMMM jYYYY LT",LLLL:"dddd، jD jMMMM jYYYY LT"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [ی پیش ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"1 دقیقه",mm:"%d دقیقه",h:"1 ساعت",hh:"%d ساعت",d:"1 روز",dd:"%d روز",M:"1 ماه",MM:"%d ماه",y:"1 سال",yy:"%d سال"},preparse:function(t){return e?t.replace(/[۰-۹]/g,function(t){return Y[t]}).replace(/،/g,","):t},postformat:function(t){return e?t.replace(/\d/g,function(t){return M[t]}).replace(/,/g,"،"):t},ordinal:"%dم",week:{dow:6,doy:12},meridiem:function(t){return t<12?"ق.ظ":"ب.ظ"},jMonths:{persian:"فروردین_اردیبهشت_خرداد_تیر_امرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"),"persian-modern":"فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_")}[n],jMonthsShort:{persian:"فرو_ارد_خرد_تیر_امر_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"),"persian-modern":"فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_")}[n]})},F.loadPersian_dari=function(t){var e=!!(void 0!==t&&t.hasOwnProperty("usePersianDigits"))&&t.usePersianDigits,n=void 0!==t&&t.hasOwnProperty("dialect")?t.dialect:"persian-dari";a.locale("fa-af"),a.updateLocale("fa-af",{months:"جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),monthsShort:"جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),weekdays:{persian:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),"persian-modern":"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")}[n],weekdaysShort:{persian:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),"persian-modern":"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")}[n],weekdaysMin:{persian:"ی_د_س_چ_پ_آ_ش".split("_"),"persian-modern":"ی_د_س_چ_پ_ج_ش".split("_")}[n],longDateFormat:{LT:"HH:mm",L:"jYYYY/jMM/jDD",LL:"jD jMMMM jYYYY",LLL:"jD jMMMM jYYYY LT",LLLL:"dddd، jD jMMMM jYYYY LT"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [ی پیش ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"1 دقیقه",mm:"%d دقیقه",h:"1 ساعت",hh:"%d ساعت",d:"1 روز",dd:"%d روز",M:"1 ماه",MM:"%d ماه",y:"1 سال",yy:"%d سال"},preparse:function(t){return e?t.replace(/[۰-۹]/g,function(t){return Y[t]}).replace(/،/g,","):t},postformat:function(t){return e?t.replace(/\d/g,function(t){return M[t]}).replace(/,/g,"،"):t},ordinal:"%dم",week:{dow:6,doy:12},meridiem:function(t){return t<12?"ق.ظ":"ب.ظ"},jMonths:{"persian-dari":"حمل_ثور_جوزا_سرطان_اسد_سنبله_میزان_عقرب_قوس_جدی_دلو_حوت".split("_"),"persian-modern-dari":"حمل_ثور_جوزا_سرطان_اسد_سنبله_میزان_عقرب_قوس_جدی_دلو_حوت".split("_")}[n],jMonthsShort:{"persian-dari":"حمل_ثور_جوزا_سرط_اسد_سنب_میز_عقر_قوس_جدی_دلو_حوت".split("_"),"persian-modern-dari":"حمل_ثور_جوزا_سرط_اسد_سنب_میز_عقر_قوس_جدی_دلو_حوت".split("_")}[n]})},F.loadPashto=function(t){var e=!!(void 0!==t&&t.hasOwnProperty("usePersianDigits"))&&t.usePersianDigits,n=void 0!==t&&t.hasOwnProperty("dialect")?t.dialect:"pashto";a.locale("ps-af"),a.updateLocale("ps-af",{months:"جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),monthsShort:"جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),weekdays:{pashto:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),"pashto-modern":"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")}[n],weekdaysShort:{pashto:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),"pashto-modern":"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")}[n],weekdaysMin:{pashto:"ی_د_س_چ_پ_آ_ش".split("_"),"pashto-modern":"ی_د_س_چ_پ_ج_ش".split("_")}[n],longDateFormat:{LT:"HH:mm",L:"jYYYY/jMM/jDD",LL:"jD jMMMM jYYYY",LLL:"jD jMMMM jYYYY LT",LLLL:"dddd، jD jMMMM jYYYY LT"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [ی پیش ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"1 دقیقه",mm:"%d دقیقه",h:"1 ساعت",hh:"%d ساعت",d:"1 روز",dd:"%d روز",M:"1 ماه",MM:"%d ماه",y:"1 سال",yy:"%d سال"},preparse:function(t){return e?t.replace(/[۰-۹]/g,function(t){return Y[t]}).replace(/،/g,","):t},postformat:function(t){return e?t.replace(/\d/g,function(t){return M[t]}).replace(/,/g,"،"):t},ordinal:"%dم",week:{dow:6,doy:12},meridiem:function(t){return t<12?"ق.ظ":"ب.ظ"},jMonths:{pashto:"وری_غویی_غبرګولی_چنګاښ_زمری_وږی_تله_لړم_لیندی_مرغومی_سلواغه_کب".split("_"),"pashto-modern":"وری_غویی_غبرګولی_چنګاښ_زمری_وږی_تله_لړم_لیندی_مرغومی_سلواغه_کب".split("_")}[n],jMonthsShort:{pashto:"وری_غوی_غبر_چنګ_زمر_وږی_لړم_لین_مرغ_سلو_کب".split("_"),"pashto-modern":"وری_غوی_غبر_چنګ_زمر_وږی_لړم_لین_مرغ_سلو_کب".split("_")}[n]})},F.jConvert={toJalaali:x,toGregorian:E}},91235:function(t,e,n){"use strict";n.d(e,{r:function(){return l}});var r=n(2265),a=n(69948),s=n(53e3),i=n(93191),_=n(99038),o=n(88472),u=n(38261);function l(t,e,n){var l,c,d,h;let f=(0,i.useQueryClient)(n),j=(0,_.useIsRestoring)(),p=(0,s.useQueryErrorResetBoundary)(),M=f.defaultQueryOptions(t);null===(c=f.getDefaultOptions().queries)||void 0===c||null===(l=c._experimental_beforeQuery)||void 0===l||l.call(c,M),M._optimisticResults=j?"isRestoring":"optimistic",(0,u.A8)(M),(0,o.pf)(M,p),(0,o.JN)(p);let[Y]=r.useState(()=>new e(f,M)),D=Y.getOptimisticResult(M);if(r.useSyncExternalStore(r.useCallback(t=>{let e=j?()=>void 0:Y.subscribe(a.V.batchCalls(t));return Y.updateResult(),e},[Y,j]),()=>Y.getCurrentResult(),()=>Y.getCurrentResult()),r.useEffect(()=>{Y.setOptions(M,{listeners:!1})},[M,Y]),(0,u.SB)(M,D))throw(0,u.j8)(M,Y,p);if((0,o.KJ)({result:D,errorResetBoundary:p,throwOnError:M.throwOnError,query:f.getQueryCache().get(M.queryHash)}))throw D.error;return null===(h=f.getDefaultOptions().queries)||void 0===h||null===(d=h._experimental_afterQuery)||void 0===d||d.call(h,M,D),M.notifyOnChangeProps?D:Y.trackResult(D)}},76351:function(t,e,n){"use strict";n.d(e,{useQuery:function(){return s}});var r=n(83667),a=n(91235);function s(t,e){return(0,a.r)(t,r.z,e)}}}]);