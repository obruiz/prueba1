<script setup lang="ts">
// Download component logic here
</script>

<template>
  <section id="download" class="download">
    <h2>Descarga noEstoy</h2>
    <p>Disponible para iOS y Android. ¡Descarga ahora y revoluciona tu forma de comunicarte!</p>
    <div class="download-buttons">
      <a href="#" class="download-button">
        <!-- Aquí iría el badge de App Store -->
        <span>Descargar en App Store</span>
      </a>
      <a href="#" class="download-button">
        <!-- Aquí iría el badge de Google Play -->
        <span>Descargar en Google Play</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.download {
  padding: 4rem 1rem;
  text-align: center;
  background: var(--gradient-primary);
  color: var(--color-surface);
}

h2 {
  margin-bottom: 1rem;
  font-weight: 700;
}

p {
  margin-bottom: 2rem;
  font-weight: 300;
}

.download-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.download-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-surface);
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.download-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>