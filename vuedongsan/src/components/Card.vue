<template>
  <div>
    <img :src="onerooms.image" class="room-img">
    <h2>[{{ onerooms.title }}] {{ onerooms.price }}만원</h2>
    <p>{{ onerooms.content }}</p>
    <br>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      onerooms: Object
    }
  }
</script>

<style>
  .room-img {
    width: 100%;
    margin-top: 10px;
  }
</style>