(()=>{"use strict";const e=e=>1.8*e+32,t=e=>e+273.15,n=e=>5*(e-32)/9,u=e=>e-273.15,a=document.getElementById("celsiusInput"),l=document.getElementById("fahrenheitInput"),v=document.getElementById("kelvinInput"),d=document.getElementById("kilometerInput"),r=document.getElementById("mileInput");a.addEventListener("input",(n=>{l.value=e(n.target.value),v.value=t(n.target.value)})),l.addEventListener("input",(e=>{var u;a.value=n(e.target.value),v.value=(u=e.target.value,t(n(u)))})),v.addEventListener("input",(t=>{var n;a.value=u(t.target.value),l.value=(n=t.target.value,e(u(n)))})),d.addEventListener("input",(e=>{r.value=.621371*e.target.value})),r.addEventListener("input",(e=>{d.value=1.60934*e.target.value}))})();