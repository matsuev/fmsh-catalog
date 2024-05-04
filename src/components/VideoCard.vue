<template>
   <div class="video-card">
      <img :src="mysupervar.img" />
      <div class="video-card__name">{{ mysupervar.name }}</div>
      <div class="video-card__cost">{{ mysupervar.cost }}</div>
      <div class="video-card__cost">RAM = {{ mysupervar.ram.value }}</div>
   </div>
</template>

<script setup>
defineProps(['mysupervar'])
</script>

<style>
.video-card {
   border-radius: 5px;
   box-shadow: 1px 1px 5px rgba(0,0,0,.25);
   margin: 20px;
   padding: 20px;
}
</style>