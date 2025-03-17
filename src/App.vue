<script setup>
import LayoutHero from './components/Layout/LayoutHero.vue';
import GameLayout from './components/Games/GameLayout.vue';
import GameCard from './components/Games/GameCard.vue';
import { onMounted, reactive, ref } from 'vue'

// objetos reactivos --> manejar arrays en vue de manera
// reactiva y profunda, se utilizan para detectar cambios
// ejmp, en la response de la API

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

onMounted(() => {
  fetchGames()
})

const setGameView = (filteredGames) =>{
  gamesView.value = filteredGames
}

</script>

<template>
  <LayoutHero />
  <GameLayout :games="state.datos" @setGameView="gamesView = $event">
    <GameCard v-for="game in gamesView" :key="game.title" :game="game" />
  </GameLayout>
  <main></main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
