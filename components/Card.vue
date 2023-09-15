<template>
  <div class="bg-white rounded-b-lg w-full">
    <div>
      <img
        class="object-cover w-full"
        :src="require('../src/images/' + imgSource + '')"
        alt="billede"
      />
    </div>
    <div>
      <div class="flex flex-col">
        <div class="flex mx-auto pt-4">
          <h4 class="text-lg font-bold text-red-500">{{ title }}</h4>
          <span class="ml-2 flex" v-if="hasVideo"
            ><button
              class="m-auto w-6 h-6 rounded-lg bg-black text-white"
            ></button
          ></span>
        </div>
        <h5 class="text-center text-xl font-extrabold pb-4 pt-2 px-2">
          {{ text }}
        </h5>
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
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style></style>
