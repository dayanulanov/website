<script setup lang="ts">
import { onMounted, ref } from "vue";

const isDark = ref(false);

const updateTheme = (dark: boolean) => {
	isDark.value = dark;
	if (dark) {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
};

const toggleTheme = () => {
	updateTheme(!isDark.value);
};

onMounted(() => {
	const savedTheme = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
	updateTheme(shouldBeDark);
});
</script>

<template>
  <button class="toggle-theme" @click="toggleTheme" :title="isDark ? 'Темная тема' : 'Светлая тема'">
    <img :src="isDark ? '/public/icons/moon.svg' : '/public/icons/sun.svg'" alt="Download CV icon" />
  </button>
</template>

<style>
.toggle-theme {
  background: transparent;
  border: none;
  cursor: pointer;
}

.dark .toggle-theme img {
  filter: invert(1);
}
</style>
