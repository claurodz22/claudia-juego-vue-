<script setup>
import LayoutHero from './components/Layout/LayoutHero.vue';
import GameLayout from './components/Games/GameLayout.vue';
import GameCard from './components/Games/GameCard.vue';
import { onMounted, reactive, ref } from 'vue'

const API_URL = "https://gamestreamapi.herokuapp.com/api/games"

const state = reactive({
  error: null,
  isLoading: false,
  datos: []
})

const gamesView = ref([])

const fetchGames = async () => {
  try {
    state.isLoading = true
    const response = await fetch(API_URL)
    const json = await response.json()
    console.log(json)
    state.datos = json
    gamesView.value = json
    
  } catch (error) {
    console.error(error)
    state.error = error
  } finally {
    state.isLoading = false
  }
}

// Función para manejar el evento setGameView
const handleSetGameView = (filteredGames) => {
  gamesView.value = filteredGames
}

onMounted(() => {
  fetchGames()
})
</script>

<template>
  <LayoutHero />
  <GameLayout 
    :games="state.datos" 
    @setGameView="handleSetGameView"
  >
    <template #title>
      <h3> Juegos actualizados</h3>
    </template>
    <GameCard v-for="game in gamesView" :key="game.title" :game="game" />
  </GameLayout>
  <main></main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>