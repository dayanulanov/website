<script setup lang="ts">
import data from "@/cv.json";

const education = data.education;
</script>

<template>
  <div class="education">
    <h3 class="title">{{ education.title }}</h3>
    <hr class="divider" />
    <span>{{ education.description }}</span>
  </div>
</template>

<style>
.education {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.education span {
  line-height: 150%;
}
</style>
