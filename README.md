# React
$ npm install -g create-react-app
$ create-react-app my-app

-Virtyal DOM : 브라우저에 실제로 보여지는 DOM이 아니라 메모리 상에만 존재하는 가상의 DOM으로 자바스크립트 객체이기 때문에 작동 속도가 실제 DOM보다 훨씬 빠르다.
-상태가 업데이트 되면 Virtual DOM에 먼저 렌더링한 후, 실제 DOM과 비교해 차이가 있는 부분만 부분적으로 패치한다.

[Environment] _ Webpack. Babel
-Webpack: 컴포넌트별로 분리해 작성한 여러 개의 파일을 하나로 합쳐주는 역할
-Babel: JSX 등 최신 자바스크립트 문법을 사용

[Component] _ 재사용 가능한 UI 조각
-리액트 컴포넌트를 작성할 땐 리액트를 import 해야 한다. 
-ReactDom.render() : 브라우저에 실제 DOM 내부에 리액트 컴포넌트를 렌더링해주는 메소드

[Props] _ 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값 설정

[조건부렌더링]
-주로 삼항 연산자 또는 && 연산자를 사용해 처리하다.
-JSX에서 null, false, undefined를 렌더링하면 아무것도 나타나지 않는다. 
-props값 할당을 생략하면 true가 할당된다.
