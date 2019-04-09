# movieql
 the basics of GraphQL by making my own NodeJS + GraphQL Server using GraphQL Yoga

 ## 강의 및 블로그
 > [GraphQL으로 영화API 만들기](https://academy.nomadcoders.co/courses/enrolled/357405)

> [README 참고 블로그](https://anpigon.github.io/blog/kr/@anpigon/graphql-1-graphql-api--1541861904811/)

 ## GraphQL
 GraphQL은 API query 언어이며, 데이터 유형을 정의하여 쿼리하기 위한 서버 런타임 시스템이다.

 RESTful API와 비교하면, RESTful API는 Request마다 각각의 Endpoint를 사용하지만, GraphQL은 단일 Endpoint를 사용한다. 그리고 일반적인 Restful API 서버에서는 데이터를 주고받을 때 Over-Fetching, Under-Fetching 이 발생한다. 하지만 GraphQL은 RESTful API에서 발생할 수 있는 Over-Fetching, Under-Fetching 문제를 해결하였다.

  ### Over-Fetching이란?
  필요한 정보 영역보다 더 많은 정보를 서버로부터 받는 것을 말한다. 사용자 이름 정보만 필요한데 서버는 그 외에 정보도 같이 준다. 그럼 우리는 많은 정보 중에서 필요한 정보만 골라서 사용해야 한다.

  ### Under-Fetching이란?
  필요한 정보가 여러개일때 서버에 여러번 요청해야한다. 하지만 GraphQL은 한번의 요청으로 서버로 부터 필요한 모든 정보를 받을 수 있다.

* * *

## 필요한 npm 모듈 설치하기
우선 graphql API 서버를 구현하는데 필요한 npm 모듈을 설치한다.

### graphql-yoga 설치
`graphql-yoga`을 사용하면 GraphQL 서버를 쉽게 설정할 수 있다.

<code>yarn add graphql-yoga</code>

### babel 설치
`Babel`은 ES6/ES7 코드를 ES5 코드로 변환해주는 도구이다. ES6/ES7 으로 개발하기 위해서 `babel-cli`를 설치한다.

<code>yarn global add babel-cli</code>

그리고 바벨에 필요한 추가 모듈을 설치한다.

<code>yarn add babel-preset-env babel-preset-stage-3 --dev</code>

`.babelrc` 파일을 생성한다.

<pre><code>{
  "presets": ["env", "stage-3"]
}</code></pre>

### nodemon 설치
nodemon은 js가 수정되면 서버를 자동으로 재시작해준다.

<code>yarn global add nodemon</code>

`package.json`에 다음을 추가한다.


<pre><code>"scripts": {
    "start": "nodemon --exec babel-node index.js"
}</code></pre>

### index.js 파일 생성하고 실행하기
index.js 파일을 생성한다.

<pre><code>import { GraphQLServer } from 'graphql-yoga'

const server = new GraphQLServer({})
server.start(() => console.log('Server is running on localhost:4000'))
</code></pre>

npm start으로 서버를 실행하면, 아직은 에러 메세지가 출력 될 것이다.

<pre>
throw new Error('No schema defined');
            ^

Error: No schema defined
    at GraphQLServer.createHttpServer . . .
.
.
.
[nodemon] app crashed - waiting for file changes before starting...
</pre>