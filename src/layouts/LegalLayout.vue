<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="legal-layout">
    <Header />
    <main class="legal-content">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.legal-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.legal-content {
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Outfit', sans-serif;
}
</style>