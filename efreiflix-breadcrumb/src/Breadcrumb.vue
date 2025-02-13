<script setup>
let iv = 3
</script>

<template>
<div>
  <h1>Breadcrumb</h1>
  <p>iv: {{ iv }}</p>
  <p v-if="iv === 3">iv is 3</p>
</div>
</template>

<style>

</style>