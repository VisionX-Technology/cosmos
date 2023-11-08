"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[6001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={title:"COSMOS and NASA cFS"},r=void 0,l={unversionedId:"guides/cfs",id:"guides/cfs",title:"COSMOS and NASA cFS",description:"Working configuration",source:"@site/docs/guides/cfs.md",sourceDirName:"guides",slug:"/guides/cfs",permalink:"/docs/guides/cfs",draft:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/guides/cfs.md",tags:[],version:"current",frontMatter:{title:"COSMOS and NASA cFS"},sidebar:"defaultSidebar",previous:{title:"Bridges",permalink:"/docs/guides/bridges"},next:{title:"Custom Widgets",permalink:"/docs/guides/custom-widgets"}},s={},c=[{value:"Working configuration",id:"working-configuration",level:2},{value:"Setting up COSMOS",id:"setting-up-cosmos",level:2},{value:"Configuring COSMOS",id:"configuring-cosmos",level:3},{value:"Setting up cFS",id:"setting-up-cfs",level:2},{value:"Clone cFS",id:"clone-cfs",level:3},{value:"Create Dockerfile in cFS dir",id:"create-dockerfile-in-cfs-dir",level:3},{value:"Build and run cFS",id:"build-and-run-cfs",level:3},{value:"Creating a COSMOS plugin for TM/TC interface with cFS",id:"creating-a-cosmos-plugin-for-tmtc-interface-with-cfs",level:2},{value:"Creating TM/TC definitions",id:"creating-tmtc-definitions",level:2},{value:"Uploading the plugin",id:"uploading-the-plugin",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"working-configuration"},"Working configuration"),(0,i.kt)("p",null,"This tutorial has been tested using the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"COSMOS v5 release ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenC3/cosmos/releases/tag/v5.0.6"},"5.0.6")),(0,i.kt)("li",{parentName:"ul"},"cFS master-branch commit: 561b128 (June 1, 2022)"),(0,i.kt)("li",{parentName:"ul"},"Docker Desktop 4.9.0 on Windows")),(0,i.kt)("p",null,"Replace all ",(0,i.kt)("inlineCode",{parentName:"p"},"<xxxxxx>")," with your matching paths and names. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"<USERNAME>"),"."),(0,i.kt)("h2",{id:"setting-up-cosmos"},"Setting up COSMOS"),(0,i.kt)("p",null,"Install COSMOS according to the official ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/installation"},"installation")," instructions."),(0,i.kt)("h3",{id:"configuring-cosmos"},"Configuring COSMOS"),(0,i.kt)("p",null,"Change the Docker configuration for the interoperability with NASA cFS. For\nsubscribing to the telemetry, you have to append a port binding in the file\n",(0,i.kt)("inlineCode",{parentName:"p"},"compose.yaml")," under the section ",(0,i.kt)("inlineCode",{parentName:"p"},"openc3-operator"),". The port number has to\nmatch with the port number cFS is sending the telemetry on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'openc3-operator:\n  ports:\n    - "1235:1235/udp"\n')),(0,i.kt)("p",null,"Run COSMOS, the first run takes a while (~15 min)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openc3.sh start\n")),(0,i.kt)("p",null,"When started, connect with a browser to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:2900"},"http://localhost:2900"),"."),(0,i.kt)("p",null,"For shutting down COSMOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openc3.sh stop\n")),(0,i.kt)("h2",{id:"setting-up-cfs"},"Setting up cFS"),(0,i.kt)("p",null,"To run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nasa/cFS"},"NASA cFS")," as a Docker container do the following:"),(0,i.kt)("h3",{id:"clone-cfs"},"Clone cFS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recurse-submodules https://github.com/nasa/cFS.git\n")),(0,i.kt)("h3",{id:"create-dockerfile-in-cfs-dir"},"Create Dockerfile in cFS dir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker"},'FROM ubuntu:22.10 AS builder\n\nARG DEBIAN_FRONTEND=noninteractive\nARG SIMULATION=native\nENV SIMULATION=${SIMULATION}\nARG BUILDTYPE=debug\nENV BUILDTYPE=${BUILDTYPE}\nARG OMIT_DEPRECATED=true\nENV OMIT_DEPRECATED=${OMIT_DEPRECATED}\n\nRUN \\\n  apt-get update && \\\n  apt-get -y upgrade && \\\n  apt-get install -y build-essential git cmake && \\\n  rm -rf /var/lib/apt/lists/*\n\nWORKDIR /cFS\nCOPY . .\n\nRUN git submodule init \\\n  && git submodule update \\\n  && cp cfe/cmake/Makefile.sample Makefile \\\n  && cp -r cfe/cmake/sample_defs .\n\nRUN make prep\nRUN make\nRUN make install\n\nFROM ubuntu:22.10\nCOPY --from=builder /cFS/build /cFS/build\nWORKDIR /cFS/build/exe/cpu1\nENTRYPOINT [ "./core-cpu1" ]\n')),(0,i.kt)("h3",{id:"build-and-run-cfs"},"Build and run cFS"),(0,i.kt)("p",null,"Note we're connecting to the COSMOS network (",(0,i.kt)("inlineCode",{parentName:"p"},"docker network ls"),") and exposing the cFS ports."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t cfs .\ndocker run --cap-add CAP_SYS_RESOURCE --net=openc3-cosmos-network --name cfs -p1234:1234 -p1235:1235 cfs\n")),(0,i.kt)("h2",{id:"creating-a-cosmos-plugin-for-tmtc-interface-with-cfs"},"Creating a COSMOS plugin for TM/TC interface with cFS"),(0,i.kt)("p",null,"The detailed instructions how to create a plugin, can be found\n",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/gettingstarted"},"here"),', in the chapter "Interfacing with Your Hardware".'),(0,i.kt)("p",null,"Create a new plugin with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"CFS"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"CFS")," is the name of the plugin and\nmust be in capital letters according to the COSMOS documentation. This command\nshould create the plugin structure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# cd .. to the location of the cfs dir\n$PATH_TO_OPENC3/openc3.sh cli generate plugin CFS\n")),(0,i.kt)("p",null,"If you're on Linux, change the rights of this newly created plugin, because the COSMOS script\ncreates the plugin to be owned by the root user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -R <USERNAME>:<USERGROUP> openc3-cfs\n")),(0,i.kt)("p",null,"In this newly created plugin, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.txt")," file, so that the\ncommunication happens over UDP. ",(0,i.kt)("inlineCode",{parentName:"p"},"port_tm")," is the port number on which cFS\nsends the telemetry messages. ",(0,i.kt)("inlineCode",{parentName:"p"},"port_tc")," indicates the port on which cFS listens to the\ntelecommands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"VARIABLE ip 127.0.0.1\nVARIABLE port_tm 1235\nVARIABLE port_tc 1234\nVARIABLE cfs_target_name CFS\n\nTARGET CFS <%= cfs_target_name %>\n# hostname   write_dest_port   read_port   write_src_port   interface_address   ttl   write_timeout   read_timeout   bind_address\nINTERFACE <%= cfs_target_name %>_INT udp_interface.rb <%= ip %> <%= port_tc %> <%= port_tm %> nil nil 128 nil nil\n  MAP_TARGET <%= cfs_target_name %>\n")),(0,i.kt)("p",null,"Note that the two arguments to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TARGET")," parameter are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the physical target name that should match the name of the plugin, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"CFS"),".\nThis name must match the folder name in the ",(0,i.kt)("inlineCode",{parentName:"p"},"targets")," folder. Example: for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"CFS")," plugin, the target specifications must be under\n",(0,i.kt)("inlineCode",{parentName:"p"},"openc3-cfs/targets/CFS"),". If you don't follow this\nconvention, the server will refuse to install your plugin at the following steps.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the name of your target and how it is shown in the user interface."))),(0,i.kt)("p",null,"In this example, we keep both names to be ",(0,i.kt)("inlineCode",{parentName:"p"},"CFS"),"."),(0,i.kt)("h2",{id:"creating-tmtc-definitions"},"Creating TM/TC definitions"),(0,i.kt)("p",null,"Change to the target folder and remove the existing files and create own files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd openc3-cfs/targets/CFS/cmd_tlm\nrm *\ntouch cfs_cmds.txt\ntouch cfs_tlm.txt\ntouch to_lab_cmds.txt\n")),(0,i.kt)("p",null,"Open these newly created files in a text editor and fill them with following\ncontent."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"to_lab_cmds.txt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'COMMAND CFS TO_LAB_ENABLE BIG_ENDIAN "Enable telemetry"\n  #                   NAME      BITS TYPE   min VAL     max VAL    init VAL  DESCRIPTION\n  APPEND_ID_PARAMETER STREAM_ID  16  UINT   0x1880      0x1880     0x1880    "Stream ID"\n    FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER    SEQUENCE   16  UINT   0xC000      MAX_UINT16 0xC000    ""\n    FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER    PKT_LEN    16  UINT   0x0001      0xFFFF     0x0012    "length of the packet"\n  APPEND_PARAMETER    CMD_ID      8  UINT   6           6          6         ""\n  APPEND_PARAMETER    CHECKSUM    8  UINT   MIN_UINT8   MAX_UINT8  0x98      ""\n    FORMAT_STRING "0x%2X"\n  APPEND_PARAMETER    DEST_IP   144  STRING "127.0.0.1"                      "Destination IP, i.e. 172.16.9.112, pc-57"\n')),(0,i.kt)("admonition",{title:"Enabling Telemetry",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"0x1880")," is needed to enable telemetry. When the cFS receives\nthis command, it starts sending telemetry to the IP address provided via the\n",(0,i.kt)("inlineCode",{parentName:"p"},"DEST_IP")," field.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cfs_cmds.txt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'COMMAND CFS NOOP BIG_ENDIAN "NOOP Command"\n  # cFS primary header\n  APPEND_ID_PARAMETER    STREAM_ID   16   UINT   0x1882      0x1882      0x1882      "Packet Identification"\n      FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER       SEQUENCE    16   UINT   MIN_UINT16  MAX_UINT16  0xC000      ""\n      FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER       PKT_LEN     16   UINT   0x0001      0x0001      0x0001      "Packet length"\n  # cFS CMD secondary header\n  APPEND_PARAMETER       CMD_ID       8   UINT   0           0           0           ""\n  APPEND_PARAMETER       CHECKSUM     8   UINT   MIN_UINT8   MAX_UINT8   MIN_UINT8   ""\n\nCOMMAND CFS RESET BIG_ENDIAN "Reset Counters Command"\n  APPEND_ID_PARAMETER    STREAM_ID   16   UINT   0x1882      0x1882      0x1882      "Packet Identification"\n      FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER       SEQUENCE    16   UINT   MIN_UINT16  MAX_UINT16  0xC000      ""\n      FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER       PKT_LEN     16   UINT   0x0001      0x0001      0x0001      "Packet length"\n  APPEND_PARAMETER       CMD_ID       8   UINT   1           1           1           ""\n  APPEND_PARAMETER       CHECKSUM     8   UINT   MIN_UINT8   MAX_UINT8   MIN_UINT8   ""\n\nCOMMAND CFS PROCESS BIG_ENDIAN "Process Command"\n  APPEND_ID_PARAMETER    STREAM_ID   16   UINT   0x1882      0x1882      0x1882      "Packet Identification"\n      FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER       SEQUENCE    16   UINT   MIN_UINT16  MAX_UINT16  0xC000      ""\n      FORMAT_STRING "0x%04X"\n  APPEND_PARAMETER       PKT_LEN     16   UINT   0x0001      0x0001      0x0001      "Packet length"\n  APPEND_PARAMETER       CMD_ID       8   UINT   2           2           2           ""\n  APPEND_PARAMETER       CHECKSUM     8   UINT   MIN_UINT8   MAX_UINT8   MIN_UINT8   ""\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cfs_tlm.txt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'TELEMETRY CFS HK BIG_ENDIAN "housekeeping telemetry"\n  #                NAME       BITS  TYPE    ID      DESCRIPTION\n  APPEND_ID_ITEM   STREAM_ID   16   UINT    0x0883  "Stream ID"\n    FORMAT_STRING "0x%04X"\n  APPEND_ITEM      SEQUENCE    16   UINT            "Packet Sequence"\n    FORMAT_STRING "0x%04X"\n  APPEND_ITEM      PKT_LEN     16   UINT            "Length of the packet"\n  # telemetry secondary header\n  APPEND_ITEM      SECONDS     32   UINT            ""\n        UNITS Seconds sec\n  APPEND_ITEM      SUBSECS     16   UINT            ""\n        UNITS Milliseconds ms\n  # some bytes not known for what\n  APPEND_ITEM      SPARE2ALIGN 32   UINT            "Spares"\n  # payload\n  APPEND_ITEM      CMD_ERRS     8   UINT            "Command Error Counter"\n  APPEND_ITEM      CMD_CNT      8   UINT            "Command Counter"\n  # spare / alignment\n  APPEND_ITEM      SPARE       16   UINT            "Spares"\n')),(0,i.kt)("p",null,"Build the plugin from the base of your plugin folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# cd openc3-cfs\n$PATH_TO_OPENC3/openc3.sh cli rake build VERSION=1.0.0\n")),(0,i.kt)("admonition",{title:"Plugin versioning",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Do not forget to change the version number with every build if you want to\nbetter distinguish between the versions of the plugin. When the version is\nseen in the plugin's .gem file name, it is easier to visualize the existing\nversions and the newly uploaded versions.")),(0,i.kt)("admonition",{title:"Plugin parameters",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Multiple parameters are available for the plugin configuration. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/plugins"},"plugin")," page.")),(0,i.kt)("h2",{id:"uploading-the-plugin"},"Uploading the plugin"),(0,i.kt)("p",null,"After the plugin has been built, you can import the plugin in the admin area of\nthe page."),(0,i.kt)("p",null,"Connect with a browser to\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:2900/tools/admin"},"http://localhost:2900/tools/admin"),"."),(0,i.kt)("p",null,"Click on the clip icon and navigate to where your plugin is stored and select\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"openc3-cfs-1.0.0.xxx.gem")," file. Right of the selection line click on ",(0,i.kt)("inlineCode",{parentName:"p"},"UPLOAD"),"."),(0,i.kt)("p",null,"Determine the IP address the cFS container and COSMOS operator container are running at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker network ls\nNETWORK ID     NAME             DRIVER    SCOPE\nd842f813f1c7   openc3-cosmos-network   bridge    local\n\ndocker network inspect openc3-cosmos-network\n[\n    {\n        "Name": "openc3-cosmos-network",\n        ...\n        "Containers": {\n            "03cb6bf1b27c631fad1366e9342aeaa5b80f458a437195e4a95e674bb5f5983d": {\n                "Name": "cfs",\n                "IPv4Address": "172.20.0.9/16",\n            },\n            "ceb9ea99b00849fd8867dcd1646838fef3471f7d64b69014703dbedbcc8147fc": {\n                "Name": "openc3_openc3-operator_1",\n                "IPv4Address": "172.20.0.8/16",\n            }\n        }\n        ...\n    }\n]\n')),(0,i.kt)("p",null,"When using this plugin, make sure to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," variable during uploading\nto match where cFS is running. In the example above you would set it to 172.20.0.9.\n",(0,i.kt)("inlineCode",{parentName:"p"},"port_tm")," is the port number on which cFS is sending the telemetry messages.\n",(0,i.kt)("inlineCode",{parentName:"p"},"port_tc")," indicates the port on cFS is listening for telecommands."),(0,i.kt)("p",null,"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"cfs_target_name")," you can change the target name of this plugin. This\nstep is optional as long as you are fine with your plugin showing up as ",(0,i.kt)("inlineCode",{parentName:"p"},"CFS"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Variable Settings",src:n(2553).Z,width:"392",height:"500"})),(0,i.kt)("admonition",{title:"Port subscription",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The last uploaded plugin on COSMOS will subscribe to TM on port 1235.\nOther plugins will not receive any TM anymore.")),(0,i.kt)("admonition",{title:"Typo errors",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Presence of typos in one of the plugin files can cause problems when uploading and installing\nthe plugin's .gem file. Make sure your configuration is typo-free.")),(0,i.kt)("p",null,"In the example above, the operator image is running at 172.20.0.8. To enable telemetry, go to the browser and connect to\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:2900/tools/cmdsender/CFS/TO_LAB_ENABLE"},"http://localhost:2900/tools/cmdsender/CFS/TO_LAB_ENABLE"),". Change the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEST_IP")," to the IP address of the operator image (172.20.0.8) and send the command."),(0,i.kt)("p",null,"Under ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:2900/tools/cmdtlmserver/tlm-packets"},"http://localhost:2900/tools/cmdtlmserver/tlm-packets"),", you should see the incoming packets. Note in the CmdTlmServer you will also see CFS_INT UNKNOWN packets because we did not define the full cFS packet set. That exercise is left to the reader."))}d.isMDXComponent=!0},2553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugin-variables-5bc00c744182c9a9591e84cb3bbb1c4deb53ff22e05f62ce1b807c26bed782e5.png"}}]);