## Expert Chemiverse
- 기업에서 원하는 기획안에 맞춰 사이트를 리뉴얼하는 프로젝트입니다.

## 구동페이지
https://expert-chemiverse.netlify.app/

## 사이트설명
Chemiversㄷ : 케미버스는 기업에 입사한 신입사원의 안정적 온보딩을 지원하는 온라인 온보딩 플랫폼입니다.
1. Connect With : 기업에 합격하고, 입사하기 전 connect with 페이지에서 기업에 대한 기본 정보와 동기 간 네트워킹을 형성하게 됩니다.
2. On & Up : 입사 후 사번을 받게 되면 On & Up 페이지로 이동이 가능하게 됩니다. 신입사원 교육과 연계되어 온라인 플랫폼으로써 활용됩니다.

## 구성원
**김지현(97)** , 조윤주, 김지현(95), 조예진, 정지영, 황선환

## 역할
### 디자인, 로그인, 회사소개, 입사 전 준비사항 페이지, header제작
1. 로그인
![login](https://user-images.githubusercontent.com/105181266/192793488-91e41035-32e9-4162-a1d1-0aed59888301.jpg)

- 로그인 해야만 on&up 페이지 사용 가능하도록 구현
- on&up 이동 버튼 클릭 시 로그인창 모달 구현
- auth 값이 false일 경우 login페이지로 redirect 되도록 설정
- redirect 컴포넌트 생성 후 메인 페이지 경로와 동일하게 설정
- useState, 삼항연산자 사용하여 ID와 PW가 모두 일치하는 경우에는 메인 페이지로 이동, 일치하지 않는 경우에는 메세지 표출
- 로그인 실패시 on&up 사이트 이용 불가하도록 설정
- 로그인 완료시 헤더 오른쪽 상단 '마이페이지 로그아웃'으로 변경됨.
- auth값에 따라 로그인 상태 변경 (기본값은 false 이고 로그인 성공한 경우에만 true로 변경, 로그인 한 이후에는 on&up 사이트 자유롭게 이동 가능)

2. ID 찾기 / 비밀번호 변경
![expert-chemiverse netlify app_login_idpw](https://user-images.githubusercontent.com/105181266/192795207-ab95c746-9bd8-43d3-a7a1-6677bfbc23bd.png)

- 사용자 정보가 맞지 않는 경우 메시지 나옴 
- 사용자 정보가 일치하면 입력한 번호로 아이디가 전송되었다는 알림창 나옴
- 비밀번호 변경 클릭시 onClick 이벤트 사용하여 모달창 나타남

3. 회사소개
![screencapture-expert-chemiverse-netlify-app-introduce-2022-09-28-22_41_05](https://user-images.githubusercontent.com/105181266/192794909-398b32f9-a279-4bc5-bbd2-9da70a10fb79.png)

- iframe 태그 이용하여 Youtube 동영상 불러오기

4. 입사 전 Checklist
![expert-chemiverse netlify app_ready](https://user-images.githubusercontent.com/105181266/192793230-6b2f50e3-2517-4ec7-a884-31e792b19b18.png)

- 클릭하면 check / uncheck 바뀌게 구성
- 확인버튼 누르면 제출되었습니다 alert창 나옴
