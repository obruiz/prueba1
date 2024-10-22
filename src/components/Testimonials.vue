<script setup lang="ts">
const testimonials = [
  {
    name: 'María G.',
    text: 'noEstoy me salvó de una multa. ¡Increíble aplicación!'
  },
  {
    name: 'Carlos R.',
    text: 'Uso noEstoy en todos mis eventos de networking. Es genial poder conectar sin compartir mi número personal.'
  },
  {
    name: 'Laura M.',
    text: 'La facilidad de uso y la privacidad que ofrece noEstoy son incomparables.'
  }
]
</script>

<template>
  <section id="testimonials" class="testimonials">
    <h2>Lo que dicen nuestros usuarios</h2>
    <div class="testimonial-grid">
      <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
        <!-- Aquí iría un avatar o icono genérico del usuario -->
        <p>"{{ testimonial.text }}"</p>
        <p class="testimonial-author">- {{ testimonial.name }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 4rem 1rem;
  background-color: var(--color-background);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
  font-weight: 700;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background-color: var(--color-surface);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-author {
  font-weight: 600;
  text-align: right;
  margin-top: 1rem;
  color: var(--color-primary);
}

p {
  font-weight: 300;
  color: var(--color-text-secondary);
}
</style>