<script setup lang="ts">
// Hero component logic here
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="app-title">noEstoy</h1>
      <p class="tagline">Antes de que suene la grúa, que suene tu móvil.</p>
      <p class="description">
        noEstoy revoluciona la forma en que te comunicas. Con nuestros códigos QR, 
        realiza llamadas rápidas y privadas sin compartir tu número.
      </p>
      <div class="cta-buttons">
        <a href="#download" class="cta-button primary">Descargar Ahora</a>
        <a href="#features" class="cta-button secondary">Saber Más</a>
      </div>
    </div>
    <!-- Aquí iría una imagen o ilustración representativa de la app -->
  </section>
</template>

<style scoped>
.hero {
  background: var(--gradient-primary);
  color: var(--color-surface);
  text-align: center;
  padding: 4rem 1rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.app-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.description {
  margin-bottom: 2rem;
  font-weight: 200;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background-color: var(--color-surface);
  color: var(--color-primary);
}

.cta-button.secondary {
  background-color: transparent;
  border: 2px solid var(--color-surface);
  color: var(--color-surface);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>