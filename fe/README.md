# Frontend (`fe`)

## 디렉터리

- `public/`: 정적 사이트 배포 루트

## 로컬 실행

```bash
python3 -m http.server 8080 --directory fe/public
```

## 배포

- Cloudflare Pages 기준 `Root directory`를 `fe/public`으로 설정
- `main` 브랜치 머지 시 프론트엔드 배포
