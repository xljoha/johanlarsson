<template>
  <div>
    <NuxtLayout name="main-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "overflow-y-scroll",
  },
});
</script>

<style lang="scss" scoped></style>
