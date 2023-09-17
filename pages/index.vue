<template>
  <div class="w-full flex justify-center bg-sand-200 pb-36">
    <div class="flex flex-col w-1190">
      <Header />
      <div class="w-full md:flex">
        <!-- Content section -->
        <section
          class="mx-4 mt-4 md:w-2/3 md:grid md:grid-cols-2 flex flex-col gap-6"
        >
          <Card
            v-for="card in cards"
            :class="card.id > 1 ? 'col-span-1' : 'col-span-2'"
            :key="card.id"
            :imgSource="card.img"
            :title="card.title"
            :text="card.text"
            :hasVideo="card.hasVideo"
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
