<script setup>
import { useSlots, ref } from 'vue';
import SharedSearch from '../Shared/SharedSearch.vue';

const slots = useSlots()
const searchInput = ref('')
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
      <SharedSearch v-model="searchInput" class="my-Class" id="search-form"/>
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