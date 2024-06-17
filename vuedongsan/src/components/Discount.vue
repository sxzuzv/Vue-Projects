<template>
  <!-- 홍보 배너 -->
  <div class="discount">
    <h2>지금 결제 시 {{ salePercent }}% 할인!</h2>
  </div>
</template>

<script>
  export default {
    name: 'Discount',
    props: {
      salePercent: Number
    }
  }
</script>

<style>
  /* 홍보 배너 스타일 적용 */
  .discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
</style>