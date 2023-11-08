"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[2093],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(o),f=n,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var s=2;s<l;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1008:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const l={title:"Bucket Explorer"},i=void 0,a={unversionedId:"tools/bucket-explorer",id:"tools/bucket-explorer",title:"Bucket Explorer",description:"Introduction",source:"@site/docs/tools/bucket-explorer.md",sourceDirName:"tools",slug:"/tools/bucket-explorer",permalink:"/docs/tools/bucket-explorer",draft:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/bucket-explorer.md",tags:[],version:"current",frontMatter:{title:"Bucket Explorer"},sidebar:"defaultSidebar",previous:{title:"Autonomic",permalink:"/docs/tools/autonomic"},next:{title:"Calendar",permalink:"/docs/tools/calendar"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Browsing Files",id:"browsing-files",level:2},{value:"Upload",id:"upload",level:3},{value:"Download",id:"download",level:3},{value:"Delete",id:"delete",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Bucket Explorer is a file browser to the COSMOS backend bucket storage system. It allows you to view files in an intuitive file browser hierarchy and download them. Bucket Explorer works both with local installations of COSMOS as well as cloud deployments which utilize cloud storage such as AWS S3 and GCP Cloud Storage."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Bucket Explorer",src:o(9653).Z,width:"1818",height:"1498"})),(0,n.kt)("h2",{id:"browsing-files"},"Browsing Files"),(0,n.kt)("p",null,"At the top are the three standard COSMOS buckets: ",(0,n.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"logs"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"tools"),". Each bucket contains top level folders named after the scope. In the Open Source edition the only scope is ",(0,n.kt)("inlineCode",{parentName:"p"},"DEFAULT"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," bucket holds the COSMOS configuration which is populated as plugins are installed. The ",(0,n.kt)("inlineCode",{parentName:"p"},"logs")," bucket holds the COSMOS logs which are generated by the various COSMOS microservices. These logs are gzipped to save storage space. The ",(0,n.kt)("inlineCode",{parentName:"p"},"tools")," bucket holds the source code for the built-in COSMOS tools as well as user create tools installed as plugins. Note that the search box only searches the current screen worth of files, e.g. it does not search the entire bucket."),(0,n.kt)("h3",{id:"upload"},"Upload"),(0,n.kt)("p",null,"Click the Upload icon to bring up a file browser to select a file to upload into the current bucket and path. Note that in ",(0,n.kt)("a",{parentName:"p",href:"https://openc3.com/enterprise"},"COSMOS Enterprise")," you can only upload files to the config/DEFAULT/targets_modified folder unless you're an Admin."),(0,n.kt)("h3",{id:"download"},"Download"),(0,n.kt)("p",null,"Click the Download icon to download any of the individual files from any bucket and path."),(0,n.kt)("h3",{id:"delete"},"Delete"),(0,n.kt)("p",null,"Click the Trash icon to delete an individual file. Note that in ",(0,n.kt)("a",{parentName:"p",href:"https://openc3.com/enterprise"},"COSMOS Enterprise")," you can only delete files in the config/DEFAULT/targets_modified folder unless you're an Admin."))}u.isMDXComponent=!0},9653:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/bucket_explorer-983c087ee3bdcf8626219e782620b6c580fd82bfe2e8b0c662a0f90cdca43838.png"}}]);