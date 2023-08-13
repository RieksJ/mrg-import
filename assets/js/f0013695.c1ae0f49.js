"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Deployment",p={unversionedId:"mrg-import/deployment",id:"mrg-import/deployment",title:"Deployment",description:"MRG Import Example",source:"@site/docs/mrg-import/3-deployment.md",sourceDirName:"mrg-import",slug:"/mrg-import/deployment",permalink:"/mrg-import/docs/mrg-import/deployment",draft:!1,editUrl:"https://github.com/tno-terminology-design/mrg-import/blob/master/docs/mrg-import/3-deployment.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1691935621,formattedLastUpdatedAt:"Aug 13, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Usage",permalink:"/mrg-import/docs/mrg-import/usage"},next:{title:"Error Reporting",permalink:"/mrg-import/docs/mrg-import/error-reporting"}},l={},s=[{value:"MRG Import Example",id:"mrg-import-example",level:2},{value:"Executed Steps",id:"executed-steps",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"mrg-import-example"},"MRG Import Example"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," is designed to be usable in both a command-line interface and a CI/CD pipeline. Features like the ",(0,o.kt)("a",{parentName:"p",href:"usage#configuration-file"},"configuration file"),", make the execution of the tool easily maintainable, and ",(0,o.kt)("a",{parentName:"p",href:"error-reporting"},"error reporting")," is available to assist further in the importing ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG"),"s."),(0,o.kt)("p",null,"The GitHub repository of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool"),", located ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"here")," acts as an example of the tool's deployment. Within the ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/docs-deploy.yml")," GitHub Actions Workflow file are the following lines of code. This code is located in the deploy job before the website is built, modifying the input files in runtime before they are used to build the Docusaurus site."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"    # Terminology reference resolution\n    - name: Install MRG Import Tool\n    run: npm install -g @tno-terminology-design/mrg-import\n    - name: Run MRG Import Tool\n    run: mrg-import --scopedir __tests__/content --onNotExist warn\n")),(0,o.kt)("p",null,"This execution of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," is run from the root of the repository. The tool reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"saf.yaml")," inside the supplied ",(0,o.kt)("inlineCode",{parentName:"p"},"scopedir")," (",(0,o.kt)("inlineCode",{parentName:"p"},"__tests__/content"),"). After which, the ",(0,o.kt)("inlineCode",{parentName:"p"},"scopes")," section of the local ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," is used to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"scopedir")," of external scopes."),(0,o.kt)("h3",{id:"executed-steps"},"Executed Steps"),(0,o.kt)("p",null,"The following steps have been executed to reach a working implementation of the tool based on the ",(0,o.kt)("a",{parentName:"p",href:"#example-deployment"},"example deployment")," above. Multiple approaches are possible, like using ",(0,o.kt)("inlineCode",{parentName:"p"},"wget")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),", but these have not been documented."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Make sure the ",(0,o.kt)("a",{parentName:"strong",href:"installation#prerequisites"},"prerequisites")," are met.")," ",(0,o.kt)("br",null),"\nPlease refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," installation and usage for the latest details about these commands."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Download and install nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash\n# Download and install node.js\nnvm install node # "node" is an alias for the latest version\nnvm use node # Use the installed node.js version\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install the latest version of the ",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRG Import Tool")," and its dependencies globally.")," ",(0,o.kt)("br",null),"\nThis makes the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," CLI command available all throughout your system and does not initialize the current working directory with ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com"},"npm")," files."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @tno-terminology-design/mrg-import\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configure the ",(0,o.kt)("a",{parentName:"strong",href:"@"},"SAF")," and make sure the necessary ",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRG"),"'s are attainable.")," ",(0,o.kt)("br",null),"\nOur example deployment ",(0,o.kt)("inlineCode",{parentName:"p"},"saf.yaml")," can be viewed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import/blob/main/__tests__/content/saf.yaml"},"here")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"__tests__/content")," directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Setup the ",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRG Import Tool")," behavior per ",(0,o.kt)("a",{parentName:"strong",href:"usage#configuration-file"},"configuration file")," and/or command-line parameters.")," ",(0,o.kt)("br",null),"\nSee the ",(0,o.kt)("a",{parentName:"p",href:"#example-deployment"},"example deployment")," above for the yaml configuration file that is used. In this case we will be executing the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," from the root of our repository and not the root of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopedir"),". This means you may have to change working directory before executing step 5.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Execute the ",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRG Import Tool"),".")," ",(0,o.kt)("br",null),"\nWe will use the following command to run the tool according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"__tests__/content/config.yaml")," config file. The configured paths are relative to the working directory where the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," is executed."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mrg-import --config __tests__/content/config.yaml --force\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verify execution.")," ",(0,o.kt)("br",null),"\nThe ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," CLI outputs information about its execution to the console according to the ",(0,o.kt)("a",{parentName:"p",href:"error-reporting"},"Error Reporting")," messages. The output should provide enough information to resolve issues surrounding the execution of the tool and the related terminology design. In this case, obtaining the second ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," listed in the import ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," resulted in an error that caused the tool to halt execution as specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"onNotExist")," option."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-n/a",metastring:'title="Sample console output"',title:'"Sample',console:!0,'output"':!0},"INFO    Found 1 import scope(s) in scopedir './__tests__/content'\nINFO      - Handling import scope 'essiflab'\nINFO      - Requesting 'https://raw.githubusercontent.com/tno-terminology-design/trrt/main/__tests__/content/saf.yaml'\nINFO    Found 2 maintained MRG file(s) in import scope 'essiflab'\nINFO      - Requesting 'https://raw.githubusercontent.com/tno-terminology-design/trrt/main/__tests__/content/terminology/mrg.default.main.yaml'\nINFO        - Storing MRG file 'mrg.essiflab.main.yaml' in '__tests__/content/terminology'\nINFO        - Creating symbolic link for 1 alternative version(s)\nINFO      - Requesting 'https://raw.githubusercontent.com/tno-terminology-design/trrt/main/__tests__/content/terminology/mrg.default.lain.yaml'\nERROR       - Request failed with status code 404, halting execution as requested by the 'onNotExist' throw option\n")))))}u.isMDXComponent=!0}}]);