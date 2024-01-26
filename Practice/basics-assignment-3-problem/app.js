const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    Result() {
      console.log("watcher is running!");
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    Result() {
      if (this.number < 37) {
        return "not yet there";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much !!!";
      }
    },
  },
});

app.mount("#assignment");
