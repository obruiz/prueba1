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
      <div class="footer-logo">
        <!-- Aquí iría el logo de noEstoy -->
        <span class="logo-text">noEstoy</span>
      </div>
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
/* ... (estilos existentes) ... */
</style>