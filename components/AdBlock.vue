<template>
  <div
    class="lg:w-4/5 lg:ml-auto lg:m-0 mt-5 bg-cover bg-ad-image text-white p-5 flex flex-col"
  >
    <p class="w-3/4 text-xs">
      En inspirerende verden af funktionelle designs og kvalitetsprodukter til
      alt inden for køkken, bolig og bord
    </p>
    <button
      @click="adClicked()"
      class="bg-white text-black py-2 px-4 uppercase text-xs font-semibold mt-4 w-fit text-center"
    >
      shop her
    </button>
    <div class="mt-14 ml-auto text-2xl">
      <div class="w-24 flex flex-col">
        <NuxtImg class="cover ml-auto" src="Kitchen.svg" alt="Kitchen.svg" />
        <NuxtImg class="cover mr-auto" src="Living.svg" alt="Living.svg" />
        <NuxtImg class="cover ml-auto" src="Dining.svg" alt="Dining.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdBlock",
  setup() {
    const adClicked = () => {
      console.log("Ad was clicked");
    };
    return {
      adClicked,
    };
  },
};
</script>

<style></style>
