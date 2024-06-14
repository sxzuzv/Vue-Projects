<template>
  <img alt="Vue logo" src="./assets/logo.svg">
    <div>
      <h4>{{ name }}원룸</h4>
      <!-- {{ 데이터명 }}: 데이터 바인딩 -->
      <p>{{ price }}만원</p>
    </div>
    <div>
      <h4>{{ name }}원룸</h4>
      <p>{{ price }}만원</p>
    </div>
    <div>
      <h4>{{ name }}원룸</h4>
      <p>{{ price }}만원</p>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    // 변수 등의 데이터를 보관한다.
      name: '행복',
      price: 70
    }
  },
  components: {

  }
}
</script>

<style>

</style>
