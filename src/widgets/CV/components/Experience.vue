<script setup lang="ts">
import { formatText } from "@/shared/utils/formatText";
import data from "@/cv.json";

const experience = data.experience;
const accents = experience.accent_words;
</script>

<template>
  <div class="experience">
    <h3 class="title">{{ experience.title }}</h3>
    <hr class="divider" />
    <ul class="experience__list">
      <li 
        v-for="(item, index) in experience.items" 
        :key="index" 
        class="experience__list-item"
      >
        <div class="experience__list-item-title">
          <h4 class="title">{{ item.company }} | {{ item.role }}</h4>
          <span class="period">{{ item.period }}</span>
        </div>

        <div class="tech-stack">
          <span>Технологии: </span>
          <span v-html="formatText(accents, item.tech_stack)" />
        </div>
        
        <ul class="tasks-list">
          <li 
            v-for="(task, tIndex) in item.tasks" 
            :key="tIndex"
            v-html="formatText(accents, task)"
          ></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style>
.experience {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.experience span {
  line-height: 150%;
}

.experience__list {
  display: flex;
  flex-direction: column;
  gap: 26px;
  line-height: 150%;
}

.experience__list-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
}

.experience__list-item-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
}

.experience__list-item ul {
  padding-left: 20px;
  list-style-type: disc;
}
</style>
