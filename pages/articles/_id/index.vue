<template>
  <div class="w-full flex justify-center bg-sand-200 pb-5">
    <div class="flex flex-col w-1190 mx-auto">
      <Header />
      <div class="flex justify-center mx-4">
        <div class="lg:w-2/3">
          <Card
            v-if="article !== undefined"
            :cardId="article['id']"
            :imgSource="article['img']"
            :title="article['title']"
            :text="article['text']"
            :hasVideo="false"
          />
          <p class="bg-white rounded-b-lg px-5 pb-5 -translate-y-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            dignissimos repellendus, id non autem impedit, vel fugit quae animi
            exercitationem neque odit ea suscipit nam velit laudantium soluta
            molestias nesciunt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../components/Header.vue";
import Card from "../../../components/Card.vue";
import { useStore, computed, useRoute } from "@nuxtjs/composition-api";
export default {
  components: { Header, Card },
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("fetchCards");
    store.dispatch("fetchArticle", route.value.params.id);
    const article = computed(() => {
      return store.getters.getArticle;
    });

    return { article };
  },
};
</script>

<style></style>
