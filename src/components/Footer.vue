<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPrivacyPolicy = () => {
  router.push('/privacy-policy')
}

const navigateToLegalNotice = () => {
  router.push('/legal-notice')
}

const navigateToCookiePolicy = () => {
  router.push('/cookie-policy')
}
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <a href="#" @click.prevent="navigateToPrivacyPolicy">Política de Privacidad</a>
        <a href="#" @click.prevent="navigateToLegalNotice">Aviso Legal</a>
        <a href="#" @click.prevent="navigateToCookiePolicy">Política de Cookies</a>
      </div>
      <div class="footer-social">
        <!-- Aquí irían los iconos de redes sociales -->
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Instagram</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 noEstoy. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>


<style scoped>
footer {
  background-color: var(--color-surface);
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
  font-family: "Outfit", sans-serif; /* Aplicamos la fuente Outfit */
}

.footer-content {
  display: flex;
  flex-direction: column; /* Organiza los elementos en columna */
  align-items: center; /* Centra los elementos horizontalmente */
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.footer-logo .logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem; /* Espacio entre los enlaces y las redes sociales */
}
.footer-links a {
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}
.footer-social .social-link {
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-social .social-link:hover {
  color: var(--color-primary);
}

.footer-bottom {
  text-align: center;
  padding: 1rem 0;
  background-color: var(--color-background);
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  border-top: 1px solid var(--color-border);
}

.footer-bottom p {
  margin: 0;
  font-weight: 400;
}
</style>
