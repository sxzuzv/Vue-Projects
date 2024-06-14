<template>
  <div class="menu">
    <!-- v-for: 반복문 -->
    <a v-for="m in menu" :key="m"> {{ m }} </a>
    <!-- (a, b): b는 0부터 1씩 증가하는 정수 -->
<!--    <a v-for="(m, i) in menu" :key="i"> {{ m }} </a>-->
  </div>
  <br>

  <div v-for="(p, i) in products" :key="i">
    <h2>{{ p }}</h2>
    <p> {{ price[i] }}</p>
    <br>
  </div>

  <div>
    <h2>{{ products[0] }}</h2>
    <p>{{ price[0] }}</p>
    <!-- 이벤트 핸들러: click을 감지하여 특정 행동을 실행 -->
    <button v-on:click="count++">허위 매물 신고</button> <span>신고 수: {{ count }}</span>
  </div>
  <div>
    <h2>{{ products[1] }}</h2>
    <p>{{ price[1] }}</p>
  </div>
  <div>
    <h2>{{ products[2] }}</h2>
    <p>{{ price[2] }}</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {  // 데이터 저장소: 변수 등의 데이터를 보관한다.
      return {
        menu: ['HOME', 'PRODUCTS', 'ABOUT'],
        price: ['50만원', '60만원', '70만원'],
        스타일: 'color : blue', // HTML 속성 저장 가능
        products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
        count: 0
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