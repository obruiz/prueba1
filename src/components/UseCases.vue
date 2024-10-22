<script setup lang="ts">
const useCases = [
  {
    title: 'Notificación de Vehículos Mal Estacionados',
    description: 'Avisa rápidamente al dueño de un coche mal aparcado antes de que llegue la grúa.'
  },
  {
    title: 'Networking en Eventos',
    description: 'Intercambia contactos profesionales sin compartir información personal.'
  },
  {
    title: 'Comunicación de Emergencia',
    description: 'Proporciona un método rápido para contactar en situaciones urgentes.'
  }
]
</script>

<template>
  <section id="use-cases" class="use-cases">
    <h2>Casos de Uso</h2>
    <div class="use-case-list">
      <div v-for="useCase in useCases" :key="useCase.title" class="use-case-item">
        <!-- Aquí iría una ilustración o icono representativo del caso de uso -->
        <h3>{{ useCase.title }}</h3>
        <p>{{ useCase.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.use-cases {
  padding: 4rem 1rem;
  background-color: var(--color-surface);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
  font-weight: 700;
}

.use-case-list {
  max-width: 800px;
  margin: 0 auto;
}

.use-case-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--color-background);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.use-case-item:hover {
  transform: translateY(-5px);
}

h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

p {
  font-weight: 300;
  color: var(--color-text-secondary);
}
</style>