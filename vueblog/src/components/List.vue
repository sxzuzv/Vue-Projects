<template>
  <div v-for="(a, i) in blogs" :key="i">
    <h2 @click="$router.push('/detail/' + i)">{{ a.title }}</h2>
    <p>{{ a.content }}</p>
    <p>{{ a.date }}</p>
    <br>
  </div>
</template>

<script>
export default {
   name: 'List',
   props: {
     blogs: Array
   }
}
</script>

<style>

</style>