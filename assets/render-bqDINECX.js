(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=r(t);fetch(t.href,l)}})();const m={user:"user"},v={subscribers:new Set,subscribe(e){this.subscribers.add(e)},notify(){this.subscribers.forEach(e=>e())}},a={routeType:"history",_user:JSON.parse(localStorage.getItem(m.user)),set user(e){if(e===null){localStorage.removeItem(m.user),this._user=null;return}localStorage.setItem(m.user,JSON.stringify(e)),this._user=e,v.notify()},get user(){return this._user},get isLoggedIn(){return this.user!==null},get pathname(){return this.routeType==="history"?location.pathname:location.hash.slice(1)}},d={push(e){a.routeType==="history"&&window.history.pushState({},"",e),a.routeType==="hash"&&(window.location.hash=e),b()},replace(e){a.routeType==="history"&&window.history.replaceState({},"",e),a.routeType==="hash"&&(window.location.hash=e),b()}},x=()=>{document.body.addEventListener("click",e=>{if(e.target.tagName==="A"){e.preventDefault();const r=e.target.href.replace(window.location.origin,"");d.push(r)}})},c="/front_5th_chapter1-1",n={home:{id:"home",path:`${c}`,title:"홈",accessLevel:"public"},login:{id:"login",path:`${c}/login`,title:"로그인",accessLevel:"loggedOut"},profile:{id:"profile",path:`${c}/profile`,title:"프로필",accessLevel:"loggedIn"},logout:{id:"logout",path:`${c}/logout`,title:"로그아웃",accessLevel:"loggedIn"}},u=Object.values(n).map(e=>e),y=u.filter(e=>e.accessLevel==="loggedIn"),w=u.filter(e=>e.accessLevel==="loggedOut"),L=u.filter(e=>e.accessLevel==="public"||e.accessLevel==="loggedIn"),$=u.filter(e=>e.accessLevel==="public"||e.accessLevel==="loggedOut"),p=()=>`
    <main role="main" class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" id="username" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-4">
            <input type="text" id="email" name="email" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" id="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <textarea id="bio" name="bio" placeholder="자기소개" class="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
`,I=()=>{const e=document.querySelector("#login-form");e&&e.addEventListener("submit",o=>{o.preventDefault();const r=o.target,s=r.elements.username.value,t=r.elements.email.value,l=r.elements.bio.value,i={username:s,email:t,bio:l};a.user=i,d.push(n.home.path)})},O=()=>{const e=document.getElementById("logout");e&&e.addEventListener("click",()=>(a.user=null,d.push(n.login.path),p()))},f=()=>{const e=a.pathname,o=a.isLoggedIn;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${o?L.map(s=>`<li><a id="${s.id}" href="${s.path}" class="${e===s.path?"text-blue-600 font-bold":"text-gray-600"}">${s.title}</a></li>`).join(""):$.map(s=>`
        <li><a id="${s.id}" href="${s.path}" class="${e===s.path?"text-blue-600":"text-gray-600"}">${s.title}</a></li>
      `).join("")}
      </ul>
    </nav>
  `},g=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,h=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${f()}

      <main role="main" class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>

      ${g()}
    </div>
  </div>
`,j=()=>`
  <main role="main" class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="${n.home.path}" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,S=()=>{const e=a.user;return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${f()}

        <main class="p-4" role="main">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${e.username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${e.email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${e.bio}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${g()}
      </div>
    </div>
  </div>
`},P=()=>{const e=document.querySelector("#profile-form");e&&e.addEventListener("submit",o=>{o.preventDefault();const r=o.target,s=r.elements.username.value,t=r.elements.email.value,l=r.elements.bio.value,i={username:s,email:t,bio:l};a.user=i})},A=()=>{switch(a.pathname){case n.home.path+"/":case n.home.path:return h();case n.login.path:return p();case n.profile.path:return S();default:return j()}},N=e=>{const o=a.isLoggedIn,r=y.some(t=>t.path===a.pathname),s=w.some(t=>t.path===a.pathname);return!o&&r?(d.push(n.login.path),p()):o&&s?(d.push(n.home.path),h()):e()},b=()=>{const e=document.getElementById("root");e.innerHTML=N(A),x(),I(),P(),O()};export{d as a,v as o,b as r,a as s};
