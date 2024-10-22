<script setup lang="ts">
const features = [
  {
    title: 'Códigos QR Únicos',
    description: 'Genera códigos QR personalizados para iniciar llamadas instantáneas.'
  },
  {
    title: 'Privacidad Garantizada',
    description: 'Comunícate sin compartir tu número de teléfono personal.'
  },
  {
    title: 'Llamadas Rápidas',
    description: 'Inicia llamadas con un simple escaneo, más rápido que marcar un número.'
  },
  {
    title: 'Versátil',
    description: 'Ideal para situaciones cotidianas y eventos profesionales.'
  }
]
</script>

<template>
  <section id="features" class="features">
    <h2>Características Principales</h2>
    <div class="feature-grid">
      <div v-for="feature in features" :key="feature.title" class="feature-card">
        <!-- Aquí iría un icono representativo de la característica -->
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 4rem 1rem;
  background-color: var(--color-background);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
  font-weight: 700;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background-color: var(--color-surface);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

h3 {
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
}

p {
  font-weight: 300;
  color: var(--color-text-secondary);
}
</style>