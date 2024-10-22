<script setup lang="ts">
import LegalLayout from '../layouts/LegalLayout.vue'
</script>

<template>
  <LegalLayout>
    <h1>Política de Privacidad</h1>
    
    <h2>1. Introducción</h2>
    <p>En noEstoy, nos comprometemos a proteger su privacidad y a procesar sus datos personales de manera transparente. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información personal cuando utiliza nuestra aplicación móvil y servicios relacionados.</p>

    <h2>2. Información que recopilamos</h2>
    <p>Podemos recopilar los siguientes tipos de información:</p>
    <ul>
      <li>Información de registro: nombre, dirección de correo electrónico, número de teléfono.</li>
      <li>Información de uso: datos sobre cómo utiliza nuestra aplicación, incluyendo registros de llamadas y códigos QR generados.</li>
      <li>Información del dispositivo: tipo de dispositivo, sistema operativo, identificadores únicos del dispositivo.</li>
    </ul>

    <h2>3. Cómo utilizamos su información</h2>
    <p>Utilizamos su información personal para:</p>
    <ul>
      <li>Proporcionar y mantener nuestros servicios.</li>
      <li>Mejorar y personalizar su experiencia con la aplicación.</li>
      <li>Comunicarnos con usted sobre actualizaciones, ofertas y noticias relacionadas con el servicio.</li>
      <li>Garantizar la seguridad y prevenir el fraude.</li>
    </ul>

    <h2>4. Compartir información</h2>
    <p>No vendemos su información personal. Podemos compartir su información en las siguientes circunstancias:</p>
    <ul>
      <li>Con proveedores de servicios que nos ayudan a operar nuestra aplicación.</li>
      <li>Cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
      <li>En caso de una fusión, venta o transferencia de activos de la empresa.</li>
    </ul>

    <h2>5. Seguridad de los datos</h2>
    <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra accesos no autorizados, pérdida o alteración.</p>

    <h2>6. Sus derechos</h2>
    <p>Usted tiene derecho a:</p>
    <ul>
      <li>Acceder a su información personal.</li>
      <li>Corregir datos inexactos.</li>
      <li>Solicitar la eliminación de sus datos.</li>
      <li>Oponerse al procesamiento de sus datos.</li>
      <li>Solicitar la portabilidad de sus datos.</li>
    </ul>

    <h2>7. Cambios en esta política</h2>
    <p>Podemos actualizar esta política de privacidad periódicamente. Le notificaremos cualquier cambio significativo a través de la aplicación o por correo electrónico.</p>

    <h2>8. Contacto</h2>
    <p>Si tiene preguntas sobre esta Política de Privacidad, por favor contáctenos en: [dirección de correo electrónico de contacto]</p>
  </LegalLayout>
</template>

<style scoped>
h1, h2 {
  color: var(--color-primary);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p, ul {
  margin-bottom: 1rem;
  line-height: 1.6;
}

ul {
  padding-left: 2rem;
}
</style>