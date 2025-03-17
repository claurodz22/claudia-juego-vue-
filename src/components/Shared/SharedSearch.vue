<script setup>
import { ref, computed } from 'vue';
import IconSearch from '../Icons/IconSearch.vue'

const model = defineModel()

const emit = defineEmits(['buscar', 'limpiar'])

const isActive = ref(false)

const onFocus = () => {
  isActive.value = true
}

const onBlur = () => {
  isActive.value = false
}

const searchClasses = computed(() => ({'search--active': isActive.value}))

const limpiarBusqueda = () => {
  model.value = '' // Limpia el input
  emit('limpiar') // Emite el evento para notificar al componente padre
}

const mostrarBotonLimpiar = computed(() => model.value && model.value.length > 0)
</script>

<template>
  <form @submit.prevent="() => { emit('buscar') }">
    <div class="search" :class="searchClasses">
      <input
        v-model="model"
        class="search__input"
        type="text"
        placeholder="Buscar"
        @focus="onFocus"
        @blur="onBlur"
      />
      
      <!-- Botón X para limpiar la búsqueda -->
      <button 
        v-if="mostrarBotonLimpiar"
        type="button" 
        class="search__clear" 
        @click="limpiarBusqueda"
        aria-label="Limpiar búsqueda"
      >
        ×
      </button>
      
      <button class="search__submit" type="submit">
        <IconSearch />
      </button>
    </div>
  </form>
</template>

<style scoped>
.search {
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 0.5rem;
}

.search--active {
  border-width: 1px;
  border-color: var(--color-background-primary);
}

.search__input {
  width: 100%;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
}

.search__input:focus {
  outline: none;
}

.search__clear {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  padding: 0.25rem;
  margin-right: 0.25rem;
  cursor: pointer;
  color: #999;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: bold;
}

.search__clear:hover {
  color: #666;
}

.search__submit {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.5rem;
  background-color: var(--color-background-primary);
  color: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
}

.search__submit > svg {
  width: 1.125rem;
  height: 1.125rem;
}
</style>