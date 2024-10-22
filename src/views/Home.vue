<script setup lang="ts">
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import UseCases from '../components/UseCases.vue'
import Testimonials from '../components/Testimonials.vue'
import Download from '../components/Download.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="home">
    <Header />
    <main>
      <Hero />
      <Features />
      <UseCases />
      <Testimonials />
      <Download />
    </main>
    <Footer />
  </div>
</template>