(function(){
var area=document.getElementById("stay-area"),budget=document.getElementById("stay-budget"),cards=document.querySelectorAll(".stay-card");
function filter(){var count=0;cards.forEach(function(c){var show=(area.value==="all"||c.dataset.area===area.value)&&(budget.value==="all"||Number(c.dataset.price)<Number(budget.value));c.hidden=!show;if(show)count++});document.getElementById("stay-count").textContent=count+"개 후보 · 공개 표시가 조건을 함께 확인해요"}
Array.from(cards).sort(function(a,b){return Number(a.dataset.price)-Number(b.dataset.price)}).forEach(function(c){c.parentNode.appendChild(c)});
area.addEventListener("change",filter);budget.addEventListener("change",filter);filter();
function total(){function v(id){return Math.max(0,Number(document.getElementById("calc-"+id).value)||0)}var nights=Math.floor(v("night")),tax=document.getElementById("calc-tax").checked?nights*6*v("eur"):0,sum=nights*v("room")+v("air")+v("food")+v("other")+tax,left=15000000-sum;document.getElementById("calc-result").textContent="예상 합계 "+Math.round(sum).toLocaleString("ko-KR")+"원 · 예산 "+(left>=0?"잔액 ":"초과 ")+Math.round(Math.abs(left)).toLocaleString("ko-KR")+"원"}
document.querySelectorAll('[id^="calc-"]').forEach(function(el){if(el.tagName==="INPUT")el.addEventListener("input",total)});total();
})();
