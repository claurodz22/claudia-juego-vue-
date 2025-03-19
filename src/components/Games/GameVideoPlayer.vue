<script setup>

import { ref, onMounted } from 'vue'

const videoRef = ref(null)

defineProps({
  video: {
    type: String,
    required: true,
  },
})

// esto es para que se ejecute el video de 
// manera automatica al momento de ver video
onMounted(() =>{
  videoRef.value.play()
})

</script>

<template>
  <div class="game-video-player">
    <video controls ref="videoRef">
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.game-video-player {
  max-width: 100%;
  overflow: hidden;
}

video {
  width: 100%;
  height: auto;
}
</style>
