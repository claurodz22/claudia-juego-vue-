<script setup>
import { useSlots, ref } from 'vue';
import SharedSearch from '../Shared/SharedSearch.vue';

const slots = useSlots()
const searchInput = ref('')

// emits son customs events que se le pasan al componente padre
const emit = defineEmits(['setGameView'])

const {games} = defineProps({
  games: {
    type: Array,
    required: true
  }
})

// limitante de los props es que games no lo puede iterar
// porque es referencia al gamesView
const onBuscar = () =>  {
  const termSearch = searchInput.value.toLowerCase() 

  if(termSearch.trim() === ''){
    emit('setGameView', games)
    return
  }

  console.log('games', games) 
  const filteredGames = games.filter((game) => {  
    
    return game.title.toLowerCase().includes(termSearch) 
  })
  console.log(filteredGames)
  emit('setGameView', filteredGames)
}

</script>

<template>
  <!-- vue atributos heredados lo hereda el componente padre   -->
  <!---- slots: permite a los componentes padres insertar 
  contenido dinámicamente dentro de los componentes hijos.-->
  <section>
    <slot name="title" />

    <h2 v-if="slots.title === undefined"> Juegos más recientes </h2>
    {{ searchInput }}
    <div class="game-layout">
      <SharedSearch @buscar="onBuscar" v-model="searchInput" class="my-Class" id="search-form"/>
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