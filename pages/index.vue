<template>
  <div class="w-full flex justify-center bg-sand-200">
    <div class="flex flex-col w-1190">
      <Header />
      <div class="w-full md:flex pb-12">
        <!-- Content section -->
        <section class="mx-4 md:w-2/3 grid grid-cols-2 gap-6">
          <Card
            class="col-span-2"
            :imgSource="'hund.png'"
            :title="'EN LÆSER FORTÆLLER'"
            :text="'Jeg higede efter omsorg - del 2:5'"
            :hasVideo="true"
          />
          <Card
            class="md:col-span-1 col-span-2"
            :imgSource="'Dagmar.png'"
            :title="'NÅR LIVET GØR ONDT'"
            :text="'33-årige Dagmar har måske kun få måneder tilbage'"
          />
          <Card
            class="md:col-span-1 col-span-2"
            :imgSource="'StinneOgChristian.png'"
            :title="'NÅR LIVET GØR ONDT'"
            :text="'Stinne og Christian er uhelbredeligt syge med kræft'"
          />
        </section>
        <!-- Ad section -->
        <section class="md:w-1/3 md:mr-4">
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
