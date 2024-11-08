"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[3307],{1307:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=i(4848),r=i(8453);const s={sidebar_position:3,title:"Targets",description:"Target definition file format and keywords",sidebar_custom_props:{myEmoji:"\ud83d\udef0\ufe0f"}},d="target.txt Keywords",l={id:"configuration/target",title:"Targets",description:"Target definition file format and keywords",source:"@site/docs/configuration/target.md",sourceDirName:"configuration",slug:"/configuration/target",permalink:"/docs/configuration/target",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/configuration/target.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Targets",description:"Target definition file format and keywords",sidebar_custom_props:{myEmoji:"\ud83d\udef0\ufe0f"}},sidebar:"defaultSidebar",previous:{title:"Plugins",permalink:"/docs/configuration/plugins"},next:{title:"Commands",permalink:"/docs/configuration/command"}},a={},o=[{value:"LANGUAGE",id:"language",level:2},{value:"REQUIRE",id:"require",level:2},{value:"IGNORE_PARAMETER",id:"ignore_parameter",level:2},{value:"IGNORE_ITEM",id:"ignore_item",level:2},{value:"COMMANDS",id:"commands",level:2},{value:"TELEMETRY",id:"telemetry",level:2},{value:"CMD_UNIQUE_ID_MODE",id:"cmd_unique_id_mode",level:2},{value:"TLM_UNIQUE_ID_MODE",id:"tlm_unique_id_mode",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Targets are the external embedded systems that COSMOS connects to. Targets are defined by the top level ",(0,n.jsx)(t.a,{href:"/docs/configuration/plugins#target-1",children:"TARGET"})," keyword in the plugin.txt file. Each target is self contained in a target directory named after the target. In the root of the target directory there is a configuration file named target.txt which configures the individual target."]}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"targettxt-keywords",children:"target.txt Keywords"})}),"\n",(0,n.jsx)(t.h2,{id:"language",children:"LANGUAGE"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("div",{class:"right",children:"(Since 5.11.1)"}),(0,n.jsx)(t.strong,{children:"Programming language of the target interfaces and microservices"})]}),"\n",(0,n.jsx)(t.p,{children:"The target language must be either Ruby or Python. The language determines how the target's interfaces and microservices are run. Note that both Ruby and Python still use ERB to perform templating."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Ruby or Python",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Valid Values: ",(0,n.jsx)("span",{class:"values",children:"ruby, python"})]}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"LANGUAGE python\n"})}),"\n",(0,n.jsx)(t.h2,{id:"require",children:"REQUIRE"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Requires a Ruby file"})}),"\n",(0,n.jsx)(t.p,{children:"List the Ruby files required to explicitly declare dependencies. This is now completely optional."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Filename"}),(0,n.jsx)(t.td,{children:'Filename to require. For files in the target\'s lib directory simply supply the filename, e.g. "REQUIRE my_file". Files in the base OpenC3 lib directory also should just list the filename. If a file is in a folder under the lib directory then you must specify the folder name, e.g. "REQUIRE folder/my_file". Note the ".rb" extension is optional when specifying the filename.'}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"REQUIRE limits_response.rb\n"})}),"\n",(0,n.jsx)(t.h2,{id:"ignore_parameter",children:"IGNORE_PARAMETER"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Ignore the given command parameter"})}),"\n",(0,n.jsx)(t.p,{children:"Hint to other OpenC3 tools to hide or ignore this command parameter when processing the command. For example, Command Sender and Command Sequence will not display the parameter (by default) when showing the command and Script Runner code completion will not display the parameter."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter Name"}),(0,n.jsx)(t.td,{children:"The name of a command parameter. Note that this parameter will be ignored in ALL the commands it appears in."}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"IGNORE_PARAMETER CCSDS_VERSION\n"})}),"\n",(0,n.jsx)(t.h2,{id:"ignore_item",children:"IGNORE_ITEM"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Ignore the given telemetry item"})}),"\n",(0,n.jsx)(t.p,{children:"Hint to other OpenC3 tools to hide or ignore this telemetry item when processing the telemetry. For example, Packet Viewer will not display the item (by default) when showing the packet."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Item name"}),(0,n.jsx)(t.td,{children:"The name of a telemetry item. Note that this item will be ignored in ALL the telemetry it appears in."}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"IGNORE_ITEM CCSDS_VERSION\n"})}),"\n",(0,n.jsx)(t.h2,{id:"commands",children:"COMMANDS"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Process the given command definition file"})}),"\n",(0,n.jsx)(t.p,{children:"This keyword is used to explicitly add the command definition file to the list of command and telemetry files to process."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Usage of this keyword overrides automatic command and telemetry file discovery. If this keyword is used, you must also use the TELEMETRY keyword to specify the telemetry files to process."})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Filename"}),(0,n.jsx)(t.td,{children:'Name of a command definition file in the target\'s cmd_tlm directory, e.g. "cmd.txt".'}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"COMMANDS inst_cmds_v2.txt\nTELEMETRY inst_tlm_v2.txt\n"})}),"\n",(0,n.jsx)(t.h2,{id:"telemetry",children:"TELEMETRY"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Process the given telemetry definition file"})}),"\n",(0,n.jsx)(t.p,{children:"This keyword is used to explicitly add the telemetry definition file to the list of command and telemetry files to process."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Usage of this keyword overrides automatic command and telemetry file discovery. If this keyword is used, you must also use the COMMAND keyword to specify the command files to process."})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Filename"}),(0,n.jsx)(t.td,{children:'Name of a telemetry definition file in the target\'s cmd_tlm directory, e.g. "tlm.txt".'}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"COMMANDS inst_cmds_v2.txt\nTELEMETRY inst_tlm_v2.txt\n"})}),"\n",(0,n.jsx)(t.h2,{id:"cmd_unique_id_mode",children:"CMD_UNIQUE_ID_MODE"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("div",{class:"right",children:"(Since 4.4.0)"}),(0,n.jsx)(t.strong,{children:"Command packet identifiers don't all share the same bit offset, size, and type"})]}),"\n",(0,n.jsx)(t.p,{children:"Ideally all commands for a target are identified using the exact same bit offset, size, and type field in each command. If ANY command identifiers differ then this flag must be set to force a brute force identification method."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Using this mode significantly slows packet identification"})}),"\n",(0,n.jsx)(t.h2,{id:"tlm_unique_id_mode",children:"TLM_UNIQUE_ID_MODE"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("div",{class:"right",children:"(Since 4.4.0)"}),(0,n.jsx)(t.strong,{children:"Telemetry packets identifiers don't all share the same bit offset, size, and type"})]}),"\n",(0,n.jsx)(t.p,{children:"Ideally all telemetry for a target are identified using the exact same bit offset, size, and type field in each packet. If ANY telemetry identifiers differ then this flag must be set to force a brute force identification method."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Using this mode significantly slows packet identification"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var n=i(6540);const r={},s=n.createContext(r);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);