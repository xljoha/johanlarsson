<template>
  <div>
    <nav class="pb-10 font-sans">
      <div class="flex justify-center flex-row py-2 border-t-2 border-zinc-950">
        <div v-for="item in navigation">
          <NuxtLink
            :to="item._path"
            class="text-xl py-2 mx-4 no-underline relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-100 after:origin-center"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
      <hr class="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </nav>
  </div>
</template>

<script setup>
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
console.log(navigation);
</script>

<style lang="css" scoped>
.router-link-active {
  font-weight: bold;
}
</style>
