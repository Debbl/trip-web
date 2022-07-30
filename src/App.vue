<script setup>
import TabBar from "./components/tab-bar/tab-bar.vue";
</script>

<template>
  <div class="app">
    <h2>App</h2>
    <tab-bar />
    <router-view />
  </div>
</template>
