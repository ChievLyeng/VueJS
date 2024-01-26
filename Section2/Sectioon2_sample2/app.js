const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullname: "",
      confirmedName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + '' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + '' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log("Runing again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submited!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
