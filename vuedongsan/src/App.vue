<template>
  <!-- 모달창: Props -->
  <Modal :onerooms="onerooms" :roomNum="roomNum" :modalState="modalState" />

  <!-- 상단 메뉴 -->
  <div class="menu">
    <a v-for="m in menu" :key="m"> {{ m }} </a>
  </div>
  <br>

  <!-- 홍보 배너: Component -->
  <Discount />

  <!-- 매물 정보 -->
  <div v-for="(r, i) in onerooms" :key="i">
    <img :src="r.image" class="room-img">
    <h2 @click="modalState = true; roomNum = i">[{{ r.title }}] {{ r.price }}만원</h2>
    <p>{{ r.content }}</p>
    <br>
  </div>
</template>

<script>
  import roomInfo from './assets/oneroom.js';
  import Discount from "./components/Discount.vue";
  import Modal from "./components/Modal.vue";

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
      Discount: Discount,
      Modal: Modal
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
</style>