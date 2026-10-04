const year=document.getElementById("year");year.textContent=new Date().getFullYear();
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
document.querySelectorAll(".side nav a").forEach(a=>a.addEventListener("click",()=>{document.querySelectorAll(".side nav a").forEach(x=>x.classList.remove("active"));a.classList.add("active")}));
const art=document.querySelector(".hero-art");let tx=0,ty=0,cx=0,cy=0;
art.addEventListener("pointermove",e=>{if(matchMedia("(pointer:fine)").matches){const r=art.getBoundingClientRect();ty=((e.clientX-r.left)/r.width-.5)*8;tx=-((e.clientY-r.top)/r.height-.5)*6}});
art.addEventListener("pointerleave",()=>{tx=0;ty=0});
(function loop(){cx+=(tx-cx)*.06;cy+=(ty-cy)*.06;art.style.transform=`rotateX(${cx}deg) rotateY(${cy}deg)`;requestAnimationFrame(loop)})();
document.querySelectorAll(".project").forEach(card=>{card.addEventListener("pointermove",e=>{if(!matchMedia("(pointer:fine)").matches)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*6}deg) translateY(-8px)`});card.addEventListener("pointerleave",()=>card.style.transform="")});