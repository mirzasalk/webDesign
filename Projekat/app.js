const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "main",
        },
        1,
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button  @click="toggleDetails()">
      Diveloperi
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Mirza Salkovic:</strong> {{ friend.text1 }}</li>
      <li><strong>Mirza Salkovic:</strong> {{ friend.text2 }}</li>
      <li><strong>Mirza Salkovic:</strong> {{ friend.text3 }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "main",
        text1:
          "Autor sajta. Zaduzen za dizajn sajta, html i css. E-mail:salkovic.mirza@gmail.com. Broj telefona: +38166 6 417 407.",
        text2:
          "Autor sajta. Zaduzen za dizajn sajta, html i css. E-mail:salkovic.mirza@gmail.com. Broj telefona: +38166 6 417 407.",
        text3:
          "Autor sajta. Zaduzen za dizajn sajta, html i css. E-mail:salkovic.mirza@gmail.com. Broj telefona: +38166 6 417 407.",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
