# Next.js

- https://www.youtube.com/watch?v=PCkiz2GUFg8 코딩애플 강의를 통한 NEXT.JS 스터디

#next.js 기본 개념 알아보기
nextjs는 React로 만드는 서버사이드 렌더링 프레인 워크입니다. 서버사이드 렌더링을 함으로 얻는 이득은 다음과 같습니다.

Next.js란 무엇이고 왜 사용할까?
Next.js는 React 라이브러리의 프레임워크이다. 아니 안그래도 잘 되어있는 react를 쓰면서 왜 또 프레임워크가 필요하지?🤔 라는 생각이 제일 먼저 든다.

Next.js를 통해 얻는 가장 큰 장점은? Plain React 앱의 한계?
많은 블로그 포스트들을 읽어보면 Next.js를 사용하는 가장 큰 이유로 SEO(Search Engine Optimization)를 위한 Server-Side Rendering(SSR)을 가능하게 하기 때문에!!라고 말하고 있다. 정말정말 맞다.



왜냐하면, 기본적으로 React는 Client Side Rendering(CSR)을 한다. 이는 위 그림처럼 웹사이트를 요청했을 때 빈 html을 가져와 script를 로딩하기 때문에, 첫 로딩 시간도 오래걸리고 Search Engine Optimization(SEO)에 취약하다는 단점이 있다.



반면, next.js는 pre-reloading을 통해 미리 데이터가 렌더링된 페이지를 가져올수 있게 해주므로 사용자에게 더 좋은 경험을 주고, 검색 엔진에 잘 노출 될 수 있도록 해주는 SEO에서도 장점을 얻을 수 있다. pre-reloading은 SSR 뿐만 아니라 정적 사이트 생성(Static-Site Generate (SSG))도 가능하게 해준다. 또, SSR과 CSR도 혼합하여 사용 가능하다. 자세한 내용은 다른 챕터에서 다룰 예정이다.

Next.js없이는 SSR을 구현할 수 없을까?
아, 그렇다면 Next.js없이는 SSR을 구현할 수 없나?에 대한 궁금증이 생겨서 찾아보았는데 이 글(React로 Next.js 처럼 Server-side-rendering 구현하기)과 같이 Next.js없이도 SSR페이지를 만들 수 있다! 또, 이 글(SPA에서 서버사이드 렌더링을 구축하지 않고 SEO 최적화하기)을 읽어보면 next.js 없이 react-helmet등의 라이브러리로 SEO에 대응할 수 있다는 것을 알 수 있다.
그런데 위 글들의 경우는 이미 진행된 react 프로젝트에서 갑자기 프레임워크를 도입하는 것이 리팩토링 등 꽤 비용이 드는 작업이기 때문에 다른 방법을 사용하셨다고 한다. 만약 프로젝트 시작 전 프레임워크를 도입할지 고민을 하고있다거나, 시간적 여유가 있다면 깔끔하고 나이스하게 SSR을 처리하는데는 그냥 Next가 짱인듯 싶다!

Next.js, 또 어떤 기능들을 제공할까?
직관적인 페이지 기반 라우팅 시스팀
next.js는 pre-rendering 뿐만 아니라 페이지 기반 라우팅 시스템도 제공한다. 프로젝트의 가장 바깥 폴더인 /pages 폴더에서 컴포넌트를 export하면 폴더명이 페이지 route가 된다. (/pages/indext.s -> /, /pages/store/t-shirt -> /store/t-shirt)

또, /look/[id]와 같은 dynamic route도 지원하는데, 다음 장에서 다루도록 하겠다.

페이지간 빠르고 매끄러운 전환을 위한 client-side navigation
next는 < Link /> 컴포넌트를 통해 페이지간의 빠르고 매끄러운 이동을 가능하게 한다. HTML의 a 태그와 달리 페이지를 리로딩하지 않고도 페이지간 이동이 가능하고, link 컴포넌트가 뷰포트에 보였을 때 관련 페이지를 백그라운드에서 미리 가져다 놓기 때문에 사용자가 링크를 클릭했을 때 매우 빠르게 해당 페이지로 이동할 수 있게 해준다. (이것도 제대로 알고나니 와..하고 감탄했다. 이제 link만 써야지)

Code Splitting (코드 분할)
대부분의 사용자들은 웹페이지가 3초 이상 로딩될 시 이를 느리다 판단한다. 코드 분할은 웹의 첫 페이지가 로딩될 때, 거대한 javascript payload를 보내는 것이 아니라, 번들을 여러 조각으로 조각내어서 처음에 가장 필요한 부분만 전송해 주는 방식을 통해 어플리케이션 로드 타임을 줄여준다. 코드 분할은 webpack, parcel, rollup 등의 모듈 번들러도 지원하고 있는 기능이지만 next.js를 사용하면 별도의 설정없이 자동으로 프로젝트에 적용된다.
(어떻게 동작할가? dynamic import를 사용하여 모듈이 호출될 때만 모듈을 import한다. 즉 사용될 때만 모듈 불러옴)

1. Next.js는 서버 측 렌더링을 지원하며, 이는 웹 페이지의 초기 로드 시 서버에서 페이지를 렌더링하여 성능을 향상시킵니다. 이로써 검색 엔진 최적화(SEO)가 용이하고 초기 로딩 속도가 빠릅니다.
   File-Based Routing:

2. Next.js는 파일 기반 라우팅을 사용합니다. 페이지를 만들 때 파일 이름과 디렉터리 구조에 따라 자동으로 라우팅을 설정합니다. 예를 들어, /pages/about.js 파일은 /about 경로로 접근할 수 있습니다.
   Automatic Code Splitting:

3. Next.js는 페이지 별로 자동으로 코드를 분할(splitted)합니다. 이는 사용자가 방문한 페이지에 필요한 JavaScript 코드만 다운로드하여 초기 로딩 속도를 최적화합니다.
   API Routes:

4. Next.js는 API 엔드포인트를 생성하기 위한 특별한 디렉터리인 /pages/api를 제공합니다. 이를 사용하여 서버리스 함수를 만들고 클라이언트 및 서버 사이에서 데이터를 주고받을 수 있습니다.
   Data Fetching:

5. Next.js에서 데이터를 가져오는 방법은 다양합니다. getStaticProps, getServerSideProps, 또는 getInitialProps를 사용하여 데이터를 페이지에 미리 렌더링하거나 서버 측에서 가져올 수 있습니다.
   Static Site Generation (SSG):

6. Next.js는 정적 사이트 생성을 지원합니다. 이는 빌드 시점에 페이지를 사전 렌더링하여 CDN에 캐싱하여 더 빠른 페이지 로딩을 가능하게 합니다.
CSS-in-JS:

7. Next.js는 CSS 스타일을 다루기 위한 내장 CSS-in-JS 솔루션을 포함합니다. styled-components, emotion, 또는 일반 CSS를 사용할 수 있습니다.
환경 변수:

8. Next.js에서는 환경 변수를 사용하여 환경별 설정 및 비밀 키를 관리할 수 있습니다.
개발 및 프로덕션 모드:

9. Next.js는 개발 환경과 프로덕션 환경 간의 다른 설정을 지원합니다. 개발 환경에서는 빠른 개발을 위해 자동 리로드를 제공하고, 프로덕션 환경에서는 성능 최적화를 위한 기능을 제공합니다.
플러그인 시스템:

10. Next.js는 다양한 플러그인을 지원하여 개발자가 프로젝트에 필요한 추가 기능을 쉽게 통합할 수 있도록 합니다.
Next.js는 React와 함께 사용되며, 강력한 기능과 쉬운 사용법으로 React 기반의 웹 애플리케이션을 개발하는 데 도움이 됩니다. 페이지 라우팅, 데이터 가져오기, 서버리스 함수 작성 등을 위한 다양한 도구와 기능을 제공하여 개발 프로세스를 간소화합니다.

요약
Next.js는 React 프레임워크
기본적으로 CSR을 하는 React 애플리케이션은 SEO에 취약함 -> next.js를 도입하면 pre-rendering을 통해 SSR 또는 SSG를 가능하게 해줌 -> 성능과 SEO에 좋음
이외에도 페이지 기반 라우팅, client-side navigation, code splitting, image optimization, built-in-CSS... 을 제공 -> React 프로젝트 성능향상 & 개발자들을 편하게 해줌