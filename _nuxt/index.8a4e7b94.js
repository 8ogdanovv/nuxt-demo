import{a as l,o as a,b as n,e,t as r,w as i,v as d}from"./entry.387e0076.js";const c=()=>l("color-mode").value;const p={class:"body"},_={class:"select-wrapper"},u=e("option",{value:"system"},"System",-1),v=e("option",{value:"light"},"Light",-1),m=e("option",{value:"dark"},"Dark",-1),h=e("option",{value:"sepia"},"Sepia",-1),M=[u,v,m,h],y={__name:"index",setup(f){return c(),(o,t)=>(a(),n("div",p,[e("h1",null,"Color mode: "+r(o.$colorMode.value),1),e("div",_,[i(e("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.$colorMode.preference=s),class:"select"},M,512),[[d,o.$colorMode.preference]]),e("button",{class:"button",onClick:t[1]||(t[1]=s=>o.$colorMode.preference=["system","light","dark","sepia"][Math.floor(Math.random()*4)])},"Toggle")])]))}};export{y as default};
