"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=o,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Testing",s={unversionedId:"mrg-import/testing",id:"mrg-import/testing",title:"Testing",description:"When cloning the entire MRG Import Tool repository, you will also get certain files to test the behavior of the tool. These test files are located in the tests directory, and include a content folder and an automated test written for the mocha test framework and chai assertion library. This automated test can be executed by running the following command inside the MRG Import Tool repository clone:",source:"@site/docs/mrg-import/5-testing.md",sourceDirName:"mrg-import",slug:"/mrg-import/testing",permalink:"/mrg-import/docs/mrg-import/testing",draft:!1,editUrl:"https://github.com/tno-terminology-design/mrg-import/blob/master/docs/mrg-import/5-testing.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1696342287,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Error Reporting",permalink:"/mrg-import/docs/mrg-import/error-reporting"}},l={},p=[],m={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When cloning the entire ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository"),", you will also get certain files to test the behavior of the tool. These test files are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"__tests__")," directory, and include a ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," folder and an automated test written for the ",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"mocha")," test framework and ",(0,o.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"chai")," assertion library. This automated test can be executed by running the following command inside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository")," clone: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,o.kt)("p",null,"which should execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"mocha __tests__/**/*.test.js")," command and run all available unit tests.\nKeep in mind that working with a clone of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository")," instead of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tno-terminoloy-design/mrg-import"},"npm package")," will result in an uncompiled version of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," as the built files are not stored in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository"),". This uncompiled version will need the dependencies to be compiled, which in addition to compiling/building can be achieved by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n")),(0,o.kt)("p",null,"after which the tool can be installed using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g\n")),(0,o.kt)("p",null,"If you are planning on modifying any code: a rebuild command is also available, which uninstalls the latest package, removes the build folder, re-builds, and re-installs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run rebuild\n")),(0,o.kt)("p",null,"The current available test (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import/blob/main/__tests__/mrg-import.test.js"},"_","_tests__/mrg-import.test.js"),"), runs the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," on the test files located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," folder and checks if the number of terms that have been converted correspond with the amount of terms found by the external regex matching of the test script."))}d.isMDXComponent=!0}}]);