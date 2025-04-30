# Tailwind CSS Configuration

packages/ui/src/styles/globals.css에 정의된 color 변수값 사용

## 프로젝트에 적용하기

사용하고자 하는 프로젝트에 tailwind.config.cjs 파일 생성하고 아래 내용 추가

```js
const baseConfig = require("@on/tailwind-config");
module.exports = {
  darkMode: "class",
  presets: [baseConfig],
  theme: {
    extends: {}, // 재정의 필요한 경우 추가하여 사용
  },
};
```
