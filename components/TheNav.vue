<template>
  <div>
    <nav class="pb-10 font-sans">
      <div class="flex justify-center flex-row py-2 border-t-2 border-zinc-950">
        <div v-for="item in navigation">
          <NuxtLink
            :to="item._path"
            class="text-xl py-2 mx-4 no-underline relative text-xl uppercase w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-100 after:origin-center"
          >
            <div class="flex items-center justify-between">
              <svg
                v-if="item._path === '/'"
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 20v-8H2l10-9l4 3.6V4h3v5.3l3 2.7h-3v8h-6v-6h-2v6H5Zm2-2h2v-6h6v6h2v-7.8l-5-4.5l-5 4.5V18Zm2-6h6h-6Zm1-1.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312Z"
                />
              </svg>
              <svg
                v-if="item._path === '/projects'"
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8 17q.425 0 .713-.288T9 16q0-.425-.288-.713T8 15q-.425 0-.713.288T7 16q0 .425.288.713T8 17Zm0-4q.425 0 .713-.288T9 12q0-.425-.288-.713T8 11q-.425 0-.713.288T7 12q0 .425.288.713T8 13Zm0-4q.425 0 .713-.288T9 8q0-.425-.288-.713T8 7q-.425 0-.713.288T7 8q0 .425.288.713T8 9Zm3 8h6v-2h-6v2Zm0-4h6v-2h-6v2Zm0-4h6V7h-6v2ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"
                />
              </svg>
              <svg
                v-if="item._path === '/cv'"
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.05 17.775q-.5-.275-.775-.737T5 16v-4.8L2.6 9.875q-.275-.15-.4-.375T2.075 9q0-.275.125-.5t.4-.375l8.45-4.6q.225-.125.463-.188T12 3.275q.25 0 .488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17q-.425 0-.713-.288T21 16v-5.9l-2 1.1V16q0 .575-.275 1.038t-.775.737l-5 2.7q-.225.125-.462.188t-.488.062q-.25 0-.488-.063t-.462-.187l-5-2.7ZM12 12.7L18.85 9L12 5.3L5.15 9L12 12.7Zm0 6.025l5-2.7V12.25l-4.025 2.225q-.225.125-.475.188t-.5.062q-.25 0-.5-.063t-.475-.187L7 12.25v3.775l5 2.7Zm0-6.025Zm0 3.025Zm0 0Z"
                />
              </svg>
              <span>{{ item.title }}</span>
            </div>
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
