# 프로젝트 기획과 트러블 슈팅

## 로그인시 
store의 loginState를 변경하였으나 상단의 NavigationBar 에서는 loginState값의 변경을 인식하지 못했던 문제를 스토어 내부에서 값을 변경하는 액션 방식을 통해 변경하고
const loginState = store.loginState의 변수 형식으로 불러서 쓰던 기존의 방식에서 {{ store.loginState }} 형식으로 바로 불러서 사용하는 것으로 해결.

## 카카오로그인
이전에 진행했던 Nuxt기반의 미니프로젝트에서 사용하던 REST API 카카오 로그인을 재사용하려했으나 vue3에는 useAsyncData가 없기 때문에 axios로 대체하여  REST API 사용

## 회원가입시
vue의 v-bind 기능을 이용할 경우 input type을 number로 주거나 자릿수를 maxlength를 이용해 제한하더라도 해당 기능이 작동하지 않았고,
전화번호의 경우 앞자리가 010 이거나 011로 시작하는 휴대전화 번호만을 받기 위해 형식을 제한할 필요가 있다고 생각하여
주민등록번호 앞, 뒤, 전화번호를 숫자만 입력받고 / 전화번호는 010 또는 011 형식의 휴대전화만 받기위해 정규식을 적용하여 문제 해결.


## 장바구니
장바구니에 담아둔 상품의 간단한 정보와 가격 및 수량제어를 위한 페이지를 만들기 위해 v-for를 사용한 반복으로 장바구니에 있는 상품 수만큼 보여지게끔 컴포넌트 구현.
총 가격을 표현하기 위해  수량에 맞게 가격을 연산하는 방식으로 구현하려고 하였으나 체크가 안되어있는 상품의 가격도 합산 되거나,
수량을 올리거나 내렸을 때 가격이 즉시 변동하지 않는 등의 문제가 발견되었고, 조건을 어떻게 적용할 지 그리고 가격 합산은 어떻게 계산하고 어디에 담아둘 지 고민하다가
배열 형식의 변수에 카트 아이템과 같은 인덱스의 위치에 갯수 * 가격의 값을 저장하고 배열 안의 값을 합해서 표현하는식으로 문제를 해결
PS 장바구니에 이미 같은 상품이 있는 경우 상품을 또 추가하지 않고 갯수만 늘릴 수 있도록 반복문과 if문을 통해 처리

## 디테일 페이지
디테일 페이지의 구도를 잡고 배치한 후 하단부 카피라이트 부분에 내용을 채워넣으면 비어보이지 않고 괜찮을 것 같다고 생각했지만, 당장 채워넣는 내용은 결국 더미 이기 때문에 차후에  실제 서비스로 제공하게 될 경우
제휴사나 정식 서비스 제공시 주소, 전화번호 등을 이용해 채울 계획.

## 검색 페이지
검색 페이지를 구현하기 위해서 검색한 키워드와 해당 키워드를 포함하는 상품의 정보가 필요했고, 이를 해결하기 위해 스토어에 변수 두개를 만들어 각각 키워드와 객체를 담아서 가져옴
하나의 객체로 만들어서 저장하려고 하였으나 수정하기 위해선 다량의 오류가 발생하여 최종 완성 때 다시 수정하기로 계획하고 다음에 진행하게될 프로젝트에서도 활용해보기로 생각

## 등록 페이지, new 페이지
로그인 아이디가 'admin'인 경우에만 상품 등록페이지로 이동하며, 이 페이지에서 등록된 상품은 New 페이지 탭에만 표시 되게끔 구현되어 있는데,
정식 서비스로 제공하게 된다면 카테고리에 맞게 추가시켜서 보여줄 예정이면 new 탭에는 카테고리와 상관 없이 새로 등록한 상품 10~20개 정도를 보여주도록 계획

## best 페이지
정식 서비스로 제공할 경우 구매 확정 시 구매 횟수를 올리고 구매횟수가 높은 아이템을 기준으로 10개~ 20개 정도 표시되도록 구현할 계획.
