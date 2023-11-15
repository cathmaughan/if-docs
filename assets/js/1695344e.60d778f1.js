"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[187],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(4137));const r={},o="Getting started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"This page will provide the basic instructions for getting up and running with Impact Framework.",source:"@site/docs/04-getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/04-getting-started.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/Terminology"},next:{title:"Model Plugins",permalink:"/models"}},s={},p=[{value:"0: Set up your environment",id:"0-set-up-your-environment",level:2},{value:"1: Install Impact Framework",id:"1-install-impact-framework",level:2},{value:"2: Install some model plugins",id:"2-install-some-model-plugins",level:2},{value:"3: Create a manifest file",id:"3-create-a-manifest-file",level:2},{value:"4: Compute your manifest file",id:"4-compute-your-manifest-file",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"This page will provide the basic instructions for getting up and running with Impact Framework."),(0,i.kt)("h2",{id:"0-set-up-your-environment"},"0: Set up your environment"),(0,i.kt)("p",null,"To run Impact Framework you need ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," installed on your computer. Node v18.17.1 is currently recommended. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," to manage packages."),(0,i.kt)("p",null,"You can create a local project directory, say ",(0,i.kt)("inlineCode",{parentName:"p"},"if-project"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir if-project\n")),(0,i.kt)("p",null,"Navigate to that directory and initialize a yarn project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd if-project && yarn init\n")),(0,i.kt)("h2",{id:"1-install-impact-framework"},"1: Install Impact Framework"),(0,i.kt)("p",null,"Install the Impact Framework. This includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-engine")," command line tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @grnsft/if\n")),(0,i.kt)("h2",{id:"2-install-some-model-plugins"},"2: Install some model plugins"),(0,i.kt)("p",null,"Install some of the models you want to include in your model pipeline. The pair of commands below will install both the official and unofficial IF model packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @grnsft/if-models\nyarn add @grnsft/if-unofficial-models\n")),(0,i.kt)("h2",{id:"3-create-a-manifest-file"},"3: Create a manifest file"),(0,i.kt)("p",null,"A manifest file contains all the configuration and input data required to measure your application's enegry and carbon impacts. It should have a ",(0,i.kt)("inlineCode",{parentName:"p"},".yml")," extension. Open the file and add your data. You can see a simple example below. The example manifets file runs a pipeline of four models for a simple single-component application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: example\ndescription: a simple example manifest\ntags:\ninitialize:\n  models:\n    - name: teads-curve\n      model: TeadsCurveModel\n      path: "@grnsft/if-unofficial-models"\n    - name: sci-e\n      model: SciEModel\n      path: "@grnsft/if-models"\n    - name: sci-m\n      path: "@grnsft/if-models"\n      model: SciMModel\n    - name: sci-o\n      model: SciOModel\n      path: "@grnsft/if-models"\n    - name: sci\n      model: SciModel\n      path: "@grnsft/if-models"\ngraph:\n  children:\n    child: # an advanced grouping node\n      pipeline:\n        - teads-curve\n        - sci-e\n        - sci-m\n        - sci-o\n        - sci\n      config:\n        teads-curve:\n          thermal-design-power: 65\n        sci-m:\n          total-embodied-emissions: 251000 # gCO2eq\n          time-reserved: 3600 # 1 hour in s\n          expected-lifespan: 126144000 # 4 years in seconds    \n          resources-reserved: 1 \n          total-resources: 1 \n        sci-o:\n          grid-carbon-intensity: 457 # gCO2/kwh\n        sci:\n          functional-unit-duration: 1 \n          functional-duration-time: \'\'\n          functional-unit: requests # factor to convert per time to per f.unit\n      inputs:\n        - timestamp: \'2023-07-06T00:00\'\n          duration: 10\n          cpu-util: 50\n          e-net: 0.000811 #kwh     \n          requests: 380\n')),(0,i.kt)("p",null,"Save the file."),(0,i.kt)("h2",{id:"4-compute-your-manifest-file"},"4: Compute your manifest file"),(0,i.kt)("p",null,"Run the pipeline by passing the path to your manifest file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-engine")," command line tool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"impact-engine --impl <path-to-your-impl>\n")),(0,i.kt)("p",null,"\ud83c\udf89",(0,i.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89! You have just used the Impact Framework to compute a software carbon intensity score!"),(0,i.kt)("p",null,"Your output data will be displayed in your console. You can also configure ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-framework")," to save yopur output data to another ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," file. To do this, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ompl")," flag and the path to save the file to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"impact-engine --impl <path-to-your-impl> --ompl <save-path>\n")),(0,i.kt)("p",null,"Your output data will look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: example\ndescription: a simple example manifest\ntags: null\ninitialize:\n  models:\n    - name: teads-curve\n      path: '@grnsft/if-unofficial-models'\n      model: TeadsCurveModel\n    - name: sci-e\n      path: '@grnsft/if-models'\n      model: SciEModel\n    - name: sci-m\n      path: '@grnsft/if-models'\n      model: SciMModel\n    - name: sci-o\n      path: '@grnsft/if-models'\n      model: SciOModel\n    - name: sci\n      path: '@grnsft/if-models'\n      model: SciModel\ngraph:\n  children:\n    child:\n      pipeline:\n        - teads-curve\n        - sci-e\n        - sci-m\n        - sci-o\n        - sci\n      config:\n        teads-curve:\n          thermal-design-power: 65\n        sci-m:\n          total-embodied-emissions: 251000\n          time-reserved: 3600\n          expected-lifespan: 126144000\n          resources-reserved: 1\n          total-resources: 1\n        sci-o:\n          grid-carbon-intensity: 457\n        sci:\n          functional-unit-duration: 1\n          functional-duration-time: ''\n          functional-unit: requests\n      inputs:\n        - timestamp: 2023-07-06T00:00\n          duration: 10\n          cpu-util: 50\n          e-net: 0.000811\n          requests: 380\n      outputs:\n        - timestamp: 2023-07-06T00:00\n          duration: 10\n          cpu-util: 50\n          e-net: 0.000811\n          requests: 380\n          thermal-design-power: 65\n          total-embodied-emissions: 251000\n          time-reserved: 3600\n          expected-lifespan: 126144000\n          resources-reserved: 1\n          total-resources: 1\n          grid-carbon-intensity: 457\n          functional-unit-duration: 1\n          functional-duration-time: ''\n          functional-unit: requests\n          energy-cpu: 0.00013541666666666666\n          energy: 0.00013541666666666666\n          embodied-carbon: 7.16324200913242\n          operational-carbon: 0.061885416666666665\n          carbon: 0.7225127425799086\n          sci: 0.001901349322578707\n\n")))}m.isMDXComponent=!0}}]);