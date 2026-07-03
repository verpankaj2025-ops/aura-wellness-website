
const input=document.getElementById('site-search');const results=document.getElementById('search-results');
function render(items,q=''){if(!results)return;results.innerHTML=items.slice(0,30).map(i=>`<article class="result"><span class="badge">${i.type}</span><h2><a href="${i.url}">${i.title}</a></h2><p>${i.description}</p></article>`).join('')||`<p>No pages found for “${q}”. Try spa, massage, Gomti Nagar, price or membership.</p>`}
fetch('/assets/data/search-index.json').then(r=>r.json()).then(data=>{render(data.slice(0,12));input?.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();if(!q){render(data.slice(0,12));return}const hits=data.filter(i=>(i.title+' '+i.description+' '+(i.keywords||'')).toLowerCase().includes(q));render(hits,q)})});
