import{Da as m,Ea as f,J as Q,K as b,L as ee,O as M,P as I,Q as B,T as te,V as ne,Ya as re,pa as T,ra as ie}from"./chunk-FY3C5UYS.js";var K=null;function H(){return K}function zt(e){K||(K=e)}var se=class{},de=new M("DocumentToken"),le=(()=>{let t=class t{historyGo(n){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>(()=>B(Ce))(),providedIn:"platform"});let e=t;return e})();var Ce=(()=>{let t=class t extends le{constructor(){super(),this._doc=B(de),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return H().getBaseHref(this._doc)}onPopState(n){let i=H().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=H().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>(()=>new t)(),providedIn:"platform"});let e=t;return e})();function fe(e,t){if(e.length==0)return t;if(t.length==0)return e;let r=0;return e.endsWith("/")&&r++,t.startsWith("/")&&r++,r==2?e+t.substring(1):r==1?e+t:e+"/"+t}function ue(e){let t=e.match(/#|\?|$/),r=t&&t.index||e.length,n=r-(e[r-1]==="/"?1:0);return e.slice(0,n)+e.slice(r)}function _(e){return e&&e[0]!=="?"?"?"+e:e}var X=(()=>{let t=class t{historyGo(n){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>(()=>B(Ee))(),providedIn:"root"});let e=t;return e})(),Fe=new M("appBaseHref"),Ee=(()=>{let t=class t extends X{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??B(de).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return fe(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+_(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,u){let c=this.prepareExternalUrl(s+_(u));this._platformLocation.pushState(n,i,c)}replaceState(n,i,s,u){let c=this.prepareExternalUrl(s+_(u));this._platformLocation.replaceState(n,i,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(I(le),I(Fe,8))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var we=(()=>{let t=class t{constructor(n){this._subject=new ie,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Se(ue(oe(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+_(i))}normalize(n){return t.stripTrailingSlash(ye(this._basePath,oe(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+_(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+_(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};t.normalizeQueryParams=_,t.joinWithSlash=fe,t.stripTrailingSlash=ue,t.\u0275fac=function(i){return new(i||t)(I(X))},t.\u0275prov=b({token:t,factory:()=>Ae(),providedIn:"root"});let e=t;return e})();function Ae(){return new we(I(X))}function ye(e,t){if(!e||!t.startsWith(e))return t;let r=t.substring(e.length);return r===""||["/",";","?","#"].includes(r[0])?r:t}function oe(e){return e.replace(/\/index.html$/,"")}function Se(e){if(new RegExp("^(https?:)?//").test(e)){let[,r]=e.split(/\/\/[^\/]+/);return r}return e}var D=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(D||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),A=function(e){return e[e.Decimal=0]="Decimal",e[e.Group=1]="Group",e[e.List=2]="List",e[e.PercentSign=3]="PercentSign",e[e.PlusSign=4]="PlusSign",e[e.MinusSign=5]="MinusSign",e[e.Exponential=6]="Exponential",e[e.SuperscriptingExponent=7]="SuperscriptingExponent",e[e.PerMille=8]="PerMille",e[e.Infinity=9]="Infinity",e[e.NaN=10]="NaN",e[e.TimeSeparator=11]="TimeSeparator",e[e.CurrencyDecimal=12]="CurrencyDecimal",e[e.CurrencyGroup=13]="CurrencyGroup",e}(A||{});function ve(e){return m(e)[f.LocaleId]}function be(e,t,r){let n=m(e),i=[n[f.DayPeriodsFormat],n[f.DayPeriodsStandalone]],s=C(i,t);return C(s,r)}function _e(e,t,r){let n=m(e),i=[n[f.DaysFormat],n[f.DaysStandalone]],s=C(i,t);return C(s,r)}function Ie(e,t,r){let n=m(e),i=[n[f.MonthsFormat],n[f.MonthsStandalone]],s=C(i,t);return C(s,r)}function Me(e,t){let n=m(e)[f.Eras];return C(n,t)}function P(e,t){let r=m(e);return C(r[f.DateFormat],t)}function k(e,t){let r=m(e);return C(r[f.TimeFormat],t)}function x(e,t){let n=m(e)[f.DateTimeFormat];return C(n,t)}function V(e,t){let r=m(e),n=r[f.NumberSymbols][t];if(typeof n>"u"){if(t===A.CurrencyDecimal)return r[f.NumberSymbols][A.Decimal];if(t===A.CurrencyGroup)return r[f.NumberSymbols][A.Group]}return n}function he(e){if(!e[f.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[f.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Be(e){let t=m(e);return he(t),(t[f.ExtraData][2]||[]).map(n=>typeof n=="string"?Y(n):[Y(n[0]),Y(n[1])])}function Le(e,t,r){let n=m(e);he(n);let i=[n[f.ExtraData][0],n[f.ExtraData][1]],s=C(i,t)||[];return C(s,r)||[]}function C(e,t){for(let r=t;r>-1;r--)if(typeof e[r]<"u")return e[r];throw new Error("Locale data API: locale data undefined")}function Y(e){let[t,r]=e.split(":");return{hours:+t,minutes:+r}}var Oe=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,L={},Re=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,y=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(y||{}),a=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(a||{}),o=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(o||{});function Te(e,t,r,n){let i=Ve(e);t=w(r,t)||t;let u=[],c;for(;t;)if(c=Re.exec(t),c){u=u.concat(c.slice(1));let E=u.pop();if(!E)break;t=E}else{u.push(t);break}let g=i.getTimezoneOffset();n&&(g=ge(n,g),i=je(i,n,!0));let S="";return u.forEach(E=>{let v=Ue(E);S+=v?v(i,r,g):E==="''"?"'":E.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),S}function j(e,t,r){let n=new Date(0);return n.setFullYear(e,t,r),n.setHours(0,0,0),n}function w(e,t){let r=ve(e);if(L[r]=L[r]||{},L[r][t])return L[r][t];let n="";switch(t){case"shortDate":n=P(e,p.Short);break;case"mediumDate":n=P(e,p.Medium);break;case"longDate":n=P(e,p.Long);break;case"fullDate":n=P(e,p.Full);break;case"shortTime":n=k(e,p.Short);break;case"mediumTime":n=k(e,p.Medium);break;case"longTime":n=k(e,p.Long);break;case"fullTime":n=k(e,p.Full);break;case"short":let i=w(e,"shortTime"),s=w(e,"shortDate");n=N(x(e,p.Short),[i,s]);break;case"medium":let u=w(e,"mediumTime"),c=w(e,"mediumDate");n=N(x(e,p.Medium),[u,c]);break;case"long":let g=w(e,"longTime"),S=w(e,"longDate");n=N(x(e,p.Long),[g,S]);break;case"full":let E=w(e,"fullTime"),v=w(e,"fullDate");n=N(x(e,p.Full),[E,v]);break}return n&&(L[r][t]=n),n}function N(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(r,n){return t!=null&&n in t?t[n]:r})),e}function F(e,t,r="-",n,i){let s="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,s=r));let u=String(e);for(;u.length<t;)u="0"+u;return n&&(u=u.slice(u.length-t)),s+u}function Pe(e,t){return F(e,3).substring(0,t)}function h(e,t,r=0,n=!1,i=!1){return function(s,u){let c=ke(e,s);if((r>0||c>-r)&&(c+=r),e===a.Hours)c===0&&r===-12&&(c=12);else if(e===a.FractionalSeconds)return Pe(c,t);let g=V(u,A.MinusSign);return F(c,t,g,n,i)}}function ke(e,t){switch(e){case a.FullYear:return t.getFullYear();case a.Month:return t.getMonth();case a.Date:return t.getDate();case a.Hours:return t.getHours();case a.Minutes:return t.getMinutes();case a.Seconds:return t.getSeconds();case a.FractionalSeconds:return t.getMilliseconds();case a.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,r=D.Format,n=!1){return function(i,s){return xe(i,s,e,t,r,n)}}function xe(e,t,r,n,i,s){switch(r){case o.Months:return Ie(t,i,n)[e.getMonth()];case o.Days:return _e(t,i,n)[e.getDay()];case o.DayPeriods:let u=e.getHours(),c=e.getMinutes();if(s){let S=Be(t),E=Le(t,i,n),v=S.findIndex(O=>{if(Array.isArray(O)){let[G,R]=O,q=u>=G.hours&&c>=G.minutes,J=u<R.hours||u===R.hours&&c<R.minutes;if(G.hours<R.hours){if(q&&J)return!0}else if(q||J)return!0}else if(O.hours===u&&O.minutes===c)return!0;return!1});if(v!==-1)return E[v]}return be(t,i,n)[u<12?0:1];case o.Eras:return Me(t,n)[e.getFullYear()<=0?0:1];default:let g=r;throw new Error(`unexpected translation type ${g}`)}}function $(e){return function(t,r,n){let i=-1*n,s=V(r,A.MinusSign),u=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case y.Short:return(i>=0?"+":"")+F(u,2,s)+F(Math.abs(i%60),2,s);case y.ShortGMT:return"GMT"+(i>=0?"+":"")+F(u,1,s);case y.Long:return"GMT"+(i>=0?"+":"")+F(u,2,s)+":"+F(Math.abs(i%60),2,s);case y.Extended:return n===0?"Z":(i>=0?"+":"")+F(u,2,s)+":"+F(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var Ne=0,z=4;function $e(e){let t=j(e,Ne,1).getDay();return j(e,0,1+(t<=z?z:z+7)-t)}function De(e){return j(e.getFullYear(),e.getMonth(),e.getDate()+(z-e.getDay()))}function Z(e,t=!1){return function(r,n){let i;if(t){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,u=r.getDate();i=1+Math.floor((u+s)/7)}else{let s=De(r),u=$e(s.getFullYear()),c=s.getTime()-u.getTime();i=1+Math.round(c/6048e5)}return F(i,e,V(n,A.MinusSign))}}function U(e,t=!1){return function(r,n){let s=De(r).getFullYear();return F(s,e,V(n,A.MinusSign),t)}}var W={};function Ue(e){if(W[e])return W[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(o.Eras,d.Abbreviated);break;case"GGGG":t=l(o.Eras,d.Wide);break;case"GGGGG":t=l(o.Eras,d.Narrow);break;case"y":t=h(a.FullYear,1,0,!1,!0);break;case"yy":t=h(a.FullYear,2,0,!0,!0);break;case"yyy":t=h(a.FullYear,3,0,!1,!0);break;case"yyyy":t=h(a.FullYear,4,0,!1,!0);break;case"Y":t=U(1);break;case"YY":t=U(2,!0);break;case"YYY":t=U(3);break;case"YYYY":t=U(4);break;case"M":case"L":t=h(a.Month,1,1);break;case"MM":case"LL":t=h(a.Month,2,1);break;case"MMM":t=l(o.Months,d.Abbreviated);break;case"MMMM":t=l(o.Months,d.Wide);break;case"MMMMM":t=l(o.Months,d.Narrow);break;case"LLL":t=l(o.Months,d.Abbreviated,D.Standalone);break;case"LLLL":t=l(o.Months,d.Wide,D.Standalone);break;case"LLLLL":t=l(o.Months,d.Narrow,D.Standalone);break;case"w":t=Z(1);break;case"ww":t=Z(2);break;case"W":t=Z(1,!0);break;case"d":t=h(a.Date,1);break;case"dd":t=h(a.Date,2);break;case"c":case"cc":t=h(a.Day,1);break;case"ccc":t=l(o.Days,d.Abbreviated,D.Standalone);break;case"cccc":t=l(o.Days,d.Wide,D.Standalone);break;case"ccccc":t=l(o.Days,d.Narrow,D.Standalone);break;case"cccccc":t=l(o.Days,d.Short,D.Standalone);break;case"E":case"EE":case"EEE":t=l(o.Days,d.Abbreviated);break;case"EEEE":t=l(o.Days,d.Wide);break;case"EEEEE":t=l(o.Days,d.Narrow);break;case"EEEEEE":t=l(o.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(o.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(o.DayPeriods,d.Wide);break;case"aaaaa":t=l(o.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(o.DayPeriods,d.Abbreviated,D.Standalone,!0);break;case"bbbb":t=l(o.DayPeriods,d.Wide,D.Standalone,!0);break;case"bbbbb":t=l(o.DayPeriods,d.Narrow,D.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(o.DayPeriods,d.Abbreviated,D.Format,!0);break;case"BBBB":t=l(o.DayPeriods,d.Wide,D.Format,!0);break;case"BBBBB":t=l(o.DayPeriods,d.Narrow,D.Format,!0);break;case"h":t=h(a.Hours,1,-12);break;case"hh":t=h(a.Hours,2,-12);break;case"H":t=h(a.Hours,1);break;case"HH":t=h(a.Hours,2);break;case"m":t=h(a.Minutes,1);break;case"mm":t=h(a.Minutes,2);break;case"s":t=h(a.Seconds,1);break;case"ss":t=h(a.Seconds,2);break;case"S":t=h(a.FractionalSeconds,1);break;case"SS":t=h(a.FractionalSeconds,2);break;case"SSS":t=h(a.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=$(y.Short);break;case"ZZZZZ":t=$(y.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=$(y.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=$(y.Long);break;default:return null}return W[e]=t,t}function ge(e,t){e=e.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(r)?t:r}function ze(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function je(e,t,r){let n=r?-1:1,i=e.getTimezoneOffset(),s=ge(t,i);return ze(e,n*(s-i))}function Ve(e){if(ae(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,s=1,u=1]=e.split("-").map(c=>+c);return j(i,s-1,u)}let r=parseFloat(e);if(!isNaN(e-r))return new Date(r);let n;if(n=e.match(Oe))return Ge(n)}let t=new Date(e);if(!ae(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function Ge(e){let t=new Date(0),r=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let u=Number(e[4]||0)-r,c=Number(e[5]||0)-n,g=Number(e[6]||0),S=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,u,c,g,S),t}function ae(e){return e instanceof Date&&!isNaN(e.valueOf())}function jt(e,t){t=encodeURIComponent(t);for(let r of e.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}function He(e,t){return new Q(2100,!1)}var Ye="mediumDate",Ze=new M("DATE_PIPE_DEFAULT_TIMEZONE"),We=new M("DATE_PIPE_DEFAULT_OPTIONS"),Vt=(()=>{let t=class t{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,u){if(n==null||n===""||n!==n)return null;try{let c=i??this.defaultOptions?.dateFormat??Ye,g=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Te(n,c,u||this.locale,g)}catch(c){throw He(t,c.message)}}};t.\u0275fac=function(i){return new(i||t)(T(re,16),T(Ze,24),T(We,24))},t.\u0275pipe=ne({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var Gt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=te({type:t}),t.\u0275inj=ee({});let e=t;return e})(),Ht="browser",Ke="server";function Yt(e){return e===Ke}var ce=class{};export{H as a,zt as b,se as c,de as d,X as e,we as f,jt as g,Vt as h,Gt as i,Ht as j,Yt as k,ce as l};