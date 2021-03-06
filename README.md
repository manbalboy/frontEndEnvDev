# 프론트엔드의 개발환경 이해와 실습

## 1.node.js
- 모듈화 하기 위해 필요 써드파티 라이브러리를 가져올수있고 버전 관리가 용의함 

[node 공식사이트](https://nodejs.org/ko/)

### 1-1.npm 
- node설치 될때 같이설치 node package manager

[npm 공식사이트](https://www.npmjs.com/)

```
- 프로젝트 모듈 설치및 관리 
폴더에서 다음 명령어 입력

    $> npm init
npm package.json 파일 생성
```

## 2.webpack
- 웹팩은 오픈 소스 자바스크립트 모듈 번들러이다. 주로 자바스크립트를 위한 모듈 번들러이지만 호환 플러그인을 포함하는 경우 HTML, CSS, 심지어는 이미지와 같은 프론트엔드 자산들을 변환할 수 있다

[webpack 공식 사이트](https://webpack.js.org/)

### 2-1.배경 
- 기존에는 모듈방식이 없어 외부의 변화에 DATA 를 관리하기 어려웠고 IIFE 방식 의 모듈관리 방식으로 사용하다 exports require 방식의 모듈화가 지원되었고 ES2015 의 탄생으로 import export 가 도입되었지만 모든브라우저에서 지원되지 않아 그것을 지원하기위해 탄생 하였다.

### 2-2.설치

