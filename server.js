const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일 제공 (public 폴더 내의 css, js, json 등을 접근 가능하게 함)
app.use(express.static(path.join(__dirname, 'public')));

// [핵심] 루트 접속 시 언어 감지 후 리다이렉트
app.get('/', (req, res) => {
    // 브라우저의 Accept-Language 헤더 분석
    const lang = req.acceptsLanguages('ko', 'en');

    console.log(`접속 감지! 사용자 언어: ${lang}`);

    if (lang === 'ko') {
        res.redirect('/ko');
    }
    else {
        res.redirect('/en'); // 한국어 아니면 전부 영어로
    }
});

// 한국어 페이지 라우팅
app.get('/ko', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ko', 'index.html'));
});

// 영어 페이지 라우팅
app.get('/en', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'en', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});