const translations = {
    en: {
        hero_title: "Free Online Tools",
        hero_sub: "No signup. No ads in your face. Just tools that work.",
        search_placeholder: "Search tools...",
        cat_all: "All Tools", cat_image: "🖼️ Image", cat_text: "📝 Text",
        cat_color: "🎨 Color", cat_dev: "💻 Developer", cat_file: "📄 File Viewer", cat_calc: "🔢 Calculator",
        no_results: "No tools found. Try a different search.",
        footer_contact: "Contact", footer_privacy: "Privacy Policy", footer_terms: "Terms & Conditions",
        tool_img_compress: "Image Compressor", tool_img_compress_desc: "Reduce image file size without losing quality",
        tool_img_resize: "Image Resizer", tool_img_resize_desc: "Resize images to any dimension",
        tool_word_count: "Word Counter", tool_word_count_desc: "Count words, characters, sentences and paragraphs",
        tool_json: "JSON Formatter", tool_json_desc: "Format, validate and beautify JSON",
    },
    id: {
        hero_title: "Tools Online Gratis",
        hero_sub: "Tanpa daftar. Tanpa iklan mengganggu. Langsung pakai.",
        search_placeholder: "Cari tools...",
        cat_all: "Semua Tools", cat_image: "🖼️ Gambar", cat_text: "📝 Teks",
        cat_color: "🎨 Warna", cat_dev: "💻 Developer", cat_file: "📄 File Viewer", cat_calc: "🔢 Kalkulator",
        no_results: "Tools tidak ditemukan. Coba kata kunci lain.",
        footer_contact: "Kontak", footer_privacy: "Kebijakan Privasi", footer_terms: "Syarat & Ketentuan",
        tool_img_compress: "Kompres Gambar", tool_img_compress_desc: "Perkecil ukuran file gambar tanpa kehilangan kualitas",
        tool_img_resize: "Ubah Ukuran Gambar", tool_img_resize_desc: "Ubah dimensi gambar sesuai kebutuhan",
        tool_word_count: "Penghitung Kata", tool_word_count_desc: "Hitung kata, karakter, kalimat dan paragraf",
        tool_json: "JSON Formatter", tool_json_desc: "Format, validasi dan rapikan JSON",
    },
    ko: {
        hero_title: "무료 온라인 도구",
        hero_sub: "가입 불필요. 방해 광고 없음. 바로 사용하세요.",
        search_placeholder: "도구 검색...",
        cat_all: "모든 도구", cat_image: "🖼️ 이미지", cat_text: "📝 텍스트",
        cat_color: "🎨 색상", cat_dev: "💻 개발자", cat_file: "📄 파일 뷰어", cat_calc: "🔢 계산기",
        no_results: "도구를 찾을 수 없습니다.",
        footer_contact: "연락처", footer_privacy: "개인정보 처리방침", footer_terms: "이용약관",
        tool_img_compress: "이미지 압축", tool_img_compress_desc: "품질 손실 없이 이미지 파일 크기 줄이기",
        tool_img_resize: "이미지 크기 조정", tool_img_resize_desc: "이미지를 원하는 크기로 조정",
        tool_word_count: "단어 수 세기", tool_word_count_desc: "단어, 문자, 문장, 단락 수 세기",
        tool_json: "JSON 포매터", tool_json_desc: "JSON 형식화, 검증 및 정리",
    },
    ja: {
        hero_title: "無料オンラインツール",
        hero_sub: "登録不要。邪魔な広告なし。すぐに使えます。",
        search_placeholder: "ツールを検索...",
        cat_all: "全ツール", cat_image: "🖼️ 画像", cat_text: "📝 テキスト",
        cat_color: "🎨 カラー", cat_dev: "💻 開発者", cat_file: "📄 ファイルビューア", cat_calc: "🔢 計算機",
        no_results: "ツールが見つかりません。",
        footer_contact: "お問い合わせ", footer_privacy: "プライバシーポリシー", footer_terms: "利用規約",
        tool_img_compress: "画像圧縮", tool_img_compress_desc: "品質を落とさず画像サイズを縮小",
        tool_img_resize: "画像リサイズ", tool_img_resize_desc: "画像を任意のサイズに変更",
        tool_word_count: "文字数カウント", tool_word_count_desc: "単語、文字、文、段落をカウント",
        tool_json: "JSONフォーマッター", tool_json_desc: "JSONの整形、検証、美化",
    },
    zh: {
        hero_title: "免费在线工具",
        hero_sub: "无需注册。无烦人广告。直接使用。",
        search_placeholder: "搜索工具...",
        cat_all: "全部工具", cat_image: "🖼️ 图片", cat_text: "📝 文本",
        cat_color: "🎨 颜色", cat_dev: "💻 开发者", cat_file: "📄 文件查看器", cat_calc: "🔢 计算器",
        no_results: "未找到工具，请尝试其他搜索词。",
        footer_contact: "联系我们", footer_privacy: "隐私政策", footer_terms: "条款与条件",
        tool_img_compress: "图片压缩", tool_img_compress_desc: "无损压缩图片文件大小",
        tool_img_resize: "图片调整大小", tool_img_resize_desc: "将图片调整为任意尺寸",
        tool_word_count: "字数统计", tool_word_count_desc: "统计单词、字符、句子和段落数",
        tool_json: "JSON格式化", tool_json_desc: "格式化、验证和美化JSON",
    }
};

function applyI18n(lang){
    const t = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if(t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if(t[key]) el.placeholder = t[key];
    });
}

// Auto apply saved lang
(function(){
    const lang = localStorage.getItem('lang') || 'en';
    if(lang !== 'en') {
        const flags = {id:'🇮🇩',ko:'🇰🇷',ja:'🇯🇵',zh:'🇨🇳',es:'🇪🇸',fr:'🇫🇷',de:'🇩🇪',pt:'🇧🇷',ar:'🇸🇦'};
        const labels = {id:'ID',ko:'KO',ja:'JA',zh:'ZH',es:'ES',fr:'FR',de:'DE',pt:'PT',ar:'AR'};
        const f = document.getElementById('currentFlag');
        const l = document.getElementById('currentLang');
        if(f && flags[lang]) f.textContent = flags[lang];
        if(l && labels[lang]) l.textContent = labels[lang];
        applyI18n(lang);
    }
})();
