<script setup lang="ts">
import { onMounted, ref } from "vue";
import moon from "/icons/moon.svg";
import sun from "/icons/sun.svg";

const isDark = ref(false);

const updateTheme = (dark: boolean) => {
	isDark.value = dark;
	const html = document.documentElement;

	if (dark) {
		html.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		html.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
};

const toggleTheme = (event: MouseEvent) => {
	if (!document.startViewTransition) {
		updateTheme(!isDark.value);
		return;
	}

	const x = event.clientX;
	const y = event.clientY;
	const endRadius = Math.hypot(
		Math.max(x, innerWidth - x),
		Math.max(y, innerHeight - y),
	);

	const transition = document.startViewTransition(() => {
		updateTheme(!isDark.value);
	});

	transition.ready.then(() => {
		const clipPath = [
			`circle(0px at ${x}px ${y}px)`,
			`circle(${endRadius}px at ${x}px ${y}px)`,
		];

		document.documentElement.animate(
			{
				clipPath: clipPath,
			},
			{
				duration: 450,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		);
	});
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
    <img :src="isDark ? moon : sun" alt="Theme icon" />
  </button>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 999;
}

.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
}


.toggle-theme {
  background: transparent;
  border: none;
  cursor: pointer;
}

.dark .toggle-theme img {
  filter: invert(1);
}
</style>
