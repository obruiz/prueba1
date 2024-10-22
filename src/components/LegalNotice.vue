<script setup lang="ts">
import LegalLayout from '../layouts/LegalLayout.vue'
</script>

<template>
  <LegalLayout>
    <h1>Aviso Legal</h1>
    
    <p>Última actualización: [Fecha]</p>

    <!-- ... (resto del contenido del Aviso Legal) ... -->
  </LegalLayout>
</template>

<style scoped>
h1, h2 {
  color: var(--color-primary);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>