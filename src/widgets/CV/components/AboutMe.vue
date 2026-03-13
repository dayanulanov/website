<script setup lang="ts">
import { formatText } from "@/shared/utils/formatText";
import data from "@/cv.json";

const about = data.about_me;

const fullDescription = about.description.replace(
	"{exp}",
	about.experience_years,
);

const formattedDescription = formatText(about.accent_words, fullDescription);
const formattedSkills = formatText(about.accent_words, about.skills_text);
const formattedPhilosophy = formatText(about.accent_words, about.philosophy);
</script>

<template>
  <div class="about-me">
    <h3 class="title">{{ data.about_me.title }}</h3>
    <hr class="divider" />
    <span v-html="`${formattedDescription} ${formattedSkills} ${formattedPhilosophy}`" />
  </div>
</template>

<style>
.about-me {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-me span {
  line-height: 150%;
}
</style>
