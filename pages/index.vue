<template>
  <div class="body">
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <div class="select-wrapper">
      <select v-model="$colorMode.preference" class="select">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
      <button class="button" @click="$colorMode.preference = ['system', 'light', 'dark', 'sepia'][Math.floor(Math.random() * 4)]">Toggle</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const colorMode = useColorMode()

  const toggleColorMode = () => {
    const modes = ['system', 'light', 'dark', 'sepia']
    const randomIndex = Math.floor(Math.random() * modes.length)
    $colorMode.preference = modes[randomIndex]
  }
</script>

<style>
  html {
    font-family: "Inter";
    font-size: 5vmin;
  }

  body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .select-wrapper {
    position: relative;
  }

  select {
    width: 20dvw;
    height: 10dvw;
    align-self: center;
    font-size: 5dvw;
  }

  button {
    position: sticky;
    top: 0;
    width: 20dvw;
    height: 10dvw;
    font-size: 5dvw;
  }

  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
  }

  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
</style>
