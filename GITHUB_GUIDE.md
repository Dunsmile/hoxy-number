# GitHub 퍼블리싱 가이드 🚀

## 방법 1: GitHub Desktop 사용 (초보자 추천)

1. **GitHub Desktop 설치**
   - https://desktop.github.com/ 에서 다운로드

2. **프로젝트 폴더 추가**
   - GitHub Desktop 실행
   - File > Add Local Repository
   - `hoxy-number` 폴더 선택
   - "create a repository" 클릭

3. **GitHub에 퍼블리시**
   - "Publish repository" 버튼 클릭
   - 저장소 이름: `hoxy-number`
   - Description: "한국 로또 번호 생성기"
   - Public/Private 선택
   - "Publish Repository" 클릭

4. **완료!**
   - https://github.com/YOUR_USERNAME/hoxy-number 에서 확인

---

## 방법 2: VS Code 사용

1. **VS Code에서 폴더 열기**
   ```
   File > Open Folder > hoxy-number 폴더 선택
   ```

2. **Source Control 패널 열기**
   - 왼쪽 사이드바에서 Source Control 아이콘 클릭
   - 또는 `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)

3. **Git 초기화**
   - "Initialize Repository" 버튼 클릭

4. **첫 커밋**
   - 메시지 입력: "Initial commit: HOXY NUMBER v1.0"
   - Commit 버튼 클릭 (✓)

5. **GitHub에 퍼블리시**
   - "Publish to GitHub" 버튼 클릭
   - 저장소 이름 확인
   - Public/Private 선택
   - "Publish" 클릭

---

## 방법 3: 터미널/커맨드라인 사용

### 1단계: 로컬 Git 설정

```bash
# 프로젝트 폴더로 이동
cd hoxy-number

# Git 저장소 초기화
git init

# 기본 브랜치를 main으로 변경 (선택사항)
git branch -M main

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: HOXY NUMBER v1.0"
```

### 2단계: GitHub에서 새 저장소 생성

1. https://github.com/new 접속
2. Repository name: `hoxy-number`
3. Description: "한국 로또 번호 생성기"
4. Public/Private 선택
5. **"Add README" 체크 해제** (이미 있음)
6. "Create repository" 클릭

### 3단계: 로컬과 GitHub 연결

```bash
# GitHub 저장소를 원격으로 추가
git remote add origin https://github.com/YOUR_USERNAME/hoxy-number.git

# 코드 푸시
git push -u origin main
```

### 완료!
https://github.com/YOUR_USERNAME/hoxy-number 에서 확인

---

## 방법 4: Cursor 사용

1. **Cursor에서 폴더 열기**
   ```
   File > Open Folder > hoxy-number 폴더 선택
   ```

2. **터미널 열기**
   - `Ctrl+`` (백틱) 또는 View > Terminal

3. **Git 명령어 실행**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HOXY NUMBER v1.0"
   ```

4. **GitHub CLI 사용 (설치되어 있다면)**
   ```bash
   gh repo create hoxy-number --public --source=. --remote=origin --push
   ```

5. **또는 수동으로 연결**
   - GitHub에서 저장소 생성 (방법 3 참고)
   - 터미널에서:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/hoxy-number.git
   git push -u origin main
   ```

---

## GitHub Pages 배포 (선택사항)

웹사이트를 무료로 호스팅하려면:

### 방법 1: GitHub 웹사이트에서

1. GitHub 저장소 페이지로 이동
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: main / root
5. Save 클릭
6. 완료! https://YOUR_USERNAME.github.io/hoxy-number 에서 확인

### 방법 2: 터미널에서

```bash
# gh-pages 브랜치 생성 및 배포
git checkout -b gh-pages
git push origin gh-pages

# main 브랜치로 돌아오기
git checkout main
```

---

## 트러블슈팅

### 문제: "fatal: detected dubious ownership"

**해결책:**
```bash
git config --global --add safe.directory /path/to/hoxy-number
```

### 문제: GitHub 인증 실패

**해결책:**
1. Personal Access Token 생성
   - GitHub > Settings > Developer settings > Personal access tokens
   - "Generate new token" 클릭
   - repo 권한 체크
   - 토큰 복사
2. 명령어 실행시 비밀번호 대신 토큰 사용

### 문제: "src refspec main does not match any"

**해결책:**
```bash
# 브랜치 이름 확인
git branch

# master를 main으로 변경하고 싶다면
git branch -M main
```

---

## 추가 설정 (선택사항)

### Git 사용자 정보 설정
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### SSH 키 설정 (HTTPS 대신 SSH 사용)
```bash
# SSH 키 생성
ssh-keygen -t ed25519 -C "your.email@example.com"

# SSH 키 GitHub에 추가
# ~/.ssh/id_ed25519.pub 내용을 복사하여
# GitHub > Settings > SSH and GPG keys > New SSH key
```

---

## 도움이 필요하신가요?

- [GitHub 공식 문서](https://docs.github.com)
- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub Desktop 가이드](https://docs.github.com/en/desktop)

---

**추천**: 처음 사용하신다면 **GitHub Desktop** 사용을 추천드립니다! 
가장 쉽고 직관적입니다. 😊
