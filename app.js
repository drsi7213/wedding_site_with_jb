(function(){
var P=[["index.html","본식 일정"],["wedding-checklist.html","본식 체크"],["shoot-schedule.html","촬영 일정"],["checklist.html","촬영 체크"],["items.html","촬영 준비물"],["concept.html","레퍼런스"],["shoot-plan.html","시안"]];
var cur=document.body.dataset.page,n=document.createElement("nav");
P.forEach(function(p){var a=document.createElement("a");a.href=p[0];a.textContent=p[1];if(p[0]===cur)a.className="on";n.appendChild(a)});
document.body.insertBefore(n,document.body.firstChild);
document.querySelectorAll("input[data-k]").forEach(function(c){
var k="wd:"+c.dataset.k;
try{
var saved=localStorage.getItem(k),version=c.dataset.update;
if(version&&localStorage.getItem(k+":update")!==version){
localStorage.setItem(k,c.checked?"1":"0");localStorage.setItem(k+":update",version);
}else if(saved!==null){c.checked=saved==="1"}
}catch(e){}
c.addEventListener("change",function(){try{localStorage.setItem(k,c.checked?"1":"0")}catch(e){}});
});
function broken(img){var s=img.closest(".shot");if(s)s.classList.add("is-empty")}
document.addEventListener("error",function(e){var t=e.target;if(t&&t.tagName==="IMG")broken(t)},true);
document.querySelectorAll(".shot img").forEach(function(img){if(img.complete&&img.naturalWidth===0&&img.getAttribute("loading")!=="lazy")broken(img)});
})();
