<script setup lang="ts">
import AboutMe from "./components/AboutMe.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Head from "./components/Head.vue";
import Skills from "./components/Skills.vue";
import SocialList from "./components/SocialList.vue";
</script>

<template>
  <section class="cv">
    <Head />
    <SocialList />
    <AboutMe />
    <Skills />
    <Experience />
    <Education />
  </section>
</template>

<style>
.cv {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  width: min(982px, 100%);
  margin: 0 auto;
  padding: 12px;
  background-color: var(--background-primary);
  border-left: 1px solid var(--border-primary);
  border-right: 1px solid var(--border-primary);
  line-height: 120%;
}

.title {
  font-size: 0.813rem;
  font-weight: 500;
  text-transform: uppercase;
}

.divider {
  border: none;
  height: 1px;
  background-color: var(--border-primary);
}

.accent-word {
  border-bottom: 1px solid var(--border-primary);
}
</style>
