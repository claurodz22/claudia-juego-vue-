<script setup>
import GameGallery from './GameGallery.vue'
import GameTag from './GameTag.vue'
import IconPlayCircle from '../Icons/IconPlayCircle.vue'

defineProps({
  game: {
    type: Object,
    default: () => ({
      title: 'Game title',
      description: 'Game description',
      galleryImages: [],
      tags: [],
      publicationYear: 0,
    }),
  },
})
</script>

<template>
  <article class="game-card">
    <GameGallery :images="game.galleryImages" />
    <div class="game-card__info">
      <h3 class="game-card__title">
        {{ game.title }} | <span>{{ game.publicationYear }}</span>
      </h3>
      <div class="game-card__tags">
        <GameTag v-for="tag in game.tags" :key="tag" :tag="tag" />
        <button class="game-card__video-icon">
          <IconPlayCircle />
        </button>
      </div>
      <p class="game-card__description">{{ game.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.game-card {
  width: calc(100% - 1rem);
  border: 1px solid #ffb6c1; /* Borde rosa claro */
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(255, 182, 193, 0.3); /* Sombra rosa suave */
  transition: all 0.3s ease;
}

.game-card:hover {
  box-shadow: 0 4px 8px rgba(255, 105, 180, 0.4); /* Sombra rosa más intensa al hover */
  border-color: #ff69b4; /* Rosa más intenso al hover */
  transform: translateY(-2px);
}

.game-card__title {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #d6336c; /* Color rosa oscuro para el título */
}

.game-card__title span {
  font-size: 1rem;
  color: #f06595; /* Rosa medio para el año */
}

.game-card__tags {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
}

.game-card__video-icon {
  margin-left: auto;
  width: 2rem;
  height: 2rem;
  color: #f783ac; /* Rosa para el icono de video */
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s ease;
}

.game-card__video-icon:hover {
  color: #e64980; /* Rosa más oscuro al hover */
}

.game-card__video-icon svg {
  width: 32px;
  height: 32px;
}

.game-card__description {
  margin-top: 0.75rem;
  color: #495057;
  line-height: 1.5;
  border-top: 1px solid #ffd0e0; /* Borde rosa muy claro */
  padding-top: 0.75rem;
}

/* Añadir un fondo rosa muy suave al contenedor de información */
.game-card__info {
  background-color: #fff0f6; /* Fondo rosa muy claro */
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
}
</style>