# 🎉 HOXY NUMBER 프로젝트 패키지

## 📦 프로젝트 구조

```
hoxy-number/
├── 📄 index.html           (34KB) - 메인 HTML 파일
├── 📁 css/
│   └── style.css           (5KB)  - 커스텀 스타일시트
├── 📁 js/
│   └── app.js              (51KB) - 애플리케이션 로직
├── 📖 README.md            (4.2KB) - 프로젝트 문서
├── 📘 GITHUB_GUIDE.md      (4.7KB) - GitHub 퍼블리싱 가이드
├── 📋 LICENSE              (1.1KB) - MIT 라이센스
├── 📝 PROJECT_OVERVIEW.md  (이 파일) - 프로젝트 개요
└── 🚫 .gitignore           - Git 제외 파일
```

**총 크기**: 약 100KB (매우 가벼움!)

---

## 🚀 빠른 시작

### 1️⃣ 로컬에서 실행

가장 간단한 방법:
```bash
# 폴더로 이동
cd hoxy-number

# index.html을 브라우저로 드래그 앤 드롭
# 또는 더블클릭!
```

### 2️⃣ VS Code / Cursor에서 실행

1. **폴더 열기**
   ```
   File > Open Folder > hoxy-number 선택
   ```

2. **Live Server 실행** (추천)
   - VS Code Extension: "Live Server" 설치
   - index.html에서 우클릭 > "Open with Live Server"
   - 자동으로 브라우저 열림!

3. **또는 터미널 사용**
   ```bash
   # Python 3 (대부분의 Mac/Linux에 기본 설치)
   python3 -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```
   
   브라우저에서 `http://localhost:8000` 접속

---

## 📋 체크리스트

### ✅ 로컬 개발 준비

- [ ] VS Code 또는 Cursor 설치
- [ ] Live Server 확장 프로그램 설치 (선택)
- [ ] Git 설치 확인: `git --version`
- [ ] 브라우저 개발자 도구 사용법 익히기 (F12)

### ✅ GitHub 퍼블리싱 준비

**쉬운 방법 (추천):**
- [ ] GitHub Desktop 설치
- [ ] GitHub 계정 생성

**터미널 방법:**
- [ ] Git 설치
- [ ] GitHub 계정 생성
- [ ] Git 사용자 설정 완료

📘 자세한 가이드: `GITHUB_GUIDE.md` 참고

---

## 🛠️ 개발 팁

### 파일 구조 이해하기

**index.html** (메인 페이지)
```html
<!-- 외부 CSS 링크 -->
<link rel="stylesheet" href="css/style.css">

<!-- body 내용 -->
<div class="main-container">
  ...
</div>

<!-- 외부 JS 링크 -->
<script src="js/app.js"></script>
```

**css/style.css** (스타일)
- 커스텀 애니메이션
- 레이아웃 스타일
- 모바일 최적화
- 모달 디자인

**js/app.js** (기능)
- 번호 생성 로직
- LocalStorage 관리
- 이벤트 핸들러
- UI 업데이트

---

## 🎨 커스터마이징

### 색상 변경
`css/style.css`에서 그라데이션 색상 수정:
```css
/* 파란색 → 원하는 색상으로 */
background: linear-gradient(to right, #3b82f6, #2563eb);
```

### 할당량 변경
`js/app.js`에서 수정:
```javascript
// 일일 생성 횟수 변경 (기본 10회)
const DEFAULT_QUOTA = 10;
```

### 슬롯 개수 변경
```javascript
// 기본 슬롯 수 변경 (기본 5개)
let recentSlots = 5;
```

---

## 🔧 주요 기능 코드 위치

| 기능 | 파일 | 함수/섹션 |
|------|------|----------|
| 번호 생성 | js/app.js | `generateNumbers()` |
| 번호 저장 | js/app.js | `saveNumber()` |
| 당첨 확인 | js/app.js | `checkWinning()` |
| 할당량 관리 | js/app.js | `initQuota()` |
| 슬롯 확장 | js/app.js | `expandSlots()` |
| 페이지네이션 | js/app.js | `renderCurrentPage()` |
| 모달 열기/닫기 | js/app.js | `showXXXModal()` |
| 스와이프 삭제 | js/app.js | `initSwipeHandlers()` |

---

## 📱 테스트 방법

### 브라우저 개발자 도구 (F12)

1. **모바일 시뮬레이션**
   ```
   F12 > 디바이스 툴바 토글 (Ctrl+Shift+M)
   iPhone SE / Galaxy S21 등 선택
   ```

2. **Console 확인**
   ```
   F12 > Console 탭
   오류 메시지 확인
   ```

3. **LocalStorage 확인**
   ```
   F12 > Application > Local Storage
   저장된 데이터 확인/수정
   ```

### 다양한 디바이스 테스트

- Mobile: 360px, 375px, 390px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

---

## 🐛 문제 해결

### 문제: 페이지가 작동하지 않음
**확인사항:**
1. 파일 구조 확인 (css/, js/ 폴더 위치)
2. 브라우저 콘솔 에러 확인 (F12)
3. 파일 경로 확인 (상대 경로 주의)

### 문제: 스타일이 적용되지 않음
**해결책:**
1. css/style.css 파일 존재 확인
2. 브라우저 캐시 삭제 (Ctrl+F5)
3. 개발자 도구 > Network에서 CSS 로딩 확인

### 문제: JavaScript 오류
**해결책:**
1. js/app.js 파일 존재 확인
2. 콘솔 에러 메시지 확인
3. 스크립트 로딩 순서 확인 (body 끝에 위치)

---

## 📚 다음 단계

### 기능 추가 아이디어
- [ ] 통계 기능 (생성 횟수, 당첨 확률)
- [ ] 번호 공유 기능
- [ ] 테마 변경 (다크모드)
- [ ] 다국어 지원
- [ ] PWA 변환 (앱처럼 설치)

### 배포 옵션
- [ ] GitHub Pages (무료)
- [ ] Netlify (무료)
- [ ] Vercel (무료)
- [ ] Firebase Hosting (무료)

---

## 🆘 도움이 필요하신가요?

### 문서
- 📖 `README.md` - 프로젝트 전체 개요
- 📘 `GITHUB_GUIDE.md` - GitHub 퍼블리싱 상세 가이드
- 📄 `LICENSE` - MIT 라이센스

### 학습 자료
- [MDN Web Docs](https://developer.mozilla.org) - HTML/CSS/JS 레퍼런스
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - CSS 프레임워크
- [Git Tutorial](https://git-scm.com/book/ko/v2) - Git 사용법

---

## 🎯 프로젝트 목표

✅ **완료된 기능**
- 로또 번호 생성 및 저장
- 일일 할당량 시스템
- 광고 시청 보너스
- 슬롯 확장 기능
- 당첨 확인
- 오늘의 행운 번호
- 모바일 최적화

🚀 **다음 버전 계획**
- 통계 대시보드
- 사용자 설정 확장
- 소셜 공유 기능

---

## 💝 감사합니다!

이 프로젝트를 사용해주셔서 감사합니다!

궁금한 점이 있으시면 GitHub Issues를 통해 문의해주세요.

**Happy Coding! 🎲**
