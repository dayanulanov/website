<script setup lang="ts">
import data from "@/cv.json";

const skills = data.skills;
</script>

<template>
  <div class="skills">
    <h3 class="title">{{ skills.title }}</h3>
    <hr class="divider" />
    <ul>
      <li v-for="skill in skills.list" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<style>
.skills {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skills ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  line-height: 150%;
}
</style>
