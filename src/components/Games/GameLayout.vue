<script setup>
import { useSlots, ref } from 'vue';
import SharedSearch from '../Shared/SharedSearch.vue';

const slots = useSlots()
const searchInput = ref('')

const emit = defineEmits(['setGameView'])

const { games } = defineProps({
  games: {
    type: Array,
    required: true
  }
})

const onBuscar = () => {
  const filteredGames = games.filter((game) => {  
    const termSearch = searchInput.value.toLowerCase()
    return game.title.toLowerCase().includes(termSearch)
  })
  emit('setGameView', filteredGames)
}

// Función para manejar la limpieza de la búsqueda
const onLimpiar = () => {
  // Emitir el evento para restaurar la lista original de juegos
  emit('setGameView', games)
}
</script>

<template>
  <section>
    <slot name="title" />

    <h2 v-if="slots.title === undefined"> Juegos más recientes </h2>
    <div class="game-layout">
      <SharedSearch 
        @buscar="onBuscar" 
        @limpiar="onLimpiar" 
        v-model="searchInput" 
        class="my-Class" 
        id="search-form"
      />
      <slot />
    </div>
  </section>
</template>

<style scoped>
.game-layout {
  display: grid;
  gap: 2rem;
  margin: 1rem auto;
  max-width: 90%;
}
</style>