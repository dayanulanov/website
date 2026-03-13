<script setup lang="ts">
import Content from "./widgets/CV/CV.vue";
import Header from "./widgets/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <Content />
    </main>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--background-secondary);
  background-image: radial-gradient(var(--dot-pattern) 1px, transparent 1px);
  background-size: 16px 16px;
}
</style>
