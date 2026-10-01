const $=id=>document.getElementById(id);
function fmt(n){if(!Number.isFinite(n))return"—";return Number(n.toFixed(6)).toLocaleString(undefined,{maximumFractionDigits:6})}
function val(id){return parseFloat($(id).value)}
function calcOf(){let p=val("p1"),n=val("n1");$("r1").textContent=fmt(p/100*n)}
function calcWhatPct(){let x=val("x2"),y=val("y2");$("r2").textContent=y===0?"Undefined":fmt(x/y*100)+"%"}
function calcChange(){let o=val("old3"),n=val("new3");if(o===0){$("r3").textContent="Undefined from zero";return}let p=(n-o)/Math.abs(o)*100;$("r3").textContent=p===0?"0% change":fmt(Math.abs(p))+"% "+(p>0?"increase":"decrease")}
function calcOriginal(){let f=val("final4"),p=val("pct4"),t=$("type4").value,den=t==="increase"?1+p/100:1-p/100;$("r4").textContent=den===0?"Undefined":fmt(f/den)}
$("year").textContent=new Date().getFullYear();calcOf();calcWhatPct();calcChange();calcOriginal();