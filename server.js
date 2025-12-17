const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일 제공 (public 폴더 내의 css, js, json 등을 접근 가능하게 함)
app.use(express.static(path.join(__dirname, 'public')));

// [핵심] 루트 접속 시 언어 감지 후 리다이렉트
app.get('/', (req, res) => {
    // 브라우저의 Accept-Language 헤더 분석
    const lang = req.acceptsLanguages('ko', 'en', 'zh', 'ja', 'es', 'fr', 'du');

    console.log(`접속 감지! 사용자 언어: ${lang}`);

    if (lang === 'ko') { res.redirect('/ko'); } // 한국어면

    else if (lang === 'zh') { res.redirect('/zh'); } // 중국어는
    
    else if (lang === 'ja') { res.redirect('/ja'); } // 일본어는
    
    else if (lang === 'es') { res.redirect('/es'); } // 스페인어는

    else if (lang === 'fr') { res.redirect('/fr'); } // 프랑스어는

    else if (lang === 'de') { res.redirect('/de'); } // 독일어는

    else if (lang === 'en') { res.redirect('/en'); } // 영어는

    else { res.redirect('/en'); } // 그 외 언어는 영어로
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});