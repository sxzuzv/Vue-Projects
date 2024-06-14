<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="modalState == true">
    <div class="white-bg">
      <img :src="onerooms[roomNum].image" class="room-img">
      <h2>[{{ onerooms[roomNum].title }}] {{ onerooms[roomNum].price }}만원</h2>
      <p>{{ onerooms[roomNum].content }}</p> <br>
      <button @click="modalState = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <!-- v-for: 반복문 -->
    <a v-for="m in menu" :key="m"> {{ m }} </a>
    <!-- (a, b): b는 0부터 1씩 증가하는 정수 -->
<!--    <a v-for="(m, i) in menu" :key="i"> {{ m }} </a>-->
  </div>
  <br>

<!--  <div v-for="(p, i) in products" :key="i">-->
<!--    <img src="./assets/img.png" class="room-img">-->
<!--    <h2>[{{ p }}] {{ price[i] }}</h2>-->
<!--    &lt;!&ndash; 이벤트 핸들러: click을 감지하여 특정 행동을 실행 &ndash;&gt;-->
<!--    <button @click="addCount(i)">허위 매물 신고</button> <span>신고 수: {{ count[i] }}</span>-->
<!--  </div>-->

<!--  <div>-->
<!--    <img src="./assets/img.png" class="room-img">-->
<!--    <h2 @click="modalState = true">[{{ products[0] }}] {{ price[0] }}</h2>-->
<!--    &lt;!&ndash; 이벤트 핸들러: click을 감지하여 특정 행동을 실행 &ndash;&gt;-->
<!--    <button @click="addCount(0)">허위 매물 신고</button> <span>신고 수: {{ count[0] }}</span>-->
<!--  </div>-->

  <div v-for="(r, i) in onerooms" :key="i">
    <img :src="r.image" class="room-img">
    <h2 @click="modalState = true; roomNum = i">[{{ r.title }}] {{ r.price }}만원</h2>
    <p>{{ r.content }}</p>
    <br>
  </div>
</template>

<script>
  import roomInfo from './assets/oneroom.js';

  export default {
    name: 'App',
    data() {  // 데이터 저장소: 변수 등의 데이터를 보관한다.
      return {
        menu: ['HOME', 'PRODUCTS', 'ABOUT'],
        price: ['50만원', '60만원', '70만원'],
        스타일: 'color : blue', // HTML 속성 저장 가능
        products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
        onerooms: roomInfo,
        count: [0, 0, 0],
        modalState: false,
        roomNum: 0
      }
    },
    methods: {
      addCount(i) {
        this.count[i]++;
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

/* 매물별 이미지 스타일 적용 */
.room-img {
  width: 100%;
  margin-top: 10px;
}

/* 모달창 스타일 적용 */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>