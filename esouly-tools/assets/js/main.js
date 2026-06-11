// Theme
function toggleTheme(){
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}
(function initTheme(){
    if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');
})();

// Search tools
function searchTools(val){
    const cards = document.querySelectorAll('.tool-card');
    const noResults = document.getElementById('noResults');
    let found = 0;
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if(text.includes(val.toLowerCase())){
            card.classList.remove('hidden');
            found++;
        } else {
            card.classList.add('hidden');
        }
    });
    if(noResults) noResults.style.display = found === 0 ? 'block' : 'none';
}

// Filter category
function filterCat(cat){
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    const cards = document.querySelectorAll('.tool-card');
    const noResults = document.getElementById('noResults');
    let found = 0;
    cards.forEach(card => {
        const cats = card.dataset.cat || '';
        if(cat === 'all' || cats.includes(cat)){
            card.classList.remove('hidden');
            found++;
        } else {
            card.classList.add('hidden');
        }
    });
    if(noResults) noResults.style.display = found === 0 ? 'block' : 'none';
}

// Lang menu
function toggleLangMenu(){
    document.getElementById('langMenu').classList.toggle('open');
}
function filterLangs(val){
    document.querySelectorAll('.lang-item').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(val.toLowerCase()) ? '' : 'none';
    });
}
function setLang(code, flag, label){
    document.getElementById('currentFlag').textContent = flag;
    document.getElementById('currentLang').textContent = label;
    document.getElementById('langMenu').classList.remove('open');
    document.querySelectorAll('.lang-item').forEach(i => i.classList.remove('active'));
    event.target.closest('.lang-item').classList.add('active');
    localStorage.setItem('lang', code);
    if(window.applyI18n) applyI18n(code);
}
document.addEventListener('click', e => {
    const sel = document.getElementById('langSelector');
    if(sel && !sel.contains(e.target)){
        document.getElementById('langMenu').classList.remove('open');
    }
});

// Copy to clipboard
function copyText(text){
    navigator.clipboard.writeText(text).then(() => showToast('Copied!'));
}
function showToast(msg){
    let t = document.getElementById('toast');
    if(!t){
        t = document.createElement('div');
        t.id = 'toast';
        t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#333;color:white;padding:8px 16px;border-radius:20px;font-size:13px;z-index:999;transition:opacity .3s';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    setTimeout(() => t.style.opacity = '0', 2000);
}

// Download file
function downloadFile(blob, filename){
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
