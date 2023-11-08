"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[8445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"File Format"},o=void 0,l={unversionedId:"configuration/format",id:"configuration/format",title:"File Format",description:"COSMOS configuration files are just text files. They can (and should) be checked into your configuration management system and thus can be easily diffed throughout their history. They support ERB syntax, partials, and various line continuations which make them extremely flexible.",source:"@site/docs/configuration/format.md",sourceDirName:"configuration",slug:"/configuration/format",permalink:"/docs/configuration/format",draft:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/configuration/format.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"File Format"},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Plugins",permalink:"/docs/configuration/plugins"}},s={},u=[{value:"Keyword / Parameters",id:"keyword--parameters",level:2},{value:"ERB",id:"erb",level:2},{value:"render",id:"render",level:3},{value:"Line Continuation",id:"line-continuation",level:2},{value:"String Concatenation",id:"string-concatenation",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"COSMOS configuration files are just text files. They can (and should) be checked into your configuration management system and thus can be easily diffed throughout their history. They support ERB syntax, partials, and various line continuations which make them extremely flexible."),(0,r.kt)("h2",{id:"keyword--parameters"},"Keyword / Parameters"),(0,r.kt)("p",null,"Each line of a COSMOS configuration file contains a single keyword followed by parameters. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'COMMAND TARGET COLLECT BIG_ENDIAN "Collect command"\n')),(0,r.kt)("p",null,"The keyword is ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMAND")," and the parameters are ",(0,r.kt)("inlineCode",{parentName:"p"},"TARGET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"COLLECT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BIG_ENDIAN"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},'"Collect command"'),". Keywords are parsed by COSMOS and parameters are checked for validity. Parameters can be required or optional although required parameters always come first. Some parameters have a limited set of valid values. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMAND")," keyword above has the following documentation:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"REQUIRED"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the target this command is associated with"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Command"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of this command. Also referred to as its mnemonic. Must be unique to commands to this target. Ideally will be as short and clear as possible."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endianness"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the data in this command is to be sent in Big Endian or Little Endian format",(0,r.kt)("br",null),(0,r.kt)("br",null),"Valid Values: ",(0,r.kt)("inlineCode",{parentName:"td"},"BIG_ENDIAN, LITTLE_ENDIAN")),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of this command which must be enclosed with quotes"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("p",null,"The Target and Command parameters can be any string and are required. The Endianness parameter is required and must be ",(0,r.kt)("inlineCode",{parentName:"p"},"BIG_ENDIAN")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"LITTLE_ENDIAN"),". Other values will cause an error when parsed. The Description parameter must be enclosed in quotes and is optional. All the COSMOS configuration files document their keyword and parameters in this fashion. In addition, Example Usage is provided similar to the example given above."),(0,r.kt)("h2",{id:"erb"},"ERB"),(0,r.kt)("p",null,"ERB stands for Embedded Ruby. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ruby/erb"},"ERB")," is a templating system for Ruby which allows you to use Ruby logic and variables to generate text files. There are two basic forms of ERB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erb"},"<% Ruby code -- no output %>\n<%= Ruby expression -- insert result %>\n")),(0,r.kt)("p",null,"In a COSMOS ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/telemetry"},"Telemetry")," configuration file we could write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erb"},'<% (1..5).each do |i| %>\n  APPEND_ITEM VALUE<%= i %> 16 UINT "Value <%= i %> setting"\n<% end %>\n')),(0,r.kt)("p",null,"The first line is Ruby code which iterates from 1 up to and including 5 and places the value in the variable i. The code inside the block will be output to the file every time the iteration runs. The APPEND_ITEM line uses the value of i and directly outputs it to the file by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<%=")," syntax. The result of the parsing will look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'APPEND_ITEM VALUE1 16 UINT "Value 1 setting"\nAPPEND_ITEM VALUE2 16 UINT "Value 2 setting"\nAPPEND_ITEM VALUE3 16 UINT "Value 3 setting"\nAPPEND_ITEM VALUE4 16 UINT "Value 4 setting"\nAPPEND_ITEM VALUE5 16 UINT "Value 5 setting"\n')),(0,r.kt)("p",null,"COSMOS uses ERB syntax extensively in a Plugin's ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/plugins#plugintxt-configuration-file"},"plugin.txt")," configuration file."),(0,r.kt)("h3",{id:"render"},"render"),(0,r.kt)("p",null,"COSMOS provides a method used inside ERB called ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," which renders a configuration file into another configuration file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'TELEMETRY INST HEALTH_STATUS BIG_ENDIAN "Health and status"\n  <%= render "_ccsds_apid.txt", locals: {apid: 1} %>\n  APPEND_ITEM COLLECTS     16 UINT   "Number of collects"\n  ...\n')),(0,r.kt)("p",null,"The render method takes a parameter which is the name of the configuration file to inject into the top level file. This file is required to start with underscore to avoid being processed as a regular configuration file. This file is called a partial since it's part of a larger file. For example, ","_","ccsds_apid.txt is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'  APPEND_ID_ITEM CCSDSAPID 11 UINT <%= apid %> "CCSDS application process id"\n')),(0,r.kt)("p",null,"This would result in output as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'TELEMETRY INST HEALTH_STATUS BIG_ENDIAN "Health and status"\n  APPEND_ID_ITEM CCSDSAPID 11 UINT 1 "CCSDS application process id"\n  APPEND_ITEM COLLECTS     16 UINT   "Number of collects"\n  ...\n')),(0,r.kt)("p",null,"Note the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"apid")," was set to 1 using the ",(0,r.kt)("inlineCode",{parentName:"p"},"locals:")," syntax. This is a very powerful way to add common headers and footer to every packet definition. See the INST target's cmd_tlm definitions in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenC3/cosmos/tree/main/openc3-cosmos-init/plugins/packages/openc3-cosmos-demo/targets/INST/cmd_tlm"},"Demo")," for a more comprehensive example."),(0,r.kt)("h2",{id:"line-continuation"},"Line Continuation"),(0,r.kt)("p",null,"COSMOS supports a line continuation character in configuration files. For a simple line continuation use the ampersand character: ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'TELEMETRY INST HEALTH_STATUS BIG_ENDIAN &\n  "Health and status"\n')),(0,r.kt)("p",null,"This will strip the ampersand character and merge the two lines to result in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'TELEMETRY INST HEALTH_STATUS BIG_ENDIAN "Health and status"\n')),(0,r.kt)("p",null,"Spaces around the second line are stripped so indentation does not matter."),(0,r.kt)("h2",{id:"string-concatenation"},"String Concatenation"),(0,r.kt)("p",null,"COSMOS supports two different string concatenation characters in configuration files. To concatenate strings with a newline use the plus character: ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'TELEMETRY INST HEALTH_STATUS BIG_ENDIAN "Health and status" +\n  "Additional description"\n')),(0,r.kt)("p",null,"The strings will be merged with a newline to result in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'TELEMETRY INST HEALTH_STATUS BIG_ENDIAN "Health and status\\nAdditional description"\n')),(0,r.kt)("p",null,"To concatenate strings without a newline use the backslash character: ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"TELEMETRY INST HEALTH_STATUS BIG_ENDIAN 'Health and status' \\\n  'Additional description'\n")),(0,r.kt)("p",null,"The strings will be merged without a newline to result in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"TELEMETRY INST HEALTH_STATUS BIG_ENDIAN 'Health and statusAdditional description'\n")),(0,r.kt)("p",null,"The string continuation characters work with both single or double quoted strings but note that both lines MUST use the same syntax. You can not concatenate a single quoted string with a double quoted string or vice versa. Also note the indentation of the second line does not matter as whitespace is stripped."))}d.isMDXComponent=!0}}]);