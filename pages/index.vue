<template>
  <div class="w-full flex justify-center bg-sand-200 pb-5">
    <div class="flex flex-col w-1190">
      <Header />
      <div class="w-full lg:flex">
        <!-- Content section -->
        <section
          class="ml-4 mt-4 lg:mr-0 mr-4 lg:w-2/3 lg:grid lg:grid-cols-2 flex flex-col gap-5"
        >
          <Card
            v-for="card in cards"
            :class="card.id > 1 ? 'col-span-1' : 'col-span-2'"
            :key="card.id"
            :imgSource="card.img"
            :title="card.title"
            :text="card.text"
            :hasVideo="card.hasVideo"
            :isSmallCard="card.id > 1 ? true : false"
          />
        </section>
        <!-- Ad section -->
        <section class="lg:w-1/3 lg:mr-4 lg:mx-0 mx-4">
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
import { useStore, computed } from "@nuxtjs/composition-api";
export default {
  name: "IndexPage",
  components: {
    Header,
    Card,
    AdBlock,
  },
  setup() {
    const store = useStore();

    const fetchCards = async () => {
      store.dispatch("fetchCards");
    };

    fetchCards();

    const cards = computed(() => {
      return store.getters.getCards;
    });

    return {
      cards,
    };
  },
};
</script>
