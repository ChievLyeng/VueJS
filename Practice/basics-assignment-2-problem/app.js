const app = Vue.createApp({
  data() {
    return {
      text: "",
      confirmText: "",
    };
  },
  methods: {
    showAlert() {
      alert("Welcome to Vue JS !!!");
    },
    getInput(event) {
      this.text = event.target.value;
    },
    confirmInput() {
      this.confirmText = this.text;
    },
  },
});

app.mount("#assignment");
