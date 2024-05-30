<template>
  <div id="app">
    <MainMap />
  </div>
</template>

<script>
import MainMap from "./components/MainMap.vue";

export default {
  name: 'App',
  components: {
    MainMap
  }
}
</script>

<style>
#app {
  /* 화면에 가득차도록 지도를 띄운다. */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>