<template>
  <div class="w-full flex justify-center bg-sand-200 pb-5">
    <div class="flex flex-col w-1190">
      <Header />
      <div class="w-full lg:flex">
        <section
          class="ml-4 mt-3 lg:mr-0 mr-4 lg:w-2/3 lg:grid lg:grid-cols-2 flex flex-col gap-5"
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
        <section class="lg:w-1/3 lg:mr-4 lg:mx-0 mx-4">
          <AdBlock />
        </section>
        <!-- ####################################################### -->
        <!-- Use the codeblock below for ad on mobile after first article -->
        <!-- ####################################################### -->
        <!-- <section
          class="ml-4 lg:mr-0 mr-4 lg:grid lg:grid-cols-3 flex flex-col gap-5"
        >
          <Card
            class="col-span-2 mt-3"
            :imgSource="cards[0].img"
            :title="cards[0].title"
            :text="cards[0].text"
            :hasVideo="cards[0].hasVideo"
            :isSmallCard="false"
          />
          <AdBlock class="col-span-1 h-64 lg:mr-4" />
          <Card
            class="'col-span-1'"
            :imgSource="cards[1].img"
            :title="cards[1].title"
            :text="cards[1].text"
            :hasVideo="cards[1].hasVideo"
            :isSmallCard="true"
          />
          <Card
            class="col-span-1'"
            :imgSource="cards[2].img"
            :title="cards[2].title"
            :text="cards[2].text"
            :hasVideo="cards[2].hasVideo"
            :isSmallCard="true"
          />
        </section> -->
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
