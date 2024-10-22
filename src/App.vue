<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style>
@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-Thin.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-ExtraLight.ttf") format("truetype");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-ExtraBold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Outfit";
  src: url("@/assets/Outfit-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

:root {
  --color-primary: #ff6500;
  --color-secondary: #9f00c5;
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #333333;
  --color-text-secondary: #666666;
  --color-success: #4caf50;
  --color-error: #f44336;
  --color-warning: #ff9800;
  --color-border: #e0e0e0;
  --color-border-color: #333333;
  --color-inactive: #9e9e9e;
  --gradient-primary: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
}

body {
  font-family: 'Outfit', sans-serif;
  font-weight: 200;
  background-color: var(--color-background);
  color: var(--color-text);
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

button {
  background-color: var(--color-primary);
  color: var(--color-surface);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--color-secondary);
}

a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
}

.app-title {
  font-weight: 800;
  margin: 0px 0px 20px 0px;
  text-align: left;
  font-size: 24px;
  width: 100%;
  max-width: 350px;
}
</style>