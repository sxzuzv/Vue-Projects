<template>
  <div class="menu">
    <!-- v-for: 반복문 -->
    <a v-for="m in menu" :key="m"> {{ m }} </a>
    <!-- (a, b): b는 0부터 1씩 증가하는 정수 -->
<!--    <a v-for="(m, i) in menu" :key="i"> {{ m }} </a>-->
  </div>

  <img alt="Vue logo" src="./assets/logo.svg">

  <div>
    <!-- HTML 속성에 데이터 바인딩 적용 시, 해당 속성 좌측에 ':'을 붙인다. -->
    <h4 :style="스타일">ONE ROOM SHOP</h4>
    <br>
    <!-- {{데이터명}}: 데이터 바인딩 -->
    <h4>{{ products[0] }}</h4>
    <p>{{ price }}만원</p>
    <br>
    <h4>{{ products[1] }}</h4>
    <p>{{ random }}</p>
    <br>
    <h4>{{ products[2] }}</h4>
    <p>{{ random }}</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {  // 데이터 저장소: 변수 등의 데이터를 보관한다.
      return {
        price: 50,
        스타일: 'color : blue', // HTML 속성 저장 가능
        products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
        random: '가격은 아무거나',
        menu: ['HOME', 'PRODUCTS', 'ABOUT']
      }
    },
    components: {

    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, SansSerif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 상단 메뉴 스타일 적용 */
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>