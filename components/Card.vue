<template>
  <div class="bg-white rounded-b-lg w-full hover:cursor-pointer">
    <div>
      <img class="object-cover w-full" :src="imgSource" alt="billede" />
    </div>
    <div class="flex flex-col pb-6">
      <div class="flex mx-auto pt-4">
        <div class="font-oswald font-black uppercase text-red-500">
          {{ title }}
        </div>
        <button v-if="hasVideo" class="ml-2 flex m-auto w-5 h-5">
          <img src="playButton.svg" alt="playbutton" />
        </button>
      </div>
      <div class="px-10">
        <h3
          class="lg:text-2xl text-2xl text-center font-condensed font-bold text-32 leading-38 pt-2 px-2"
        >
          {{ text }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    imgSource: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    hasVideo: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
