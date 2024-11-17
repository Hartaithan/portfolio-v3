(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{451:function(e,t,n){Promise.resolve().then(n.bind(n,1392)),Promise.resolve().then(n.bind(n,2362))},3738:function(e,t,n){"use strict";var r=n(7437),s=n(2997);t.Z=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("pointer-events-none absolute inset-0 z-10","before:blur-3 before:absolute before:left-0 before:top-0 before:h-full before:w-4/12","before:bg-gradient-to-r before:from-neutral-900 before:to-transparent before:filter","after:blur-3 after:absolute after:right-0 after:top-0 after:h-full after:w-4/12","after:bg-gradient-to-l after:from-neutral-900 after:to-transparent after:filter",t),...n})}},321:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r=n(5142),s=n(2265);let i=(e,t)=>Math.abs(e)*t,a=e=>{let{data:t}=e,[[n,a],l]=(0,s.useState)([0,0]),o=(0,r.r)(0,t.length,n),c=(0,s.useCallback)(e=>l(t=>{let[n]=t;return[n+e,e]}),[]),u=(0,s.useCallback)(e=>l(t=>{let n=t[0]>e?-1:1;return[e,n]}),[l]),d=(0,s.useCallback)((e,t)=>{let{offset:n,velocity:r}=t,s=i(n.x,r.x);s<-1e4?c(1):s>1e4&&c(-1)},[c]);return{page:n,direction:a,index:o,paginate:c,handlePage:u,handleDragEnd:d}}},1392:function(e,t,n){"use strict";n.d(t,{default:function(){return b}});var r=n(7437);let s=[{title:"Dvigus",location:"Russia, Moscow",position:"Frontend Developer",tags:["React","Tracking Scripts"],from:"10.2023",to:"present"},{title:"Qwantum",location:"Russia, Yakutsk",position:"Frontend Developer",tags:["React","Next.JS","React Native"],from:"06.2022",to:"08.2023"},{title:"AEB IT",location:"Russia, Yakutsk",position:"Frontend Developer",tags:["React","Next.JS"],from:"05.2021",to:"05.2022"}],i={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"June",7:"July",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return"".concat(e," ").concat(t).concat(1!==e?n:"")},l=e=>{let t,n;if("present"===e){let e=new Date;[n,t]=[e.getMonth()+1,e.getFullYear()]}else[n,t]=e.split(".").map(Number);return 12*t+n},o=(e,t)=>{let n=l(t)-l(e),r=Math.floor(n/12),s=[];return r>0&&s.push(a(r,"year")),n%12>0&&s.push(a(r,"month")),s.join(", ")||""},c=e=>{if("present"===e)return e;let[t,n]=e.split(".").map(Number);return"".concat(i[t]," ").concat(n)};var u=e=>{let{index:t}=e,{title:n,location:i,from:a,to:l,tags:u}=s[t],d=o(a,l);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,r.jsx)("h1",{className:"text-sm font-semibold sm:text-base",children:n}),(0,r.jsx)("p",{className:"text-xs leading-[normal] text-neutral-200 sm:text-sm",children:i})]}),(0,r.jsxs)("div",{className:"mt-1 flex items-center gap-x-2",children:[(0,r.jsxs)("p",{className:"text-xs sm:text-sm",children:[c(a)," - ",c(l)]}),(0,r.jsx)("p",{className:"text-xs leading-[normal]",children:d})]}),(0,r.jsx)("div",{className:"mt-2 flex flex-wrap gap-x-2 gap-y-1",children:u.map(e=>(0,r.jsx)("p",{className:"rounded bg-neutral-800 px-2 py-0.5 text-xs font-medium hover:bg-neutral-700 sm:text-sm",children:e},e))})]})},d=n(321),f=n(2997),x=n(8614),m=n(6298);let p={enter:e=>({x:e>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?1e3:-1e3,opacity:0})},h={x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},g={left:0,right:0},v=e=>{let{className:t,...n}=e;return(0,r.jsx)("button",{className:(0,f.cn)("flex aspect-square size-6 items-center justify-center rounded-full bg-neutral-800",t),...n,children:"‣"})};var b=()=>{let{page:e,direction:t,index:n,paginate:i,handleDragEnd:a}=(0,d.v)({data:s});return(0,r.jsxs)("div",{className:"relative flex min-h-0 flex-col overflow-hidden rounded-lg bg-neutral-900 px-5 py-4 md:px-6 md:py-5 lg:min-h-40",children:[(0,r.jsxs)("div",{className:"mb-3 flex justify-between",children:[(0,r.jsx)("h1",{className:"text-base font-semibold md:text-xl",children:"Experience"}),(0,r.jsxs)("div",{className:"flex gap-x-3",children:[(0,r.jsx)(v,{className:"rotate-180",onClick:()=>i(-1)}),(0,r.jsx)(v,{onClick:()=>i(1)})]})]}),(0,r.jsx)(x.M,{initial:!1,mode:"popLayout",custom:t,children:(0,r.jsx)(m.E.div,{className:"flex h-1 flex-1 flex-col justify-center",custom:t,variants:p,initial:"enter",animate:"center",exit:"exit",drag:"x",transition:h,dragConstraints:g,dragElastic:1,onDragEnd:a,children:(0,r.jsx)(u,{index:n})},e)})]})}},2362:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var r=n(7437),s=n(3738);let i=["HTML","CSS","SCSS","JS ES6+","TS 4+","CSS Animations","Resp. Design","Bootstrap","Mantine","Tailwind","Styled Components","shadcn/ui","Framer Motion","React","React Router","Next.JS","SSR, ISR, PPR","Vue","Nuxt.js","Angular","Rx.js","React Context API","Redux / Redux Toolkit","Mobx","Vuex","NGRX","REST API","GraphQL","Apollo Client","Canvas API","Intersection Observer API","Notifications API","Service Workers","PWA","Webpack","Vite","Eslint","Prettier","Git","Android","Android SDK","Kotlin","Volley","React Native","React Navigation","Reanimated","Jest","React Testing Library","Pagination","Infinite Scroll","Lazy loading","Virtualization","React Hook Form","Formik","Three.JS","React Three Fiber"];var a=n(6298),l=n(2265);let o=(e=>{let t={one:[],two:[],three:[]};for(let n=0;n<e.length;n++){let r=e[n];n%3==0?t.one.push(r):n%3==1?t.two.push(r):t.three.push(r)}return t})(i),c={x:["0%","-50%"],transition:{ease:"linear",duration:i.length/10*15,repeat:1/0}},u=e=>{let{items:t}=e,n=(0,l.useMemo)(()=>[...t,...t],[t]);return(0,r.jsx)("div",{className:"relative mx-auto w-[calc(100%-2px)] overflow-hidden",children:(0,r.jsx)(a.E.div,{className:"flex w-max",animate:c,children:n.map((e,t)=>(0,r.jsx)("p",{className:"mr-3 flex select-none items-center justify-center text-nowrap rounded bg-neutral-800 px-2 py-0.5 text-sm font-medium hover:bg-neutral-700",children:e},t))})})};var d=()=>(0,r.jsxs)("div",{className:"flex h-40 flex-col overflow-hidden rounded-lg bg-neutral-900 py-4 md:h-44 md:py-5",children:[(0,r.jsx)("h1",{className:"mb-3 px-5 text-base font-semibold md:px-6 md:text-xl",children:"Skills"}),(0,r.jsxs)("div",{className:"relative flex flex-1 flex-col items-center justify-between",children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(u,{items:o.one}),(0,r.jsx)(u,{items:o.two}),(0,r.jsx)(u,{items:o.three})]})]})},2997:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var r=n(1994),s=n(3335);let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,r.W)(t))}},8614:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var r=n(7437),s=n(2265),i=n(4252),a=n(3576),l=n(5750);class o extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:n}=e,i=(0,s.useId)(),a=(0,s.useRef)(null),c=(0,s.useRef)({width:0,height:0,top:0,left:0}),{nonce:u}=(0,s.useContext)(l._);return(0,s.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:s}=c.current;if(n||!a.current||!e||!t)return;a.current.dataset.motionPopId=i;let l=document.createElement("style");return u&&(l.nonce=u),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[n]),(0,r.jsx)(o,{isPresent:n,childRef:a,sizeRef:c,children:s.cloneElement(t,{ref:a})})}let u=e=>{let{children:t,initial:n,isPresent:l,onExitComplete:o,custom:u,presenceAffectsLayout:f,mode:x}=e,m=(0,a.h)(d),p=(0,s.useId)(),h=(0,s.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;o&&o()},[m,o]),g=(0,s.useMemo)(()=>({id:p,initial:n,isPresent:l,custom:u,onExitComplete:h,register:e=>(m.set(e,!1),()=>m.delete(e))}),f?[Math.random(),h]:[l,h]);return(0,s.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[l]),s.useEffect(()=>{l||m.size||!o||o()},[l]),"popLayout"===x&&(t=(0,r.jsx)(c,{isPresent:l,children:t})),(0,r.jsx)(i.O.Provider,{value:g,children:t})};function d(){return new Map}var f=n(8881),x=n(3223);let m=e=>e.key||"";function p(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}var h=n(1534);let g=e=>{let{children:t,exitBeforeEnter:n,custom:i,initial:l=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync"}=e;(0,x.k)(!n,"Replace exitBeforeEnter with mode='wait'");let g=(0,s.useMemo)(()=>p(t),[t]),v=g.map(m),b=(0,s.useRef)(!0),j=(0,s.useRef)(g),N=(0,a.h)(()=>new Map),[R,y]=(0,s.useState)(g),[S,w]=(0,s.useState)(g);(0,h.L)(()=>{b.current=!1,j.current=g;for(let e=0;e<S.length;e++){let t=m(S[e]);v.includes(t)?N.delete(t):!0!==N.get(t)&&N.set(t,!1)}},[S,v.length,v.join("-")]);let C=[];if(g!==R){let e=[...g];for(let t=0;t<S.length;t++){let n=S[t],r=m(n);v.includes(r)||(e.splice(t,0,n),C.push(n))}"wait"===d&&C.length&&(e=C),w(p(e)),y(g);return}let{forceRender:k}=(0,s.useContext)(f.p);return(0,r.jsx)(r.Fragment,{children:S.map(e=>{let t=m(e),n=g===S||v.includes(t);return(0,r.jsx)(u,{isPresent:n,initial:(!b.current||!!l)&&void 0,custom:n?void 0:i,presenceAffectsLayout:c,mode:d,onExitComplete:n?void 0:()=>{if(!N.has(t))return;N.set(t,!0);let e=!0;N.forEach(t=>{t||(e=!1)}),e&&(null==k||k(),w(j.current),o&&o())},children:e},t)})})}},5142:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});let r=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e}}},function(e){e.O(0,[137,298,971,117,744],function(){return e(e.s=451)}),_N_E=e.O()}]);