<template>
  <div class="bg-white rounded-b-lg w-full">
    <div><img :src="imgSource" alt="billede" /></div>
    <div>
      <div class="flex justify-center">
        <div class="flex">
          <h4 class="text-2xl font-bold text-red-500">{{ title }}</h4>
          <span v-if="hasVideo">play</span>
        </div>
        <h5>{{ text }}</h5>
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
