<script setup lang="ts">
// Lógica del componente Header aquí
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <!-- Aquí iría el logo de noEstoy -->
        <a class="logo-text" href="#" @click.prevent="navigateToHome">noEstoy</a>
      </div>
      <ul>
        <li><a href="#features">Características</a></li>
        <li><a href="#use-cases">Casos de Uso</a></li>
        <li><a href="#testimonials">Opiniones</a></li>
        <li><a href="#download">Descargar</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: "Outfit", sans-serif; /* Usamos la fuente Outfit */
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Outfit", sans-serif; /* Usamos la fuente Outfit */
}

ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 2rem;
}

a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500; /* Aplicamos el peso 500 de la fuente Outfit */
  transition: color 0.3s ease;
  font-family: "Outfit", sans-serif; /* Usamos la fuente Outfit */
}

a:hover {
  color: var(--color-primary);
}
</style>
