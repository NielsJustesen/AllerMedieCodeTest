<template>
  <div
    class="md:w-5/6 md:ml-auto m-4 md:m-0 bg-cover bg-ad-image text-white p-6 flex flex-col"
  >
    <p class="w-3/4 text-xs">
      En inspirerende verden af funktionelle designs og kvalitetsprodukter til
      alt inden for køkken, bolig og bord
    </p>
    <button
      @click="adClicked()"
      class="bg-white text-black py-2 font-semibold mt-6 w-32 text-center"
    >
      SHOP HER
    </button>
    <div class="mt-16 ml-auto text-3xl">
      <div class="w-28">
        <p class="text-right leading-6">Kitchen</p>
        <p class="leading-6">Living</p>
        <p class="text-right leading-6">Dining</p>
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
<!-- /
C:\Users\niels\Projects\AllerMediaCodeTest\src\images\ad.png
src\images\ad.png -->
