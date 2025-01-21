<script setup>

defineProps({
  games: Array,
})


</script>

<template>
  <section>
    <h2>Recent games</h2>
    <SharedSearch v-model="searchInput" @search="searchGames" />
    <div class="game-layout">

    </div>
  </section>
</template>

<style scoped>
.game-layout {
  display: grid;
  gap: 2rem;
  margin: 1rem auto;
}
</style>
