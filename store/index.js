export const state = {
  cards: [],
};

export const getters = {
  getCards(state) {
    return state.cards;
  },
};

export const actions = {
  async fetchCards({ commit }) {
    //mimic api get request
    const cards = [
      {
        id: 1,
        img: "hund.png",
        title: "En læser fortæller",
        text: "Jeg higede efter omsorg - del 2:5",
        hasVideo: true,
      },
      {
        id: 2,
        img: "Dagmar.png",
        title: "Når livet gør ondt",
        text: "33-årige Dagmar har måske kun få måneder tilbage",
        hasVideo: false,
      },
      {
        id: 3,
        img: "StinneOgChristian.png",
        title: "Når livet gør ondt",
        text: "Stinne og Christian er uhelbredeligt syge med kræft",
        hasVideo: false,
      },
    ];
    commit("setCards", cards);
    return cards;
  },
};

export const mutations = {
  setCards(state, cards) {
    state.cards = cards;
  },
};
