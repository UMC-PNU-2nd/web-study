# 2주차 CSS

## CSS란?

HTML의 뼈대에 레이아웃과 디자인적 요소들을 입혀 주는 것 .

### CSS 파일을 HTML 문서안에 포함시키는 법

```html
**<link rel="stylesheet" href="./style.css">**
```

- `rel` 은 relation 즉 어떤 링크(파일)인지 표기
- `href` 에는 파일의 위치 (상대경로 or 절대경로)를 표기

<aside>
💡 **상대경로**

`.` 현재 위치

`..` 상위 폴더

</aside>

*아는 내용이라 주제만 정리합니다. 참고하지마세요*

### Selecter

- cascading
- class vs id
- !important
- pseudo selector

### Properties

- display
    - inline, block, inline-block, none
- box-model
    - contents, padding, margin
    - TRBL order
    - border : width style color
    - box-sizing  : contents-box, border-box
- px, em, rem, percent
- default browser styling
    - reset css
    

### Flexbox

- display : flex
- flex-direction (container)
    - row, column, reversed
- justify-content (container)
    - flex-start, flex-end, center
    - space-between, space-around, space-evenly
- align-items (container)
    - strech, start, baseline etc
- flex-grow (item)
- flex-shrink (item)
- shortcut : grow, shrink, basis
- flex-wrap (contatiner) : wrap
- align-content (vertical version justify content)
- [flexboxfroggy.com/#ko](http://flexboxfroggy.com/#ko)

### Position

- relative → 주로 absolute의 부모로 사용
- absolute : 상위 개체 기준
- fixed : viewport 기준 고정
- sticky : 스크롤 기준 고정