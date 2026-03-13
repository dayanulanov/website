<script setup lang="ts">
import ToggleTheme from "@/shared/ui/ToggleTheme.vue";
import data from "@/cv.json";

const socialLinks = data.social_list.filter(link => 
  !link.href.startsWith('tel:') && 
  !link.href.includes('mailto:') &&
  !link.href.includes('https://www.google.com/')
);
</script>

<template>
  <header class="header">
    <ul class="list">
      <li v-for="link in socialLinks" :key="link.href">
        <a :href="link.href" :title="link.title" target="_blank">
          <img :src="link.src" :alt="`${link.title} icon`" />
        </a>
      </li>
    </ul>

    <ul class="list">
      <li>
        <ToggleTheme />
      </li>
      <li>
        <a href="/public/data/cv.pdf" download title="Скачать CV" class="download-cv">
          <img src="/public/icons/download.svg" alt="Download CV icon" />
        </a>
      </li>
    </ul>
  </header>
</template>

<style>
.header {
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  padding: 12px 24px;
  background-color: var(--background-primary);
  border-bottom: 1px solid var(--border-primary);
  z-index: 999;
}

.list {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.list li {
  display: inline-block;
}

.list img {
  display: block;
}

.dark .list img {
  filter: invert(1);
}

.download-cv {
  color: var(--font-color-primary);
  align-self: center;
  margin-left: auto;
}

.download-cv img {
  display: block;
}
</style>
