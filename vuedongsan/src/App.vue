<template>
  <img alt="Vue logo" src="./assets/logo.svg">
  <div>
    <!-- HTML 속성에 데이터 바인딩 적용 시, 해당 속성 좌측에 ':'을 붙인다. -->
    <h4 :style="스타일">ONE ROOM SHOP</h4>
    <br>
    <!-- {{데이터명}}: 데이터 바인딩 -->
    <h4>{{ products.pop() }}</h4>
    <p>{{ price }}만원</p>
    <br>
    <h4>{{ products.pop() }}</h4>
    <p>{{ random }}</p>
    <br>
    <h4>{{ products.pop() }}</h4>
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
        random: '가격은 아무거나'
      }
    },
    components: {

    }
  }
</script>

<style>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>