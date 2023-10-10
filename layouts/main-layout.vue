<template>
  <div id="main-layout">
    <main>
      <TheNav />
      <div class="md:flex justify-center">
        <div class="mx-5 max-w-3xl">
          <slot />
        </div>
      </div>
      <TheFooter />
    </main>
  </div>
</template>
