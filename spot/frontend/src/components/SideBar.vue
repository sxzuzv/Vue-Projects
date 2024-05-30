<template>
  <div class="side-bar-wrapper">
    <!-- active="['r']"의 의미는? 우측 resize(크기 조정)를 활성화한다. -->
    <VueResizable
      class="resizable-side-bar"
      :width="500"
      :min-width="500"
      :max-width="Infinity"
      :active="['r']"
    >
    <!-- 컴포넌트 해온 vue-resizable 하위에 <div> 태그를 넣는다. -->
    <div class="side-bar">
    </div>
    </VueResizable>
  </div>
</template>

<script>
import VueResizable from 'vue-resizable';

export default {
  name: 'SideBar',
  components: {
    VueResizable
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.side-bar-wrapper {
  > .resizable-side-bar {
    > .side-bar {
      background-color: #000000;
      opacity: 0.5; // 투명도
      width: 100%;
      height: 100%;
    }
  }
}

</style>