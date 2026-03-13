<script setup lang="ts">
import markdownit from "markdown-it";
import DOMPurify from "dompurify";
import me from "../public/markdown/me.md?raw";
import Header from "./widgets/Header.vue";

const md = markdownit({
	html: true,
	linkify: true,
});
const markdown = DOMPurify.sanitize(md.render(me));
</script>

<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <section class="content">
        <div v-html="markdown" class="markdown" />
      </section>
    </main>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--background-secondary);
  background-image: radial-gradient(var(--dot-pattern) 1px, transparent 1px);
  background-size: 16px 16px;
}

.content {
  display: flex;
  flex: 1;
  width: min(982px, 100%);
  margin: 0 auto;
  padding: 0 16px;
  background-color: var(--background-primary);
  border-left: 1px solid var(--border-primary);
  border-right: 1px solid var(--border-primary);
}
</style>
