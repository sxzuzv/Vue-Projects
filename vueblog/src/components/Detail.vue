<template>
  <div class="mt-4">
    <h2>{{ blogs[$route.params.id - 1].title }}</h2>
    <p>{{ blogs[$route.params.id - 1].content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blogs: Array
  }
}
</script>

<style>

</style>
