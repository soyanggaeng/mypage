# 소연경 연구자 홈페이지

## 이번 수정: Inter

직전 Ollama 기반 버전에서 글꼴만 바꾸었습니다.
영문 이름, 섹션 제목, 논문 제목, 본문, 메뉴, 버튼의 기본 글꼴을 Inter로 통일했습니다.
글자 크기와 굵기, 줄 간격, 여백, 배치, 색상은 그대로 유지했습니다.
Google Fonts의 Inter variable font를 불러오며 `font-optical-sizing: auto`를 사용합니다.
한글과 웹폰트 로딩 실패 시에는 기존 시스템 글꼴 목록을 그대로 사용합니다.

연구 소개, 논문 다섯 편, 저자·학회·발표 예정 표기, 학력, 모든 본문 링크를 유지했습니다.
ICLR 논문에는 공식 Paper 링크만 있고 arXiv 링크는 없습니다. 별도 CV 링크도 없습니다.
석사 논문 제목도 다음과 같이 유지했습니다.

NeVer: A Comprehensive Dataset for Negation Handling in Language Models

직전 Ollama 버전을 이미 배포했다면 `index.html`과 `styles.css`만 교체해도 됩니다.
`script.js`, `.nojekyll`, `assets/favicon.svg`는 직전 버전과 동일합니다.

## 기존 GitHub 홈페이지에 적용

ZIP 파일 자체가 아니라, 압축을 푼 **안의 파일과 폴더**를 사용합니다.
기존 홈페이지의 index.html과 같은 위치에 넣고 같은 이름의 파일을 교체합니다.
이 작업을 위해 기존 배포 브랜치나 폴더 설정을 변경할 필요는 없습니다.

```text
기존 배포 폴더/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── README_KO.md
├── assets/
│   └── favicon.svg
└── 연경.jpg           ← 기존 저장소의 원본을 그대로 유지
```

**기존 `연경.jpg`는 삭제하거나 다른 사진으로 대체하지 마세요.**
사진은 ZIP에 포함하지 않았습니다. 홈페이지는 같은 폴더의 `./연경.jpg`를 사용하고,
로컬 사진을 읽을 수 없으면 기존 공개 홈페이지의 동일한 사진 주소를 한 번 더 시도합니다.
둘 다 실패할 때만 사진 영역에 안내 문구가 표시됩니다.

사이트는 순수 HTML, CSS, JavaScript로 구성되어 있습니다.
패키지 설치나 별도 빌드 단계는 없습니다. `.nojekyll`은 빈 파일입니다.
기존 저장소의 다른 파일을 모두 삭제할 필요는 없습니다.

## 미리보기

별도 제공한 `yeonkyoungso_ollama_inter_preview.html`은 CSS와 JavaScript가 포함된
단일 HTML 파일입니다. 브라우저에서 열어 확인할 수 있습니다.
**배포에는 ZIP 안의 `index.html`을 사용하세요.**

단일 미리보기의 사진은 기존 GitHub Pages의 공개 사진 주소에서 불러오므로
인터넷 연결이 필요합니다. 웹폰트도 Google Fonts 연결이 필요합니다.
폰트를 불러올 수 없으면 시스템 대체 글꼴로 본문을 표시합니다.

## 내용 수정 위치

모든 본문은 `index.html`에 들어 있습니다.

* 소개: `ABOUT` 주석 아래
* 연구 관심사: `RESEARCH` 주석 아래
* 논문: `PUBLICATIONS` 아래의 `article.publication`
* 학력 및 석사 논문 제목: `EDUCATION` 주석 아래
* 프로필 사진: 기존 저장소의 `연경.jpg`

논문을 추가하려면 기존 `article.publication`을 복사하여 제목, 저자, 학회, 링크를
수정합니다. 제목의 `id`와 연결된 `aria-labelledby`도 함께 바꾸고 중복 ID를 피하세요.
`To appear` 등의 표기는 기존 버전을 유지했습니다. 실제 발표·공개 이후에는 해당
상태를 갱신하세요. 미공개 원고의 PDF는 배포 파일에 포함하지 않았습니다.

## 폰트와 스타일

Inter의 optical size 14~32, weight 400~600 범위를 Google Fonts에서 불러옵니다.
본문은 400, 이름·논문 제목·메뉴·버튼은 500, 섹션 제목과 강조는 600을 사용합니다.
이름과 제목에도 같은 글꼴 목록을 적용하며, 별도의 로고 효과는 없습니다.
폰트 바이너리는 포함하지 않았습니다.

색상, 본문 너비, 여백은 `styles.css` 상단의 `:root`에서 조정할 수 있습니다.
모바일에서는 내비게이션을 메뉴 버튼으로 접고, 작은 화면의 버튼 높이는 확대합니다.
JavaScript를 사용할 수 없어도 본문과 내비게이션은 계속 표시됩니다.
키보드 본문 건너뛰기와 움직임 줄이기 설정을 지원합니다.

디자인 기준: 사용자 제공 DESIGN-ollama.md
Inter 공식 사이트: https://rsms.me/inter/
Google Fonts 설정: https://developers.google.com/fonts/docs/css2

## 확인 범위

320, 375, 390, 640, 768, 1024, 1440, 1920px 화면 폭에서 가로 넘침이 없는지 검사했습니다.
Chromium이 실제로 사용한 글꼴이 이름·제목·본문·버튼에서 Inter인지 확인했습니다.
모바일 메뉴의 열기, Escape 키 닫기, 섹션 이동 및 JavaScript 미사용 상태를 확인했습니다.
본문과 링크는 직전 버전과 비교하여 동일함을 확인했습니다.

제작 환경에서 Google Fonts 외부 연결이 되지 않아 화면 검사는 로컬에 설치된 Inter로
진행했습니다. 배포 파일은 Google Fonts를 불러오도록 되어 있으나, 이 환경에서 해당
variable 웹폰트의 다운로드와 실제 optical sizing 동작까지 확인한 것은 아닙니다.
사진은 외부 원본에 연결할 수 없어 로딩 실패 상태로 검사했으며, 사진 참조는 변경하지 않았습니다.
실제 GitHub 저장소는 수정하거나 배포하지 않았습니다.
