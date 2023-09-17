<template>
  <div class="bg-white rounded-b-lg w-full">
    <div>
      <img class="object-cover w-full" :src="imgSource" alt="billede" />
    </div>
    <div class="flex flex-col pb-6 hover:cursor-pointer">
      <div class="flex mx-auto pt-4">
        <h4 class="lg:text-base md:text-xs font-extrabold text-red-500">
          {{ title }}
        </h4>
        <span class="ml-2 flex" v-if="hasVideo"
          ><button @click.prevent="openAndPlay()" class="m-auto w-5 h-5">
            <img src="playButton.svg" alt="playbutton" /></button
        ></span>
      </div>
      <h5 class="lg:text-xl md:text-sm text-center font-extrabold pt-2 px-2">
        {{ text }}
      </h5>
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
  setup(props) {
    const openAndPlay = () => {
      console.log("Open link and play video?");
    };
    return {
      openAndPlay,
      props,
    };
  },
};
</script>

<style></style>
