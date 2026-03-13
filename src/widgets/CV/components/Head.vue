<script setup lang="ts">
import data from "@/cv.json";

const head = data.head;
</script>

<template>
  <div class="head">
    <h2>{{ head.full_name }}</h2>
    <span>{{ head.job }}</span>
  </div>
</template>

<style>
.head {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.head h2 {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
}

.head span {
  font-size: 0.813rem;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
