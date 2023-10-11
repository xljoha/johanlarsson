<template>
  <div class="text-center">
    <h3>Pompodoro</h3>
    <p class="mb-5">
      Time management method based on 25-minute stretches of focused work broken
      by whatever-minute coffe breaks.
    </p>

    <ClientOnly>
      <div class="text-5xl mb-10">
        {{ prettyTime }}
      </div>
    </ClientOnly>
    <div class="mb-10">
      <button class="btn btn-white mr-2" @click="toggleTimer">
        <span v-if="isRunning">Pause</span><span v-else>Start</span> coding!
      </button>
      <button class="btn btn-white" @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script setup>
const startTimerCount = 2; //1500;
let timerCount = ref(startTimerCount);
let isRunning = ref(false);
let myWorker = null;

const toggleTimer = () => {
  if (!myWorker) {
    myWorker = new Worker("worker.js");
  }
  isRunning.value = !isRunning.value;
  if (timerCount.value === 0) {
    timerCount.value = startTimerCount;
  }

  myWorker.onmessage = () => {
    if (isRunning.value) {
      if (timerCount.value === 0) {
        isRunning.value = false;
        playSound();
      } else {
        timerCount.value--;
      }
    }
  };
};

const resetTimer = () => {
  isRunning.value = false;
  timerCount.value = startTimerCount;
  if (myWorker) {
    myWorker.terminate();
    myWorker = null;
  }
};

const prettyTime = computed(() => {
  const minutes = Math.floor(timerCount.value / 60);
  const seconds = timerCount.value - minutes * 60;
  return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
});

/* const isRunning = computed(() => {
  return timerID.value ? true : false;
}); */

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

function playSound() {
  var beepsound = new Audio("/sound/mixkit-urgent-simple-tone-loop-2976.wav");
  beepsound.play();
}
</script>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-white {
  @apply bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow;
}
.btn-white:hover {
  @apply hover:bg-gray-100;
}
</style>
