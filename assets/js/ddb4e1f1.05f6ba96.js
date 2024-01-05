"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[185],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={sidebar_position:1},i="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"Hackathon!",source:"@site/docs/01-overview.md",sourceDirName:".",slug:"/overview",permalink:"/overview",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Background",permalink:"/background"}},l={},p=[{value:"Hackathon!",id:"hackathon",level:2},{value:"Impact Framework",id:"impact-framework",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Navigating these docs",id:"navigating-these-docs",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"hackathon"},"Hackathon!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5846).Z,width:"1128",height:"191"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"From March 18 to  April 8, 2024, participants will compete to showcase their best application of IF in measuring the environmental impacts of software. "),(0,o.kt)("p",null,"Carbon Hack is a dynamic competition that combines healthy rivalry with collaborative innovation. Hackers will push the limits of the framework, uncover potential weaknesses, and create innovations to enhance the tool."),(0,o.kt)("p",null,"CarbonHack is open to all, including software practitioners and those with a passion for Green Software.\nFind out more about CarbonHack 2024 on the ",(0,o.kt)("a",{parentName:"p",href:"https://grnsft.org/hack/github"},"CarbonHack website")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Registration opens 22nd January!")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"impact-framework"},"Impact Framework"),(0,o.kt)("p",null,"Impact Framework (IF) aims to make the environmental impacts of software easier to calculate ",(0,o.kt)("strong",{parentName:"p"},"and")," share."),(0,o.kt)("p",null,"IF allows you to calculate the environmental impacts, such as carbon, of your software applications without writing any code. All you have to do is write a simple ",(0,o.kt)("strong",{parentName:"p"},"manifest file"),", known as an ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," and IF handles the rest."),(0,o.kt)("p",null,"The project is entirely open source and composability is a core design principle - we want you to be able to create your own models and plug them in to our framework, or pick from a broad universe of open source models created by others."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"If you can't measure, you can't improve. Software has many negative environmental ",(0,o.kt)("strong",{parentName:"p"},"impacts")," which we need to optimize, carbon, water, and energy, to name just a few."),(0,o.kt)("p",null,"Unfortunately, measuring software impact metrics like carbon, water, and energy is complex and nuanced. "),(0,o.kt)("p",null,"Modern applications are composed of many smaller pieces of software (components) running on different environments, for example, private cloud, public cloud, bare-metal, virtualized, containerized, mobile, laptops, desktops, embedded, and IoT. Many components that make up a typical software application are run on something other than resources you own or control, which makes including the impact of managed services in your measurement especially hard.  "),(0,o.kt)("p",null,"The impacts of software components also vary over time, so as well as understanding ",(0,o.kt)("strong",{parentName:"p"},"which")," components contribute most to the overall impacts, there is also a question of ",(0,o.kt)("strong",{parentName:"p"},"when")," they contribute the most."),(0,o.kt)("p",null,"Only through a granular analysis of the impacts of your software system can investments in reducing its impact be prioritized and verified. Measurement is the first and most crucial step in greening a software system, and the first step in that process with the ",(0,o.kt)("a",{parentName:"p",href:"/specification/impact-framework"},"Impact Framework")," is to create a ",(0,o.kt)("a",{parentName:"p",href:"/specification/graph"},"Graph"),"."),(0,o.kt)("h2",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"IF source code")," can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if"},"IF Github repository"),". The code there covers the framework, which includes all the infrastructure for reading and writing input and output yamls, invoking models, running the command line tool and associated helper functions. However, it does not include the actual models themselves. Part of the IF design philosophy is that all models should be plugins, so that the IF is as composable and configurable as possible. Therefore, to use IF, you have to either create your own models or find some prebuilt ones and install them yourself. This also implies that you take responsibility for the models you choose to install."),(0,o.kt)("p",null,"We do provide a ",(0,o.kt)("strong",{parentName:"p"},"standard library of models")," built and maintained by the IF core team. These can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-models"},(0,o.kt)("inlineCode",{parentName:"a"},"if-models")," Github repository"),". You can install these into ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install https://github.com/Green-Software-Foundation/if-models")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," project directory."),(0,o.kt)("p",null,"There is also a second repository for ",(0,o.kt)("strong",{parentName:"p"},"models we expect community members to maintain"),". These can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-unofficial-models"},(0,o.kt)("inlineCode",{parentName:"a"},"if-unofficial-models")," Github repository"),". You can install these into ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install https://github.com/Green-Software-Foundation/if-unofficial-models")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," project directory."),(0,o.kt)("p",null,"Finally, the ",(0,o.kt)("strong",{parentName:"p"},"source code for this documentation")," website is available at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-docs"},(0,o.kt)("inlineCode",{parentName:"a"},"if-docs")," Github repository"),"."),(0,o.kt)("h2",{id:"navigating-these-docs"},"Navigating these docs"),(0,o.kt)("p",null,"The lefthand sidebar contains links to all the information you need to understand Impact Framework. "),(0,o.kt)("p",null,"You can find specification pages for individual components of the framework in ",(0,o.kt)("a",{parentName:"p",href:"./specification/"},(0,o.kt)("inlineCode",{parentName:"a"},"specification")),". "),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"./tutorials"},(0,o.kt)("inlineCode",{parentName:"a"},"tutorials"))," you will find walkthrough guides and tutorials explaining how to achieve specific tasks, such as writing an ",(0,o.kt)("inlineCode",{parentName:"p"},"impl"),", running the model and creating new plugins. "),(0,o.kt)("p",null,"You will find documentation for the individual built-in model implementations in ",(0,o.kt)("a",{parentName:"p",href:"./models/"},(0,o.kt)("inlineCode",{parentName:"a"},"models")),"."))}u.isMDXComponent=!0},5846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hack-banner-8a9d7874b60972c27f9bb38f4170f34f.png"}}]);