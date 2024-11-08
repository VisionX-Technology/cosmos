"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[2905],{1243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var n=a(4848),s=a(8453);const d={title:"Command and Telemetry Server",description:"Status about interfaces, targets and log messages",sidebar_custom_props:{myEmoji:"\ud83d\udee0\ufe0f"}},i=void 0,r={id:"tools/cmd-tlm-server",title:"Command and Telemetry Server",description:"Status about interfaces, targets and log messages",source:"@site/docs/tools/cmd-tlm-server.md",sourceDirName:"tools",slug:"/tools/cmd-tlm-server",permalink:"/docs/tools/cmd-tlm-server",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/cmd-tlm-server.md",tags:[],version:"current",frontMatter:{title:"Command and Telemetry Server",description:"Status about interfaces, targets and log messages",sidebar_custom_props:{myEmoji:"\ud83d\udee0\ufe0f"}},sidebar:"defaultSidebar",previous:{title:"Command Sender",permalink:"/docs/tools/cmd-sender"},next:{title:"Command History (Enterprise)",permalink:"/docs/tools/command_history"}},A={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Command and Telemetry Server Menus",id:"command-and-telemetry-server-menus",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"Interfaces Tab",id:"interfaces-tab",level:2},{value:"Targets Tab",id:"targets-tab",level:2},{value:"Command Packets Tab",id:"command-packets-tab",level:2},{value:"Telemetry Packets Tab",id:"telemetry-packets-tab",level:2},{value:"Status Tab",id:"status-tab",level:2},{value:"Log Messages",id:"log-messages",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["The Command and Telemetry Server application provides status about the ",(0,n.jsx)(t.a,{href:"/docs/configuration/interfaces",children:"interfaces"})," and targets instantiated in your COSMOS installation. Interfaces can be connected or disconnected and raw byte counts are returned. The application also provides quick shortcuts to view\nboth raw and formatted command and telemetry packets as they go through the COSMOS system. At the bottom of the Command and Telemetry Server is the Log Messages showing server messages."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cmd Tlm Server",src:a(2326).A+"",width:"2788",height:"2052"})}),"\n",(0,n.jsx)(t.h2,{id:"command-and-telemetry-server-menus",children:"Command and Telemetry Server Menus"}),"\n",(0,n.jsx)(t.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,n.jsx)(t.p,{children:"The Command and Telemetry Server has one menu under File -> Options:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"File Menu",src:a(9810).A+"",width:"302",height:"114"})}),"\n",(0,n.jsx)(t.p,{children:"This dialog changes the refresh rate of the Command and Telemetry Server to reduce load on both your browser window and the backend server. Note that this changes the refresh rate of the various tabs in the application. The Log Messages will continue to update as messages are generated."}),"\n",(0,n.jsx)(t.h2,{id:"interfaces-tab",children:"Interfaces Tab"}),"\n",(0,n.jsx)(t.p,{children:"The Interfaces tab displays all the interfaces defined by your COSMOS installation. You can Connect or Disconnect interfaces and view raw byte and packet counts."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Interfaces",src:a(952).A+"",width:"1259",height:"431"})}),"\n",(0,n.jsx)(t.h2,{id:"targets-tab",children:"Targets Tab"}),"\n",(0,n.jsx)(t.p,{children:"The Targets tab displays all the targets and their mapped interfaces along with the Command Authority status (Enterprise Only)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Targets",src:a(2864).A+"",width:"2212",height:"1058"})}),"\n",(0,n.jsx)(t.p,{children:"Command Authority is enabled in the Admin Console and is enabled scope wide. Once Command Authority is enabled, individual users can give and take Command Authority which enables exclusive command and script access to that target. Without Command Authority, users can not send a command or start a script under that target. Note, commands or scripts scheduled with Calendar or Autonomic are not affected by Command Authority."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Command Authority",src:a(9600).A+"",width:"2788",height:"1282"})}),"\n",(0,n.jsx)(t.p,{children:"The other option shown in the Scope List is the Critical Command Mode. Critical commanding requires a different user to approve each command. It can either be enabled on just HAZARDOUS and RESTRICTED commands or on all manual commanding."}),"\n",(0,n.jsx)(t.h2,{id:"command-packets-tab",children:"Command Packets Tab"}),"\n",(0,n.jsx)(t.p,{children:"The Command Packets tab displays all the available commands. The table can be sorted by clicking on the column headers. The table is paginated to support thousands of commands. The search bar searches all pages for a command."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Commands",src:a(1964).A+"",width:"1259",height:"718"})}),"\n",(0,n.jsx)(t.p,{children:"Clicking on View Raw opens a dialog displaying the raw bytes for that command."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Raw Command",src:a(7437).A+"",width:"782",height:"301"})}),"\n",(0,n.jsxs)(t.p,{children:["Clicking View in Command Sender opens up a new ",(0,n.jsx)(t.a,{href:"/docs/tools/cmd-sender",children:"Command Sender"})," window with the specified command."]}),"\n",(0,n.jsx)(t.h2,{id:"telemetry-packets-tab",children:"Telemetry Packets Tab"}),"\n",(0,n.jsx)(t.p,{children:"The Telemetry Packets tab displays all the available telemetry. The table can be sorted by clicking on the column headers. The table is paginated to support thousands of telemetry packets. The search bar searches all pages for a telemetry packet."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Telemetry",src:a(4297).A+"",width:"1259",height:"718"})}),"\n",(0,n.jsx)(t.p,{children:"Clicking on View Raw opens a dialog displaying the raw bytes for that telemetry packet."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Raw Telemetry",src:a(7504).A+"",width:"782",height:"406"})}),"\n",(0,n.jsxs)(t.p,{children:["Clicking View in Packet Viewer opens up a new ",(0,n.jsx)(t.a,{href:"/docs/tools/packet-viewer",children:"Packet Viewer"})," window with the specified telemetry packet."]}),"\n",(0,n.jsx)(t.h2,{id:"status-tab",children:"Status Tab"}),"\n",(0,n.jsx)(t.p,{children:"The Status tab displays COSMOS system metrics."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Status",src:a(5782).A+"",width:"1259",height:"718"})}),"\n",(0,n.jsx)(t.h2,{id:"log-messages",children:"Log Messages"}),"\n",(0,n.jsx)(t.p,{children:"The Log Messages table sits below all the tabs in the Command and Telemetry Server application. It displays server messages such as limits events (new RED, YELLOW, GREEN values), logging events (new files) and interface events (connecting and disconnecting). It can be filtered by severity or by entering values in the Search box. It can also be paused and resumed to inspect an individual message."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Log Messages",src:a(1145).A+"",width:"2788",height:"1172"})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},9600:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cmd_authority-34cde391ad5109ad53bca40b55cb74d59e8cd1d0e70eedb3e5bf4d258c324787.png"},1964:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cmd_packets-160c7b28230a14f05433d063cdccc63958bb5d90f4e6b80492cd9568b0761a75.png"},7437:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cmd_raw-28307ac400b66050ada7ecc8b7701deffe8fb7f01129b63ec35a54857cb886b7.png"},2326:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cmd_tlm_server-dbc02e99c1c837efabeba52831d1d2a3445904fb06b758aaa747496725423fe5.png"},9810:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/png;base64,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"},952:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/interfaces-0fe2a4a02d9b8a16bbf178f0d4ee393a79ca606e8cf27ff7d8508bd2cb9b0643.png"},1145:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/log_messages-6da2901ac63928daa3dcaf39a78ca9e455482c48d4ba917ee704f697e5210818.png"},5782:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/status-8ba274306305afaa5642162904c234b69086870b56e1048b1fdffa481aa0e96b.png"},2864:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/targets-6b17daf175185b13bea9eddafd4773e5f41d1ef4e953134f30bee0799c1e5c31.png"},4297:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/tlm_packets-0b02f1f3799948a8278e90f11e7d7f283d9686d3dac18c68b41d25ef49568d22.png"},7504:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/tlm_raw-cc2223b25e8fc732557856168fd7fa04e7b3459bbd163825639fb6235a8e6180.png"},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var n=a(6540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);