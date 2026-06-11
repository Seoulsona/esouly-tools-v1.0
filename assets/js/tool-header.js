// Inject language selector into tool pages
(function(){
    const headerRight = document.querySelector('.header-right');
    if(!headerRight) return;

    // Check if lang selector already exists
    if(document.getElementById('langSelector')) return;

    const langHTML = `
    <div class="lang-selector" id="langSelector" style="margin-right:8px">
        <button class="lang-btn" onclick="toggleLangMenu()">
            <span id="currentFlag">🇬🇧</span>
            <span id="currentLang">EN</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="lang-menu" id="langMenu">
            <div class="lang-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" placeholder="Search..." id="langSearch" oninput="filterLangs(this.value)">
            </div>
            <div class="lang-list" id="langList">
                <div class="lang-item" data-lang="en" onclick="setLang('en','🇬🇧','EN')"><span>🇬🇧</span> English</div>
                <div class="lang-item" data-lang="id" onclick="setLang('id','🇮🇩','ID')"><span>🇮🇩</span> Indonesia</div>
                <div class="lang-item" data-lang="ko" onclick="setLang('ko','🇰🇷','KO')"><span>🇰🇷</span> 한국어</div>
                <div class="lang-item" data-lang="ja" onclick="setLang('ja','🇯🇵','JA')"><span>🇯🇵</span> 日本語</div>
                <div class="lang-item" data-lang="zh" onclick="setLang('zh','🇨🇳','ZH')"><span>🇨🇳</span> 中文</div>
                <div class="lang-item" data-lang="es" onclick="setLang('es','🇪🇸','ES')"><span>🇪🇸</span> Español</div>
            </div>
        </div>
    </div>`;

    headerRight.insertAdjacentHTML('afterbegin', langHTML);

    // Close on outside click
    document.addEventListener('click', e => {
        const sel = document.getElementById('langSelector');
        if(sel && !sel.contains(e.target)){
            const menu = document.getElementById('langMenu');
            if(menu) menu.classList.remove('open');
        }
    });
})();
