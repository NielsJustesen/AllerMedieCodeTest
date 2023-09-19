<template>
  <article class="bg-white rounded-b-lg w-full hover:cursor-pointer">
    <div>
      <img class="object-cover w-full" :src="imgSource" alt="billede" />
    </div>
    <div class="flex flex-col pb-5">
      <div class="flex mx-auto mt-4">
        <div class="font-extrabold text-sm uppercase font-oswald text-red-400">
          {{ title }}
        </div>
        <button v-if="hasVideo" class="ml-2 flex m-auto w-4 h-4">
          <img src="playButton.svg" alt="playbutton" />
        </button>
      </div>
      <div class="px-5 text-center text-32 leading-38 mt-2">
        <h3
          class="line-clamp-3 font-black font-condensed"
          :class="isSmallCard === true ? 'text-2xl' : 'text-2xl lg:text-xl'"
        >
          {{ text }}
        </h3>
      </div>
    </div>
  </article>
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
    isSmallCard: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
