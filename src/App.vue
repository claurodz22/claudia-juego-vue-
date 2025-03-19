<script setup>

// composable --> para evitar el reescribir el código varias veces

import LayoutHero from './components/Layout/LayoutHero.vue';
import GameLayout from './components/Games/GameLayout.vue';
import GameCard from './components/Games/GameCard.vue';
import { ref } from 'vue'
import SharedLoader from './components/Shared/SharedLoader.vue';
import GameModal from './components/Games/GameModal.vue';
import { useFetch } from './composables/useFetch'

const API_URL = "https://gamestreamapi.herokuapp.com/api/games"

const gamesView = ref([])

// Función para manejar el evento setGameView
const handleSetGameView = (filteredGames) => {
  gamesView.value = filteredGames
}

const { state } = useFetch(API_URL, (json) => {
  gamesView.value = json
})

</script>

<template>
  <LayoutHero />

  <main>
    <SharedLoader v-if="state.isLoading"/>
    <GameLayout V-else :games="state.datos" @setGameView="handleSetGameView">
      <template #title>
        <h3> Juegos actualizados</h3>
      </template>
      <GameCard v-for="game in gamesView" :key="game.title" :game="game" />
    </GameLayout>
    <Teleport to="body">

      <GameModal />

    </Teleport>

  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>