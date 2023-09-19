import articles from "../src/articles.json";

export const state = {
  cards: [],
  article: undefined,
};

export const getters = {
  getCards(state) {
    return state.cards;
  },
  getArticle(state) {
    return state.article;
  },
};

export const actions = {
  async fetchCards({ commit }) {
    const cards = articles;
    commit("setCards", cards);
    return cards;
  },
  async fetchArticle({ commit }, id) {
    const article = articles.find((article) => article.id == id);
    commit("setArticle", article);
    return article;
  },
};

export const mutations = {
  setCards(state, cards) {
    state.cards = cards;
  },
  setArticle(state, article) {
    state.article = article;
  },
};
