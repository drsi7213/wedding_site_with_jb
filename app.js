(function(){
var P=[["index.html","일정"],["checklist.html","체크리스트"],["items.html","준비물"],["concept.html","시안"]];
var cur=document.body.dataset.page,n=document.createElement("nav");
P.forEach(function(p){var a=document.createElement("a");a.href=p[0];a.textContent=p[1];if(p[0]===cur)a.className="on";n.appendChild(a)});
document.body.insertBefore(n,document.body.firstChild);
document.querySelectorAll("input[data-k]").forEach(function(c){
var k="wd:"+c.dataset.k;
try{c.checked=localStorage.getItem(k)==="1"}catch(e){}
c.addEventListener("change",function(){try{localStorage.setItem(k,c.checked?"1":"0")}catch(e){}});
});
})();
