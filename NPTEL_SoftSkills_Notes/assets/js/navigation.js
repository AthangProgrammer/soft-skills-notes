(function(){
var b=document.getElementById('toggle-ans');
if(b){b.addEventListener('click',function(){document.body.classList.toggle('hide-ans');b.textContent=document.body.classList.contains('hide-ans')?'Show answers':'Hide answers';});}
var here=location.pathname.split('/').pop();
document.querySelectorAll('.sidebar a').forEach(function(a){if(a.getAttribute('href').split('/').pop()===here){a.classList.add('cur');var d=a.closest('details');if(d)d.open=true;}});
})();
