# HOXY NUMBER 🎲

한국 로또 번호 생성기 웹 애플리케이션

## 📋 프로젝트 소개

HOXY NUMBER는 로또 번호를 간편하게 생성하고 관리할 수 있는 모바일 우선 웹 애플리케이션입니다.

## ✨ 주요 기능

### 🎯 번호 생성
- **자동 번호 생성**: 1~45 범위의 로또 번호 자동 생성
- **일일 할당량 시스템**: 하루 최대 10회 생성 가능
- **광고 시청 보너스**: 광고 시청으로 +5회 추가 생성
- **연속 5회 뽑기**: 광고 시청으로 한 번에 5개 번호 생성

### 📝 번호 관리
- **최근 생성 번호**: 최근 생성한 번호를 슬롯 시스템으로 관리 (기본 5개)
- **슬롯 확장**: 광고 시청으로 슬롯 +5개 추가 (최대 무제한)
- **번호 저장**: 마음에 드는 번호를 저장하여 보관
- **페이지네이션**: 저장된 번호를 페이지별로 관리 (페이지당 10개)
- **스와이프 삭제**: 모바일 친화적인 스와이프 제스처로 삭제

### 🎁 오늘의 행운 번호
- **일일 럭키 넘버**: 매일 자정 새로운 행운 번호 제공
- **광고 시청 공개**: 광고 시청 후 번호 확인 가능

### ✅ 당첨 확인
- **수동 입력**: 직접 번호를 입력하여 당첨 확인
- **저장 번호 확인**: 저장된 번호의 당첨 여부 자동 확인
- **당첨 등수 표시**: 1등~5등까지 당첨 등수 표시

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **CSS Framework**: Tailwind CSS
- **Storage**: LocalStorage (브라우저 로컬 저장소)

## 📱 반응형 디자인

- **Mobile First**: 모바일 우선 디자인
- **최대 너비**: 콘텐츠 영역 제한 없음
- **모달 크기**: 480px 최대 너비로 최적화

## 🚀 시작하기

### 설치

```bash
# 레포지토리 클론
git clone https://github.com/YOUR_USERNAME/hoxy-number.git

# 프로젝트 디렉토리로 이동
cd hoxy-number
```

### 실행

로컬 서버를 실행하거나 `index.html` 파일을 브라우저에서 직접 열어주세요.

```bash
# Python 간단한 HTTP 서버 (Python 3)
python -m http.server 8000

# Node.js http-server 사용시
npx http-server

# 또는 VS Code Live Server 확장 프로그램 사용
```

브라우저에서 `http://localhost:8000` 접속

## 📁 프로젝트 구조

```
hoxy-number/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 커스텀 스타일시트
├── js/
│   └── app.js          # 애플리케이션 로직
├── README.md           # 프로젝트 문서
└── .gitignore          # Git 제외 파일
```

## 💾 데이터 저장

모든 데이터는 브라우저의 LocalStorage에 저장됩니다:

- `hoxy_quota`: 일일 생성 할당량
- `hoxy_recent`: 최근 생성 번호
- `hoxy_saved`: 저장된 번호
- `hoxy_lucky`: 오늘의 행운 번호
- `hoxy_recent_slots`: 슬롯 개수
- `hoxy_pages_unlocked`: 최근 번호 페이지 잠금 해제 수
- `hoxy_saved_pages_unlocked`: 저장 번호 페이지 잠금 해제 수

## 🎨 디자인 특징

- **그라데이션 UI**: 생동감 있는 그라데이션 효과
- **부드러운 애니메이션**: 자연스러운 트랜지션
- **직관적인 인터페이스**: 쉽고 간편한 사용성
- **모바일 최적화**: 터치 친화적인 디자인

## 📝 업데이트 내역

### v1.0 (2025-01-29)
- ✅ 초기 릴리즈
- ✅ 로또 번호 생성 기능
- ✅ 번호 저장 및 관리
- ✅ 슬롯 시스템
- ✅ 광고 시청 보너스
- ✅ 오늘의 행운 번호
- ✅ 당첨 확인 기능
- ✅ 모바일 최적화

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 있습니다.

## 👨‍💻 개발자

**스티브** - UX/UI Designer & Developer

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 생성해주세요.

---

⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요!
