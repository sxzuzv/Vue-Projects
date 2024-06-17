<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="modalState == true">
    <div class="white-bg">
      <img :src="onerooms[roomNum].image" class="room-img">
      <h2>[{{ onerooms[roomNum].title }}] {{ onerooms[roomNum].price }}만원</h2>
      <p>{{ onerooms[roomNum].content }}</p>
      계약 기간: <input v-model="month">개월
      <p>선택 개월: {{ month }}개월, 총 금액: {{ onerooms[roomNum].price * month }}만원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    beforeUpdate() {
      if (this.month == 2) {
        alert('3개월부터 입력 가능합니다.');
        this.month = 3;
      }
    },
    data() {
      return {
        month: 1
      }
    },
    watch: {
      // 함수명은 데이터명과 동일하게 작성한다.
      // (변경 후 데이터 값, 변경 전 데이터 값): 파라미터는 두 개까지 입력 가능하다.
      month(a) {
        if (isNaN(a) == true) { // isNaN(): 문자일 시 true, 숫자일 시 false
          alert('입력 오류! 숫자만 입력 가능합니다.');
          this.month = 1;
        }
      }
    },
    props: {  // Props를 통해 가져온 데이터는 수정 불가(read only)
      onerooms: Array,
      roomNum: Number,
      modalState: Boolean
    }
  }
</script>

<style>
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