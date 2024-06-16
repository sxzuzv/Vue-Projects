<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="modalState == true">
    <div class="white-bg">
      <img :src="onerooms[roomNum].image" class="room-img">
      <h2>[{{ onerooms[roomNum].title }}] {{ onerooms[roomNum].price }}만원</h2>
      <p>{{ onerooms[roomNum].content }}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
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