<template>
  <Transition name="fadeModal">
  <!-- 모달창: Props -->
  <Modal @closeModal="modalState = false" :onerooms="onerooms" :roomNum="roomNum" :modalState="modalState" />
  </Transition>

  <!-- 상단 메뉴 -->
  <div class="menu">
    <a v-for="m in menu" :key="m"> {{ m }} </a>
  </div>
  <br>

  <!-- 가격 순 매물 정렬 버튼 -->
  <button @click="priceSort">가격순 매물 정렬</button>

  <!-- 정렬 되돌리기 버튼 -->
  <button @click="sortBack">되돌리기</button>
  <br><br>

  <!-- 홍보 배너: Component -->
  <Discount />

  <!-- 매물 정보 -->
  <Card @openModal="modalState = true, roomNum = $event" v-for="(a, i) in onerooms" :key="a" :onerooms="onerooms[i]" />
</template>

<script>
  import roomInfo from './assets/oneroom.js';
  import Discount from "./components/Discount.vue";
  import Modal from "./components/Modal.vue";
  import Card from "./components/Card.vue";

  export default {
    name: 'App',
    data() {  // 데이터 저장소: 변수 등의 데이터를 보관한다.
      return {
        menu: ['HOME', 'PRODUCTS', 'ABOUT'],
        price: ['50만원', '60만원', '70만원'],
        스타일: 'color : blue', // HTML 속성 저장 가능
        products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
        oneroomsOriginal: [...roomInfo],
        onerooms: roomInfo,
        count: [0, 0, 0],
        modalState: false,
        roomNum: 0
      }
    },
    methods: {
      addCount(i) {
        this.count[i]++;
      },
      priceSort() {
        this.onerooms.sort(function (a, b){
          return a.price - b.price;
        })
      },
      sortBack() {
        this.onerooms = [...this.oneroomsOriginal];
      }
    },
    components: {
      Discount: Discount,
      Modal: Modal,
      Card: Card
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

/* 모달창 출력 애니메이션(<Transition>) 적용 */
.fadeModal-enter-from {
  opacity: 0;
}

.fadeModal-enter-active {
  transition: all 1s;
}

.fadeModal-enter-to {
  opacity: 1;
}

/* 모달창 종료 애니메이션 적용 */
.fadeModal-leave-from {
  opacity: 1;
}

.fadeModal-leave-active {
  transition: all 1s;
}

.fadeModal-leave-to {
  opacity: 0;
}
</style>