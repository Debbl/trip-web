<script setup>
import TabBar from "./components/tab-bar/tab-bar.vue";
</script>

<template>
  <div class="app">
    <h2>App</h2>

    <router-view />
    <tab-bar />
  </div>
</template>
