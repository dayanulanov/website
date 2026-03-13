<script setup lang="ts">
import data from "@/cv.json";
</script>

<template>
  <ul class="social-list">
    <li v-for="link in data.social_list" :key="link.href">
      <img :src="link.src" :alt="`${link.title} icon`" />
      <span class="label">{{ link.title }}: </span>

      <a :href="link.href" :title="link.title" target="_blank">
        {{ link.name }}
      </a>
    </li>
  </ul>
</template>

<style>

.social-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.social-list li {
  display: flex;
  align-items: center;
  gap: 4px;
}

.social-list img {
  display: block;
  height: 14px;
  width: 14px;
}

.dark .social-list img {
  filter: invert(1);
}
</style>
