# @on/ui

터보레포 프로젝트 내에서 공통적으로 사용하는 UI 컴포넌트 정의

## 폴더 구조

```
packages/ui
├── src
│ ├── assets/             # svg, 이미지 파일
│ ├── components/         # 공통 컴포넌트
│ │   ├── base/           # ui 컴포넌트
│ ├── hooks/              # 로직처리
│ ├── lib/                # 유틸리티 함수
│ ├── styles/
```

## 스토리 생성

```cli
pnpm run story-add {component name} {path}
```

```cli
pnpm run story-add button base
```
