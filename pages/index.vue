<template>
  <div class="w-full flex justify-center bg-sand-200 h-screen">
    <div class="flex flex-col max-w-6xl">
      <Header />
      <div class="w-full flex">
        <!-- Content section -->
        <section class="w-3/4 grid grid-cols-2 gap-6">
          <Card
            class="col-span-2"
            :imgSource="'/src/images/hund.png'"
            :title="'EN LÆSER FORTÆLLER'"
            :text="'Jeg higede efter omsorg - del 2:5'"
            :hasVideo="true"
          />
          <Card
            class="col-span-1"
            :imgSource="'/src/images/Dagmar.png'"
            :title="'NÅR LIVET GØR ONDT'"
            :text="'33-årige Dagmar har måske kun få måneder tilbage'"
          />
          <Card
            class="col-span-1"
            :imgSource="'/src/images/StinneOgChristian.png'"
            :title="'NÅR LIVET GØR ONDT'"
            :text="'Stinne og Christian er uhelbredeligt syge med kræft'"
          />
        </section>
        <!-- Ad section -->
        <section class="w-1/4">
          <AdBlock />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
import AdBlock from "../components/AdBlock.vue";
export default {
  components: {
    Header,
    Card,
    AdBlock,
  },
  name: "IndexPage",
  setup() {
    return {};
  },
};
</script>
